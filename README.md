# RURA FY2025/26 Annual Report — Implementation Workspace

Working repository for completing the Rwanda Utilities Regulatory Authority Annual Report for
Financial Year 2025/26 (1 July 2025 – 30 June 2026).

> ### ⚠ Two things to action before anything else
>
> **1. This repository is public.** It holds work on an unpublished national regulatory report —
> pre-publication figures, unresolved contradictions, draft financial data and a pending audit
> opinion. It should be **Private**. See [`CONTRIBUTING.md`](CONTRIBUTING.md#-confidentiality--read-first).
>
> **2. The source documents were never in this repository.** `main` contains exactly one commit: a
> 20-byte `README.md`. Nothing was lost — the documents live in Google Drive and are now indexed in
> [`00-source/SOURCES.md`](00-source/SOURCES.md).

## Where the documents actually are

| Document | Location |
| :-- | :-- |
| **The baseline** — `RURA_Draft_Annual_Report_FY2025-26_DESIGNED_final` | Google Drive, **"Shared with me"**, owned by `a.cesaire07@gmail.com`. Not inside any folder owned by this account, which is why it is hard to find |
| **RURA Visual Design Standard** (cited by the baseline) | **Not found in Drive** |
| **M&E Framework (Excel)** (cited by the baseline) | **Not found in Drive** |
| Related material (prior-year transport chapter, GTFS routes, KPI dashboard, data strategy) | Scattered across unrelated Drive folders — see the registry |

Full index with Drive IDs, owners and status: [`00-source/SOURCES.md`](00-source/SOURCES.md).

The two missing companion documents are load-bearing. The M&E Framework is the single largest
dependency in the whole report.

## Repository structure

```
00-source/          Where source material lives — the registry, not the files
  SOURCES.md          Every input: title, Drive ID, owner, status
  baseline/           Dated text snapshots of the baseline, for diffing

10-assessment/      The management layer: what is done, what is missing, who owns it
  completion_matrix.csv              ← main working output (73 sections × 13 columns)
  00_implementation_assessment.md
  02_priority_items.md
  05_structural_flags_and_length_control.md

20-report/          Report content, one folder per chapter of the agreed structure
  00-front-matter/ 01-about-rura/ 02-strategic-plan/
  03-sectors/{3.1-cross-sector, 3.2-ict, 3.3-energy,
              3.4-water-sanitation, 3.5-transport, 3.6-nuclear}/
  04-regulatory-interventions/ 05-consumer-protection/ 06-governance-finance/
  07-challenges-risks/ 08-outlook/ 09-annexes/

30-data/            The data pipeline
  raw/                As received, never edited (not in git)
  interim/            Cleaning in progress (not in git)
  processed/          Analysis-ready, reproducible from raw by script
  statistical-annex/  The five-year series that become Annex 9.2
  indicators/         indicator_dictionary.csv — becomes Annex 9.6

40-requests/        Data requests and their tracking
  information_requests_to_departments.md   ← written to be sent as-is
  request_tracker.csv                      ← 71 tracked requests

50-analysis/        Analysis workstream
  data_analytics_immediate_workplan.md     ← three dependency streams
  scripts/            Every figure reproducible from raw data

60-visuals/         Charts
  specs/visual_specifications.csv          ← 44 visuals specified
  output/             Rendered charts

70-qa/              Verification before publication
  check_register.csv                       ← the baseline's CHECK items, tracked
```

### Why this shape

- **Numbered prefixes** so folders sort in workflow order, from source through to QA.
- **Source material separated from work product.** The baseline is an input owned by someone else
  and edited live; it is registered, not copied in.
- **`20-report/` mirrors the agreed structure exactly**, so any section can be found from its number
  in the report. The chapter folders are empty on purpose — drafting starts after the assessment.
- **The data pipeline separates received from computed.** Most of the baseline's verification items
  are arithmetic or transcription errors between a table and the text describing it; a figure
  computed by a script from a registered source does not develop that class of error.
- **QA is a folder, not a final step.** 31 tracked verification items, 8 of them material.
- **Binaries stay out of git.** Enforced by `.gitignore`, explained in `CONTRIBUTING.md`.

## Start here

| If you are… | Read |
| :-- | :-- |
| Coordinating the report | [`10-assessment/00_implementation_assessment.md`](10-assessment/00_implementation_assessment.md), then the matrix |
| Deciding what must be done first | [`10-assessment/02_priority_items.md`](10-assessment/02_priority_items.md) |
| On the Data Analytics Team | [`50-analysis/data_analytics_immediate_workplan.md`](50-analysis/data_analytics_immediate_workplan.md) — Stream A needs nobody else |
| Sending data requests | [`40-requests/`](40-requests/) |
| Checking figures before publication | [`70-qa/check_register.csv`](70-qa/check_register.csv) |
| Producing charts | [`60-visuals/specs/visual_specifications.csv`](60-visuals/specs/visual_specifications.csv) |
| Contributing anything | [`CONTRIBUTING.md`](CONTRIBUTING.md) |

## Conventions

**Priority**
- **Priority 1** — Essential for the FY2025/26 Annual Report
- **Priority 2** — Include if data can be obtained within the reporting timeline
- **Priority 3** — Future reporting improvement, FY2026/27 onward

The FY2025/26 report should not be delayed in pursuit of an ideal future-state report.

**Responsibility**
- **Data Analytics Team** — historical datasets, calculations, YoY changes, 3–5 year trends, derived
  indicators, cross-sector and operator comparisons, maps and geospatial analysis, AFC/e-ticketing
  analysis, charts, dashboards, data-quality checks, indicator metadata
- **Sector Departments** — ICT, Energy, Water and Sanitation, Transport, Nuclear: regulatory
  interventions, sector developments, policy and regulatory context, inspections, enforcement,
  compliance information, sector targets, interpretation of regulatory outcomes
- **Corporate / Support Functions** — Strategy/Planning, Finance, Human Resources, Procurement,
  Legal, Internal Audit/Risk, ICT/Information Systems, Communication, Board Secretariat
- **External source / operator** — regulated operators, other government institutions, other
  authoritative sources

**Working principle**

No figure, regulatory outcome, target or explanation is invented. Where the baseline does not contain
sufficient evidence, the item stays explicitly marked as requiring data or confirmation.

## Recommended Drive structure

The repository can only be as findable as its sources. The baseline currently sits in
"Shared with me" with no folder, and related files are scattered — the prior-year transport annual
report, for instance, sits beside personal material. Suggested Drive layout, mirroring this
repository so the two stay navigable together:

```
RURA Annual Report FY2025-26/
├── 00 Baseline/                  The agreed structure document + dated exports
├── 01 Companion standards/       Visual Design Standard, M&E Framework
├── 02 Received from departments/
│   ├── Corporate/                Strategy, Finance, HR, Legal, Audit, Board, Comms
│   └── Sectors/                  ICT, Energy, Water, Transport, Nuclear
├── 03 Received from external/    Operators, REG, WASAC, RSB, RNP, NISR, OAG
├── 04 Prior year/                FY2024/25 report and sector chapters
├── 05 Statistical annex/         Published Excel workbook
└── 06 Final deliverables/        Approved report, print files
```

Two suggestions worth making regardless of folder names:

1. **Move the baseline into a shared folder** (ideally a Shared Drive) rather than leaving it in one
   person's "Shared with me". A document that is the authoritative blueprint for the report should
   not depend on one individual's account.
2. **Name received files consistently** — `YYYY-MM-DD_department_content.xlsx` — so the registry and
   the tracker stay easy to reconcile.
