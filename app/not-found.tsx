import Link from "next/link";
export default function NotFound() { return <section className="not-found"><div className="shell"><p className="eyebrow"><span></span>Page not found</p><h1>This page is off the floor.</h1><p>The page may have moved, or the address may be incorrect.</p><Link className="button" href="/">Return home</Link></div></section>; }
