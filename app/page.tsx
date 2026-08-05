import Link from "next/link";
import { ArrowLink, CTA, Eyebrow, SectionHeader } from "./components/Shared";
import { Testimonials } from "./components/Testimonials";
import { coreServiceSlugs, serviceMap } from "./lib/site";
import { audiences, insights } from "./lib/seo";

const problems = [
  { n: "01", title: "The owner is still the operating system", text: "Every decision, escalation, and standard depends on one person being present." },
  { n: "02", title: "Managers manage shifts—not the business", text: "Leaders stay busy, but costs, people, and priorities lack clear ownership." },
  { n: "03", title: "Performance changes by location or leader", text: "The concept is sound, but daily execution is not yet repeatable." },
  { n: "04", title: "Growth is exposing the gaps", text: "New locations and new leaders are outpacing the systems beneath them." },
];
const process = [
  { n: "01", title: "See the operation clearly", text: "Assess performance on the floor, in the numbers, and through the leadership team." },
  { n: "02", title: "Focus the work", text: "Set a small number of practical priorities with clear ownership and measures." },
  { n: "03", title: "Build it into the week", text: "Implement operating rhythms, coaching, and follow-through alongside your leaders." },
  { n: "04", title: "Make the gains durable", text: "Transfer capability so the organization performs without constant outside support." },
];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-pattern" aria-hidden="true"></div>
      <div className="shell home-hero-grid">
        <div className="hero-copy"><Eyebrow light>Restaurant operations consulting</Eyebrow><h1>Stronger Restaurants.<br />Stronger Teams.<br /><em>Stronger Results.</em></h1><p>Molina Hospitality Group works alongside restaurant ownership to improve execution, profitability, and leadership through practical operating systems built for the real work.</p><div className="hero-actions"><Link className="button button-light" href="/contact">Schedule a Consultation <span aria-hidden="true">→</span></Link><Link className="hero-secondary" href="/services">Explore our services</Link></div></div>
        <aside className="hero-aside" aria-label="Our operating focus"><p className="aside-label">Operators first</p><blockquote>“A stronger restaurant is built through what leaders inspect, reinforce, and repeat every day.”</blockquote><div className="aside-rule"></div><p>Operations · Leadership · Profitability · Accountability</p></aside>
      </div>
      <div className="shell hero-foot"><span>Independent Restaurants</span><span>Multi-Unit Groups</span><span>Hospitality Ownership</span><span>Growth & Turnaround</span></div>
    </section>

    <section className="section audience-section"><div className="shell split-layout"><div><SectionHeader eyebrow="Who we help" title="Built for owners who expect the operation to perform." /><p className="large-copy">We work with hospitality leaders who need more than ideas. They need priorities, accountability, and an operating model their teams can execute consistently.</p><ArrowLink href="/who-we-help">Explore who we help</ArrowLink></div><div className="audience-list">{audiences.map((audience, index) => <div key={audience.slug}><span>{String(index + 1).padStart(2, "0")}</span><p><Link href={`/who-we-help/${audience.slug}`}>{audience.name}</Link></p></div>)}</div></div></section>

    <section className="section section-tint"><div className="shell"><SectionHeader eyebrow="Core services" title="Operating expertise where it matters most." intro="Focused advisory work that strengthens how restaurants are led, managed, and held accountable." /><div className="service-grid">{coreServiceSlugs.map((slug, index) => { const service = serviceMap[slug]; return <article className="service-card" key={slug}><span className="card-number">0{index + 1}</span><h3>{service.name}</h3><p>{service.summary}</p><ArrowLink href={`/services/${slug}`}>Explore service</ArrowLink></article>; })}</div><div className="section-link"><ArrowLink href="/services">View all consulting services</ArrowLink></div></div></section>

    <section className="section problems-section"><div className="shell"><div className="section-intro-row"><SectionHeader eyebrow="Common restaurant problems" title="Good concepts still struggle when execution depends on heroics." /><p>The problem is rarely a lack of effort. It is usually unclear ownership, inconsistent leadership, or systems that have not kept pace with the business.</p></div><div className="problem-list">{problems.map((problem) => <article key={problem.n}><span>{problem.n}</span><h3>{problem.title}</h3><p>{problem.text}</p></article>)}</div></div></section>

    <section className="section approach-preview"><div className="shell"><div className="section-intro-row"><SectionHeader eyebrow="How we work" title="From honest assessment to durable execution." /><ArrowLink href="/our-approach">Our consulting approach</ArrowLink></div><div className="process-track">{process.map((step) => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

    <section className="section why-section"><div className="shell why-grid"><div><Eyebrow>Why operators choose MHG</Eyebrow><h2>Advice shaped by the operating floor—not the boardroom alone.</h2></div><div className="why-points"><article><h3>Practical by design</h3><p>Recommendations account for real shifts, real staffing, and the real capacity of the team.</p></article><article><h3>Leadership-centered</h3><p>Systems only hold when leaders know what to do, why it matters, and how to reinforce it.</p></article><article><h3>Accountability without theater</h3><p>Clear measures, clear ownership, and honest conversations—without unnecessary complexity.</p></article><article><h3>Built to transfer</h3><p>The goal is a stronger internal operation, not permanent dependence on a consultant.</p></article></div></div></section>

    <section className="fractional-section"><div className="shell fractional-grid"><div><Eyebrow light>Fractional COO services</Eyebrow><h2>Executive operating leadership, sized for the business you have now.</h2><p>When ownership needs an experienced operating counterpart—but not yet another full-time executive—MHG can bring structure to priorities, leadership meetings, performance, and cross-functional execution.</p><Link className="button button-outline-light" href="/services/fractional-coo-services">Explore Fractional COO <span aria-hidden="true">→</span></Link></div><div className="fractional-list"><div><span>01</span><p>Turn strategy into weekly operating priorities.</p></div><div><span>02</span><p>Strengthen leadership-team follow-through.</p></div><div><span>03</span><p>Build scalable operating rhythms before growth adds complexity.</p></div></div></div></section>

    <section className="section results-section"><div className="shell"><SectionHeader eyebrow="Results we focus on" title="The outcomes a better-run restaurant should create." align="center" /><div className="results-grid"><div><strong>Margin</strong><span>Less preventable waste. Better operating decisions.</span></div><div><strong>Leadership</strong><span>Managers who own the business, not only the shift.</span></div><div><strong>Consistency</strong><span>Standards that hold across people and locations.</span></div><div><strong>Guest Experience</strong><span>Hospitality that is intentional and repeatable.</span></div><div><strong>Owner Freedom</strong><span>A business that does not require constant intervention.</span></div></div></div></section>
    <section className="section section-tint home-insights"><div className="shell"><div className="section-intro-row"><SectionHeader eyebrow="Operating insights" title="Practical guidance for consequential restaurant decisions." /><ArrowLink href="/insights">View all insights</ArrowLink></div><div className="insight-grid compact">{insights.slice(0, 3).map((insight) => <article key={insight.slug}><p className="card-kicker">{insight.category}</p><h2>{insight.title}</h2><p>{insight.description}</p><ArrowLink href={`/insights/${insight.slug}`}>Read the guide</ArrowLink></article>)}</div><div className="regional-callout"><div><p className="eyebrow"><span></span>Texas & Gulf Coast</p><h2>Restaurant operating support rooted in the markets MHG is built to serve.</h2></div><ArrowLink href="/locations">Explore service areas</ArrowLink></div></div></section>
    <Testimonials />
    <CTA />
  </>;
}
