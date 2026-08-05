import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the production home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Stronger Restaurants/);
  assert.match(html, /Molina Hospitality Group/);
  assert.match(html, /Schedule a Consultation/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("renders core company routes", async () => {
  for (const path of ["/about", "/services", "/our-approach", "/contact", "/privacy-policy", "/terms"]) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render`);
  }
});

test("renders a detailed service route with expected architecture", async () => {
  const response = await render("/services/restaurant-operations-consulting");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Restaurant Operations Consulting/);
  assert.match(html, /Common challenges/i);
  assert.match(html, /Expected outcomes/i);
  assert.match(html, /Related services/i);
  assert.match(html, /Frequently asked questions/i);
  assert.match(html, /FAQPage/);
  assert.match(html, /\"@type\":\"Service\"/);
  assert.match(html, /BreadcrumbList/);
});

test("renders audience, regional, and insight authority pages", async () => {
  const paths = [
    "/who-we-help/independent-restaurants",
    "/locations/texas",
    "/insights/improve-restaurant-operations",
  ];
  for (const path of paths) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render`);
    const html = await response.text();
    assert.match(html, /FAQPage/);
    assert.match(html, /BreadcrumbList/);
  }
});

test("publishes machine-readable site guidance", async () => {
  const response = await render("/llms.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/plain\b/i);
  const content = await response.text();
  assert.match(content, /Molina Hospitality Group/);
  assert.match(content, /## Services/);
  assert.match(content, /## Operating insights/);
});

test("every canonical sitemap URL renders with core SEO signals", async () => {
  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  const xml = await sitemapResponse.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  assert.ok(urls.length >= 35, "sitemap should contain the complete topical architecture");
  for (const path of urls) {
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render`);
    const html = await response.text();
    assert.match(html, /<h1\b/i, `${path} should have one primary heading`);
    assert.match(html, /<title>[^<]+<\/title>/i, `${path} should have a title`);
    assert.match(html, /<meta[^>]+name="description"/i, `${path} should have a description`);
    assert.match(html, /<link[^>]+rel="canonical"/i, `${path} should have a canonical URL`);
  }
});
