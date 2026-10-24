# Manual Test Checklist

Milestones covered: **1 – Page Structure & Navigation** and **2 – Data Sources Content**

How to run: open `src/index.html` in a browser (or visit the live GitHub Pages site).

| ID | Requirement | Steps | Expected Result | Pass/Fail |
|---|---|---|---|---|
| MT-1 | FR-1 | Load the page. | Four tabs appear at the top: Data Sources, Collection Methods, Analysis Methods, Publication Venues. | |
| MT-2 | FR-4 | Load the page. | Data Sources tab is active and its content is visible. | |
| MT-3 | FR-2, FR-3 | Click each tab in turn. | Only the selected section is shown. The page does not reload. | |
| MT-4 | FR-5 | Click a different tab. | The clicked tab is visually highlighted; the previous tab is not. | |
| MT-5 | FR-7 | Open Data Sources. | Seven sources are listed: GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, npm Registry. | |
| MT-6 | FR-6 | Inspect each data source. | Each shows a name, the kind of data it provides, and a brief description. | |
| MT-7 | NFR-5 | Press Tab and Enter/Space on the keyboard. | Tabs can be focused and activated without a mouse. | |
| MT-8 | NFR-2 | Open the page in Chrome and Firefox. | Layout and tab switching work in both. | |
| MT-9 | NFR-4 | Visit the GitHub Pages URL after a merge to `main`. | The live site matches the latest merged changes. | |

**Tester:** [Your Name]  **Date:** [Date]