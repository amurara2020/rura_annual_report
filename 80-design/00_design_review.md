# Design Review — RURA Annual Report FY2025/26

**Documents reviewed**

| | |
| :-- | :-- |
| `RURA_Annual_Report_Visual_Design_Standard_1.docx` | **Visual Design Standard v1.0**, Data Science and Analytics Division — 18 sections covering colour, type, icons, charts, KPI cards, tables, maps, callouts, status, number formatting, page grid and a 20-page-type library |
| `RURA_Annual_Report_2025-26_Statistics_Edition_1.pdf` | **Statistics Edition** — 83 pages, A5 landscape (210 × 148 mm), produced through an HTML → Chrome → PDF pipeline (`Skia/PDF m141`) |

**Scope:** design only. Content is covered separately in `../10-assessment/`.

---

## The finding in one line

**The Standard is good. The Statistics Edition was not built to it.** Almost every weakness in the PDF is something the Standard already prohibits — in several cases in a section written specifically to prohibit it.

So the question "how should the design look?" mostly has an answer already: **as the Standard says.** What is missing is the means to apply it in the pipeline that actually produced the PDF, and a small number of genuine gaps in the Standard itself.

---

## Part 1 — The Standard is stronger than most

Assessed on its own terms, v1.0 is a serious piece of work. Specifically:

- **§2 "Critical review" is the best section in it.** It records rules that were *proposed and rejected*, with the reason. Rejecting Energy `#E5A11A` because it would make an energy chart look like a warning, and banning lime and amber as text because they fail contrast, are exactly the right calls for exactly the right reasons.
- **Every contrast ratio it publishes is accurate.** I recomputed all thirteen against WCAG 2.1. Each is correct to two decimal places — `#004589` 9.49:1, `#17365D` 12.19:1, `#5B6573` 5.91:1, `#C94C4C` 4.54:1, `#A7CF36` 1.81:1. Nothing was eyeballed.
- **The change-line rule (§7) is correct and non-obvious:** *arrow = direction, colour + word = evaluation.* It explicitly notes that an increase can be bad. Most house styles get this wrong.
- **Status is triple-encoded** (§11): symbol + word + colour, so it survives greyscale printing and colour-blind reading.
- **Sector colours are barred from charts** (§2, §5) to protect the blue/grey year grammar. Right call.
- **§17 requires the annotation count to reach zero before publication** — a real pre-publication gate.
- **§18 is a self-assessment against the Standard** that honestly records two "Not achieved" items.

This should be adopted, not rewritten.

## Part 2 — The Statistics Edition departs from it on 13 points

| # | Standard says | Statistics Edition does | Where |
| :-- | :-- | :-- | :-- |
| 1 | Tahoma, one family, two weights (§4) | Rubik + Source Sans 3 + Liberation Sans fallback + a Type3 font | throughout |
| 2 | Body 10 pt / 14.4 pt leading (§4) | **7.8 pt in Source Sans 3 ExtraLight**; smallest type 5.1 pt | throughout |
| 3 | RURA Blue `#004589` (§3) | `#004880` — plus `#003866` and `#0A5694` | throughout |
| 4 | Lime `#A7CF36` (§3) | `#9CC83A` | throughout |
| 5 | Blue = current year, grey = previous (§3) | p.33 current = navy; **p.45 current = grey**; p.57 navy/green = two categories | pp. 33, 45, 57 |
| 6 | Arrow + colour + **word** on every change (§7) | bare `+9.1%` — no arrow, no evaluation word | p.7 and all KPI pages |
| 7 | Green = improvement (§3) | green applied to a **−1.3 pts fall** in female staff share | p.9 |
| 8 | **Pie and donut charts banned** (§2, §6) | donut chart | p.9 |
| 9 | Comparison line never omitted; write `[DATA REQUIRED]` (§7) | third tile line is sometimes a change, sometimes a baseline, sometimes an unrelated fact | p.7 |
| 10 | Titles state the finding (§1.2, §6) | neutral topic titles — "Mobile-Cellular Penetration Trend" | throughout |
| 11 | Status = symbol + word + colour (§11) | colour alone | throughout |
| 12 | Sector colours, icons, callout boxes (§5, §10) | none present | throughout |
| 13 | Number format `14.5 million`, `FY2025/26` (§12) | `14.50 M`, `Jun-26`, `RWF 948 M` broken across lines | pp. 7, 51 |

### Measured consequences

**Two accessibility failures are in the published PDF:**

| | Ratio | |
| :-- | :-- | :-- |
| White text on green `#9CC83A` — chapter and section number pills | **1.96:1** | fails AA at any size |
| Green `#9CC83A` as text — cover date, accents | **1.96:1** | fails AA at any size |

The Standard prohibits precisely this in §2 and §3 ("never text").

**The chart colours fail objective checks** (OKLCH lightness band, chroma floor, contrast vs surface):

```
#004880  L 0.396  below the 0.43 band
#9CC83A  L 0.775  above the band; 1.91:1 on white
#6D6E71  C 0.005  reads as grey — cannot carry identity
#C9D6E4  1.44:1   far too light to be a data mark
```

**Typography is not a scale.** 42 distinct sizes between 5.1 pt and 34 pt, including 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8 and 7.9 pt. That is text being auto-shrunk to fit boxes. The embedded font names — `SourceSans3ExtraLight-Bold`, `RubikLight-Bold` — show **bold being synthesised from hairline masters**, which renders muddy at these sizes.

**More than a third of every page is empty.** Measured across all 83 pages, excluding footer furniture:

| | |
| :-- | :-- |
| Median page height used | **59%** |
| Pages using more than 80% | **3** of 83 |
| Pages where content stops before halfway | **31** of 83 |

The Standard says "never fill a page for the sake of it" (§14) — fair, and not a licence for a 59% median. The dead space is also the room needed to set body type at the 10 pt the Standard requires. **Both problems have the same fix.**

### Production defects

- **Five unescaped HTML entities render literally**: `Legal &amp; regulatory` (p.13, ×3), `Buses &amp; minibuses` (p.72), `Fares &amp; tickets` (p.77).
- **Six near-identical pale blues** and **three navies** differing by 1.2–1.3:1 — invisible as distinctions, and evidence that values are picked per component rather than from tokens.
- **p.72's diverging bar chart does not diverge.** Every bar runs rightwards; −33.3% and +58.3% point the same way. Direction lives only in colour and a minus sign.
- **p.19's headline is "penetration passed 100" but the 100 line is not drawn**, and the y-axis is silently truncated.
- **Cover crops are careless** — the bus-lane photo reads "ONLY / BUS"; the left panel cuts "DIGITAL TRANSFORMATION" mid-word.
- **p.8's divider for "Institutional Statistics" shows a slide about nuclear energy** — chapter 4's subject.

## Part 3 — Why it diverged, and the fix

This is not carelessness. **The Standard is written for Word and the Statistics Edition is built in HTML.**

Every delivery mechanism in the Standard is a Word mechanism: named Word styles, Word caption fields, `Ctrl+A, F9`, text widths in inches, "Insert Caption → Numbering". §1 says *"Contributors apply styles; they do not format by hand."* In an HTML pipeline there are no Word styles to apply — so values get typed per component, and the Standard quietly stops being enforceable.

The Standard's own QC table records the symptom: *"Charts rendered in DejaVu Sans because Tahoma is not installed on the build machine."* The same build machine produced the Statistics Edition, which is why it reached for Rubik and Source Sans.

**The fix is to give the Standard a second delivery mechanism.** `specimen/rura-report.css` is that: every rule in §3, §4, §7, §8, §11, §12 and §14 expressed as CSS custom properties, so the HTML pipeline consumes the same Standard the Word document does. `specimen/specimen.pdf` is five of the reviewed pages rebuilt through the real Chrome pipeline using it.

## Part 4 — Genuine gaps in the Standard

Four things v1.0 does not cover, found by testing rather than reading. Details and fixes in `VISUAL_DESIGN_STANDARD_v1.1_proposed_changes.md`.

| | Gap | Severity |
| :-- | :-- | :-- |
| **1** | **Energy `#B8860B` and Transport `#D87520` are indistinguishable** — ΔE 6.9 normal vision, **1.3 under deuteranopia**. §5 puts them side by side in cross-sector table headers. §2 moved Energy off `#E5A11A` to avoid the amber clash and created this one | **High** |
| **2** | **No categorical palette.** The Standard has year colours and sector colours, but nothing for data that is neither — technologies, licence types, offence categories. This is why p.57 reached for navy + green | **High** |
| **3** | **The map ramp's lightest class is invisible.** §9 specifies `#DCEAF7 → #004589`; `#DCEAF7` is 1.19:1 on white | Medium |
| **4** | **No format rule for landscape / screen-first editions.** §14 defines A4 portrait only. The Statistics Edition is A5 landscape and therefore had no grid to follow | Medium |

Two further points, stated fairly:

- `#9AA3AD` ("previous year") reads as grey on a chroma test. **This is deliberate and correct** — the Standard's grammar is that only the current period is saturated. Not a fault.
- Adverse red `#C94C4C` against improved green `#4E7A12` separates by only ΔE 6.9 under deuteranopia. That is legal **because** §11 already mandates symbol + word + colour. The Standard's own rule rescues it — which is the point of having the rule.

---

## What to do, in order

| | Action | Effort |
| :-- | :-- | :-- |
| **1** | **Adopt the CSS tokens** so the HTML pipeline is governed by the Standard | Low — the file exists |
| **2** | **Self-host the Tahoma (or Verdana) font file** in the build so nothing substitutes silently | Low — and it closes the Standard's own open QC item |
| **3** | Apply §7 change lines: arrow + colour + **word**, on every KPI card | Low |
| **4** | Replace `#9CC83A`/`#004880` with `#A7CF36`/`#004589`; stop using lime as text | Low |
| **5** | Body type to 10 pt Regular; adopt the 8-step scale; let content fill ~85% of the page | Low |
| **6** | Adopt the v1.1 changes — Energy colour, categorical palette, map ramp, landscape grid | Low |
| **7** | Fix the diverging chart; draw the 100 reference line; replace the donut (§6 bans it) | Medium |
| **8** | Escape HTML entities; collapse to one navy; re-crop the cover; match divider photos to chapters | Medium |

Items 1–6 are configuration, not redesign. The specimen implements all of them.

## What to keep

One indicator per page · the page template · chapter dividers with their own contents list · table styling · direct value labels and no gridlines · note-and-source on every page · the acronyms page. These are good, and the Statistics Edition got them right.
