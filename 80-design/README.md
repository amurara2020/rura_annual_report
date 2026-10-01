# Design

Work on the **look** of the FY2025/26 Annual Report. Content is in `../10-assessment/`.

> **Decision, 1 October 2026:** the main report and the statistics edition are
> **one design system in two formats**, not two products that resemble each other.

| File | What it is |
| :-- | :-- |
| `00_design_review.md` | The Statistics Edition reviewed against the Visual Design Standard, and the Standard reviewed on its own terms |
| `01_title_system.md` | The distinctive title, cover and divider system — why the current one is generic and what replaces it |
| `02_image_generation_brief.md` | Copy-paste art-direction prompt for ChatGPT or another image generator, to explore visual concepts |
| `VISUAL_DESIGN_STANDARD_v1.1_proposed_changes.md` | Six changes and two additions, each with the test behind it |
| `specimen/` | The Standard as working code, in both formats |

## The finding

**The Standard is good; the Statistics Edition was not built to it.** Thirteen departures are listed in the review — most of them things the Standard already prohibits, in several cases in a section written specifically to prohibit them.

The cause is structural, not careless: **every delivery mechanism in the Standard is a Word mechanism** — named styles, caption fields, `Ctrl+A, F9`, widths in inches. The Statistics Edition is built in HTML, where none of those exist, so values get typed per component. The result is six near-identical pale blues and three different navies in one document.

`specimen/` is the missing delivery mechanism.

## How "one system, two formats" is enforced

Three layers. A format can change the page; it cannot change what a colour means or how large the body text is.

```
rura-tokens.css              ← LAYER 1  colour, status, chart grammar, reading sizes, spacing
  ↓                                     format-invariant; the only file with literal colour
rura-format-a4-portrait.css  ← LAYER 2  Format A: page, margins, columns, display sizes
rura-format-a5-landscape.css            Format B: ditto
  ↓
rura-components.css          ← LAYER 3  KPI card, table, callouts, status, charts, page furniture
                                        format-invariant; no literal colour, no page geometry
rura-titles.css              ← LAYER 4  title, cover and divider system (optional, additive)
```

Both specimens load layers 1 and 3 **unchanged** and differ only in layer 2.

| Shared | Format-specific |
| :-- | :-- |
| the whole palette · **body 10 / 14.4 pt, table 8.5, caption 8.5, source 7.5, 7 pt floor** · chart grammar and selection rules · KPI card · table · callouts · status system · number formatting | page size · margins · columns · display sizes (H1–H3, KPI value) · content per page · vertical fill rule |

**Reading sizes are shared, not scaled.** A smaller page does not get smaller body text — legibility does not change with paper size. Because those sizes live in layer 1, a format layer *cannot* shrink them. That is what makes 7.8 pt body structurally impossible rather than merely discouraged.

### Checks that keep the layering honest

| Check | Result |
| :-- | :-- |
| Literal colour outside the token layer | **0** in components and both format layers (65 in tokens — as intended) |
| Reading sizes declared in a format layer | **0** — all five live in tokens only |
| Page geometry declared in the token layer | **0** — lives in format layers only |
| Both specimens load the same token and component layers | yes |

Worth re-running after any edit; they are one `grep` each.

## Specimens

| | Format | Pages |
| :-- | :-- | :-- |
| `specimen-a-a4-portrait.html` / `.pdf` | **A** — main report, A4 portrait | cover · Energy sector opener · analytical page |
| `specimen-b-a5-landscape.html` / `.pdf` | **B** — statistics edition, A5 landscape | cover · chapter divider · at-a-glance · trend · reliability · diverging change |
| `specimen-c-distinctive.html` / `.pdf` | **B**, with the new title system | cover · divider · two indicator pages (compare pp. 19 and 45) |

Format B's pages 3–6 are direct rebuilds of pp. 7, 19, 45 and 72 of the Statistics Edition, so they can be compared side by side.

The Energy sector opener uses the proposed `#6B4A12` (Change 1), so the fix can be judged in place rather than as a swatch.

### Rebuilding

```bash
cd specimen
for f in specimen-a-a4-portrait specimen-b-a5-landscape; do
  /opt/pw-browsers/chromium-1194/chrome-linux/chrome \
    --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
    --print-to-pdf=$f.pdf $f.html
done
```

Same engine that produced the Statistics Edition (`Skia/PDF`), so what renders here renders there.

**Fonts:** the Standard specifies Tahoma and this container does not have it — the same gap the Standard's own QC records (*"rendered with DejaVu Sans because Tahoma is not installed on the build machine"*), and the reason the Statistics Edition reached for Rubik and Source Sans. The specimens therefore render in a fallback. Change 6c proposes committing the font file to the build so this cannot happen silently.

**PDFs are not committed** — `.gitignore` excludes them, and the repository is public while the report is unpublished. Rebuild with the command above.

## How the colour work was done

Colour separation is computed, not judged by eye: Euclidean distance in OKLab ×100, under normal vision and under deuteranopia and protanopia simulated with Machado-Oliveira-Fernandes (2009) at severity 1.0. Contrast is WCAG 2.1.

Every figure quoted in these documents was produced by running the check. All thirteen contrast ratios published in Standard v1.0 were recomputed and are **correct to two decimal places** — a point in its favour worth recording.
