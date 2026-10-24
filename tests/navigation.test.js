/**
 * Automated tests for Milestone 1 (Page Structure & Navigation)
 * and Milestone 2 (Data Sources content).
 *
 * Loads src/index.html in jsdom, runs src/script.js, and simulates clicks.
 */
const path = require('path');
const { JSDOM } = require('jsdom');

// ---- ADJUST THESE TO MATCH YOUR index.html ---------------------------------
const SEL = {
  tabButtons: '[data-tab]',                 // the 4 tab buttons/links
  sectionFor: (id) => `#${id}`,             // section whose id equals the tab's data-tab value
  dataSourceRows: '#data-sources tbody tr', // rows of the data sources table
};
const ACTIVE_CLASS = 'active';              // class added to the active tab AND visible section
const DEFAULT_TAB = 'data-sources';         // data-tab value of the default tab
const EXPECTED_TABS = [
  'Data Sources',
  'Collection Methods',
  'Analysis Methods',
  'Publication Venues',
];
const EXPECTED_SOURCE_COUNT = 7;
// ----------------------------------------------------------------------------

let dom;
let document;

beforeEach(async () => {
  dom = await JSDOM.fromFile(path.join(__dirname, '..', 'src', 'index.html'), {
    runScripts: 'dangerously',
    resources: 'usable',
  });
  if (dom.window.document.readyState !== 'complete') {
    await new Promise((resolve) => dom.window.addEventListener('load', resolve));
  }
  document = dom.window.document;
});

afterEach(() => dom.window.close());

const tabs = () => Array.from(document.querySelectorAll(SEL.tabButtons));
const sectionOf = (tab) => document.querySelector(SEL.sectionFor(tab.dataset.tab));
const isVisible = (section) => section.classList.contains(ACTIVE_CLASS);

describe('Navigation (FR-1 to FR-5)', () => {
  test('page shows the four required tabs', () => {
    const labels = tabs().map((t) => t.textContent.trim());
    expect(labels).toEqual(EXPECTED_TABS);
  });

  test('Data Sources is the active tab on page load', () => {
    const defaultTab = tabs().find((t) => t.dataset.tab === DEFAULT_TAB);
    expect(defaultTab.classList.contains(ACTIVE_CLASS)).toBe(true);

    const visible = tabs().filter((t) => isVisible(sectionOf(t)));
    expect(visible).toHaveLength(1);
    expect(visible[0]).toBe(defaultTab);
  });

  test('clicking each tab shows only its own section', () => {
    for (const tab of tabs()) {
      tab.click();
      for (const other of tabs()) {
        expect(isVisible(sectionOf(other))).toBe(other === tab);
      }
      expect(tab.classList.contains(ACTIVE_CLASS)).toBe(true);
    }
  });
});

describe('Data Sources content (FR-6, FR-7)', () => {
  test(`table lists exactly ${EXPECTED_SOURCE_COUNT} data sources`, () => {
    const rows = document.querySelectorAll(SEL.dataSourceRows);
    expect(rows).toHaveLength(EXPECTED_SOURCE_COUNT);
  });

  test('every data source has a name, data type, and description', () => {
    const rows = Array.from(document.querySelectorAll(SEL.dataSourceRows));
    for (const row of rows) {
      const cells = Array.from(row.querySelectorAll('td, th'));
      expect(cells.length).toBeGreaterThanOrEqual(3);
      for (const cell of cells.slice(0, 3)) {
        expect(cell.textContent.trim().length).toBeGreaterThan(0);
      }
    }
  });
});