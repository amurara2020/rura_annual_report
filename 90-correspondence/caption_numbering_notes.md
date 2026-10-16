# Tables and figures — naming and numbering plan

**Source:** `RURA_Draft_Annual_Report_FY2025-26_DRAFT.docx` (16 October)
**Working file:** `caption_numbering_plan.csv` — every table and image in document order.
**Nothing in the document has been changed.**

## What the audit found

| | |
| :-- | :-- |
| Data tables | **48** — 21 carry no caption |
| Charts and photographs | **55** — 46 carry no caption |
| Decorative images (banners, icons) | 10 — correctly left unnumbered |

**Existing numbering is broken in three ways:**

1. **Gaps.** Tables run `3.17 → 3.21 → 3.24 → 6.3 → 8.1 → 9.1`. There is no Table 3.1–3.16, 3.22, 3.23, or anything for chapters 4, 5 and 7.
2. **Out of document order.** `Figure 5.1` appears on the page *before* `Figure 3.29`.
3. **Duplicates.** `Table 3.18`, `Table 9.1`, `Table 9.4`, `Figure 3.34` and `Figure 6.5` are each used twice.

## Recommended scheme: continuous numbering

`Table 1 … Table 48` and `Figure 1 … Figure 55`, in document order.

**Why not chapter-based (`Table 2.1.4`):** the chapter numbering is still unstable in this version. ICT runs `2.1.x`, Energy `2.2.x`, Transport `2.4.x`, Nuclear `2.5.x` — but Water starts at `2.3.1` and switches to `3.3.5` mid-sector, and two ICT subsections are still numbered `2.2.4.6` and `2.2.5.1`. Chapter-based captions would have to be redone the moment those are corrected.

Continuous numbering is immune to that, is standard practice in statistical reports, and can be applied today.

## Where the titles come from

**No titles have been invented.** For each uncaptioned item the title is taken from the text already in the document:

- **54 of 67** uncaptioned items have a title in the paragraph immediately above the table or chart — for example *"Trend of Mobile Money–Linked SIM Cards per 100 Inhabitants"*. These become the caption.
- **13** have an existing caption that only needs renumbering.
- **3 have no title anywhere** and need wording from the team (listed below).

## Three items need your wording

| Proposed | Size | First row of the table |
| :-- | :-- | :-- |
| Table 11 | 9 × 5 | `Operator \| Backbone Fiber Infrastructure (Km) \| Access Fiber…` |
| Table 45 | 10 × 5 | `Energy indicator \| FY2022/23 \| FY2023/24 \| FY2024/25 \| FY2025/26` |
| Table 47 | 11 × 5 | `Category \| 2024/25 \| FY 2025/2026 \| % Change` |

## Two detection results to confirm

The inventory was built mechanically, so two entries should be checked before anything is applied:

1. **Table 1 is the List of Acronyms.** Front matter — it probably should not be numbered as a data table. Say the word and it is excluded, and everything renumbers from there.
2. **Figure 1 picked up the heading "Overview of the Rwanda Utilities Regulatory Authority"** as its title. If that image is decorative, it should be unnumbered.

Mark any other item in the CSV that should not be numbered, and the sequence will close up around it.

## What applying it will change

Only caption paragraphs: inserting a caption where none exists, and renumbering where one does. No body text, no tables, no images, no headings.

Word cross-references and the List of Figures / List of Tables will need rebuilding afterwards (Ctrl+A, F9) — but those lists are not currently generated in any case.
