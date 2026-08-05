import type { Metadata, Viewport } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { services, site } from "./lib/site";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1f2522" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Restaurant Operations Consulting`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: site.name, title: "Stronger Restaurants. Stronger Teams. Stronger Results.", description: site.description, url: "/", images: [{ url: "/og.jpg", width: 1200, height: 632, alt: "Molina Hospitality Group — Stronger Restaurants. Stronger Teams. Stronger Results." }] },
  twitter: { card: "summary_large_image", title: "Stronger Restaurants. Stronger Teams. Stronger Results.", description: site.description, images: ["/og.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, description: site.description, knowsAbout: ["Restaurant operations", "Multi-unit restaurant operations", "Restaurant leadership", "Restaurant profitability", "Restaurant turnarounds", "Restaurant openings"], hasOfferCatalog: { "@type": "OfferCatalog", name: "Restaurant Operations Consulting Services", itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.name, url: `${site.url}/services/${service.slug}` } })) } },
    { "@type": "ProfessionalService", "@id": `${site.url}/#service`, name: site.name, url: site.url, description: site.description, areaServed: [{ "@type": "State", name: "Texas" }, { "@type": "Place", name: "Gulf Coast" }], serviceType: ["Restaurant Operations Consulting", "Fractional COO Services", "Restaurant Leadership Development", "Restaurant Profitability Improvement"] },
    { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url, publisher: { "@id": `${site.url}/#organization` }, inLanguage: "en-US" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><Header /><main id="main-content">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></body></html>;
}
