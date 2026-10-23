# Manual Test Checklist — MSR Knowledge Base

Executed against the live GitHub Pages deployment and/or `src/index.html` opened locally.
Check each item after a clean page load unless otherwise stated.

## Navigation

- [ ] Page loads without console errors.
- [ ] Header shows "MSR Knowledge Base" and subtitle.
- [ ] Four tab buttons are visible: Data Sources, Collection Methods, Analysis Methods, Publication Venues.
- [ ] Data Sources tab is selected by default; its panel is visible.
- [ ] Active tab is visually distinct (accent color, bold, bordered).
- [ ] Clicking "Collection Methods" hides Data Sources and shows the Collection Methods panel.
- [ ] Clicking "Analysis Methods" shows only the Analysis Methods panel.
- [ ] Clicking "Publication Venues" shows only the Publication Venues panel.
- [ ] Clicking back to "Data Sources" restores its table.
- [ ] Exactly one tab has `aria-selected="true"` at any time.
- [ ] Keyboard: Arrow Left / Arrow Right move focus and selection between tabs.

## Data Sources Content

- [ ] Section heading reads "Data Sources".
- [ ] Introductory sentence is present.
- [ ] Table has three column headers: Source, Data Provided, Description.
- [ ] Seven rows are present.
- [ ] All seven sources appear: GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, npm Registry.
- [ ] Each row shows non-empty values in all three columns.
- [ ] Alternating row shading is visible for readability.

## Placeholder Sections (Future Work)

- [ ] Collection Methods panel shows a placeholder note (no real content yet).
- [ ] Analysis Methods panel shows a placeholder note.
- [ ] Publication Venues panel shows a placeholder note.

## Styling & Responsiveness

- [ ] Text is readable at 100% browser zoom.
- [ ] No horizontal scrolling at 1024px, 768px, and 375px widths.
- [ ] Tables remain legible on narrow screens.
- [ ] No distracting animations.

## Deployment (GitHub Pages)

- [ ] Live URL loads the page correctly.
- [ ] Live site reflects the latest commit to `main` after a short delay.
- [ ] No 404s for `style.css` or `script.js` in the browser network tab.
