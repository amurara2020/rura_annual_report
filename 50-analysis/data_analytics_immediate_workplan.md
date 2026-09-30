# Data Analytics Team — What to Start Producing Immediately

Ordered so that **Stream A needs no input from any other department** and can begin today. Streams B and C begin as data arrives.

---

## Stream A — Start now, no dependencies

### A1. The five-year statistical annex (annex 9.2)
The foundation for every trend chart in the report. Build one workbook, one sheet per sector, one row per indicator, columns FY2021/22–FY2025/26 (or Jun-21–Jun-26 for ICT).

Already assembled in the draft and ready to extend:
- **ICT** — 9 indicators, Jun-21 to Jun-26 (international bandwidth starts Jun-23; Jun-21 and Jun-22 need sourcing)
- **Water** — production and subscriptions, 2020/21 to 2025/26, complete

Needs history from departments (request already drafted in `../40-requests/information_requests_to_departments.md`):
- **Energy** — 10 indicators, currently FY2024/25–FY2025/26 only (LPG imports from FY2022/23)
- **Transport** — no annex table exists yet
- **Nuclear** — no annex table exists yet

Publish as Excel alongside the report. Mark the energy table's source, which is currently flagged `SOURCE TO CONFIRM`.

### A2. Recompute every derived figure on one consistent basis
The draft's dagger convention flags editor-calculated values. Take ownership of it. For each of the ~40 daggered values: recompute, record the formula, and reconcile against the narrative. This alone resolves a substantial share of the 22 `CHECK` items.

Start with the six that contradict published narrative text: internet subscriptions (mobile vs mobile+fixed), fixed broadband change (−2.35% vs −2.21%), electricity customers (+13.5% vs +14%), LPG imports (+26.2% vs +26.1%), pay TV growth (+56.2% vs 15.6%/56.22%), nuclear revenue performance (33.5% vs 49.7%).

### A3. The indicator dictionary (annex 9.6)
One row per headline indicator: name, definition, formula, unit, reference period, disaggregation, source system, data owner, known limitations.

Write it as the team's own standard, then circulate for departmental sign-off. Prioritise the terms currently undefined and causing contradictions: **compliance rate**, **sector growth**, **performance rate**, **handled vs resolved**, **valid vs new licences**, **mobile vs total internet subscriptions**.

### A4. Standardise the ICT reference periods
Restate the mobile money, fixed broadband and market-share series on a June basis so every year-on-year change in the chapter is comparable. Document the convention in A3.

### A5. Licensing performance from CLMS (section 4.2)
Extract application receipt date, decision date and outcome for every application across all sectors. Compute: licences issued and renewed by sector, average and median processing time, and % processed within the service charter standard.

The draft notes that processing-time monitoring was introduced under strategic initiative 4, so the data should already be in CLMS. **This is the clearest regulatory-performance (not activity) indicator available at low cost**, and it measures RURA's own service delivery.

### A6. Redraw the three image-only charts once data arrives
The owned-fibre chart, Figure 3.12, and Figure 3.17 (petroleum imports) exist only as images with no underlying data. They cannot be corrected, recoloured or checked. Data requests are in `../40-requests/information_requests_to_departments.md`; redraw in the standard style on arrival.

---

## Stream B — Begins as soon as the M&E Framework is released

### B1. Chapter 2 scorecards
For all 9 strategic goals and all 17 initiatives: compute achievement % against the Year-4 target and apply the status rule (Achieved / On track ≥90% / Attention 75–89% / Not achieved <75% / Not assessed).

Flag for Planning: the 90/75 thresholds are an editorial proposal and need formal confirmation.

Produce: the goal scorecard with bullet charts (target vs actual), the 17-initiative status stacked bar, and the headline figure for tile 15 ("x of y Year-4 KPIs on track").

### B2. Annex 9.4 — the full KPI table
Baseline, Year-1 to Year-4 actuals, Year-4 target, achievement %, status per KPI.

### B3. Target markers on every sector KPI card
Each sector's "At a glance" card set currently shows value and change but no target. Add the Year-4 target from the Framework.

---

## Stream C — Begins as departmental data arrives

### C1. Transport AFC / e-ticketing analysis — the highest-payoff work on the list
Once the tap-in feed is secured, join to the existing GTFS primary-routes dataset and produce, in this order:

1. **Route-level demand vs scheduled capacity** (Priority 1) — passengers by route and stop, against trips operated
2. **Operator benchmarking** (Priority 1) — passengers, trips, fleet availability, vehicle utilisation (trips per vehicle-day), revenue per km, on-time performance, on identical measures
3. **Temporal demand profile** (Priority 2) — boardings by hour × weekday heatmap, peak-to-base ratio
4. **Load factor and fare/ticketing compliance** (Priority 2) — validated vs boarded, by route and operator

Set this up as a **standing feed, not a one-off extract** — it should serve quarterly monitoring, not just this report.

### C2. Cross-sector normalisation
Two indicators that only the Data Analytics Team can produce, because they require denominators the sector departments do not hold centrally:

- **Complaints per 10,000 customers** by sector — needs each sector's complaint count *and* its customer/subscriber base. Raw counts across sectors of very different size are not informative.
- **Offences per 1,000 licensed vehicles** (transport) — normalises the 1,689 offences against the licensed fleet, answering whether non-compliance is actually rising.

### C3. Compliance-rate definition and aggregation (section 4.4)
**Agree one cross-sector compliance-rate definition before the data is collected, not after.** Otherwise the Nuclear 23% and any future ICT or Energy figure will not be comparable. Propose the definition, circulate it with the data requests, then aggregate.

Then build the compliance funnel by sector: inspected → non-compliant → directive issued → remedied.

### C4. Geospatial analysis
Four maps, all using data RURA either holds or has requested:

| Map | Data state |
| :-- | :-- |
| LPG storage capacity by province | Available (Figure 3.15 exists) |
| Water expansion projects: population served by district | Available (Table 40) |
| Radiation inspection coverage, all five provinces | Needs the licensed-facility count per province as the denominator |
| UAF: population newly covered by the 109 new sites | Needs site-level locations + NISR population grid |

The radiation coverage map is the most analytically valuable: it turns "126 inspections" into "2 of 5 provinces covered", which is the honest framing and a stated regulatory gap.

### C5. Derived indicators the departments will not supply directly
- **International bandwidth utilisation** = used / equipped (28.9% in June 2026 — already computed, extend to a trend)
- **Production per water subscription** (226 → 196 m³/year — already computed, extend to a full 6-year series)
- **Reserve margin** = installed capacity − peak demand, as % of capacity
- **Consumption per electricity customer** (kWh) — needs sales by customer class
- **Mobile data affordability** — basket price as % of average monthly income (needs operator prices + NISR income)
- **Market concentration (HHI)** for mobile, by year
- **Storage days of cover** for liquid fuel

---

## Standing responsibilities for the team on this report

1. **Own the dagger convention.** Every calculated value in the report carries the dagger and its formula is recorded in the indicator dictionary. This convention would have prevented all 22 `CHECK` items; keep it as the house standard.
2. **Own the denominators.** Penetration rates, per-customer figures, per-10,000 complaint rates and coverage percentages all depend on population, customer base and licensee counts. Centralise them and publish them in the annex.
3. **Refuse image-only charts.** Every visual in the report needs an underlying data table. Three currently do not.
4. **One numeric style.** Decimal points (not commas), consistent thousands separators, stated rounding rules. The staff tables currently mix `71,5%` and decimal points; water production appears as both "92 million" and 92.79 million m³.
5. **Do not fill a gap with an estimate.** Where data does not arrive, the cell stays marked as requiring data. The report's credibility depends on this more than on its completeness.
