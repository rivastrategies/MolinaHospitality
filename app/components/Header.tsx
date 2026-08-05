import Link from "next/link";
import { navItems, services } from "../lib/site";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`logo${inverse ? " logo-inverse" : ""}`} href="/" aria-label="Molina Hospitality Group home">
      <span className="logo-mark" aria-hidden="true">M</span>
      <span className="logo-type"><strong>Molina</strong><small>Hospitality Group</small></span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/about">About</Link>
          <details className="nav-dropdown">
            <summary>Services <span aria-hidden="true">⌄</span></summary>
            <div className="nav-panel">
              <Link className="nav-panel-intro" href="/services"><strong>All Services</strong><span>Explore our full operating advisory practice.</span></Link>
              <div className="nav-services">
                {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}
              </div>
            </div>
          </details>
          <Link href="/who-we-help">Who We Help</Link>
          <Link href="/our-approach">Our Approach</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="button button-small header-cta" href="/contact">Schedule a Consultation</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link className="button" href="/contact">Schedule a Consultation</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
