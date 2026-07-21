# Haiba Enterprises Website Upgrade Plan

## 1. Objective

Rebuild the public Haiba Enterprises website as a professional, search-focused industrial engineering and technology site while preserving the existing Haiba visual direction: navy/blue foundations, cyan accents, white space, restrained gradients, and the current logo treatment.

The upgraded site should:

- Present Haiba as an industrial engineering, inspection, digital transformation, AI, software, and data security partner.
- Give each high-value service a crawlable, useful page with a clear search intent.
- Remove Odoo, generic ERP/CRM positioning, and the obsolete cloud integration offer from public navigation and structured data.
- Use technically valid metadata, canonical URLs, JSON-LD, Open Graph data, descriptive image `alt` text, accessible HTML, and a clean XML sitemap.
- Keep campaign and email assets operational while moving them out of the public information architecture.
- Load quickly on mobile through correctly sized, optimized JPEG/WebP media, deferred scripts, caching, and minimal third-party dependencies.

## 2. Confirmed Content Direction

### Core competencies

1. **Design and Engineering**
   - Engineering design and drawings for pressure vessels, heat exchangers, piping, tanks, and industrial structures.
   - Modifications and re-routing.
   - Urgent design support during plant shutdowns and turnarounds.
   - Plant 3D modelling.
2. **Inspection and Expediting**
   - ASME and third-party inspection.
   - Worldwide expediting for supply orders.
   - Third-party technical audits.
   - Supplier pre-qualifications.
3. **Digital Transformation and AI Empowerment**
   - AI-driven industrial transformation, operational automation, decision support, and Industry 5.0 enablement.
4. **Industrial Software Solutions and Data Security**
   - Custom industrial applications, workflow software, data governance, access control, and security-minded delivery.

### What we offer

- Plant Design: pressure vessel, piping, tank, and structural design.
- 3D Modelling: plant equipment and structure.
- Industrial inspection and expediting services.
- Complete package for ASME U, U2, and R certifications.
- Technical and Management Consultancy: Industry 5.0.
- AI-driven industrial digital transformation.
- Custom application development: industrial software solutions.

## 3. Proposed SEO Information Architecture

Use descriptive, stable, lowercase paths with hyphens. These pages should be public, linked from the main navigation, and included in the sitemap.

```text
/
/about/
/services/
/services/plant-design/
/services/3d-plant-modelling/
/services/industrial-inspection-expediting/
/services/asme-u-u2-r-certification/
/services/industry-5-consultancy/
/services/ai-industrial-digital-transformation/
/services/industrial-software-data-security/
/industries/
/industries/oil-gas-petrochemical/
/industries/power-water-desalination/
/industries/mining-manufacturing/
/insights/
/contact/
/privacy/
/terms/
```

### Page purpose and primary intent

| Page | Primary search intent | Main conversion |
| --- | --- | --- |
| `/` | Haiba industrial engineering and technology partner | Request consultation |
| `/about/` | Haiba company, capabilities, locations, credibility | Contact team |
| `/services/` | Industrial engineering and digital services overview | Choose a service |
| `/services/plant-design/` | Pressure vessel, piping, tank, structural design | Request design review |
| `/services/3d-plant-modelling/` | Plant equipment and structural 3D modelling | Discuss modelling scope |
| `/services/industrial-inspection-expediting/` | ASME inspection, supplier audit, expediting | Request inspection support |
| `/services/asme-u-u2-r-certification/` | ASME U, U2, and R certification support | Discuss certification package |
| `/services/industry-5-consultancy/` | Technical and management consultancy for Industry 5.0 | Book consultation |
| `/services/ai-industrial-digital-transformation/` | AI for industrial operations and transformation | Request AI workshop |
| `/services/industrial-software-data-security/` | Industrial software and secure data solutions | Scope an application |
| Industry pages | Sector-specific capability discovery | Contact relevant specialist |
| `/insights/` | Helpful engineering and technology research | Subscribe or enquire |
| `/contact/` | Contact, locations, enquiry intent | Submit enquiry or book call |

Do not create thin pages solely to target keywords. Each service page needs original technical copy, a process, deliverables, suitable industries, FAQs, proof or credentials that can be substantiated, and one clear CTA.

## 4. Homepage Content Outline

1. **Hero:** “Industrial Engineering and Digital Transformation for Safer, Smarter Operations” with a concise supporting statement and two CTAs: “Explore services” and “Talk to Haiba”.
2. **Trust strip:** service regions, relevant standards, sectors, and verified credentials only. Do not imply partnerships that are not current.
3. **Four competency blocks:** use the confirmed competency names and descriptions above.
4. **Services overview:** seven current offers, each linking to its dedicated page.
5. **Industries:** oil and gas/petrochemical, power/water/desalination, mining/manufacturing, and other sectors supported by evidence.
6. **Delivery approach:** assess, engineer, inspect, digitize, improve.
7. **Proof:** case studies, project outcomes, certifications, or team expertise. Avoid invented metrics.
8. **FAQ:** answer real buyer questions, not keyword lists.
9. **Contact CTA:** enquiry form with service and location fields, plus privacy notice.

Remove the Odoo partner block, Odoo logo, ERP/CRM claims, cloud migration offer, and related `knowsAbout`, `offers`, navigation, and image references unless a separately approved partnership or service is restored.

## 5. Technical SEO Requirements

### Every indexable HTML page

- One unique `<title>` of approximately 50–60 characters where practical.
- One unique meta description of approximately 140–160 characters, written for the page intent.
- One visible, descriptive `<h1>`; use a logical `h2`/`h3` hierarchy.
- `<link rel="canonical" href="https://haiba.co/path/">` using the final preferred URL.
- Open Graph: `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, and `og:site_name`.
- X/Twitter card metadata with a stable 1200x630 share image.
- `lang="en"`, UTF-8, responsive viewport, and a meaningful document title.
- Breadcrumb navigation for service and industry pages.
- Descriptive image `alt` text. Decorative images must use `alt=""`; never use filenames or keyword stuffing.
- Visible text must not depend on an image. If an image contains a label, repeat the information in nearby HTML.
- Skip link, keyboard-visible focus states, labelled form fields, and sufficient color contrast.

### JSON-LD

Inline JSON-LD in each page is preferred. The current `<script type="application/ld+json" src="schema.json">` pattern is invalid for reliably exposing structured data and must be replaced.

Implement a shared schema pattern containing:

- `Organization` or `LocalBusiness` with verified company details, logo, contact point, locations, `sameAs`, and `areaServed`.
- `WebSite` with `url`, `name`, and `SearchAction` only if an actual site search exists.
- `WebPage` on standard pages.
- `Service` on each service page with provider, service type, area served, description, and page URL.
- `BreadcrumbList` on nested pages.
- `Article` on insight pages, including author, date published, date modified, headline, image, and main entity.
- `FAQPage` only when the same questions and answers are visibly present on the page and genuinely useful. Do not add FAQ schema just for rich-result eligibility.

Do not mark up unsupported reviews, awards, prices, products, events, or partnerships. Validate every page in Google Rich Results Test and Schema Markup Validator.

### Crawl and indexing

- Keep `robots.txt` simple: allow public pages, disallow private campaign/admin paths, and declare the sitemap.
- Replace the current sitemap entries for section fragments, duplicate `index.html`, and campaign pages with canonical public URLs only.
- Use accurate `lastmod` dates and ensure no sitemap URL redirects or returns a 404.
- Add `noindex, nofollow` to thank-you pages, internal test pages, duplicate landing-page variants, and email-preview HTML.
- Add `404.html` with useful navigation rather than routing every 404 to the homepage.
- Add `hreflang` only if translated pages are actually created.
- Connect Google Search Console, Bing Webmaster Tools, analytics, and conversion tracking after launch.

## 6. URL and Folder Migration

The current `funnel/` name is appropriate for campaign mechanics but not for public service content. Use this split:

```text
public SEO pages:       services/, industries/, about/, insights/, contact/
campaign landing pages: campaigns/poc/
email templates/tools:  marketing/email-templates/ and marketing/scripts/
internal documentation: docs/ or planning/
assets:                 assets/images/, assets/icons/, assets/social/
```

Migration rules:

- Keep existing `/funnel/landing.html`, `/funnel/poc.html`, and `/funnel/booking.html` working during the transition because email links and external campaigns may use them.
- Add permanent redirects only after each replacement page is live and tested.
- Preserve query parameters such as `persona` and campaign tracking parameters when redirecting.
- Do not put email HTML, CSV files, scripts, or internal guides in the public XML sitemap.
- Use `/campaigns/poc/` for the future public campaign path, with `noindex` unless the campaign is intentionally search-visible.
- Update internal links, canonical tags, emails, docs, and analytics destinations together.

## 7. Image and Social Asset Production

Use the `create-social-content` skill and the local MCP `create_marketing_image` tool for approved website and social assets. Generate assets into a predictable folder such as `assets/images/services/` or `assets/social/`, then review every output before publishing.

### Asset rules

- Use horizontal 16:9 images for hero and service feature media; use a separate 1200x630 crop for social sharing.
- Prefer optimized JPEG for photographic industrial scenes; use WebP derivatives where the deployment supports them. Use PNG only for transparency or crisp graphics that need it.
- Pass `optimize: true`, an explicit descriptive filename, and an output directory to the MCP tool.
- Provide responsive `width` and `height`, `loading="lazy"` for below-the-fold images, and `fetchpriority="high"` only for the hero image.
- Keep important business meaning in HTML. Generated text can be misspelled, so any visible text inside an image must be checked manually at full size.
- When a visual needs to be understandable without surrounding copy, request a short, exact, readable title inside the composition, while repeating the title in the HTML caption or heading.
- Follow the skill’s Haiba rule: use the exact readable text `Haiba Enterprises` only; do not generate a logo, lock, network mark, emblem, or other brand symbol.

### Reusable prompt template

```text
Create a premium horizontal 16:9 website feature image for Haiba Enterprises about [SERVICE].
Show [SPECIFIC INDUSTRIAL SUBJECT] in a realistic [FACILITY/WORKSHOP/ENGINEERING OFFICE]
environment, with technically credible equipment, clean composition, sharp subject focus,
subtle navy #071426 and white foundations with restrained purple #6b198d, violet-blue
#5435b0, bright blue #1974c8, and orange #ff6b22 accents. Include the exact readable text
“Haiba Enterprises” and the short readable service label “[SERVICE LABEL]” in clean high-
contrast typography with generous empty space around it. Text must be spelled exactly and
must not be obstructed. Use professional daylight or controlled technical lighting, realistic
materials, and a calm B2B engineering tone. No invented certification marks, no partner
logos, no people with distorted hands, no generic stock-photo look, no unrelated equipment,
no logo, no icon, no lock, no network mark, no emblem, and no other text.
```

### Initial image set

Create and review one hero image, seven service images, three industry images, one about/team image, and one 1200x630 social share image. Suggested filenames:

```text
hero-industrial-engineering-digital-transformation.jpg
service-plant-design-pressure-vessel-piping.jpg
service-3d-plant-modelling-equipment-structure.jpg
service-industrial-inspection-expediting.jpg
service-asme-u-u2-r-certification.jpg
service-industry-5-consultancy.jpg
service-ai-industrial-digital-transformation.jpg
service-industrial-software-data-security.jpg
industry-oil-gas-petrochemical-engineering.jpg
industry-power-water-desalination.jpg
industry-mining-manufacturing-solutions.jpg
about-haiba-engineering-team.jpg
haiba-enterprises-social-share.jpg
```

Before publication, check dimensions, file size, compression artifacts, text accuracy, mobile crop, and whether the `alt` text describes the actual image rather than the target keyword.

## 8. Design and Front-End Standards

- Preserve the current Haiba color theme while consolidating colors into CSS variables and removing duplicated inline page styles.
- Create shared header, footer, breadcrumb, CTA, card, and FAQ patterns so every page feels like one site.
- Use one local/shared stylesheet rather than page-specific style blocks where practical.
- Keep the existing serif display and sans-serif body pairing only if it remains performant; self-host fonts or use a measured fallback strategy.
- Remove unnecessary AOS and CDN dependencies or load them only where their benefit is demonstrated.
- Use semantic `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, and `<figure>` elements.
- Make contact CTAs and phone/email links usable on mobile.
- Add reduced-motion handling and test keyboard navigation on all interactive elements.

## 9. Implementation Phases

### Phase 1: Content and data foundation

- Confirm legal company name, addresses, service regions, phone, email, social profiles, credentials, industries, and approved claims.
- Create a keyword/content map from real customer language; avoid unsupported search-volume assumptions.
- Replace the current organization schema data with verified facts.
- Define reusable page metadata and schema fragments.

### Phase 2: Structure and shared components

- Create the new folder structure and shared CSS/JS patterns.
- Build the homepage, about page, service index, contact page, header, footer, breadcrumbs, and 404 page.
- Remove obsolete Odoo/ERP/CRM content from public pages and navigation.

### Phase 3: Service and industry pages

- Build the seven service pages and three industry pages.
- Add original content, diagrams or reviewed images, process steps, deliverables, FAQs, metadata, and JSON-LD.
- Ensure every page has a conversion path and no dead-end content.

### Phase 4: Asset and campaign migration

- Generate and optimize images through `create-social-content` and MCP as approved.
- Move email assets and campaign mechanics into `marketing/` and `campaigns/` while preserving compatibility redirects.
- Add `llms.txt` and optionally `llms-full.txt` containing concise, factual company and service information with canonical URLs. Do not include private data, credentials, or unverified claims.

### Phase 5: Technical launch

- Update `.htaccess` for canonical trailing-slash URLs, extensionless routes, HTTPS, compression, caching, security headers, and tested 301 mappings.
- Replace the sitemap and robots rules.
- Deploy to staging, crawl it, and resolve broken links, duplicate titles, missing metadata, mixed content, and redirect chains.

### Phase 6: Validation and measurement

- Run Lighthouse for performance, accessibility, SEO, and best practices on mobile and desktop.
- Run an HTML validator and link checker.
- Validate JSON-LD with Schema Markup Validator and Google Rich Results Test.
- Test forms, email delivery, phone links, booking flow, redirects, 404 behavior, and campaign query parameters.
- Submit the sitemap in Search Console and monitor indexing, Core Web Vitals, queries, impressions, CTR, and conversions weekly after launch.

## 10. Acceptance Checklist

- [ ] No public page mentions Odoo, ERP/CRM solutions, or cloud integration unless explicitly re-approved.
- [ ] Four competency blocks exactly reflect the approved direction.
- [ ] Seven offers are represented and linked to dedicated pages.
- [ ] Every indexable URL has unique title, description, canonical, OG data, one H1, and useful body copy.
- [ ] Every content image has accurate alt text; decorative images have empty alt text.
- [ ] JSON-LD is inline, valid, page-specific, and matches visible content.
- [ ] Sitemap contains only canonical, indexable, live URLs.
- [ ] `robots.txt`, `llms.txt`, `404.html`, and `.htaccess` are present and tested.
- [ ] Campaign and email links continue to work or receive tested 301 redirects.
- [ ] Generated JPG/JPEG assets are optimized, correctly cropped, and visually reviewed.
- [ ] Mobile layout, keyboard navigation, forms, and reduced-motion behavior work.
- [ ] Lighthouse, HTML validation, link crawling, schema validation, and staging smoke tests pass.

## 11. Recommended Delivery Order

Build and publish the homepage, service index, and the three highest-intent pages first: Plant Design, Industrial Inspection and Expediting, and AI-Driven Industrial Digital Transformation. Follow with ASME certification, 3D modelling, Industry 5.0 consultancy, and Industrial Software/Data Security. This creates a coherent internal-linking spine early and lets Search Console begin discovering the strongest commercial pages before the remaining supporting pages are finished.