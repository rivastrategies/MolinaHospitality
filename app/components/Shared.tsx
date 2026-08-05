import Link from "next/link";
import { site } from "../lib/site";
import type { FAQ } from "../lib/seo";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " eyebrow-light" : ""}`}><span aria-hidden="true"></span>{children}</p>;
}

export function SectionHeader({ eyebrow, title, intro, align = "left" }: { eyebrow: string; title: string; intro?: string; align?: "left" | "center" }) {
  return <header className={`section-header section-header-${align}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{intro && <p>{intro}</p>}</header>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, ...(item.href ? { item: `${site.url}${item.href}` } : {}) })) };
  return <><nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, index) => <span key={item.label}>{index > 0 && <i aria-hidden="true">/</i>}{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: React.ReactNode }) {
  return <section className="page-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} /><div className="page-hero-copy"><Eyebrow light>{eyebrow}</Eyebrow><h1>{title}</h1><p>{intro}</p>{children}</div></div></section>;
}

export function CTA({ title = "Let’s strengthen the operation behind the restaurant.", text = "Start with a focused conversation about the business, the pressure points, and what better execution needs to look like." }: { title?: string; text?: string }) {
  return <section className="cta-section"><div className="shell cta-card"><div><Eyebrow light>Begin with clarity</Eyebrow><h2>{title}</h2><p>{text}</p></div><Link className="button button-light" href="/contact">Schedule a Consultation <span aria-hidden="true">→</span></Link></div></section>;
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="text-link" href={href}>{children}<span aria-hidden="true">→</span></Link>;
}

export function FAQSection({ items, title = "Questions restaurant leaders ask." }: { items: FAQ[]; title?: string }) {
  return <section className="section faq-section"><div className="shell faq-layout"><SectionHeader eyebrow="Frequently asked questions" title={title} /><div className="faq-list">{items.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}
