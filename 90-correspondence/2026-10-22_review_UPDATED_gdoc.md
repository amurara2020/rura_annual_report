# Review — RURA_Annual_Report_FY2025-26_UPDATED (Google Doc)

**22 October 2026 · Data Analytics Team**
Reviewed: the Google Doc shared on 19 October, as it stood at 15:05 on 22 October.

> **I could not make these changes in the document itself.** The Google Drive
> connection available to me reads files and changes their *metadata* — title,
> folder, starred, locked. It cannot edit the body or the page setup of a Google
> Doc. Two ways forward are at the end of this note.

---

## 1. Margins — the one to fix first

The page is A4, 21.0 × 29.7 cm. The document is in two sections:

| Section | Covers | Top | Bottom | Left | **Right** |
|---|---|---|---|---|---|
| 1 | Cover and List of Acronyms | 2.54 | 2.54 | 2.54 | 2.54 cm |
| 2 | **Everything else** — from *FY 2025/26 in Numbers* to the end | 2.54 | 2.54 | 2.54 | **0.47 cm** |

Section 2 is 2,760 of the document's 2,956 paragraphs. **For virtually the whole
report, text and tables run to within five millimetres of the right-hand page
edge** while the left margin stays at 2.54 cm. That is why the pages look
lopsided, and it is the likeliest reason tables appear to overrun.

This is not new and it is not something the recent edits introduced — the same
section has carried a short right margin since the 8 October draft, where it was
**0.00 cm**. It was in the file I returned too, and I should have caught it then.

**Recommended:** set section 2 to match section 1 — 2.54 cm on all four sides.
If the report will be bound, use left 3.0 cm and right 2.0 cm, applied to both
sections so the text block stays the same width throughout.

---

## 2. Figure numbering is broken

64 figure captions, but the numbers do not run 1–64:

```
… 20, 21, 22, 22, 23 …        Figure 22 is used twice
… 34, 35, 38, 39 …            36 and 37 are skipped
… 45, 46, 47, 44, 45, 46, 48  44, 45 and 46 are each used twice, out of order
… 52, 53, 55, 56 …            54 is skipped
```

- **Used twice:** 22, 44, 45, 46
- **Never used:** 36, 37, 54

The five breaks are at *Complaints Received by Resolution Status* (second
Figure 22), *Schools and Health facilities connected by district* (jumps to 38),
*The Seven Most Recurring Transport Offences* (drops back to 44), *Medical Sector
Licensed Facilities* (48 after 46), and *Staff Gender and Age Distribution*
(55 after 53).

This happens when captions are typed by hand. In Word these were sequence fields
that renumber themselves; the conversion to Google Docs turned them into plain
text, so every later insertion has to be renumbered manually.

---

## 3. Two tables have lost their captions

The List of Tables has 44 entries. The body has 42, numbered 1–42. Missing:

- **Table 43: Transport licenses by category**
- **Table 44: Transport Licenses by Category, Five-Year Series, FY2022 to FY2026**

Either the two annex tables were removed and the list was not updated, or the
tables are still there without captions. Worth checking which.

---

## 4. Four new figure titles are garbled

The new electric-vehicle series in Transport repeats the word *Electric*:

| Now reads | Should read |
|---|---|
| Figure 44: **Electric Trend of Authorized Electric** Taxi Cabs, FY2021/2022 – FY2025/2026 | Trend of Authorised Electric Taxi Cabs, FY 2021/22 – FY 2025/26 |
| Figure 45: **Electric Trend of Authorized Electric** Rentals… | Trend of Authorised Electric Rentals… |
| Figure 46: **Electric Trend of Authorized Electric** Motorcycles… | Trend of Authorised Electric Motorcycles… |
| Figure 47: **Electric Trend of Authorized Electric** buses… | Trend of Authorised Electric Buses… |

Note also the lower-case *buses* in Figure 47, and that these four use
`FY2021/2022 – FY2025/2026` where the rest of the report uses `FY 2021/22`.

---

## 5. Placeholder captions never removed

Four lines still carry the row of dots that stands in for a number:

- `Figure ……. : Trends of valid licenses in energy`
- `Figure …….. : Storage Capacity for liquid petroleum fuels against the National targets`
- `Table ………presents the trends of valid licenses and authorizations…`
- `Table ………….. shows the trends in valid licenses, permits and certificates…`

The two figure lines sit immediately beside the real captions for the same
charts, so **those two titles print twice**. The two table lines are unfilled
cross-references in the body text.

---

## 6. Headings

- **A whole paragraph is styled as Heading 4** — *"As of June 2026, IHS Rwanda and
  TRES Infrastructure Ltd had constructed 13 towers, bringing the total…"*. It
  appears in the contents page as though it were a section.
- **One empty Heading 4** produces a blank line in the contents page.
- **`2.5.4. Market Performance`** has a full stop after the number; every other
  heading in the report has none.
- **13 headings carry a stray leading or trailing space** inside the text, among
  them *2.1.5.2 Complaints Handling*, *2.3.5.1.1 Operators*, *2.4.1 Sector
  Profile*, *2.4.3 Licensing*, and *2.3.5.2.1 Distribution of On-site Sanitation
  Systems* (space before the number).

---

## 7. Captions and their exhibits

Of 106 captions, **98 sit below their table or chart**, which is the convention
agreed. Five sit above it, and three have no exhibit beside them at all:

- **Figure 28** — *Trends of Valid Water and Sanitation Licenses* sits between two
  separate `Source:` lines, with no chart
- **Figure 44** — *The Seven Most Recurring Transport Offences*
- **Figure 49** — *Field Verification of Industrial Radiography and Nuclear-Gauge
  Licensees* (outstanding since the earlier drafts)

---

## 8. Consistency has drifted back

| | In the file I returned | Now |
|---|---|---|
| Fiscal-year formats | 1 | **12** |
| Currency forms | 1 (FRW) | **2** — FRW 27, RWF 4 |

The new forms are `FY2025/26`, `FY2021/2022`, `FY2025/2026`, `FY 2025/2026`,
`FY 2026/2027`, `FY2024/25`. They have come in with the newly added text.

---

## 9. Still outstanding from earlier reviews

- **Energy has no *2.2.5 Compliance Monitoring and Enforcement*** section. Every
  other sector has one.
- **Only 35 source lines against 106 exhibits.** Better than the 26 I last
  counted, but two thirds of the exhibits still state no source.
- **The electric motorcycle figures still disagree**: 30,276 appears three times,
  with 6,817 as the prior year in one place.

---

## 10. The three front lists no longer update themselves

In Word, the Table of Contents, List of Figures and List of Tables were fields
that rebuilt on F9. Converting to Google Docs turned them into **static text**.
The page numbers are already wrong — the contents page shows *List of Acronyms*
on page 6 and *Executive Summary* on page 2.

In Google Docs, only the Table of Contents can be made to update (Insert ›
Table of contents). There is no native List of Figures or List of Tables: those
two have to be maintained by hand, or the document has to go back to Word for
final production.

---

## 11. One open comment

> *"Proposed to be deleted because we have the logo on the cover page"*
> — on the line **RWANDA UTILITIES REGULATORY AUTHORITY**, opened 21 October.

Still unresolved.

---

## How I can apply these

**Either** download the Google Doc as `.docx` (File › Download › Microsoft Word)
and send it here. I will fix the margins, renumber the figures, repair the
titles, remove the placeholders, correct the headings and restore the single
fiscal-year and currency format — the same way as before, with the file checked
structurally afterwards — and return a `.docx` to upload back.

**Or** work from this list in Google Docs directly. Items 1, 4, 5 and 6 are quick
there; item 2 is the slow one, because every figure number after the first break
has to be retyped.

A caution either way: the production route matters. Word keeps figure numbers and
the three lists automatic; Google Docs cannot maintain a List of Figures or a
List of Tables at all. If the report is to be finished in Google Docs, those two
pages need an owner.
