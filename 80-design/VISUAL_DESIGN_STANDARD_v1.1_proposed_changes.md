# Visual Design Standard — Proposed Changes for v1.1

**Against:** `RURA_Annual_Report_Visual_Design_Standard_1.docx`, v1.0 DRAFT FOR REVIEW, Data Science and Analytics Division.

**Nothing in v1.0 is deleted.** Six changes and two additions, each with the test that produced it. The section numbering follows v1.0 so changes can be pasted in place.

**Method note.** Colour separation is measured as Euclidean distance in OKLab ×100 (ΔE), under normal vision and under deuteranopia and protanopia simulated with Machado-Oliveira-Fernandes (2009) at severity 1.0. Two thresholds: **ΔE ≥ 15 for normal vision** (below this, full-colour readers struggle) and **ΔE ≥ 8 for colour-vision deficiency**, relaxable to ≥ 6 only where a second encoding channel — a symbol, a word, a direct label — also carries the distinction. Contrast is WCAG 2.1 against white.

---

## Change 1 — Energy sector colour (§3, §5, §16) · **High priority**

**Current:** Energy `#B8860B`, Transport `#D87520`.

**Problem.** These two are effectively the same colour. §5 places sector colours side by side as "column header in cross-sector tables", so they meet on the page.

| Pair | Normal vision | Deuteranopia |
| :-- | :-- | :-- |
| **Energy `#B8860B` ↔ Transport `#D87520`** | **ΔE 6.9** | **ΔE 1.3** |

ΔE 1.3 means a reader with the most common form of colour blindness — roughly 6% of men — sees one colour, not two. ΔE 6.9 means readers with full colour vision also struggle.

This is a consequence of a *correct* decision. §2 moved Energy off `#E5A11A` because it clashed with Attention amber. That fixed a real problem and created this one, because the replacement was not tested against the other four sectors.

**Proposed:** **Energy = `#6B4A12`** (dark bronze).

| | Normal | Deuteranopia | Contrast on white |
| :-- | :-- | :-- | :-- |
| `#6B4A12` ↔ Transport `#D87520` | **ΔE 24.1** | **ΔE 19.2** | 8.04:1 — text-safe at any size |

It keeps the gold/bronze association for energy, it is nowhere near Attention amber `#E6A23C`, and unlike `#B8860B` ("large text only", 3.25:1) it is safe for body text at 8.04:1. Update §3, §5 and §16.

**Full pairwise matrix after the change** (normal vision / deuteranopia):

| | ICT | Energy | Water | Transport |
| :-- | :-- | :-- | :-- | :-- |
| **Energy** | 24.2 / 22.9 | — | | |
| **Water** | 11.0 / 10.9 | 25.0 / 21.8 | — | |
| **Transport** | 30.5 / 23.1 | 24.1 / 19.2 | 25.1 / 16.4 | — |
| **Nuclear** | 10.9 / 4.4 | 19.6 / 18.7 | 17.9 / 11.1 | 26.6 / 23.7 |

Two pairs remain under the normal-vision floor: **ICT ↔ Water** (11.0) and **ICT ↔ Nuclear** (10.9). Five sectors cannot all clear ΔE 15 pairwise while keeping hues that match their subjects — blue for ICT, teal for water, purple for nuclear are too close in hue space. **This is acceptable, but only under Change 2 below.**

## Change 2 — Sector colour is never the only cue (§5, §16) · **High priority**

**Add to §5:**

> Where two or more sector colours appear in the same view — a cross-sector table, a comparison chart, the sector strip — identity is carried by the **sector icon and the sector name**, with colour as reinforcement. Sector colour alone never distinguishes one sector from another.

v1.0 already supplies what this needs: the five sector icons in §5 (antenna, bolt, droplet, bus, trefoil). This makes their use mandatory in shared views rather than decorative, which is what licenses the two residual pairs above. It is the same logic §11 already applies to status.

## Change 3 — A categorical palette (new §3 subsection) · **High priority**

**Gap.** v1.0 defines colour for *time* (current / previous / older) and for *sector identity*. It defines nothing for data that is neither — mobile internet by technology, licences by category, offences by type, complaints by cause. §6 refers to "maximum 6 categories per colour set" but no such set exists.

The consequence is visible in the Statistics Edition, which reached for navy + green on p.57 to distinguish medical from non-medical inspections — spending the green that §3 reserves for "improvement".

**Proposed.** Six slots, assigned in fixed order, never cycled, never re-ordered per chart:

| Slot | Hex | |
| :-- | :-- | :-- |
| 1 | `#2A7FC4` | blue |
| 2 | `#DE6A14` | orange |
| 3 | `#009A8C` | teal |
| 4 | `#9063B8` | purple |
| 5 | `#5F9221` | green |
| 6 | `#C94F6D` | rose |

Validated as a categorical set: lightness band PASS, chroma floor PASS, contrast vs surface PASS (all ≥ 3:1), worst adjacent pair ΔE 7.1 deuteranopia — within the relaxed floor, which §6's existing "value labels on bars" rule already satisfies as the second channel.

**Rules to add:**
- A seventh category is never a new colour. Fold the remainder into "Other", or facet.
- For **scatter, bubble, choropleth and small-multiples**, where any two marks can sit side by side, use **slots 1, 5 and 6 only** — the trio that clears all-pairs separation. More than three series in those forms means fewer series or facets, not more colours.
- Categorical colour is for *identity*. Where swapping the order would change the meaning — speed tiers, age bands, dose bands — use the sequential ramp instead, so the order is visible in the colour.

## Change 4 — Map ramp light end (§9) · **Medium priority**

**Current:** "4 sequential blue classes (`#DCEAF7` → `#004589`)".

**Problem.** `#DCEAF7` is **1.22:1 against white**. The lightest class is invisible — and §9 also requires a light grey for "no data", so the two lowest states on a choropleth are indistinguishable from each other and from the page.

**Proposed ramp**, validated as ordinal (monotone lightness, adjacent ΔL ≥ 0.06, light end ≥ 2:1):

| Class | Hex | On white |
| :-- | :-- | :-- |
| 1 (lowest) | `#8FB6DB` | 2.13:1 |
| 2 | `#5F97C8` | 3.11:1 |
| 3 | `#2A7FC4` | 4.26:1 |
| 4 | `#1B5A8F` | 7.23:1 |
| 5 (highest) | `#0C3A60` | 11.73:1 |
| No data | `#E8EAED` | — with a hatch, per §9 "shown, not hidden" |

Five classes rather than four; drop to four by omitting class 2 if preferred. `#DCEAF7` keeps its §3 role as a *fill* for Regulatory Insight boxes and total rows, where nothing sits on it.

## Change 5 — Formats: add landscape (§14) · **Medium priority**

**Gap.** §14 defines one format: A4 portrait, 25.4 mm margins, 159 mm text width. The Statistics Edition is **A5 landscape** and therefore had no grid in the Standard to follow.

**Proposed — §14 defines two formats, both governed by the same tokens:**

| | **Format A — Main report** | **Format B — Statistics edition** |
| :-- | :-- | :-- |
| Page | A4 portrait, 210 × 297 mm | A5 landscape, 210 × 148 mm |
| Margins | 25.4 mm | 13 mm sides, 10 mm top, 12 mm foot |
| Columns | single, 159 mm | two zones: primary 58%, secondary 42%, 8 mm gutter |
| Content per page | narrative plus figures | **one indicator** |
| Body type | 10 / 14.4 pt | 9 / 13 pt |
| Vertical fill | a chapter may end mid-page | **content fills ≥ 80% of page height** |

The one-indicator-per-page architecture of the Statistics Edition is good and should be written into the Standard as Format B, not left undefined.

**Add the vertical-fill rule.** §14's "never fill a page for the sake of it" is right for narrative, and was read as licence for a **59% median fill across 83 pages**, with 31 pages stopping before halfway. In Format B each page carries exactly one indicator, so a short page means the components are too small, not that there is nothing to say.

## Change 6 — Type scale and font delivery (§4) · **Medium priority**

**6a — Publish the scale as a closed list.** §4 gives sizes per element, which is correct, but does not say that the list is exhaustive. The Statistics Edition used **42 distinct sizes between 5.1 pt and 34 pt**, including sixteen between 6.3 and 7.9 pt — text auto-shrunk to fit boxes.

> **Add to §4:** These are the only type sizes used in the report. Text is never scaled to fit a container; the container is resized, or the text is cut. Minimum size anywhere, including axis labels and source lines, is **7 pt**.

**6b — Never synthesise a weight.** The Statistics Edition embeds `SourceSans3ExtraLight-Bold` and `RubikLight-Bold` — bold generated from hairline masters, which renders muddy at small sizes.

> **Add to §4:** Only real weights of the chosen family are used. A bold is the family's bold, never a Light or ExtraLight master with synthetic emboldening applied.

**6c — Self-host the font.** §4's own CHECK records: *"Charts in the designed draft were rendered with DejaVu Sans because Tahoma is not installed on the build machine."* The same gap sent the Statistics Edition to Rubik and Source Sans, and left `LiberationSans` in the PDF from a failed substitution.

> **Add to §4:** The font file is committed to the build alongside the templates and referenced directly (`@font-face` for HTML, embedded for Word). A missing font is a build failure, not a silent substitution. Verdana is the metric-compatible fallback.

This closes the only ▲ Attention item in §18 that is still open.

## Addition A — Machine-readable tokens (new §19) · **High priority**

**Why.** Every delivery mechanism in v1.0 is a Word mechanism: named styles, caption fields, `Ctrl+A, F9`, widths in inches. §1 says *"Contributors apply styles; they do not format by hand."* In the HTML → Chrome → PDF pipeline there are no Word styles, so values get typed per component — which is why the Statistics Edition carries **six near-identical pale blues and three different navies**.

**Proposed:** the Standard ships a token file as a normative artifact, alongside the Word template.

`80-design/specimen/rura-report.css` implements §3, §4, §7, §8, §11, §12 and §14 as CSS custom properties. `specimen/specimen.pdf` is five pages of the Statistics Edition rebuilt through the real Chrome pipeline using it.

> **Add to §19:** Colour, type size, spacing and page geometry are defined once in the token file. No component declares a literal colour or size. A value that does not exist as a token is added to the token file, never inlined.

## Addition B — Pre-publication colour check (§18) · **Medium priority**

§18 checks contrast. Add the three checks that would have caught the faults above:

| Check | Threshold |
| :-- | :-- |
| Every text colour vs its background | ≥ 4.5:1 body, ≥ 3:1 large |
| Every pair of colours that can appear in one view | ΔE ≥ 15 normal, ≥ 8 CVD — or ≥ 6 with a second channel |
| Every colour used | present in the token file |

A reviewer running these on v1.0 would have found the Energy/Transport collision before it reached a table header.

---

## Summary

| | Change | Section | Priority |
| :-- | :-- | :-- | :-- |
| 1 | Energy `#B8860B` → `#6B4A12` | §3, §5, §16 | High |
| 2 | Sector colour never the only cue | §5, §16 | High |
| 3 | Categorical palette, six slots | §3 (new) | High |
| 4 | Map ramp light end raised | §9 | Medium |
| 5 | Add Format B (landscape) + vertical-fill rule | §14 | Medium |
| 6 | Closed type scale; real weights; self-hosted font | §4 | Medium |
| A | Machine-readable tokens | §19 (new) | High |
| B | Pre-publication colour check | §18 | Medium |

Everything else in v1.0 stands. The principles (§1), the critical review (§2), the chart-selection table (§6), the KPI card rules (§7), the table rules (§8), the callout types (§10), the status system (§11), number formatting (§12) and the page-type library (§15) need no change.
