# MSR Knowledge Base

[![CI/CD](https://github.com/zomoit/msr-knowledge-base/actions/workflows/ci.yml/badge.svg)](https://github.com/zomoit/msr-knowledge-base/actions/workflows/ci.yml)

**Live site:** https://zomoit.github.io/msr-knowledge-base/

A single-page reference guide for Mining Software Repositories (MSR) researchers. New PhD students can switch between four tabs to see available data sources, collection methods, analysis methods, and publication venues.

Built for COIS 3060H – Software Processes (Assignment 1).

## Project Overview

The customer (MSR Research Group Lead) asked for a simple, clean reference page because new students are overwhelmed by the number of data sources, methods, and venues in MSR research. Requirements were extracted from the customer meeting notes and documented as user stories in [`docs/requirements.md`](docs/requirements.md).

## Completed Work

**Milestones 1 and 2: Page Structure & Navigation + Data Sources Content**

- Four-tab navigation (Data Sources, Collection Methods, Analysis Methods, Publication Venues)
- Tab switching in JavaScript without page reloads, with keyboard (arrow key) support and ARIA roles
- Data Sources table with all 7 sources: name, data type, description
- Basic CSS styling
- Automated tests (Jest + jsdom) and a manual test checklist
- GitHub Actions pipeline that runs tests on every push and pull request, and deploys to GitHub Pages on merge to `main`

## Remaining Milestones (Future Work)

| Milestone | Scope | Issues |
|---|---|---|
| 3: Collection Methods Content | All 6 methods with purpose and pros/cons | [link] |
| 4: Analysis Methods Content | All 8 methods with type and use cases | [link] |
| 5: Publication Venues Content | All 9 venues, conference/journal split, MSR relevance | [link] |
| 6: Styling & Polish | Responsive layout, final visual polish | [link] |

## Repository Structure

```
.
├── .github/workflows/ci.yml   # Test + deploy pipeline
├── docs/requirements.md       # User stories and requirements
├── src/
│   ├── index.html             # Main page
│   ├── style.css              # Styling
│   └── script.js              # Tab switching
├── tests/
│   ├── navigation.test.js     # Automated tests
│   └── test_checklist.md      # Manual test cases
├── package.json
└── README.md
```

## Running Locally

```bash
# View the site: open src/index.html in a browser

# Run the automated tests
npm install
npm test
```

## Development Workflow

- Work was planned with GitHub milestones and issues.
- `feature/page-structure-navigation` holds the implementation.
- `test/page-structure-navigation` holds the tests and CI workflow.
- Each branch was merged to `main` through a pull request that closes its issue.

