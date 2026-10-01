# Source Document Registry

Every input to the FY2025/26 Annual Report, where it lives, who owns it, and its status.

**Rule: source documents are registered here, not stored in this repository** — see
`../CONTRIBUTING.md` for why. This file is the index; Drive is the store.

## Status legend

| Status | Meaning |
| :-- | :-- |
| **BASELINE** | The authoritative agreed structure. Changes here override the repository |
| **HELD** | Located and accessible |
| **REFERENCED-MISSING** | The baseline document cites it, but it cannot be found in Drive |
| **REQUESTED** | Formally requested from the owner; not yet received |

---

## 1. The baseline document

| Field | Value |
| :-- | :-- |
| **Title** | `RURA_Draft_Annual_Report_FY2025-26_DESIGNED_final` |
| **Status** | **BASELINE** |
| **Type** | Google Doc |
| **Drive ID** | `1SsoNtUda2z8rcS4br5mGJmX3RcdSB-fKDWZayGlBrrs` |
| **Link** | https://docs.google.com/document/d/1SsoNtUda2z8rcS4br5mGJmX3RcdSB-fKDWZayGlBrrs/edit |
| **Owner** | a.cesaire07@gmail.com |
| **Location in Drive** | **"Shared with me" — not inside any folder owned by this account** |
| **Created** | 30 September 2026, 07:50 UTC |
| **Read for the assessment** | 30 September 2026, ~13:55 UTC |
| **Self-described as** | "designed working draft, based on the draft of 22 September 2026" |

### Version verification — 30 September 2026

A `.docx` export of the baseline was supplied directly (14:35 UTC) and compared against the version
the assessment was produced from (Drive, ~13:55 UTC).

**Result: the body text is identical.** Verified by comparing:

| Check | Drive 13:55 | Supplied .docx | |
| :-- | :-- | :-- | :-- |
| `MISSING` annotations | 25 | 25 | ✔ |
| `PARTIAL` annotations | 37 | 37 | ✔ |
| `CHECK` annotations | 59 | 59 | ✔ |
| `[DATA REQUIRED]` markers | 60 | 60 | ✔ |
| `SOURCE TO CONFIRM` markers | 11 | 11 | ✔ |
| 18 sampled headline figures | all present | all present | ✔ |

**The 14:18 UTC modification was the addition of one comment, not a content change.**
So **the assessment in `../10-assessment/` stands in full** — no row needs revisiting on
version grounds.

The document remains live and multi-authored, so the rule in
`../CONTRIBUTING.md` § "Working against a live baseline" still applies to future edits.

### Reviewer comments in the baseline

Three open comments, all by Clemence Ingabire, all tracked with anchors and recommendations in
[`../70-qa/reviewer_comments.csv`](../70-qa/reviewer_comments.csv):

| ID | Time | Anchored to | Comment |
| :-- | :-- | :-- | :-- |
| `DOC-C1` | 10:20 | Table 3.26 caption (transport licences) | "Do we keep 2024-2025 columns or remove?" |
| `DOC-C2` | 10:25 | Table 3.27 body (fleet size) | "to double check the table 41" |
| `DOC-C3` | **14:18** | 3.5 Green Mobility electric adoption | "to make a graph for the trend" |

### The supplied .docx — deliberately not committed

| Field | Value |
| :-- | :-- |
| Received | 30 September 2026, 14:35 UTC |
| Size | 14.7 MB (81 embedded images totalling 13.9 MB; body XML 3.8 MB) |
| Origin | Google Docs export (embedded Quattrocento Sans, Tahoma, Noto Sans Symbols) |

**Not added to this repository**, for two reasons:

1. **The repository is public** and the document is an unpublished national regulatory report —
   see `../CONTRIBUTING.md` § Confidentiality.
2. **It is 14.7 MB of mostly binary image data.** Git would store every future revision in full and
   still be unable to show what changed inside it.

Once repository visibility is resolved, the right thing to commit is a **dated text snapshot** to
`baseline/`, which diffs properly. The `.docx` itself stays in Drive.

### Companion documents the baseline explicitly cites

| Document | Cited for | Status |
| :-- | :-- | :-- |
| **RURA Visual Design Standard** | The visual standard applied to all charts and KPI cards | **HELD** — supplied 1 October 2026 as `RURA_Annual_Report_Visual_Design_Standard_1.docx`, v1.0 DRAFT FOR REVIEW, Data Science and Analytics Division. Reviewed in [`../80-design/`](../80-design/) |
| **M&E Framework (Excel)** | KPIs, baselines and Year-4 targets for chapter 2, annex 9.4 and every KPI-card target | **REFERENCED-MISSING** — not found in Drive |

The **M&E Framework remains missing** and is the single largest dependency in the whole report
(see `../10-assessment/02_priority_items.md` item 8). It does not appear anywhere in this Drive
account and must be requested from its owner.

The **Visual Design Standard has since been supplied** (1 October 2026). It is a substantial
18-section document and is authoritative for the report's design. Review and proposed v1.1 changes:
[`../80-design/`](../80-design/).

### A third source document: the Statistics Edition

| Field | Value |
| :-- | :-- |
| **Title** | `RURA_Annual_Report_2025-26_Statistics_Edition_1.pdf` |
| **Received** | 1 October 2026 |
| **Format** | 83 pages, A5 landscape (210 × 148 mm) |
| **Produced by** | HTML → Chrome → PDF (`Skia/PDF m141`) |
| **Status** | **HELD** — a separate artifact from the baseline DESIGNED draft, one indicator per page |

It is **not** the baseline. It is a statistics-format edition covering the same reporting year, and it
does not implement the Visual Design Standard — see [`../80-design/00_design_review.md`](../80-design/00_design_review.md).

---

## 2. Related material located in Drive

Not part of the baseline, but relevant context. None is a substitute for the baseline.

| Title | Type | Drive ID | Relevance |
| :-- | :-- | :-- | :-- |
| `TRANSPORT SECTOR REGULATION- Draft Annual Report 2024-2025 with comments` | .docx | `1qUBHj26WH4ou2fZ_UuhYjPJ301ZQyWfE` | Prior-year transport chapter. **Useful for section 2.4** (commitments from last year's report) |
| `rura_kpi_transport_dashboard_11_10_2025` | .zip | `17bkioM3WRPYqsNBUANdiSYHdSxrUC-cV` | Existing transport KPI dashboard — check for reusable indicator definitions |
| `RURA_Primary_Routes_w_additional_routes_incl_fixes_Jan_2025` | .zip | `10AAuDYI9_xDNCjmApbF8nVCzrqGJUYWD` | **GTFS route network.** Required for the AFC/e-ticketing analysis (priority item 11) |
| `Enhancing RURA's Regulatory Effectiveness Through Centralized Data Analytics_FinalPaper` | .docx | `1ZttSGD9QfSWvOQsVB5Bypjh5uzFUur-x` | Positioning of the Data Analytics Team |
| `Data Analytics Team Infrustructure Assessment` | Google Doc | `1LyNt2r6cdjgSCO1pNLFznVoMg8t-aypO_g1wupHjFYc` | Team capability context |
| `data_team_stack_and_practices` | Google Doc | `1mXwk30CcggVV_2P9J7gKONwH6RuTIY2E03KMWsX6O2c` | Tooling conventions for the analysis workstream |
| `RURA Draft Data Strategy Working Document - March 2023` | .docx | `1FrPPZdY93S1gCovu5063D7xahnw_eXOu` | Data governance background |
| `Preliminary Report on the ABT Technical Assessment and Benchmark Mission_edited` | .docx | `1rj3TzlZVnQCtCkIOCAtAn9F2mYTkYEYA` | Account-based ticketing context for transport |
| `20240930_RURA_fare_model incl subsidy` | .pptx | `11KwjmEXwcqgL0FL-hrjyyjn7dmwWSEmQ` | Fare modelling — relevant to the intercity fare review (section 3.5) |

**Note on Drive organisation:** these files are scattered across unrelated folders. The transport
draft annual report, for example, sits in a folder alongside personal material
(`contracts and payments`, `penthouse_ideas`). See the Drive recommendation in
`../README.md` § "Recommended Drive structure".

---

## 3. Not yet located — required for the report

Everything in `40-requests/information_requests_to_departments.md` is **REQUESTED** or not yet
requested. Track arrival in `40-requests/request_tracker.csv`, and register each file here on
arrival with its Drive ID, owner and date received.

---

## How to register a new source

Add a row with: title, type, Drive ID (or path), owner, date received, and which report section it
serves. If it contains pre-publication figures, record it here and store it in Drive — **do not
commit it.**
