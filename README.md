# Molina Hospitality Group

Production website for Molina Hospitality Group, a boutique hospitality consulting firm serving restaurant owners, operators, and leadership teams across Texas and the Gulf Coast. The site is statically generated and automatically published with GitHub Pages.

## Website scope

- Detailed service pages for restaurant operations, fractional COO leadership, turnarounds, openings, profitability, labor, menu engineering, guest experience, assessments, and training
- Audience-specific pages for independent restaurants, multi-unit groups, emerging concepts, investors, and hospitality organizations
- Regional landing pages supporting Texas and Gulf Coast search visibility
- Executive insights and long-form hospitality operations content
- Technical SEO, structured data, sitemap, robots guidance, social sharing metadata, and `llms.txt`
- Responsive and accessible page architecture

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

To verify the GitHub Pages production export:

```bash
npm run lint
npm run build:pages
npm test
```

## Technology

The site uses Next.js, React, TypeScript, and Tailwind CSS. Content and route definitions live in the repository so the website can be versioned, reviewed, and automatically deployed from GitHub.

## Deployment

Every update to `main` runs the GitHub Pages workflow in `.github/workflows/deploy-pages.yml`. The production export is published at `https://rivastrategies.github.io/MolinaHospitality/`.

## Ownership

Molina Hospitality Group leads hospitality operations consulting and executive advisory. Riva Strategies supports the website, SEO, technology, automation, analytics, and related digital implementation.
