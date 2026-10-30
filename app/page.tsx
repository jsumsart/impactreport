"use client";

import { useMemo, useState } from "react";

const investments = [
  { label: "Health equity research", value: 1500000, group: "Research Excellence", color: "#69c8eb" },
  { label: "Racial trauma research", value: 509000, group: "Research Excellence", color: "#69c8eb" },
  { label: "Prevention & driver education", value: 493000, group: "Research Excellence", color: "#69c8eb" },
  { label: "Margaret Walker Center sustainability", value: 450000, group: "Campus Culture + Brand", color: "#b7d99b" },
  { label: "Archive preservation & access", value: 317039, group: "Campus Culture + Brand", color: "#b7d99b" },
  { label: "Pre-law pipeline", value: 300000, group: "Student Success", color: "#de8fb1" },
  { label: "Historic space improvements", value: 170000, group: "Campus Culture + Brand", color: "#b7d99b" },
  { label: "HBCU opera & musical theatre", value: 145000, group: "Academic Prominence", color: "#c3a7e7" },
  { label: "Criminal justice endowed scholarship", value: 100000, group: "Student Success", color: "#de8fb1" },
  { label: "Creative writing intensive", value: 83206, group: "Academic Prominence", color: "#c3a7e7" },
  { label: "Patterson writing scholarships", value: 75000, group: "Student Success", color: "#de8fb1" },
];

const highlights = [
  { value: "41,000+", label: "students reached through prevention and public-safety outreach", tag: "Research Excellence" },
  { value: "250+", label: "participants welcomed to the College Language Association Convention", tag: "Academic Prominence" },
  { value: "30", label: "students represented JSU at the national dramatic and speech arts conference", tag: "Student Success" },
  { value: "100+", label: "years of JSU history showcased through the Getty Images collaboration", tag: "Campus Culture + Brand" },
  { value: "4", label: "consecutive Humanities Teachers of the Year honored across Art, Music and Theatre", tag: "Staff Excellence" },
];

const priorities = ["Student Success", "Academic Prominence", "Research Excellence", "Improvement of Campus Culture and Enhancement of JSU Brand", "Staff Excellence"];

const schools = [
  { name: "Communications", desc: "Writing, language, media, storytelling and public voice", stat: "250+", note: "national convention participants" },
  { name: "Fine & Performing Arts", desc: "Art, music, theatre, design and performance", stat: "7", note: "HBCUs in Shared Voices" },
  { name: "Social & Behavioral Sciences", desc: "Policy, justice, psychology, history and public service", stat: "41K+", note: "students reached statewide" },
];

const money = (value: number) => value >= 1000000 ? `$${(value / 1000000).toFixed(1)}M` : `$${Math.round(value / 1000)}K`;

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [activeSchool, setActiveSchool] = useState(0);
  const filtered = useMemo(() => filter === "All" ? investments : investments.filter((item) => item.group === filter), [filter]);
  const total = investments.reduce((sum, item) => sum + item.value, 0);
  const max = Math.max(...filtered.map((item) => item.value));

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="College of Liberal Arts home">
          <span className="jsu-mark">JSU</span>
          <span><b>Jackson State University</b><small>College of Liberal Arts</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#impact">Impact</a><a href="#investment">Investment</a><a href="#schools">Schools</a>
          <a className="report-link" href="#impact">Explore report <span>↓</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Fall 2023 — Spring 2026</p>
          <h1>The College<br />of <em>Culture.</em></h1>
          <p className="dek">A living portrait of scholarship, creativity, leadership and public purpose across Jackson State University’s College of Liberal Arts.</p>
          <a href="#impact" className="primary-button">Explore the impact <span>↓</span></a>
        </div>
        <div className="hero-visual" aria-label="Ayer Hall from the College of Liberal Arts impact report">
          <img src="/report-cover.jpg" alt="Ayer Hall on the Jackson State University campus" />
          <div className="hero-stat"><strong>${(total / 1000000).toFixed(1)}M+</strong><span>documented investment<br />across featured initiatives</span></div>
          <p className="vertical-type">IMPACT REPORT · 2023—2026</p>
        </div>
      </section>

      <section className="marquee" aria-label="Report themes"><div>STUDENT SUCCESS <i>✦</i> ACADEMIC PROMINENCE <i>✦</i> RESEARCH EXCELLENCE <i>✦</i> PUBLIC PURPOSE <i>✦</i></div></section>

      <section className="priorities" aria-labelledby="priorities-title">
        <p className="eyebrow" id="priorities-title">Aligned with JSU’s strategic plan</p>
        <div>{priorities.map((priority, index) => <article key={priority}><span>0{index + 1}</span><p>{priority}</p></article>)}</div>
      </section>

      <section className="impact-section" id="impact">
        <div className="section-heading"><div><p className="eyebrow">Impact at a glance</p><h2>Numbers tell part<br />of the story.</h2></div><p>Behind every figure is a student finding a pathway, a faculty member advancing knowledge, or a partnership serving Mississippi and beyond.</p></div>
        <div className="stat-grid">
          {highlights.map((item, index) => <article className={`stat-card card-${index + 1}`} key={item.value} tabIndex={0}><span className="card-tag">{item.tag}</span><strong>{item.value}</strong><p>{item.label}</p><span className="arrow">↗</span></article>)}
        </div>
      </section>

      <section className="investment-section" id="investment">
        <div className="section-heading light"><div><p className="eyebrow">Fueling what comes next</p><h2>Investment<br />with purpose.</h2></div><div className="total"><span>Featured funding</span><strong>${(total / 1000000).toFixed(1)}M+</strong><small>Based on investments quantified in the report</small></div></div>
        <div className="filter-row" role="group" aria-label="Filter investments by theme">
          {["All", "Student Success", "Academic Prominence", "Research Excellence", "Campus Culture + Brand"].map((name) => <button key={name} className={filter === name ? "active" : ""} onClick={() => setFilter(name)}>{name}</button>)}
        </div>
        <div className="bars" aria-live="polite">
          {filtered.map((item) => <div className="bar-row" key={item.label}><div className="bar-label"><span>{item.label}</span><b>{money(item.value)}</b></div><div className="bar-track"><div className="bar-fill" style={{ width: `${Math.max((item.value / max) * 100, 4)}%`, background: item.color }} /></div></div>)}
        </div>
        <p className="source-note">Featured figures are drawn directly from the 2023–2026 impact report and are not presented as a comprehensive audited total.</p>
      </section>

      <section className="feature-story">
        <div className="feature-image"><img src="/sonic-boom.jpg" alt="Sonic Boom of the South featured in the impact report" /></div>
        <div className="feature-copy"><p className="eyebrow">Creativity on the global stage</p><h2>Culture that<br /><em>moves.</em></h2><p>From Super Bowl LVIII to the Parade of Roses, the Sonic Boom of the South carries JSU’s identity into national arenas—grounding visibility in musical discipline, precision and tradition.</p><blockquote>“Every performance carries something larger than ourselves.”</blockquote></div>
      </section>

      <section className="schools-section" id="schools">
        <div className="section-heading"><div><p className="eyebrow">One college, many pathways</p><h2>Explore the<br />three schools.</h2></div><p>Choose a school to see how distinct disciplines contribute to a shared mission of cultural leadership and public impact.</p></div>
        <div className="school-browser">
          <div className="school-tabs" role="tablist">
            {schools.map((school, index) => <button key={school.name} role="tab" aria-selected={activeSchool === index} onClick={() => setActiveSchool(index)}><span>0{index + 1}</span>{school.name}<b>→</b></button>)}
          </div>
          <div className="school-panel" role="tabpanel">
            <p>{schools[activeSchool].desc}</p><strong>{schools[activeSchool].stat}</strong><span>{schools[activeSchool].note}</span>
            <div className="school-orbit"><span>JSU</span></div>
          </div>
        </div>
      </section>

      <footer><div><span className="jsu-mark">JSU</span><p>College of Liberal Arts<br />Jackson State University</p></div><p>1400 John R. Lynch Street<br />Jackson, Mississippi 39217</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
