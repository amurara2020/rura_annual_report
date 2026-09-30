# Data

A four-stage pipeline, so that what was received is always distinguishable from what was computed.

| Folder | Contents | In git? |
| :-- | :-- | :-- |
| `raw/` | Exactly as received from a department or operator. **Never edited.** | No — register in `../00-source/SOURCES.md` |
| `interim/` | Cleaning and reshaping in progress | No |
| `processed/` | Analysis-ready series, reproducible from `raw/` by a script in `../50-analysis/scripts/` | Yes, if non-confidential |
| `statistical-annex/` | The five-year series that become Annex 9.2, and the Excel workbook published with the report | Yes |
| `indicators/` | `indicator_dictionary.csv` — definition, formula, unit, period, source and owner for every headline indicator | Yes |

## Why raw data stays out of git

It arrives as `.xlsx` and `.docx`, which git cannot diff and stores in full on every change; much of
it carries pre-publication government figures. `.gitignore` enforces this. The registry in
`../00-source/SOURCES.md` records what exists and where.

## The indicator dictionary is not optional

It is Annex 9.6 of the report, and it is the structural fix for several of the verification items in
`../70-qa/check_register.csv`. Four terms are currently used in the baseline **without any
definition**: `compliance rate`, `sector growth`, `performance rate`, and `handled` (vs `resolved`).
Two of those are marked **BLOCKING** in the dictionary because cross-sector comparison is impossible
until they are agreed.

**Agree the compliance-rate definition before the data is collected, not after.** Otherwise the
Nuclear 23% and any future ICT or Energy figure will not be comparable.
