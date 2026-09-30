# Analysis

## `data_analytics_immediate_workplan.md`

What the Data Analytics Team should start producing now, in three dependency streams:

- **Stream A** — needs nothing from anyone else. Can start today.
- **Stream B** — starts when the M&E Framework is released.
- **Stream C** — starts as departmental data arrives.

## `scripts/`

Every figure in the report should be reproducible from `../30-data/raw/` by a script here.

The reason is not tidiness. The baseline document contains 22 verification items, most of which are
arithmetic or transcription errors between a table and the narrative describing it. A figure computed
by a script, from a registered source, with its formula recorded in the indicator dictionary, does
not develop that class of error. Keep the dagger convention for every calculated value.
