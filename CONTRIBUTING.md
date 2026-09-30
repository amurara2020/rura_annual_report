# Working conventions

## ⚠ Confidentiality — read first

**This repository is currently PUBLIC** (`github.com/amurara2020/rura_annual_report`, created
30 September 2026). Anyone on the internet can read it, and search engines will index it.

The material in this project is an **unpublished national regulatory annual report**. It contains
pre-publication sector figures, unresolved numerical contradictions, draft financial data, and a
pending external audit opinion. None of that is normally disclosable before the report is laid and
published.

**Recommended action before adding any source document or received dataset:**

1. Change the repository to **Private** — GitHub → Settings → General → Danger Zone →
   Change visibility.
2. Add collaborators explicitly.
3. Only then commit source snapshots or processed data.

Note that the assessment already committed to this repository quotes pre-publication figures and
lists the report's internal contradictions. If that material should not be public, changing
visibility alone does not remove it from any copy already taken — raise it with whoever owns the
repository and decide whether history needs rewriting.

**Until visibility is resolved:**

- Do **not** commit the baseline document, in any format.
- Do **not** commit received departmental data.
- `.gitignore` blocks the common formats as a safety net, but it is a net, not a policy.

## Source documents live in Drive, not in git

Git is for text that benefits from diffing and review: the matrix, the assessment, the registers,
the drafted sections, the analysis scripts. It is a poor store for 12 MB Google Docs and `.xlsx`
attachments — it keeps every version of a binary in full, and it cannot show what changed inside one.

So: **register sources in `00-source/SOURCES.md`, store them in Drive.** The registry records title,
type, Drive ID, owner, date received and which report section each serves.

## Working against a live baseline

The baseline is a Google Doc that several people edit. The assessment in `10-assessment/` was made
against the version of **30 September 2026, ~13:55 UTC**; the document was modified at 14:18 UTC the
same day.

Practical consequence: **before acting on a matrix row, check whether the baseline still says what
the row assumes.** When the baseline changes materially, commit a dated text snapshot to
`00-source/baseline/` so the change is visible as a diff, and note in the commit message which
assessment rows are affected.

## The agreed structure is authoritative

Do not add, merge, rename or reorder Parts, chapters or sections. Each sector keeps the same five
headings, in this order:

1. Sector Profile
2. Legal and Regulatory Framework
3. Licensing
4. Market Performance
5. Compliance Monitoring and Enforcement

Structural problems get **flagged** in `10-assessment/05_structural_flags_and_length_control.md`,
never fixed silently. One genuine template-application problem is already flagged there: electricity
has no market section, so Energy is the one sector where the template is not applied to its largest
sub-sector.

## Status markers

Carried forward from the baseline. They stay in the text until resolved, and **resolution means
answered, not deleted.**

| Marker | Meaning |
| :-- | :-- |
| `MISSING` | Content does not exist and must be written or supplied |
| `PARTIAL` | Some content exists; the note says what to add |
| `CHECK` | A figure, date, source or statement to verify before publication |
| `[DATA REQUIRED]` | A value the baseline does not provide |
| `SOURCE TO CONFIRM` | A figure whose source is not stated |
| `†` | Calculated, not reported as such in the source |

## Never invent a figure

No figure, regulatory outcome, target or explanation is to be estimated, inferred or filled in to
make a section read better. If the data has not arrived, the marker stays. **The report's
credibility depends on this more than on its completeness.**

When requesting data, say so explicitly:

> Where a figure does not exist, please say so explicitly rather than estimating. An estimate that
> cannot be sourced is worse than an acknowledged gap.

## Numeric style

| Convention | Rule |
| :-- | :-- |
| Decimal separator | Point. Never a comma. (The baseline mixes `71,5%` and `71.5%`) |
| Thousands separator | Comma: `14,501,766` |
| Rounding | Per indicator, recorded in `30-data/indicators/indicator_dictionary.csv` |
| Percentages | One decimal unless the indicator dictionary says otherwise |
| Percentage-point changes | State as `pts`, never `%`, when comparing two percentages |
| Reference period | **June 2025 → June 2026** for point-in-time series; financial year for flows. State the convention in every table note |
| Calculated values | Mark with `†` and record the formula in the indicator dictionary |

## Every figure must be traceable

Each figure in the report traces to either a row in `30-data/statistical-annex/` or a registered
source in `00-source/SOURCES.md`. Each chart has an underlying data table — three in the baseline
currently do not, and cannot be corrected or checked as a result.

## Commits

Scope one commit to one section or one workstream. Say what changed and which matrix row or check
ID it affects, e.g.:

```
Resolve CHK-05: relabel internet subscriptions as total, not mobile

11,193,584 is mobile (11,109,432) + fixed broadband (84,152).
Affects 3.2 At a glance, Executive Summary, headline tile 2.
```
