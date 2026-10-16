const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const code = fs.readFileSync('assets/js/page-views.js', 'utf8');

function setup() {
  const attributes = {};
  const value = { textContent: '—', getAttribute: k => attributes[k], setAttribute: (k, v) => { attributes[k] = v; } };
  const labels = { en: {}, zh: {} };
  const status = { hidden: false, querySelector: s => labels[s.includes('"en"') ? 'en' : 'zh'] };
  const requests = [];
  let timeout;
  const window = { setTimeout(fn) { timeout = fn; }, clearTimeout() {} };
  const head = { appendChild(s) { requests.push(s); s.parentNode = head; }, removeChild(s) { s.parentNode = null; } };
  const context = vm.createContext({ window, document: { getElementById: () => value, querySelector: () => status, createElement: () => ({}), head } });
  vm.runInContext(code, context);
  const script = requests[0];
  const callback = new URL(script.src).searchParams.get('jsonpCallback');
  return { value, status, labels, script, requests, context, timeout: () => timeout(), respond: data => window[callback](data) };
}

test('shows only total page views and cleans up the request', () => {
  const r = setup();
  r.respond({ site_pv: 1234, site_uv: 56, page_pv: 10 });
  assert.equal(r.value.textContent, '1,234');
  assert.equal(r.value.getAttribute('data-view-state'), 'ready');
  assert.equal(r.status.hidden, true);
  assert.equal(r.script.parentNode, null);
  assert.equal(r.script.referrerPolicy, 'no-referrer-when-downgrade');
});

test('network errors keep the counter visible with an unavailable status', () => {
  const r = setup();
  r.script.onerror();
  assert.equal(r.value.textContent, '—');
  assert.equal(r.value.getAttribute('data-view-state'), 'unavailable');
  assert.equal(r.labels.zh.textContent, '暂不可用');
});

test('timeout does not issue another counting request', () => {
  const r = setup();
  r.timeout();
  assert.equal(r.requests.length, 1);
  assert.equal(r.value.getAttribute('data-view-state'), 'unavailable');
});

test('invalid data is never displayed and duplicate initialization does not double count', () => {
  const r = setup();
  vm.runInContext(code, r.context);
  assert.equal(r.requests.length, 1);
  r.respond({ site_pv: 'invalid' });
  assert.equal(r.value.textContent, '—');
  assert.equal(r.value.getAttribute('data-view-state'), 'unavailable');
});
