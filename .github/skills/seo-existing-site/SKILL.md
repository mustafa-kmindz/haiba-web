---
name: seo-existing-site
description: 'Use when: improving SEO for an existing website, researching keywords from site context, creating SEO blog pages, creating local/service landing pages, matching an existing website style, optimizing on-page SEO, technical SEO, sitemap, robots.txt, Lighthouse, or building a repeatable SEO content workflow.'
argument-hint: 'Existing site path or URL, target market/location, optional keyword CSV or SEO tool export'
user-invocable: true
---

# SEO Existing Site Workflow

Use this skill to turn an existing website into an SEO content engine. The workflow extracts context from the current website, researches winning keywords, builds blog and service pages in the existing style, optimizes each page for on-page and technical SEO, and prepares the site for indexing.

The goal is not to generate bulk filler pages. The goal is to publish useful, crawlable, branded pages that target real search demand and can convert visitors.

## Required Inputs

Collect or infer these before editing:

- Existing website codebase, URL, or page examples.
- Target industry, offers, locations, and ideal customer.
- Existing brand voice, proof, stats, opinions, case studies, stories, testimonials, and FAQs.
- Keyword source: exported CSV from SEMrush/Ahrefs/Search Console/Google Keyword Planner, or permission to research manually.
- Image source: existing assets first, then licensed/royalty-safe sources if allowed.
- Deployment target and canonical production domain, when available.

If inputs are missing, proceed with a site audit and create a short `seo-inputs-needed.md` checklist rather than inventing critical business facts.

## Operating Rules

- Preserve the website's framework, styling system, component patterns, routing conventions, and content model.
- Prefer static generation or pre-rendered pages for SEO-critical routes when the stack supports it.
- Do not create thin, near-duplicate location pages at scale. Make each page locally and commercially useful.
- Do not buy, automate, or request low-quality backlinks. Treat off-page SEO as a risk area.
- Validate HTML metadata, internal links, build output, sitemap, robots.txt, and core page performance before finishing.
- Never expose API keys in committed files. Use environment variables and document required names.

## Workflow

### 1. Audit The Existing Website

Inspect the project locally before proposing pages.

1. Identify the stack, routing system, content source, styling approach, image handling, metadata API, build command, and deployment assumptions.
2. Find existing pages that represent the preferred design language: homepage, service page, blog/article page, contact/lead form, navigation, footer, cards, CTAs.
3. Extract the business model: services, service areas, customer types, value props, proof points, constraints, pricing hints, guarantees, and conversion actions.
4. Extract the current voice: tone, sentence style, humor level, opinions, phrases, formality, and recurring objections.
5. Record existing SEO state: title/description patterns, headings, canonical tags, schema, Open Graph, sitemap, robots.txt, internal links, page speed risks.

Create or update these files if the repository has no equivalent:

- `seo/context/site-profile.md`
- `seo/context/voice.md`
- `seo/context/offers-and-locations.md`
- `seo/context/technical-audit.md`

Use [context template](./context-template.md) when creating these notes.

### 2. Build The Keyword Strategy

Use real keyword data when available. If no export exists, create a research plan and seed list from the website, competitor pages, Search Console, Google autocomplete/PAA, or SEO tools the user can export from.

Filter and classify keywords:

- Prefer keyword difficulty `<= 30` for newer or low-authority sites.
- Prefer search volume `>= 100/month`, unless the keyword is highly commercial and locally valuable.
- Exclude competitor brand names, unrelated job/career queries, DIY queries that cannot lead to revenue, and misleading intent.
- Split by intent:
  - Informational: blog posts and guides.
  - Commercial/local: service pages and landing pages.
  - Navigational/brand: usually avoid unless it is the user's brand.
  - Transactional: product, booking, quote, or lead-gen pages.
- Build keyword clusters around one primary keyword plus secondary and tertiary terms that belong on the same page.

Output:

- `seo/keywords/blog-keywords.csv`
- `seo/keywords/service-keywords.csv`
- `seo/keywords/keyword-map.md`

Use [keyword research template](./keyword-research-template.md).

### 3. Create The Content Plan

For each candidate page, create a short page brief before implementation.

Each brief must include:

- Primary keyword.
- Search intent.
- Target URL slug.
- Keyword cluster.
- Audience and conversion goal.
- SERP notes from top-ranking, non-forum, non-Reddit pages.
- Recommended word count, heading structure, media count, FAQ count, internal links, external citations, and CTA.
- Existing website component or page to reuse.
- Proof, stories, examples, numbers, or local details to include.
- Risk notes: duplication, thin content, unsupported claims, medical/legal/financial sensitivity, or missing business facts.

Analyze the top 3 ranking pages where browsing or user-provided SERP data is available. Do not copy their prose. Extract format, depth, section coverage, expected questions, and content gaps.

Use [page brief template](./page-brief-template.md).

### 4. Build Blog Pages

Use blog pages for informational keywords and top-of-funnel authority.

Implementation requirements:

1. Reuse the existing blog route, layout, typography, cards, media handling, author/date conventions, and related-post patterns.
2. Write in the site's real voice using `seo/context/voice.md` and available business proof.
3. Avoid generic openings like "In today's fast-paced world" or "In this comprehensive guide".
4. Include a keyword cluster naturally. Do not stuff keywords.
5. Add useful images with alt text. Prefer existing assets; otherwise use licensed sources and record attribution if required.
6. Add internal links to relevant service pages and related blog posts.
7. Add trustworthy external links where they help the user.
8. Add FAQ content when it matches the SERP and page intent.
9. Add metadata, Open Graph, canonical URL, and schema if the stack supports it.
10. Include a conversion path that fits the intent: quote, contact, consultation, product, lead magnet, or next guide.

### 5. Build Service Pages

Use service pages for commercial and local money keywords.

Build pages by combining offer plus location only when both are real and useful, for example `emergency plumber toronto` or `drain cleaning vancouver`.

Implementation requirements:

1. Reuse the highest-converting existing landing page/homepage structure where appropriate.
2. Keep the page focused on one service and one location or market segment.
3. Include locally useful content: neighborhoods, response times, local constraints, regulations, examples, testimonials, project photos, FAQs, and service boundaries when available.
4. Make each service page materially different. Do not mass-produce pages where only the city name changes.
5. Put the primary keyword in title, H1, first 100 words, slug, meta description, and at least one supporting heading where natural.
6. Include clear CTAs, trust proof, contact form or booking path, and phone/email links when present in the site.
7. Link from relevant blog posts and index/location pages.
8. Add LocalBusiness, Service, FAQ, or Breadcrumb schema where compatible.

### 6. Run On-Page SEO QA

Run the checklist in [on-page-seo-checklist](./on-page-seo-checklist.md) for every new or updated SEO page.

Do not let the checklist flatten the writing into bland SEO prose. Preserve the site's voice and usefulness while meeting technical page requirements.

### 7. Run Technical SEO QA

Run the checklist in [technical-seo-checklist](./technical-seo-checklist.md) after adding pages.

At minimum, verify:

- SEO pages render crawlable HTML.
- Build succeeds.
- Metadata is correct and unique.
- Sitemap includes new public pages.
- Robots.txt permits public SEO pages and references sitemap.
- Canonicals use the production domain when known.
- Lighthouse or equivalent checks are healthy for performance, accessibility, best practices, and SEO.

### 8. Prepare Indexing And Safe Publishing

Before finishing:

1. Summarize newly added pages and target keywords.
2. Confirm cadence recommendations. For a new site, publish gradually rather than dumping hundreds of pages at once.
3. Document how to submit sitemap in Google Search Console if the project docs do not already cover it.
4. Note any required user actions: keyword export, API keys, production domain, CMS publish step, Search Console access, or real business proof.

## Expected Deliverables

For implementation tasks, produce:

- Context notes under `seo/context/` when not already present.
- Keyword files under `seo/keywords/` when keyword research is part of the request.
- Page briefs under `seo/briefs/` for new SEO pages.
- New or updated website pages using existing project conventions.
- Updated sitemap/robots/metadata/schema where applicable.
- A concise final report with changed files, target keywords, validation run, and remaining manual steps.

## Quick Commands For The Agent

When invoked with "audit": only perform steps 1, 6, and 7, then report findings.

When invoked with "keywords": perform steps 1 and 2, then create keyword strategy files.

When invoked with "blog": perform steps 1 through 4, then 6 through 8 for one or more blog pages.

When invoked with "service": perform steps 1 through 3, then 5 through 8 for one or more service pages.

When invoked with "full seo buildout": perform the full workflow, but ask before generating more than 5 pages in one run.
