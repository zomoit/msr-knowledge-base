import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

/**
 * Loads src/index.html into a JSDOM instance and executes script.js
 * against that document, mimicking a real browser load.
 */
function loadPage() {
  const html = readFileSync("src/index.html", "utf8");
  const script = readFileSync("src/script.js", "utf8");

  const dom = new JSDOM(html, { runScripts: "outside-only" });
  dom.window.eval(script);
  return dom.window.document;
}

describe("Tab navigation", () => {
  it("renders exactly four tabs", () => {
    const doc = loadPage();
    expect(doc.querySelectorAll('[role="tab"]').length).toBe(4);
  });

  it("selects Data Sources by default on load", () => {
    const doc = loadPage();
    const activeTab = doc.querySelector('[role="tab"][aria-selected="true"]');
    expect(activeTab).not.toBeNull();
    expect(activeTab.getAttribute("data-tab")).toBe("data-sources");
    expect(doc.getElementById("panel-data-sources").hidden).toBe(false);
  });

  it("shows only one tab as selected at a time", () => {
    const doc = loadPage();
    expect(
      doc.querySelectorAll('[role="tab"][aria-selected="true"]').length
    ).toBe(1);
  });

  it("switches panels when a different tab is clicked", () => {
    const doc = loadPage();
    doc.getElementById("tab-collection-methods").click();

    expect(doc.getElementById("panel-collection-methods").hidden).toBe(false);
    expect(doc.getElementById("panel-data-sources").hidden).toBe(true);
    expect(
      doc
        .querySelector('[data-tab="collection-methods"]')
        .getAttribute("aria-selected")
    ).toBe("true");
  });

  it("hides all non-selected panels", () => {
    const doc = loadPage();
    doc.getElementById("tab-analysis-methods").click();

    const visible = [...doc.querySelectorAll('[role="tabpanel"]')].filter(
      (p) => !p.hidden
    );
    expect(visible.length).toBe(1);
    expect(visible[0].id).toBe("panel-analysis-methods");
  });
});

describe("Data Sources content", () => {
  it("renders seven data source rows", () => {
    const doc = loadPage();
    const rows = doc.querySelectorAll("#panel-data-sources tbody tr");
    expect(rows.length).toBe(7);
  });

  it("includes all required source names", () => {
    const doc = loadPage();
    const text = doc.getElementById("panel-data-sources").textContent;
    const required = [
      "GitHub",
      "Stack Overflow",
      "JIRA",
      "App Stores",
      "Travis CI / Jenkins",
      "Mailing Lists",
      "npm Registry",
    ];
    for (const name of required) {
      expect(text).toContain(name);
    }
  });

  it("shows column headers for name, data, and description", () => {
    const doc = loadPage();
    const headers = [...doc.querySelectorAll("#panel-data-sources thead th")].map(
      (th) => th.textContent.trim()
    );
    expect(headers).toEqual(["Source", "Data Provided", "Description"]);
  });
});
