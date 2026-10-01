# Art-direction prompt for an image generator (ChatGPT / DALL·E / Midjourney)

**What this is for:** generating *visual concepts* for the Annual Report — cover, title page, chapter openers, indicator pages. Art direction, not production artwork.

**What it is not for:** anything containing real figures. Image generators garble text and invent numbers. Treat every output as a **mood and layout study**; the real pages are built in `specimen/` where the data is accurate.

A faster alternative, if the aim is a usable page rather than a mood study: ask ChatGPT for **HTML + CSS at the stated page size** instead of an image. The text stays accurate and the result can be rendered through the same Chrome → PDF pipeline.

---

## Block A — the style brief (paste first, once)

> You are art-directing the **Annual Report 2025/26 of the Rwanda Utilities Regulatory Authority (RURA)**, the regulator of Rwanda's ICT, energy, water and sanitation, transport, and nuclear safety sectors. It is a government statistical report: authoritative, calm, data-led. Think national statistics office or central bank annual report — not a startup brochure.
>
> **Formats.** Two: A4 portrait (210 × 297 mm) for the main report, and A5 landscape (210 × 148 mm) for the statistics edition. I will say which each time.
>
> **Colour — use these exact values and nothing else:**
> - RURA Blue `#004589` — primary; headings, chart data, header rows
> - Navy `#17365D` — deep field colour, chapter openers
> - Lime `#A7CF36` — accent rules and markers only, **never text** (it fails contrast)
> - Slate `#5B6573` — captions, secondary text
> - Light blue `#DCEAF7`, light grey `#F2F4F6` — panel fills
> - Sector colours, used for identity only, never inside a chart: ICT `#1976B9`, Energy `#6B4A12`, Water `#1597A5`, Transport `#D87520`, Nuclear `#6F5A9E`
>
> **Typography.** One humanist sans serif throughout (Tahoma or Verdana character). Two weights only. **Sentence case for all headings — never ALL CAPS.** Hierarchy comes from size, weight and colour, never from a second typeface. Generous white space. Numerals are tabular and set large.
>
> **The signature device — "the sector spectrum".** A horizontal rule divided into five short segments, one per regulated sector, each in its sector colour above. On any given page the segment for that sector is at full strength and slightly longer; the other four sit back at about a third opacity. It appears under every title, on the cover, on chapter openers and in the footer. It is the report's recurring motif.
>
> **Titles state the finding, not the topic.** "Mobile penetration passed 100 subscriptions per 100 inhabitants", not "Mobile penetration trend". Beneath the title sits a smaller grey deck line giving the neutral description.
>
> **Never include any of these** — they are the generic template look I am deliberately moving away from:
> - a circular badge or medallion holding a section number
> - an angled, slanted or parallelogram-shaped title banner
> - ALL-CAPS headings
> - pie or donut charts, 3D charts, drop shadows, glows, gradients
> - stock photography of generic business people, handshakes or glass towers
> - rainbow or multi-hue palettes; any colour outside the list above
> - decorative swooshes, hexagon grids or circuit-board motifs
>
> Reply "ready" and I will give you the pages one at a time.

---

## Block B — the page prompts (paste one at a time)

### 1 · Cover

> Design the **cover**, A5 landscape. Full-bleed RURA Blue field. Upper left: the organisation name in small letterspaced capitals in pale blue; beneath it the title **"The regulated sectors in numbers"** in large bold white sentence case over two lines, and under that "Annual Report 2025/26" in a light weight in pale blue. Below the title, the sector spectrum rule at about half the page width, all five segments equal. Beneath it, small pale text: "1 July 2025 – 30 June 2026".
>
> Along the bottom third, five statistics in a row, each a large white number with a short grey-blue caption under a thin rule: 100.6 / 2,008,342 / 472,418 / 94,081 / 126. **The cover is made of the organisation's own figures — this is the whole idea.** A narrow white band across the very bottom holds a logo at the left and a small tagline at the right. No photography.

### 2 · Title page (inside)

> Design the **title page**, A4 portrait. Almost entirely white. The title in large navy sentence case in the upper third, left-aligned on a wide margin; beneath it the subtitle and reporting period in slate. The sector spectrum rule sits below, short, at the left margin. Near the foot, small slate text for the publisher, address and date. Extremely spare — this page is about air and confidence, and should feel like a well-set book, not a brochure.

### 3 · Contents

> Design the **contents page**, A5 landscape. Two columns. Each entry is a chapter number in a light weight, followed by a chapter title in navy sentence case, followed by a dotted leader and a page number in tabular figures. Each chapter number is tinted in its sector colour. A full-width sector spectrum rule sits beneath the heading "Contents". Lots of white space, generous leading. No boxes, no fills, no icons.

### 4 · Chapter opener

> Design a **chapter opener**, A5 landscape, for "Chapter 02 — ICT, Broadcasting and Postal Services". Full-bleed deep navy `#17365D`. On the right, the numeral **02** set enormous and bleeding off the right edge, in ICT blue `#1976B9` at about a third opacity — a quiet ghost behind the text, not a graphic element in front of it.
>
> On the left: a small letterspaced capital kicker in ICT blue reading "CHAPTER 02 · OF SEVEN"; below it the chapter title in large bold white sentence case over two lines; below that a short white summary sentence at about 60% opacity; then the sector spectrum rule with the first segment at full strength; then a two-column list of the sections in the chapter, each numbered in ICT blue. **No photograph.**

### 5 · Indicator page (the core page of the report)

> Design a **single-indicator page**, A5 landscape — the page type that repeats throughout the statistics edition.
>
> Top left: the section number "2.2" in the margin, large but in a light weight and tinted. To its right: a small letterspaced capital kicker in sector colour reading the sector name; beneath it the **finding as the title** — "Mobile penetration passed 100 subscriptions per 100 inhabitants" — in bold navy sentence case over up to two lines; beneath that a smaller grey deck line of neutral description. Then the sector spectrum rule, full width, active segment first.
>
> The body is two zones. Left (wider): a clean line chart, six points rising across six years, thick blue line, circular markers, value labels directly on the points, a dashed grey horizontal reference line with a small label, no gridlines, no chart border, no legend. Right (narrower): a small data table with a solid navy header row, alternating pale grey rows, right-aligned tabular figures, and a change column in green and red.
>
> At the foot, a hairline rule above small slate note and source text, with a large navy page number at the right.

### 6 · Key-figures page

> Design a **"The year at a glance"** page, A5 landscape. A grid of eight equal statistic cards, four across and two down, **all on the same pale grey fill** — do not alternate dark and light cards.
>
> Each card has a narrow navy rule down its left edge, a large navy number, a short slate label, and a change line beneath consisting of a small triangular arrow, a percentage, and a word. Green with an up arrow and the word "improved" for good changes; **red with an up arrow and the word "worsened" for bad increases** — colour and word carry the judgement, the arrow only carries direction. Beneath the grid, a wide pale panel explaining how to read the cards. Hairline footer with note, source and page number.

---

## Usage notes

1. **Paste Block A first**, wait for acknowledgement, then send page prompts one at a time. Image models handle one composition per prompt far better than six.
2. **Ask for variations** of a page you like — "same layout, three alternative treatments of the title area" — rather than regenerating from scratch.
3. **Ignore every number and word in the output.** They will be wrong. Judge composition, scale, colour balance and white space only.
4. **Nothing generated this way is publishable.** Once a direction is chosen, it is rebuilt in `specimen/` so the figures are correct, the contrast is verified and the colour tokens are enforced.
5. If the generator keeps producing badges and slanted banners, add: *"No medallions, no circular number badges, no slanted or angled banners of any kind. Titles sit directly on the white page."*
