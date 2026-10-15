const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');

const script = fs.readFileSync('assets/js/github-stars.js', 'utf8');

async function run(responses, options = {}) {
  const labels = { en: {}, zh: {} };
  const status = {
    hidden: false,
    setAttribute() {},
    querySelector(selector) { return labels[selector.includes('"en"') ? 'en' : 'zh']; }
  };
  const attributes = { 'data-github-stars': 'morluto/rea' };
  const element = {
    textContent: '157,920',
    parentElement: { querySelector() { return status; } },
    setAttribute(key, value) { attributes[key] = value; },
    getAttribute(key) { return attributes[key]; }
  };
  const calls = [];
  const listeners = {};
  let index = 0;
  vm.runInNewContext(script, {
    document: { querySelectorAll() { return [element]; } },
    window: {
      AbortController: options.noAbort ? undefined : AbortController,
      setTimeout(fn, delay) { return setTimeout(fn, options.timeout ? 1 : delay); },
      clearTimeout,
      addEventListener(name, fn) { listeners[name] = fn; },
      async fetch(url, init) {
        calls.push({ url, init });
        const result = responses[index++];
        if (result === 'timeout') return new Promise(() => {});
        if (result instanceof Error) throw result;
        return { ok: result?.ok !== false, status: 403, json: async () => result };
      }
    }
  });
  async function settle() {
    for (let i = 0; i < 100 && attributes['data-star-state'] === 'loading'; i++) {
      await new Promise(resolve => setTimeout(resolve, 2));
    }
    assert.notEqual(attributes['data-star-state'], 'loading');
  }
  await settle();
  return { element, attributes, status, labels, calls, listeners, settle };
}

test('GitHub success replaces the seed and bypasses browser cache', async () => {
  const r = await run([{ stargazers_count: 260518 }]);
  assert.equal(r.element.textContent, '260,518');
  assert.equal(r.attributes['data-star-state'], 'github');
  assert.equal(r.status.hidden, true);
  assert.equal(r.calls[0].init.cache, 'no-store');
});

test('rate limit falls back to the exact Shields count', async () => {
  const r = await run([{ ok: false }, { message: '260532' }]);
  assert.equal(r.element.textContent, '260,532');
  assert.equal(r.attributes['data-star-state'], 'shields');
  assert.match(r.calls[1].url, /^https:\/\/img.shields.io\//);
});

test('a hung request times out even without AbortController', async () => {
  const r = await run(['timeout', { message: '260532' }], { timeout: true, noAbort: true });
  assert.equal(r.attributes['data-star-state'], 'shields');
});

test('rounded badge values are rejected and GitHub is retried', async () => {
  const r = await run([new Error('blocked'), { message: '260k' }, { stargazers_count: 260533 }]);
  assert.equal(r.element.textContent, '260,533');
  assert.equal(r.calls.length, 3);
});

test('total failure is marked cached and reconnect retries', async () => {
  const r = await run([new Error('offline'), { message: 'invalid' }, { stargazers_count: -1 }, { stargazers_count: 260534 }]);
  assert.equal(r.element.textContent, '157,920');
  assert.equal(r.attributes['data-star-state'], 'cached');
  assert.equal(r.status.hidden, false);
  assert.equal(r.labels.zh.textContent, '（缓存值）');
  r.listeners.online();
  await r.settle();
  assert.equal(r.element.textContent, '260,534');
  assert.equal(r.status.hidden, true);
});
