import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);
const siteUrl = "https://rivastrategies.github.io/MolinaHospitality";

async function readOutput(path = "/") {
  const relative = path === "/" ? "index.html" : `${path.replace(/^\//, "")}/index.html`;
  return readFile(new URL(relative, output), "utf8");
}

test("exports the production home page for GitHub Pages", async () => {
  const html = await readOutput();
  assert.match(html, /Stronger Restaurants/);
  assert.match(html, /Molina Hospitality Group/);
  assert.match(html, /Schedule a Consultation/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /href="\/MolinaHospitality\/about\//);
  assert.doesNotMatch(html, /jordanvsmith\.chatgpt\.site/i);
});

test("exports core company routes", async () => {
  for (const path of ["/about", "/services", "/our-approach", "/contact", "/privacy-policy", "/terms"]) {
    const html = await readOutput(path);
    assert.match(html, /<h1\b/i, `${path} should have a primary heading`);
  }
});

test("exports detailed service architecture", async () => {
  const html = await readOutput("/services/restaurant-operations-consulting");
  assert.match(html, /Restaurant Operations Consulting/);
  assert.match(html, /Common challenges/i);
  assert.match(html, /Expected outcomes/i);
  assert.match(html, /Frequently asked questions/i);
  assert.match(html, /FAQPage/);
  assert.match(html, /BreadcrumbList/);
});

test("exports audience, regional, and insight authority pages", async () => {
  for (const path of ["/who-we-help/independent-restaurants", "/locations/texas", "/insights/improve-restaurant-operations"]) {
    const html = await readOutput(path);
    assert.match(html, /FAQPage/);
    assert.match(html, /BreadcrumbList/);
  }
});

test("exports machine-readable site guidance", async () => {
  const [robots, llms] = await Promise.all([
    readFile(new URL("robots.txt", output), "utf8"),
    readFile(new URL("llms.txt", output), "utf8"),
  ]);
  assert.match(robots, new RegExp(`${siteUrl}/sitemap\\.xml`));
  assert.match(llms, /Molina Hospitality Group/);
  assert.match(llms, /## Services/);
  assert.doesNotMatch(llms, /jordanvsmith\.chatgpt\.site/i);
});

test("every sitemap URL has an exported page with core SEO signals", async () => {
  const xml = await readFile(new URL("sitemap.xml", output), "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));
  assert.ok(urls.length >= 35, "sitemap should contain the complete topical architecture");

  for (const url of urls) {
    assert.equal(url.origin + "/MolinaHospitality", siteUrl);
    const path = url.pathname.replace(/^\/MolinaHospitality/, "") || "/";
    const html = await readOutput(path);
    assert.match(html, /<h1\b/i, `${path} should have one primary heading`);
    assert.match(html, /<title>[^<]+<\/title>/i, `${path} should have a title`);
    assert.match(html, /<meta[^>]+name="description"/i, `${path} should have a description`);
    assert.match(html, new RegExp(`rel="canonical" href="${siteUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  }
});
