type Testimonial = { quote: string; name: string; role: string };

export function Testimonials({ items = [] }: { items?: Testimonial[] }) {
  if (items.length === 0) return null;
  return <section className="section" aria-labelledby="testimonial-heading"><div className="shell"><h2 id="testimonial-heading">What operators say</h2><div>{items.map((item) => <figure key={`${item.name}-${item.quote}`}><blockquote>{item.quote}</blockquote><figcaption>{item.name}<span>{item.role}</span></figcaption></figure>)}</div></div></section>;
}
