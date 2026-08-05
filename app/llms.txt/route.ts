import { services, site } from "../lib/site";
import { audiences, insights, locations } from "../lib/seo";

export async function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    "> Molina Hospitality Group is a boutique restaurant operations consulting firm serving independent operators, restaurant groups, franchisees, hospitality investors, and growth-stage restaurants in Texas and the Gulf Coast.",
    "",
    "MHG is an operator-first consulting firm. It does not provide marketing, advertising, web design, SEO, software, AI, CRM, or technology consulting services.",
    "",
    "## Core pages",
    `- [Home](${site.url}/): Company positioning and core operating priorities`,
    `- [About](${site.url}/about): Mission, values, and consulting philosophy`,
    `- [Services](${site.url}/services): Complete restaurant consulting service catalog`,
    `- [Our Approach](${site.url}/our-approach): Assessment through long-term sustainability`,
    `- [Who We Help](${site.url}/who-we-help): Ownership and operating situations`,
    `- [Service Areas](${site.url}/locations): Texas and Gulf Coast consulting coverage`,
    `- [Insights](${site.url}/insights): Practical restaurant operating guidance`,
    "",
    "## Services",
    ...services.map((service) => `- [${service.name}](${site.url}/services/${service.slug}): ${service.summary}`),
    "",
    "## Who we help",
    ...audiences.map((audience) => `- [${audience.name}](${site.url}/who-we-help/${audience.slug}): ${audience.description}`),
    "",
    "## Service areas",
    ...locations.map((location) => `- [${location.name}](${site.url}/locations/${location.slug}): ${location.description}`),
    "",
    "## Operating insights",
    ...insights.map((insight) => `- [${insight.title}](${site.url}/insights/${insight.slug}): ${insight.description}`),
    "",
    "## Source and claim policy",
    "MHG does not publish invented client names, testimonials, financial improvements, awards, certifications, years of experience, or performance statistics. Expected outcomes are described as operating objectives, not guarantees.",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
