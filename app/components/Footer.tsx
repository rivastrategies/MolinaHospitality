import Link from "next/link";
import { Logo } from "./Header";
import { services } from "../lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo inverse />
          <p>Practical operating leadership for stronger restaurants, stronger teams, and stronger results.</p>
          <Link className="text-link text-link-light" href="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
        </div>
        <div><p className="footer-label">Company</p><nav aria-label="Company links"><Link href="/about">About</Link><Link href="/who-we-help">Who We Help</Link><Link href="/our-approach">Our Approach</Link><Link href="/locations">Service Areas</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></nav></div>
        <div className="footer-services"><p className="footer-label">Services</p><nav aria-label="Service links">{services.slice(0, 6).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}<Link href="/services">View all services</Link></nav></div>
      </div>
      <div className="shell footer-bottom"><p>© {new Date().getFullYear()} Molina Hospitality Group. All rights reserved.</p><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms</Link></div></div>
    </footer>
  );
}
