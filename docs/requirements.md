# Requirements Document: MSR Knowledge Base

## 1. User Stories and Acceptance Criteria

* **US-1:** As a researcher, I want to switch between the four content categories using tabs or buttons at the top of the page, so that I can quickly access the information I need without scrolling through irrelevant content.

  * The page shows four tabs: Data Sources, Collection Methods, Analysis Methods, and Publication Venues.
  * Clicking a tab displays that section and hides the other three.
  * The active tab is visually distinguished from inactive tabs.
  * Data Sources is active when the page first loads.

* **US-2:** As a PhD student, I want to see a list of available data sources with their name, data type, and a brief description, so that I can choose which data to collect for my research.

  * The Data Sources section lists exactly 7 sources: GitHub, Stack Overflow, JIRA, App Stores, Travis CI / Jenkins, Mailing Lists, and npm Registry.
  * Each source shows a name, the kind of data it provides, and a brief description, with none left empty.

* **US-3:** As a researcher, I want to see collection methods with their purpose and pros/cons, so that I can select the most appropriate method for gathering my data.

  * The section lists exactly 6 methods: REST APIs, GraphQL, Web Scraping (Selenium), Web Scraping (BeautifulSoup), Database Dumps, and Manual Download.
  * Each method shows its name, what it is used for, and its pros and cons.

* **US-4:** As a researcher, I want to see analysis methods categorised by type with common use cases, so that I can determine which analysis approach fits my research questions.

  * The section lists exactly 8 methods: Statistical, Regression, Thematic, Grounded Theory, Machine Learning, Time Series, Network Analysis, and Visualization.
  * Each method shows its name, type of analysis, and common use cases.
  * Methods are labelled or grouped by type (e.g., quantitative or qualitative).

* **US-5:** As a researcher, I want to compare publication venues by type, focus area, and MSR relevance, so that I can pick the most appropriate venue for my research paper.

  * The section lists exactly 9 venues: ICSE, FSE, ASE, MSR, EASE, and SANER (conferences), and EMSE, TSE, and TOSEM (journals).
  * Each venue shows its full name, abbreviation, type, focus area, and MSR relevance (High or Medium).
  * Conferences and journals are clearly separated or labelled.

* **US-6:** As a researcher, I want a clean, professional-looking page with simple styling, so that content is easy to read and the site feels credible without distracting animations.

  * All four sections use a consistent format (table, list, or cards).
  * The page uses readable fonts, adequate spacing, and sufficient colour contrast.
  * The page contains no animations that distract from content.

## 2. Functional Requirements

* **FR-1:** The system shall display a navigation bar at the top of the page with four tabs: Data Sources, Collection Methods, Analysis Methods, and Publication Venues.
* **FR-2:** The system shall display only the content section of the selected tab and hide the other three.
* **FR-3:** The system shall switch tabs without a full page reload.
* **FR-4:** The system shall show Data Sources as the default active tab on page load.
* **FR-5:** The system shall visually indicate which tab is currently active.
* **FR-6:** The system shall display each data source with its name, the kind of data it provides, and a brief description.
* **FR-7:** The system shall include all seven data sources specified by the customer.
* **FR-8:** The system shall display each collection method with its name, what it is used for, and its pros and cons.
* **FR-9:** The system shall include all six collection methods specified by the customer.
* **FR-10:** The system shall display each analysis method with its name, type of analysis, and common use cases.
* **FR-11:** The system shall include all eight analysis methods specified by the customer.
* **FR-12:** The system shall organise or label analysis methods by type.
* **FR-13:** The system shall display each venue with its full name, abbreviation, type (conference or journal), focus area, and MSR relevance (high or medium).
* **FR-14:** The system shall include all nine venues specified by the customer.
* **FR-15:** The system shall group or separate venues into conferences and journals.
* **FR-16:** The system shall display the MSR relevance of each venue so that venues can be compared.
* **FR-17:** The system shall present content in a consistent table, list, or card format across all four sections.
* **FR-18:** The system shall use simple CSS styling that gives a clean, professional, readable layout.
* **FR-19:** The system shall not use distracting animations.

## 3. Non-Functional Requirements

* **NFR-1 — Usability:** A user shall be able to reach any section with a single click.
* **NFR-2 — Compatibility:** The page shall work in current versions of Chrome, Firefox, Safari, and Edge.
* **NFR-3 — Responsiveness:** The page shall remain readable on both mobile and desktop screen sizes.
* **NFR-4 — Deployment:** The site shall be hosted on GitHub Pages and update automatically on each merge to `main`.
* **NFR-5 — Accessibility:** Tabs shall be operable by keyboard and use appropriate ARIA roles and attributes.
* **NFR-6 — Maintainability:** Content shall be easy to update without restructuring the page (e.g., data kept in a clearly organised structure).
