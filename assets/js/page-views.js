(function () {
  'use strict';

  var value = document.getElementById('site-page-views');
  if (!value || value.getAttribute('data-view-state')) return;
  value.setAttribute('data-view-state', 'loading');
  var status = document.querySelector('[data-view-status]');
  var endpoint = 'https://events.vercount.one/api/v2/log';
  var pageUrl = window.location.origin + '/';

  function finish(count) {
    if (value.getAttribute('data-view-state') !== 'loading') return;
    if (Number.isSafeInteger(count) && count >= 0) {
      value.textContent = count.toLocaleString('en-US');
      value.setAttribute('data-view-state', 'ready');
      if (status) status.hidden = true;
    } else {
      value.setAttribute('data-view-state', 'unavailable');
      if (status) {
        status.querySelector('[data-lang="en"]').textContent = 'Temporarily unavailable';
        status.querySelector('[data-lang="zh"]').textContent = '暂不可用';
      }
    }
  }

  async function request(method) {
    var controller = window.AbortController ? new window.AbortController() : null;
    var timer;
    var options = { method: method, credentials: 'omit', cache: 'no-store' };
    if (controller) options.signal = controller.signal;
    if (method === 'POST') {
      options.headers = { 'Content-Type': 'application/json' };
      // Only count page views; do not set cookies or identify unique visitors.
      options.body = JSON.stringify({ url: pageUrl, isNewUv: false });
    }
    var url = endpoint + (method === 'GET' ? '?url=' + encodeURIComponent(pageUrl) : '');
    try {
      var data = await Promise.race([
        window.fetch(url, options).then(function (response) {
          if (!response.ok) throw new Error('Page view request failed: ' + response.status);
          return response.json();
        }),
        new Promise(function (_, reject) {
          timer = window.setTimeout(function () {
            if (controller) controller.abort();
            reject(new Error('Page view request timed out'));
          }, 10000);
        })
      ]);
      if (data.status !== 'success' || !data.data ||
          !Number.isSafeInteger(data.data.site_pv) || data.data.site_pv < 0) {
        throw new Error('Invalid page view response');
      }
      return data.data.site_pv;
    } finally {
      window.clearTimeout(timer);
    }
  }

  async function load() {
    if (!window.fetch) return finish();
    try {
      finish(await request('POST'));
    } catch (error) {
      // A timed-out write may still have counted: recover with a read, never another write.
      try { finish(await request('GET')); }
      catch (readError) { finish(); }
    }
  }
  load();
}());
