// tests/tabs.test.js
import { readFileSync } from "node:fs";
import { JSDOM } from "jsdom";

function loadPage() {
  const html = readFileSync("src/index.html", "utf8");
  const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
  // Re-run script manually since jsdom won't fetch local <script> by default:
  const script = readFileSync("src/script.js", "utf8");
  dom.window.eval(script);
  return dom;
}

test("four tabs render and Data Sources is selected by default", () => {
  const dom = loadPage();
  const doc = dom.window.document;
  expect(doc.querySelectorAll('[role="tab"]').length).toBe(4);
  expect(
    doc.querySelector('[data-tab="data-sources"]').getAttribute("aria-selected")
  ).toBe("true");
  expect(doc.getElementById("panel-data-sources").hidden).toBe(false);
});

test("clicking Collection Methods tab shows its panel", () => {
  const dom = loadPage();
  const doc = dom.window.document;
  doc.getElementById("tab-collection-methods").click();
  expect(doc.getElementById("panel-collection-methods").hidden).toBe(false);
  expect(doc.getElementById("panel-data-sources").hidden).toBe(true);
  expect(
    doc.querySelector('[data-tab="collection-methods"]').getAttribute("aria-selected")
  ).toBe("true");
});

test("Data Sources table has seven rows", () => {
  const dom = loadPage();
  const doc = dom.window.document;
  const rows = doc.querySelectorAll("#panel-data-sources tbody tr");
  expect(rows.length).toBe(7);
});
