"use client";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, BarChart3, Flame, LandPlot, Map, Menu, Trees, X } from "lucide-react";

const nav = [["About","about"],["Focus","focus"],["Work","work"],["Skills","skills"],["Background","background"],["Vision","vision"],["Contact","contact"]];
const focusAreas = [
  {n:"01",title:"Urban green space",text:"Green-space creation, loss, regulation, and deregulation as measurable urban interventions.",icon:Trees},
  {n:"02",title:"Policy evaluation",text:"Evidence on how environmental and land-use policy shapes markets, migration, and communities.",icon:LandPlot},
  {n:"03",title:"Spatial evidence",text:"Causal and spatial methods that reveal local effects, spillovers, and regional heterogeneity.",icon:Map},
];
const studies = [
  {index:"Study I · Published",title:"When planned parks meet private land",subtitle:"Urban Park Sunset Rule & Land Value",text:"Evaluating how the Urban Park Sunset Rule affects land values through the case of Yongin, Gyeonggi Province.",method:"Land-use policy · Land markets",icon:LandPlot,tone:"mint",citation:"Habitat International, 132 (2023), 102746"},
  {index:"Study II · Publication",title:"Reading recovery through property markets",subtitle:"Urban Forest Fire & Property Value",text:"Estimating local and broader property-value impacts of the 2013 Pohang forest fire and subsequent recovery.",method:"Regression discontinuity · Urban resilience",icon:Flame,tone:"coral",citation:"International Journal of Disaster Risk Reduction"},
  {index:"Study III · Under review",title:"Who moves when a boundary changes?",subtitle:"Greenbelt Deregulation & Population Change",text:"Examining effects on migration, population density, and demographic structure across South Korean municipalities.",method:"Spatial econometrics · Panel data",icon:BarChart3,tone:"blue",citation:"Manuscript submitted to Land Use Policy"},
];
const methodGroups = [
  ["Causal inference","Difference-in-Differences","Regression Discontinuity Design","Panel Data Models"],
  ["Spatial analysis","Spatial Durbin Model","Spatial Spillover Analysis","GIS-Based Spatial Analysis"],
  ["Research practice","Policy Impact Evaluation","Statistical Diagnostics","Data Visualization"],
  ["Tools & communication","Stata","R","GIS","Academic & Policy Writing"],
];

export default function Home() {
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>20);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <main>
    <a className="skip-link" href="#content">Skip to content</a>
    <header className={`site-header ${scrolled?"is-scrolled":""}`}>
      <a className="wordmark" href="#top" aria-label="Haeryung Kim, home">HK<span>.</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([label,id])=><a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open?"Close menu":"Open menu"}>{open?<X aria-hidden="true"/>:<Menu aria-hidden="true"/>}</button>
      <nav id="mobile-nav" className={`mobile-nav ${open?"open":""}`} aria-label="Mobile navigation">{nav.map(([label,id],i)=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}><span>0{i+1}</span>{label}</a>)}</nav>
    </header>
    <div id="content">
      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true"><span/></div>
        <p className="eyebrow">Urban & Environmental Policy Researcher · Seoul</p>
        <h1>Evidence for<br/>greener, more<br/><em>resilient cities.</em></h1>
        <div className="hero-bottom"><p>I study how green-space and land-use policies reshape urban markets, migration, demographic structure, and long-term sustainability.</p><a className="circle-link" href="#work" aria-label="View selected work"><ArrowDownRight aria-hidden="true"/></a></div>
        <div className="hero-meta" aria-label="Professional status"><span>Ph.D. Candidate</span><span>Quantitative Research</span><span>Spatial Policy Analysis</span></div>
      </section>
      <section className="section about" id="about">
        <div className="section-label"><span>01</span> About</div>
        <div className="about-copy"><p className="lead">I translate complex spatial change into evidence that can support better urban and environmental decisions.</p><div className="about-grid"><p>My research asks a practical question: what happens to people and places when environmental and spatial policies change?</p><p>Using causal inference, spatial econometrics, and GIS, I examine effects on land and housing markets, residential location, demographic structure, and urban resilience.</p></div></div>
      </section>
      <section className="section focus" id="focus">
        <div className="section-label light"><span>02</span> Focus areas</div>
        <div className="focus-heading"><p>Research lens</p><h2>Policy. Place.<br/>People.</h2></div>
        <div className="focus-grid">{focusAreas.map(({n,title,text,icon:Icon})=><article key={n} className="focus-card"><div><span>{n}</span><Icon aria-hidden="true"/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="section work" id="work">
        <div className="section-label"><span>03</span> Selected work</div>
        <div className="work-intro"><h2>Three studies.<br/>One connected question.</h2><p>My doctoral dissertation frames urban green spaces as socioeconomic infrastructure—linking environmental change with measurable urban outcomes.</p></div>
        <div className="study-list">{studies.map(({index,title,subtitle,text,method,icon:Icon,tone,citation})=><article className="study" key={index}><div className={`study-visual ${tone}`}><div className="map-lines" aria-hidden="true"/><Icon aria-hidden="true"/><span>{index.split(" · ")[0]}</span></div><div className="study-copy"><p className="study-index">{index}</p><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p><div className="study-foot"><span>{method}</span><span>{citation}</span></div></div></article>)}</div>
      </section>
      <section className="section skills" id="skills">
        <div className="section-label light"><span>04</span> Skills</div>
        <div className="skills-title"><p>Research toolkit</p><h2>Methods built for<br/>real-world complexity.</h2></div>
        <div className="method-list">{methodGroups.map((group,i)=><details key={group[0]} open={i===0}><summary><span>0{i+1}</span><strong>{group[0]}</strong><span className="plus" aria-hidden="true">+</span></summary><div>{group.slice(1).map(item=><span key={item}>{item}</span>)}</div></details>)}</div>
      </section>
      <section className="section background" id="background">
        <div className="section-label"><span>05</span> Experience & education</div>
        <div className="timeline">
          <article><p>Current</p><div><h3>Environmental & Land-Use Policy Review</h3><p>Policy-oriented review of urban development and environmental planning, including ecological resources, protected wildlife, mitigation, and habitat connectivity.</p></div></article>
          <article><p>Research</p><div><h3>Climate Adaptation & Disaster Policy</h3><p>Quantitative assessment of the socioeconomic consequences of environmental hazards and disaster-response policy.</p></div></article>
          <article><p>Education</p><div><h3>Seoul National University</h3><h4>Ph.D. Candidate · Interdisciplinary Program in Landscape Architecture</h4><p>Graduate School of Environmental Studies. Research focus: quantitative evaluation of urban and environmental policies and their socioeconomic impacts.</p></div></article>
        </div>
      </section>
      <section className="section vision" id="vision">
        <div className="vision-grid" aria-hidden="true"/><div className="section-label"><span>06</span> Career vision</div>
        <blockquote>“Urban green spaces are not amenities at the edge of policy. They are <em>socioeconomic infrastructure</em>.”</blockquote>
        <div className="vision-copy"><p>I aim to connect rigorous quantitative evidence with decisions in urban planning, environmental policy, climate adaptation, and public research.</p><div className="vision-tags"><span>Research institutes</span><span>Evidence-based planning</span><span>Independent research</span><span>Policy consulting</span></div></div>
      </section>
      <section className="section contact" id="contact">
        <div className="section-label"><span>07</span> Contact</div>
        <div className="contact-main"><p>Open to research conversations and evidence-led collaborations.</p><h2>Let’s connect.</h2><div className="contact-links"><span>Email <strong>[입력 필요]</strong></span><span>LinkedIn <strong>[입력 필요]</strong></span><span>Research profile <strong>[입력 필요]</strong></span></div></div>
        <footer><a href="#top">Haeryung Kim <ArrowUpRight aria-hidden="true"/></a><p>Urban & Environmental Policy Researcher · Seoul, Republic of Korea</p></footer>
      </section>
    </div>
  </main>
}
