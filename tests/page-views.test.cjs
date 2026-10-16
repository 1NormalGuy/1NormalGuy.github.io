const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const code = fs.readFileSync('assets/js/page-views.js', 'utf8');

async function setup(responses, timeout = false, baseline = 0) {
  const attributes = { 'data-view-baseline': String(baseline) };
  const value = { textContent: '—', getAttribute: k => attributes[k], setAttribute: (k, v) => { attributes[k] = v; } };
  const labels = { en: {}, zh: {} };
  const status = { hidden: false, querySelector: s => labels[s.includes('"en"') ? 'en' : 'zh'] };
  const calls = [];
  const window = {
    location: { origin: 'https://1normalguy.github.io' },
    AbortController,
    setTimeout(fn, delay) { return setTimeout(fn, timeout ? 1 : delay); },
    clearTimeout,
    async fetch(url, options) {
      calls.push({ url, options });
      const data = responses[calls.length - 1];
      if (data === 'timeout') return new Promise(() => {});
      if (data instanceof Error) throw data;
      return { ok: data?.ok !== false, json: async () => data };
    }
  };
  const context = vm.createContext({ window, document: { getElementById: () => value, querySelector: () => status } });
  vm.runInContext(code, context);
  vm.runInContext(code, context);
  for (let i = 0; i < 100 && attributes['data-view-state'] === 'loading'; i++) {
    await new Promise(resolve => setTimeout(resolve, 2));
  }
  assert.notEqual(attributes['data-view-state'], 'loading');
  return { value, status, labels, calls };
}

function success(count) { return { status: 'success', data: { site_pv: count, site_uv: 50 } }; }

test('records one page view without cookies, query strings, or unique visitor tracking', async () => {
  const r = await setup([success(1234)]);
  assert.equal(r.value.textContent, '1,234');
  assert.equal(r.status.hidden, true);
  assert.equal(r.calls.length, 1);
  assert.equal(r.calls[0].options.method, 'POST');
  assert.equal(r.calls[0].options.credentials, 'omit');
  assert.deepEqual(JSON.parse(r.calls[0].options.body), { url: 'https://1normalguy.github.io/', isNewUv: false });
});

test('failed writes recover via read-only GET without double counting', async () => {
  const r = await setup([new Error('connection lost'), success(1235)]);
  assert.equal(r.value.textContent, '1,235');
  assert.deepEqual(r.calls.map(c => c.options.method), ['POST', 'GET']);
  assert.match(r.calls[1].url, /\?url=https%3A%2F%2F1normalguy.github.io%2F$/);
});

test('preserves the verified historical views when changing providers', async () => {
  const r = await setup([success(1)], false, 49);
  assert.equal(r.value.textContent, '50');
  assert.equal(r.calls.length, 1);
});

test('hung writes time out and recover via read-only GET', async () => {
  const r = await setup(['timeout', success(1236)], true);
  assert.equal(r.value.textContent, '1,236');
  assert.deepEqual(r.calls.map(c => c.options.method), ['POST', 'GET']);
});

test('rejects error payloads and invalid numbers', async () => {
  const r = await setup([{ status: 'error', data: { site_pv: 0 } }, success(-1)]);
  assert.equal(r.value.textContent, '—');
  assert.equal(r.labels.zh.textContent, '暂不可用');
});
