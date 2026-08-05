import type { Metadata } from "next";
import { ArrowLink, CTA, PageHero } from "../components/Shared";
import { services } from "../lib/site";

export const metadata: Metadata = { title: "Restaurant Consulting Services", description: "Restaurant operations consulting, fractional COO leadership, turnarounds, openings, profitability, training, and multi-unit support.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <><PageHero eyebrow="Consulting services" title="Services" intro="Practical operating support for restaurants that need stronger execution, leadership, profitability, and consistency." /><section className="section"><div className="shell services-index"><div className="services-index-intro"><h2>Strengthen the operating business.</h2><p>Every engagement starts with the operating reality—not a predetermined package. Services can stand alone or work together as part of a broader advisory relationship.</p></div><div className="services-index-list">{services.map((service, index) => <article key={service.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><p className="card-kicker">{service.eyebrow}</p><h3>{service.name}</h3><p>{service.summary}</p></div><ArrowLink href={`/services/${service.slug}`}>View service</ArrowLink></article>)}</div></div></section><CTA title="Not sure where the work should begin?" text="A consultation can help clarify the operating issue, the right starting point, and whether MHG is the right fit." /></>;
}
