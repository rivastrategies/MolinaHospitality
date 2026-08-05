import type { Metadata } from "next";
import { ArrowLink, CTA, PageHero, SectionHeader } from "../components/Shared";
import { audiences } from "../lib/seo";

export const metadata: Metadata = { title: "Who We Help", description: "Restaurant operations consulting for independent owners, restaurant groups, hospitality investors, franchise operators, growth-stage restaurants, and turnarounds.", alternates: { canonical: "/who-we-help" } };

export default function WhoWeHelpPage() {
  return <><PageHero eyebrow="Who we help" title="Restaurant owners and operators at consequential moments." intro="MHG works with hospitality leaders who need stronger operations—not another layer of ideas disconnected from the floor." /><section className="section"><div className="shell"><SectionHeader eyebrow="Operating situations" title="Different ownership structures. The same need for disciplined execution." intro="Each page below explains the operating priorities, services, and questions most relevant to that situation." /><div className="audience-card-grid">{audiences.map((audience, index) => <article key={audience.slug}><span>{String(index + 1).padStart(2, "0")}</span><h2>{audience.name}</h2><p>{audience.description}</p><ArrowLink href={`/who-we-help/${audience.slug}`}>Explore this situation</ArrowLink></article>)}</div></div></section><CTA /></>;
}
