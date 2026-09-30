# Quality assurance

## `check_register.csv`

The baseline document's 22 `CHECK` annotations, expanded to 31 tracked rows, each with a severity,
the conflicting figures, what must be confirmed, an owner, and a resolution field.

| Severity | Meaning | Count |
| :-- | :-- | :-- |
| **MATERIAL** | Published figures that contradict each other, or a legal/reputational risk. Cannot publish | 8 |
| **HIGH** | Undermines derived figures or a whole section | 6 |
| **MEDIUM** | Visible inconsistency | 11 |
| **LOW** | Editorial | 6 |

Work the MATERIAL rows first: `CHK-01` through `CHK-06`, plus `CHK-21` (vision/mission vs the
Strategic Plan), `CHK-22` (photograph rights) and `CHK-31` (annotation removal).

## Pre-publication gate

The report should not go to print until:

1. Every row in `check_register.csv` is `RESOLVED` or consciously accepted with a recorded reason.
2. Every working annotation is resolved — **not merely deleted** (`CHK-31`). An annotation removed
   without being resolved is worse than one left visible internally.
3. Every figure in the report traces to a row in `../30-data/statistical-annex/` or a registered
   source in `../00-source/SOURCES.md`.
4. Every chart has an underlying data table. Three currently do not (`CHK-30`).
5. Every photograph has a recorded owner and licence (`CHK-22`).
6. Captions are renumbered and all cross-references rebuilt — **last**, after all content changes
   (`CHK-23`).
