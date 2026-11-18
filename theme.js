(() => {
  "use strict";

  const STORAGE_KEY = "campusreserve-theme";
  const DEFAULT_THEME = "lime";
  const THEMES = new Set(["lime", "midnight", "coastal"]);
  const CONTROL_SELECTOR = 'input[name="theme"]';

  function normalizeTheme(value) {
    return THEMES.has(value) ? value : DEFAULT_THEME;
  }

  function readStoredTheme() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (THEMES.has(stored)) {
        return stored;
      }
      if (stored !== null) {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      // localStorage can be unavailable or blocked; fall back to the default.
    }
    return DEFAULT_THEME;
  }

  function persistTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // The current page still updates if persistence is unavailable.
    }
  }

  function syncControls(theme) {
    document.querySelectorAll(CONTROL_SELECTOR).forEach((input) => {
      input.checked = input.value === theme;
    });
  }

  function applyTheme(value, options = {}) {
    const theme = normalizeTheme(value);
    const body = document.body;

    if (!body) {
      return theme;
    }

    if (theme === DEFAULT_THEME) {
      body.removeAttribute("data-theme");
    } else {
      body.setAttribute("data-theme", theme);
    }

    syncControls(theme);

    if (options.persist) {
      persistTheme(theme);
    }

    return theme;
  }

  function bindControls() {
    document.querySelectorAll(CONTROL_SELECTOR).forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked) {
          applyTheme(input.value, { persist: true });
        }
      });
    });
  }

  function init() {
    const body = document.body;
    if (!body) {
      return;
    }

    body.classList.add("theme-js");
    applyTheme(readStoredTheme());
    bindControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      applyTheme(event.newValue);
    }
  });
})();
