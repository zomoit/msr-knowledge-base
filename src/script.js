// Tab switching for the MSR Knowledge Base
(function () {
  const tabs = Array.from(document.querySelectorAll('[data-tab]'));
  const panels = Array.from(document.querySelectorAll('.tab-content'));

  function activate(tabId) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === tabId;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });
    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === tabId);
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.tab));

    // Keyboard support: left/right arrows move between tabs
    tab.addEventListener('keydown', (event) => {
      let next = null;
      if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
      if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (next) {
        next.focus();
        activate(next.dataset.tab);
      }
    });
  });
})();