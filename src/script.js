(function () {
  "use strict";

  const tabs = document.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  function selectTab(targetTab) {
    const targetPanelId = targetTab.getAttribute("aria-controls");

    tabs.forEach((tab) => {
      const isSelected = tab === targetTab;
      tab.setAttribute("aria-selected", isSelected ? "true" : "false");
      tab.tabIndex = isSelected ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isTarget = panel.id === targetPanelId;
      panel.hidden = !isTarget;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));

    // Basic keyboard support: Arrow keys move between tabs
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();

      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      selectTab(tabs[nextIndex]);
    });
  });
})();
