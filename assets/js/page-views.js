(function () {
  'use strict';

  var value = document.getElementById('busuanzi_value_site_pv');
  if (!value || value.getAttribute('data-view-state')) return;
  value.setAttribute('data-view-state', 'loading');
  var status = document.querySelector('[data-view-status]');
  var callback = 'homepagePageViews_' + Date.now() + '_' + Math.floor(Math.random() * 1000000);
  var script = document.createElement('script');
  var timer;

  function finish(count) {
    if (value.getAttribute('data-view-state') !== 'loading') return;
    window.clearTimeout(timer);
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
    if (script.parentNode) script.parentNode.removeChild(script);
    delete window[callback];
  }

  window[callback] = function (data) { finish(data && data.site_pv); };
  script.src = 'https://busuanzi.ibruce.info/busuanzi?jsonpCallback=' + callback;
  script.async = true;
  // Match the original provider script so the existing site count is retained.
  script.referrerPolicy = 'no-referrer-when-downgrade';
  script.onerror = function () { finish(); };
  script.onload = function () {
    if (value.getAttribute('data-view-state') === 'loading') finish();
  };
  // Send one request per page load: retrying could count the same view twice.
  timer = window.setTimeout(function () { finish(); }, 12000);
  document.head.appendChild(script);
}());
