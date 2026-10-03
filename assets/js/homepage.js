(function () {
  'use strict';

  var navigation = document.querySelector('.homepage-nav');
  var toggle = document.querySelector('.homepage-nav__toggle');
  var mobile = window.matchMedia('(max-width: 767px)');

  function closeNavigation(restoreFocus) {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }

  if (navigation && toggle) {
    toggle.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
    });
    navigation.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { closeNavigation(false); });
    });
    document.addEventListener('click', function (event) {
      if (!navigation.contains(event.target)) closeNavigation(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeNavigation(true);
      }
    });
    var onViewportChange = function () { closeNavigation(false); };
    if (mobile.addEventListener) mobile.addEventListener('change', onViewportChange);
    else mobile.addListener(onViewportChange);
  }

  function isChinese() {
    return document.documentElement.lang === 'zh-CN';
  }

  function renderCopyState(button) {
    var state = button.getAttribute('data-copy-state');
    var label = button.querySelector('[data-copy-label]');
    var feedback = button.parentElement.querySelector('.copy-feedback');
    label.textContent = state === 'copied' ? (isChinese() ? '已复制' : 'Copied') : (isChinese() ? '复制' : 'Copy');
    if (state === 'copied') feedback.textContent = isChinese() ? '引用已复制。' : 'Citation copied.';
    else if (state === 'error') feedback.textContent = isChinese() ? '无法自动复制，请选中上方引用并手动复制。' : 'Select the citation above and copy it manually.';
    else feedback.textContent = '';
  }

  var copyButtons = document.querySelectorAll('[data-copy-target]');
  copyButtons.forEach(function (button) {
    button.addEventListener('click', async function () {
      if (button.disabled) return;
      var citation = document.getElementById(button.getAttribute('data-copy-target'));
      if (!citation) return;
      window.clearTimeout(button.copyResetTimer);
      button.disabled = true;
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(citation.textContent);
        button.setAttribute('data-copy-state', 'copied');
        button.copyResetTimer = window.setTimeout(function () {
          button.removeAttribute('data-copy-state');
          renderCopyState(button);
        }, 2500);
      } catch (error) {
        button.setAttribute('data-copy-state', 'error');
        citation.focus();
        var selection = window.getSelection();
        if (selection) {
          var range = document.createRange();
          range.selectNodeContents(citation);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } finally {
        button.disabled = false;
        renderCopyState(button);
      }
    });
  });

  document.addEventListener('homepage:languagechange', function () {
    copyButtons.forEach(renderCopyState);
    closeNavigation(false);
  });

  // The verified static count remains readable when GitHub or browser networking is unavailable.
  var starCount = document.querySelector('[data-github-stars]');
  async function refreshStarCount() {
    if (!starCount || !window.fetch || !window.AbortController) return;
    var controller = new AbortController();
    var timeout = window.setTimeout(function () { controller.abort(); }, 4000);
    try {
      var response = await window.fetch('https://api.github.com/repos/MLNLP-World/Paper-Writing-Tips', {
        signal: controller.signal,
        credentials: 'omit'
      });
      if (!response.ok) return;
      var data = await response.json();
      if (Number.isSafeInteger(data.stargazers_count) && data.stargazers_count >= 0) {
        starCount.textContent = data.stargazers_count.toLocaleString('en-US');
      }
    } catch (error) {
      // Preserve the verified seed on timeout, blocked requests or invalid responses.
    } finally {
      window.clearTimeout(timeout);
    }
  }
  refreshStarCount();
}());
