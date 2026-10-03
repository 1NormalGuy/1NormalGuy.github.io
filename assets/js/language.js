(function () {
  'use strict';

  var storageKey = 'homepage-language';
  var pageUrl = new URL(window.location.href);
  var language = pageUrl.searchParams.get('lang');

  if (language !== 'en' && language !== 'zh') {
    try {
      language = window.localStorage.getItem(storageKey);
    } catch (error) {
      // Language switching also works when browser storage is unavailable.
    }
  }

  language = language === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';

  function updateLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh' ? '陆一杰的个人主页' : "Yijie Lu's Homepage";

    document.querySelectorAll('[data-switch-language]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.switchLanguage === language));
    });
    document.querySelectorAll('[data-label-en]').forEach(function (element) {
      element.setAttribute('aria-label', element.getAttribute('data-label-' + language));
    });
    document.querySelectorAll('[data-alt-en]').forEach(function (element) {
      element.setAttribute('alt', element.getAttribute('data-alt-' + language));
    });

    // Re-measure navigation after translating labels, including items in its dropdown.
    if (typeof window.updateNav === 'function' && document.querySelector('#site-nav .hidden-links')) {
      var visibleLinks = document.querySelector('#site-nav .visible-links');
      var hiddenLinks = document.querySelector('#site-nav .hidden-links');
      while (hiddenLinks.firstElementChild) {
        visibleLinks.appendChild(hiddenLinks.firstElementChild);
      }
      window.breaks = [];
      hiddenLinks.classList.add('hidden');
      document.querySelector('#site-nav button').classList.remove('close');
      window.updateNav();
    }
    document.dispatchEvent(new CustomEvent('homepage:languagechange', { detail: { language: language } }));
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateLanguage(language);
    document.querySelectorAll('[data-switch-language]').forEach(function (button) {
      button.addEventListener('click', function () {
        updateLanguage(button.dataset.switchLanguage);
        try {
          window.localStorage.setItem(storageKey, language);
        } catch (error) {
          // The URL keeps the selection on reload even without local storage.
        }
        var currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('lang', language);
        window.history.replaceState(null, '', currentUrl.href);
      });
    });
  });

  window.addEventListener('popstate', function () {
    var urlLanguage = new URL(window.location.href).searchParams.get('lang');
    if (urlLanguage === 'en' || urlLanguage === 'zh') {
      updateLanguage(urlLanguage);
    }
  });
}());
