import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink, Breadcrumbs, CTA, Eyebrow, FAQSection, SectionHeader } from "../../components/Shared";
import { faqSchema } from "../../lib/seo";
import { serviceMap, services, site } from "../../lib/site";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = serviceMap[slug];
  if (!service) return {};
  return { title: service.name, description: service.summary, alternates: { canonical: `/services/${slug}` }, openGraph: { title: service.name, description: service.summary, url: `/services/${slug}` } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = serviceMap[slug]; if (!service) notFound();
  const related = service.related.map((relatedSlug) => serviceMap[relatedSlug]).filter(Boolean);
  const faqs = [
    { question: `What does ${service.name} include?`, answer: `The scope is built around the operating need and may include ${service.deliverables.join(", ").toLowerCase()}. Every engagement defines priorities, ownership, implementation support, and the measures used to review progress.` },
    { question: `Who is ${service.name} designed for?`, answer: `This work is most relevant for ${service.audience.join(", ").toLowerCase()}. Fit depends on the operating issue, leadership capacity, urgency, and the result ownership needs to create.` },
    { question: `How does a ${service.name} engagement begin?`, answer: "The work begins with a focused consultation followed by the operating context required to define scope. MHG then assesses the current reality, identifies the highest-value priorities, and proposes a practical engagement structure." },
    { question: "Does MHG only provide recommendations?", answer: "No. MHG is designed to work alongside ownership and restaurant leaders during implementation. The objective is observable operating change and stronger internal capability—not a report that sits on a shelf." },
    { question: "Are results guaranteed?", answer: "No responsible operating advisor can guarantee financial or performance outcomes. MHG defines expected operating outcomes, establishes accountability, and helps the team execute the work required to pursue them." },
  ];
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.summary, serviceType: service.name, url: `${site.url}/services/${service.slug}`, provider: { "@id": `${site.url}/#organization` }, areaServed: [{ "@type": "State", name: "Texas" }, { "@type": "Place", name: "Texas Gulf Coast" }], audience: service.audience.map((name) => ({ "@type": "Audience", audienceType: name })), hasOfferCatalog: { "@type": "OfferCatalog", name: `${service.name} workstreams`, itemListElement: service.deliverables.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) } };
  return <>
    <section className="service-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} /><div className="service-hero-grid"><div><Eyebrow light>{service.eyebrow}</Eyebrow><h1>{service.name}</h1><p>{service.summary}</p><Link className="button button-light" href="/contact">Schedule a Consultation <span aria-hidden="true">→</span></Link></div><aside><span>Operating principle</span><blockquote>Clear standards. Capable leaders. Consistent follow-through.</blockquote></aside></div></div></section>
    <section className="section"><div className="shell service-overview"><div><Eyebrow>Overview</Eyebrow><h2>Build the capability behind the result.</h2></div><p>{service.overview}</p></div></section>
    <section className="section section-tint"><div className="shell service-two-col"><SectionHeader eyebrow="Common challenges" title="When this work becomes necessary." /><div className="check-list">{service.challenges.map((item) => <div key={item}><span aria-hidden="true">✓</span><p>{item}</p></div>)}</div></div></section>
    <section className="section"><div className="shell"><SectionHeader eyebrow="Our process" title="Practical work, built around the operation." intro="The exact scope follows the business need, but the work moves through four disciplined stages." /><div className="process-grid">{service.process.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>
    <section className="section deliverables-section"><div className="shell deliverables-grid"><div><SectionHeader eyebrow="What the work includes" title="Useful tools. Clear ownership. Active implementation." /><p>Deliverables are designed to be used by leaders during the work—not filed away after it.</p></div><ol>{service.deliverables.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div></section>
    <section className="section engagement-section"><div className="shell"><SectionHeader eyebrow="Engagement structure" title="Scoped to the operating need—not a generic package." intro="The right format depends on urgency, leadership capacity, number of locations, and how much implementation support the team requires." /><div className="engagement-grid"><article><span>01</span><h3>Focused assessment</h3><p>Establish the facts, identify operating causes, and deliver a prioritized action roadmap with clear ownership.</p></article><article><span>02</span><h3>Implementation engagement</h3><p>Work alongside leaders to install standards, operating rhythms, tools, and accountability over a defined period.</p></article><article><span>03</span><h3>Ongoing advisory</h3><p>Provide executive operating guidance, leadership coaching, and structured follow-through as the organization changes.</p></article></div></div></section>
    <section className="section"><div className="shell outcome-grid"><div><SectionHeader eyebrow="Expected outcomes" title="What stronger execution should make possible." /><div className="outcome-list">{service.outcomes.map((item) => <p key={item}>{item}</p>)}</div></div><aside><p className="card-kicker">Who this service is for</p><h3>Operators ready to address the cause—not manage another symptom.</h3><ul>{service.audience.map((item) => <li key={item}>{item}</li>)}</ul></aside></div></section>
    <section className="section related-section"><div className="shell"><SectionHeader eyebrow="Related services" title="Continue strengthening the operation." /><div className="related-grid">{related.map((item) => <article key={item.slug}><p className="card-kicker">{item.eyebrow}</p><h3>{item.name}</h3><p>{item.summary}</p><ArrowLink href={`/services/${item.slug}`}>Explore service</ArrowLink></article>)}</div></div></section>
    <FAQSection items={faqs} title={`Questions about ${service.name}.`} />
    <CTA />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
  </>;
}
