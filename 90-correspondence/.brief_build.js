const d = require('docx');
const {Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
       ShadingType, AlignmentType, BorderStyle, HeadingLevel, Header, Footer, PageNumber} = d;
const fs = require('fs');

const BLUE='004589', NAVY='17365D', LIME='A7CF36', SLATE='5B6573', INK='1E2630';
const LGREY='F2F4F6', LBLUE='DCEAF7';
const FONT='Arial', W=9746;

function runs(md, o={}){
  const base={font:FONT, size:o.size||20, color:o.color||INK};
  const out=[]; const re=/(\*\*[^*]+\*\*|\*[^*]+\*)/g; let last=0,m;
  while((m=re.exec(md))!==null){
    if(m.index>last) out.push(new TextRun({...base, text:md.slice(last,m.index), bold:o.bold}));
    const t=m[0];
    if(t.startsWith('**')) out.push(new TextRun({...base, text:t.slice(2,-2), bold:true}));
    else out.push(new TextRun({...base, text:t.slice(1,-1), italics:true, bold:o.bold}));
    last=re.lastIndex;
  }
  if(last<md.length) out.push(new TextRun({...base, text:md.slice(last), bold:o.bold}));
  return out.length?out:[new TextRun({...base, text:md, bold:o.bold})];
}
const P=(md,o={})=>new Paragraph({children:runs(md,o), alignment:o.align,
  spacing:{before:o.before??0, after:o.after??160, line:o.line??260}});
const H=(t)=>new Paragraph({children:[new TextRun({text:t, font:FONT, size:24, bold:true, color:NAVY})],
  spacing:{before:300, after:140}, keepNext:true,
  border:{bottom:{style:BorderStyle.SINGLE, size:6, color:LIME, space:4}}});
const BUL=(md)=>new Paragraph({children:runs(md), bullet:{level:0}, spacing:{after:90, line:260}});

function cell(md,{w,fill,header,align,size}={}){
  return new TableCell({ width:{size:w,type:WidthType.DXA},
    shading: fill?{type:ShadingType.CLEAR, fill, color:'auto'}:undefined,
    margins:{top:70,bottom:70,left:110,right:110},
    children:[new Paragraph({children:runs(md,{size:size||18, color:header?'FFFFFF':INK, bold:header}),
      alignment:align, spacing:{before:0,after:0,line:240}})]});
}
function table(cols, head, rows){
  return new Table({ columnWidths:cols, width:{size:cols.reduce((a,b)=>a+b,0), type:WidthType.DXA},
    rows:[ new TableRow({tableHeader:true, children:head.map((h,i)=>cell(h,{w:cols[i],fill:BLUE,header:true}))}),
      ...rows.map((r,ri)=>new TableRow({children:r.map((c,i)=>cell(c,{w:cols[i], fill: ri%2?LGREY:undefined}))})) ],
    borders:{ top:{style:BorderStyle.SINGLE,size:2,color:'C9D1D9'}, bottom:{style:BorderStyle.SINGLE,size:2,color:'C9D1D9'},
      left:{style:BorderStyle.SINGLE,size:2,color:'C9D1D9'}, right:{style:BorderStyle.SINGLE,size:2,color:'C9D1D9'},
      insideHorizontal:{style:BorderStyle.SINGLE,size:2,color:'DDE2E7'}, insideVertical:{style:BorderStyle.SINGLE,size:2,color:'DDE2E7'} }});
}
const note=(md)=>new Paragraph({children:runs(md,{size:18}),
  shading:{type:ShadingType.CLEAR, fill:LBLUE, color:'auto'},
  spacing:{before:120, after:180, line:250},
  border:{top:{style:BorderStyle.SINGLE,size:2,color:LBLUE}, bottom:{style:BorderStyle.SINGLE,size:2,color:LBLUE},
    left:{style:BorderStyle.SINGLE,size:18,color:BLUE}, right:{style:BorderStyle.SINGLE,size:2,color:LBLUE}},
  indent:{left:130, right:130}});

const doc = new Document({
  creator:'Rwanda Utilities Regulatory Authority', title:'Rwanda Telecommunications Market Brief',
  description:'Updated market brief, FY 2025/26 position',
  styles:{default:{ document:{run:{font:FONT,size:20,color:INK}, paragraph:{spacing:{line:260}}},
    heading1:{run:{font:FONT,size:36,bold:true,color:NAVY}, paragraph:{spacing:{before:0,after:120},keepNext:true}} }},
  sections:[{
    properties:{page:{size:{width:11906,height:16838}, margin:{top:1080,bottom:1000,left:1080,right:1080}}},
    headers:{default:new Header({children:[new Paragraph({
      children:[new TextRun({text:'Rwanda Utilities Regulatory Authority', font:FONT, size:15, color:SLATE})],
      alignment:AlignmentType.RIGHT})]})},
    footers:{default:new Footer({children:[new Paragraph({
      children:[new TextRun({text:'Rwanda Telecommunications Market Brief · November 2026 · page ', font:FONT,size:15,color:SLATE}),
        new TextRun({children:[PageNumber.CURRENT], font:FONT,size:15,color:SLATE}),
        new TextRun({text:' of ', font:FONT,size:15,color:SLATE}),
        new TextRun({children:[PageNumber.TOTAL_PAGES], font:FONT,size:15,color:SLATE})],
      alignment:AlignmentType.RIGHT})]})},
    children:[
      new Paragraph({heading:HeadingLevel.HEADING_1,
        children:[new TextRun({text:'Rwanda Telecommunications Market Brief', font:FONT, size:36, bold:true, color:NAVY})],
        spacing:{after:60}}),
      P('Position as at 30 June 2026  ·  Issued by the Rwanda Utilities Regulatory Authority  ·  November 2026',
        {size:18, color:SLATE, after:200}),
      note('All sector figures in this brief are drawn from RURA’s published reporting unless otherwise stated. Figures from other institutions are attributed to their source. Network coverage figures are **provisional**, taken from the ICT Sector Statistics Report for Q3 2026, which is in preparation.'),

      H('Country overview'),
      P('Rwanda has positioned information and communication technology at the centre of its long-term development strategy. Vision 2050 and the National Strategy for Transformation place sustained emphasis on digital infrastructure, digital public services, financial inclusion and knowledge-based growth.'),
      P('RURA’s penetration indicators for FY 2025/26 are calculated on a population base of approximately **14.4 million**. Macroeconomic and demographic statistics are published by the National Institute of Statistics of Rwanda and the Ministry of Finance and Economic Planning, and are not reproduced here.'),

      H('Telecommunications market'),
      P('Mobile services are provided by two licensed mobile network operators, **MTN Rwandacell Plc** and **Airtel Rwanda Ltd**. **KT Rwanda Networks (KTRN)** operates as a 4G wholesaler, and fixed and internet services are provided by a wider set of licensed operators including Liquid Telecom, Canal+ Telecom, BSC and Starlink.'),
      P('As at 30 June 2026, mobile-cellular subscriptions stood at **14,501,766**, an increase of **9.1%** over the year. Mobile penetration passed one subscription per inhabitant for the first time, rising from 95.12 to **100.58 subscriptions per 100 inhabitants**.', {after:140}),
      table([4300,2700,2746], ['Indicator, 30 June 2026','Value','Change on June 2025'], [
        ['Mobile-cellular subscriptions','14,501,766','▲ 9.1%'],
        ['Mobile subscriptions per 100 inhabitants','100.58','▲ from 95.12'],
        ['MTN Rwandacell Plc market share','65.8%','▲ from 64.0%'],
        ['Airtel Rwanda Ltd market share','34.2%','▼ from 36.0%'],
      ]),
      P('', {after:60}),
      P('The market structure remains a duopoly in mobile services, with MTN’s share increasing over the year. **No additional mobile network operator licence has been issued or announced, and no associated spectrum package has been published.** The market development currently under way is Mobile Number Portability, described under the regulatory framework below.'),

      H('Connectivity and digital adoption'),
      P('Network coverage is extensive. Averaged across the reporting operators, **population coverage stands at 96.53% for 3G and 98.69% for 4G**. 5G services commenced during the year; no 5G subscription data is yet reported, and RURA’s mobile internet technology series covers 4G, 3G and EDGE only.', {after:140}),
      table([4300,2700,2746], ['Indicator, 30 June 2026','Value','Change on June 2025'], [
        ['3G population coverage (provisional)','96.53%','—'],
        ['4G population coverage (provisional)','98.69%','—'],
        ['Internet subscriptions','11,193,584','▲ 9.8%'],
        ['Internet subscriptions per 100 inhabitants','77.6','▲ from 72.9'],
        ['4G subscriptions','6.31 million','▲ 22.8%'],
        ['4G share of mobile internet','56.8%','▲ from 50.9%'],
        ['Fixed broadband subscriptions','84,152','▼ declined'],
        ['SIM cards linked to mobile money','8,908,398','▲ 15.8%'],
      ]),
      P('', {after:60}),
      P('**4G is now the majority mobile internet technology**, at 56.8% of subscriptions against 50.9% a year earlier, and mobile money reached **61.8 linked SIM cards per 100 inhabitants**, up from 55.0.'),
      note('**A note on how adoption is measured.** RURA reports **active subscriptions**, not unique individuals: a person holding a phone SIM, a router SIM and a tablet SIM is counted three times. On that basis there were 77.6 internet subscriptions per 100 inhabitants at June 2026. Estimates of *unique* mobile internet users, such as those published by GSMA, are modelled on a different basis and are materially lower. The two measures are not comparable and neither converts into the other. RURA does not publish a unique-user figure.'),
      P('**Fixed broadband remains marginal and declined over the year**, standing at 84,152 subscriptions, or 0.584 per 100 inhabitants, following the removal of inactive users from operator records. Fibre-to-the-home or premises accounts for 81.70% of fixed broadband connections, terrestrial fixed wireless for 13.55% and satellite for 4.76%.'),

      H('Digital infrastructure'),
      P('International connectivity expanded substantially during the year. Equipped international bandwidth rose **58.7%** to **1,197.4 Gbps**, and bandwidth in use rose **33.0%** to **379.9 Gbps**, reflecting both heavier use and deliberate investment in resilience and redundancy.'),
      P('Domestically, the sector has moved from network build-out to optimisation of an established base. **1,779 towers** were in place at June 2026, of which 13 were constructed during the year, and authorizations for new tower installations fell from 169 to 13. Valid licences and authorizations across the ICT sector declined 11%, from 1,684 to 1,499. A regulation on telecommunication infrastructure sharing, made in January 2026, supports shared use of sites, fibre and ducts in place of duplicated build.'),

      H('Electricity and infrastructure environment'),
      P('Rwanda’s electrification programme continues to expand. **Household electricity access stood at 84.6% as at July 2025 (source: Rwanda Energy Group).**'),
      P('On RURA’s own reporting, grid connections reached **2,008,342** at June 2026, an increase of **13.5%** over the year. Installed generation capacity rose 1.4% to 472.95 MW against a 13.1% increase in peak demand, to 296.85 MW — a margin the Authority monitors closely.'),

      H('Spectrum and regulatory framework'),
      P('RURA is responsible for licensing, the management of spectrum and numbering resources, quality-of-service monitoring, inspection and compliance, consumer protection and competition in the ICT sector.'),
      P('Two regulations were made during FY 2025/26:', {after:100}),
      BUL('**Regulation No. 20/R/ICT/RURA/2026 of 27 January 2026** governing telecommunication infrastructure sharing and service provision, establishing a framework for the sharing of sites, fibre and duct infrastructure.'),
      BUL('**Regulation No. 21/R/ICT/RURA/2026 of 12 August 2026** governing mobile and fixed network quality of service, defining quality-of-service requirements and the basis for performance monitoring.'),
      P('**Mobile Number Portability** is the principal market development in preparation. During the year the Authority completed preparatory works, inspected operator service centres at six locations — Nyabugogo, CHIC, UTC, Remera, Giporoso and Kicukiro — and found them ready to provide the service, and delivered a public awareness campaign. Implementation falls in FY 2026/27. MNP will allow subscribers to change operator while retaining their number, and is expected to strengthen competition between the two mobile operators.', {before:120}),

      H('Market characteristics'),
      BUL('A stable political and regulatory environment, with a clear government commitment to ICT-led development.'),
      BUL('Extensive mobile network coverage, with 4G now reaching a greater share of the population than 3G.'),
      BUL('Mobile penetration above one subscription per inhabitant, and 4G the majority mobile internet technology.'),
      BUL('High mobile money adoption, at 61.8 linked SIM cards per 100 inhabitants.'),
      BUL('A persistent gap between mobile and fixed connectivity: fixed broadband remains below 0.6 subscriptions per 100 inhabitants and declined over the year.'),
      BUL('A consolidated infrastructure base, with investment shifting from new build to capacity, quality and infrastructure sharing.'),
      BUL('A two-operator mobile market in which Mobile Number Portability, not new entry, is the competition measure in preparation.'),

      H('Summary'),
      P('Rwanda is a small, digitally progressive telecommunications market with extensive network coverage, strong government commitment to ICT development and rapidly growing international connectivity. Mobile penetration passed one subscription per inhabitant during FY 2025/26 and 4G became the majority mobile internet technology, while fixed broadband remains marginal and contracted over the year. The market operates with two mobile network operators, and the competition measure now in preparation is Mobile Number Portability rather than the entry of a further operator.'),

      H('Sources'),
      P('**RURA Annual Report FY 2025/26** — sector performance, licensing, infrastructure, regulatory instruments and energy indicators.', {after:80, size:18}),
      P('**RURA ICT Sector Statistics Report, Q2 2026** (1 April – 30 June 2026) — subscriptions, penetration, market share, internet subscriptions and international bandwidth.', {after:80, size:18}),
      P('**RURA ICT Sector Statistics Report, Q4 2025** — fixed broadband trend.', {after:80, size:18}),
      P('**RURA ICT Sector Statistics Report, Q3 2026 (in preparation)** — network population coverage. These figures are provisional pending publication.', {after:80, size:18}),
      P('**Rwanda Energy Group** — household electricity access, July 2025.', {after:80, size:18}),
      P('Population, density and macroeconomic indicators are published by the **National Institute of Statistics of Rwanda** and the **Ministry of Finance and Economic Planning**. Estimates of unique mobile internet users are published by **GSMA**.', {size:18}),
    ]
  }]
});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync(process.argv[2],b); console.log('written', b.length,'bytes');});
