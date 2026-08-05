import type { Metadata } from "next";
import { ConsultationForm } from "../components/ConsultationForm";
import { Eyebrow, PageHero } from "../components/Shared";

export const metadata: Metadata = { title: "Schedule a Consultation", description: "Start a confidential conversation with Molina Hospitality Group about your restaurant's operations, leadership, profitability, or growth.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <><PageHero eyebrow="Start a conversation" title="Schedule a Consultation" intro="Tell us what is happening in the business. We will begin with the operating reality, the pressure points, and the result you need to create." /><section className="section"><div className="shell contact-grid"><aside><Eyebrow>What to expect</Eyebrow><h2>A practical first conversation.</h2><p>We will discuss the current situation, the leadership and operating context, and what a useful next step could look like.</p><ol><li><span>01</span><div><strong>Share the challenge</strong><p>Give us enough context to understand the business and the immediate concern.</p></div></li><li><span>02</span><div><strong>Clarify the operating need</strong><p>We will help distinguish symptoms from the core issue.</p></div></li><li><span>03</span><div><strong>Define a sensible next step</strong><p>If there is a fit, we will outline a clear path forward.</p></div></li></ol><div className="privacy-callout"><strong>Confidential by default</strong><p>Your restaurant, team, and operating situation will be treated with discretion.</p></div></aside><ConsultationForm /></div></section></>;
}
