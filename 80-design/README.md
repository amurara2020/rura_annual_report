# Design

Work on the **look** of the FY2025/26 Annual Report. Content is in `../10-assessment/`.

| File | What it is |
| :-- | :-- |
| `00_design_review.md` | Review of the Statistics Edition against the Visual Design Standard, plus a review of the Standard itself |
| `VISUAL_DESIGN_STANDARD_v1.1_proposed_changes.md` | Six changes and two additions to the Standard, each with the test that produced it |
| `specimen/rura-report.css` | The Standard expressed as CSS tokens, so the HTML → Chrome → PDF pipeline is governed by it |
| `specimen/specimen.html` | Five pages of the Statistics Edition rebuilt to the Standard |
| `specimen/specimen.pdf` | Those pages rendered through the real Chrome pipeline. **Not committed** — `.gitignore` excludes PDFs, and the repository is public while this report is unpublished. Rebuild it with the command below |

## The finding

**The Standard is good; the Statistics Edition was not built to it.** Thirteen departures are listed in the review — most of them things the Standard already prohibits, in several cases in a section written specifically to prohibit them.

The reason is structural, not careless: **every delivery mechanism in the Standard is a Word mechanism** — named styles, caption fields, `Ctrl+A, F9`, widths in inches. The Statistics Edition is built in HTML, where none of those exist, so values get typed per component. The result is six near-identical pale blues and three different navies in one document.

`specimen/rura-report.css` is the missing delivery mechanism.

## Rebuilding the specimen

```bash
cd specimen
/opt/pw-browsers/chromium-1194/chrome-linux/chrome \
  --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=specimen.pdf specimen.html
```

Same engine that produced the Statistics Edition (`Skia/PDF`), so what renders here renders there.

**Note on fonts:** the Standard specifies Tahoma, and this container does not have it — the same gap the Standard's own QC records (*"rendered with DejaVu Sans because Tahoma is not installed on the build machine"*), and the reason the Statistics Edition reached for Rubik and Source Sans. The specimen therefore renders in a fallback. Change 6c proposes committing the font file to the build so this cannot happen silently.

## How the colour work was done

Colour separation is computed, not judged by eye: Euclidean distance in OKLab ×100, under normal vision and under deuteranopia and protanopia simulated with Machado-Oliveira-Fernandes (2009) at severity 1.0. Contrast is WCAG 2.1.

Every figure quoted in these documents was produced by running the check. All thirteen contrast ratios published in Standard v1.0 were recomputed and are **correct to two decimal places** — a point in its favour worth recording.
