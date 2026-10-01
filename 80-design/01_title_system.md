# The Title System — making the report un-copyable

**Brief:** the Statistics Edition is the quality bar, but its design is a template other institutions have used. The report needs to be distinctive — *especially the titles*.

---

## What is actually generic in the current design

The title device is three parts:

1. a circular badge — navy ring, green dot, section number inside
2. a navy parallelogram with the title in **white ALL CAPS**
3. a green rule running from the banner to the right margin

That combination is a stock corporate-template signature. It is not RURA's; it arrives with the template, which is why another institution's report can look like yours.

**Two of its three parts also break your own Standard:**

| Statistics Edition | Visual Design Standard |
| :-- | :-- |
| Titles in ALL CAPS | §2 rejects all-caps headings — *"capitals are slower to read and hide acronyms"*; §16 lists "All caps" under **Avoid** |
| Titles name the topic — "MOBILE-CELLULAR PENETRATION TREND" | §1 principle 2: *"The title states the finding"* — and gives almost this exact example |

So the fix for distinctiveness and the fix for compliance are the same fix.

## The idea

**A template can supply a layout. It cannot supply your findings.**

"Mobile penetration passed 100 subscriptions per 100 inhabitants" can only come from RURA's data. Eighty-three pages of titles like that produce a document no other institution can resemble, because the words on every page are the output of RURA's own regulatory year. The distinctiveness is structural rather than decorative — it cannot be copied without copying the data.

This is also the cheapest possible uniqueness: it costs nothing to produce and nothing to print.

## The three changes

### 1. The title is the finding

| Was | Becomes |
| :-- | :-- |
| MOBILE-CELLULAR PENETRATION TREND | Mobile penetration passed 100 subscriptions per 100 inhabitants |
| GRID RELIABILITY | Reliability worsened on all three indicators as the customer base grew |
| RURA STAFF BY GENDER | Women remain 28.5% of staff, down 1.3 points on last year |
| LIQUID FUEL STORAGE SECURITY | Liquid fuel storage stands at 35% of the national target |

The neutral description does not disappear — it moves to a **deck line** beneath the title, which is where the Standard already puts it (§1: *"The neutral description goes in the caption"*).

This has an editorial consequence worth naming: **a page with nothing to say has nowhere to hide.** If a finding cannot be written, the page is a table without an argument, and belongs in the statistical annex. That is a useful filter for a report that currently runs to 83 pages.

### 2. Sentence case, and a real typographic hierarchy

Badge and banner are gone. The title block is now:

```
2.2   ICT, BROADCASTING AND POSTAL          ← kicker: sector, letterspaced caps
      Mobile penetration passed 100          ← the finding: sentence case, large
      subscriptions per 100 inhabitants
      Mobile-cellular subscriptions per …    ← deck: the neutral description
      ▬▬▬▬ ──── ──── ──── ────               ← the sector spectrum
```

The section number sits in the margin in a light weight rather than inside a badge. Hierarchy comes from size, weight and colour — which is what §4 asks for.

### 3. The sector spectrum — the signature device

Five segments, one per regulated sector, in the Standard §5 sector colours. **The sector you are in burns at full strength and extends; the other four sit back.**

It replaces the green rule on every title, divider, cover and footer.

Why this one rather than an invented motif:

- **It is unique to RURA by construction.** RURA regulates exactly these five sectors. No other institution has this rule, because no other institution has this mandate.
- **It does a job.** In an 83-page reference it tells you which sector you are in without reading a word — ornament that earns its place.
- **It finally gives the sector colours something to do.** §5 defines five sector colours; the Statistics Edition uses none of them.
- **It costs nothing** — five rectangles, no illustration, no licensing.

## What else changed, and why

| | |
| :-- | :-- |
| **Cover** | Typographic and data-led: the year's five headline numbers set as a field along the base. The cover is literally made of RURA's own figures, which is both distinctive and honest for a statistics edition. It also replaces five stock photographs whose rights are unconfirmed (CHK-22) |
| **Chapter dividers** | Navy field, sector colour as accent, the chapter numeral set very large and ghosted, bleeding off the right edge. **No photograph** — which sidesteps the image-rights question entirely and reads as deliberate rather than stock |
| **Footer** | Folio set large in navy; note and source stacked together. The running green rule is gone |

## What did not change

The token architecture, the colour system, the status rules, the chart grammar, the table style, number formatting, the two formats. **This is a title and cover system, not a new design system** — it loads as a fourth stylesheet on top of the existing three:

```
rura-tokens.css → rura-format-*.css → rura-components.css → rura-titles.css
```

Every colour in it comes from the Standard. Nothing is hard-coded.

## Honest caveats

- **The wordmark is placeholder text.** The real RURA logo should replace it on the cover and footer.
- **Still rendering in a fallback font** — Tahoma is absent from this build machine, the same gap §18 records. The title system will look meaningfully better in its intended face; the shapes and weights are doing less work than they should right now.
- **Writing 83 finding-titles is editorial work**, not a design task. It is the one part of this that cannot be automated, and it is where most of the gain is.
- **Dividers currently have no imagery.** If you want photography back, it should be commissioned or licensed RURA-owned work, cropped to the grid — not stock.
