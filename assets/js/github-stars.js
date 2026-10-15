(function () {
  'use strict';

  var counts = document.querySelectorAll('[data-github-stars]');

  function setStatus(element, state) {
    element.setAttribute('data-star-state', state);
    element.title = state === 'github' ? 'GitHub API' : state === 'shields' ?
      'Shields / GitHub · up to 5 min cache / 最多缓存 5 分钟' :
      'Saved count / 已保存的数量';
    var status = element.parentElement.querySelector('[data-star-status]');
    if (!status) return;
    status.hidden = state === 'github' || state === 'shields';
    status.setAttribute('data-star-status', state);
    status.querySelector('[data-lang="en"]').textContent = state === 'loading' ? '(updating…)' : '(cached)';
    status.querySelector('[data-lang="zh"]').textContent = state === 'loading' ? '（更新中…）' : '（缓存值）';
  }

  async function requestCount(repo, source) {
    var apiUrl = 'https://api.github.com/repos/' + repo;
    // Dynamic JSON preserves the exact integer, unlike rounded GitHub star badges.
    var url = source === 'github' ? apiUrl :
      'https://img.shields.io/badge/dynamic/json.json?url=' + encodeURIComponent(apiUrl) +
      '&query=%24.stargazers_count&label=stars&cacheSeconds=300';
    var controller = window.AbortController ? new window.AbortController() : null;
    var timer;
    try {
      var data = await Promise.race([
        window.fetch(url, {
          credentials: 'omit',
          cache: 'no-store',
          signal: controller ? controller.signal : undefined
        }).then(function (response) {
          if (!response.ok) throw new Error('Star request failed: ' + response.status);
          return response.json();
        }),
        new Promise(function (_, reject) {
          timer = window.setTimeout(function () {
            if (controller) controller.abort();
            reject(new Error('Star request timed out'));
          }, 8000);
        })
      ]);
      var count = data.stargazers_count;
      if (source === 'shields') {
        if (!/^\d+$/.test(data.message)) throw new Error('Invalid badge count');
        count = Number(data.message);
      }
      if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid star count');
      return count;
    } finally {
      window.clearTimeout(timer);
    }
  }

  async function refresh(element) {
    if (element.getAttribute('data-star-state') === 'loading') return;
    if (!window.fetch) return setStatus(element, 'cached');
    var repo = element.getAttribute('data-github-stars');
    setStatus(element, 'loading');
    var sources = ['github', 'shields', 'github'];
    for (var i = 0; i < sources.length; i++) {
      try {
        var count = await requestCount(repo, sources[i]);
        element.textContent = count.toLocaleString('en-US');
        setStatus(element, sources[i]);
        return;
      } catch (error) {
        // Try the independent source, then retry GitHub once before showing cached data.
      }
    }
    setStatus(element, 'cached');
  }

  counts.forEach(refresh);
  window.addEventListener('online', function () { counts.forEach(refresh); });
}());
