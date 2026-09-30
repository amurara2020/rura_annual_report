# Baseline snapshots

## What belongs here

Plain-text snapshots of the baseline document, one per dated version, for **diffing**:
seeing exactly what changed between revisions of a live Google Doc that multiple people edit.

Naming: `baseline_YYYY-MM-DD_HHMM.md` (UTC, matching the Doc's `modifiedTime`).

## What does not belong here

The baseline document itself — not as `.docx`, `.pdf`, or exported images. Reasons:

1. **It is 12 MB and mostly images.** Git stores every version of a binary in full; a handful of
   revisions would bloat the repository permanently.
2. **A binary cannot be diffed.** The reason to snapshot at all is to see what changed, and a
   `.docx` in git shows only "the file changed".
3. **It contains unpublished government figures.** See the confidentiality rule in
   `../../CONTRIBUTING.md`.

The Google Doc remains the single source of truth. Registry: `../SOURCES.md`.

## Status

**No snapshot is committed yet.** The repository is currently public (see
`../../CONTRIBUTING.md` § Confidentiality). Text snapshots of the baseline should be added once
repository visibility is resolved, because even the text carries pre-publication figures.
