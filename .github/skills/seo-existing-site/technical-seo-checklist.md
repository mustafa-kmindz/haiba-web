# Technical SEO Checklist

Run this after adding or changing SEO pages.

## Crawlability

- SEO pages return real HTML content without requiring client-side rendering for the main content.
- Routes return 200 status in production-like builds.
- Pages are not blocked by robots.txt, middleware, auth, or noindex tags.
- Navigation and index pages expose links to SEO pages.
- Pagination, category pages, or indexes are crawlable if used.

## Sitemap And Robots

- Sitemap exists and includes all public SEO pages.
- Sitemap excludes drafts, admin pages, test pages, duplicates, and private routes.
- Robots.txt allows public pages and references the sitemap URL.
- Production domain is used when known.

## Canonicals And Duplicates

- Each public SEO page has one canonical URL.
- HTTP/HTTPS, trailing slash, locale, and www/non-www conventions are consistent.
- Near-duplicate service/location pages are consolidated or made materially unique.
- Query/filter pages are noindexed or canonicalized when appropriate.

## Performance

- Build passes.
- Images are compressed and served through the site's normal image pipeline.
- Critical pages avoid unnecessary client JavaScript.
- Fonts are loaded efficiently and do not cause major layout shift.
- Layout dimensions are stable.
- Lighthouse or equivalent performance check is acceptable for key page templates.

## Accessibility And Best Practices

- Heading order is coherent.
- Links and buttons have accessible names.
- Forms have labels and useful validation.
- Color contrast is acceptable.
- No console errors from the new page.
- No broken image URLs or broken internal links.

## Metadata And Structured Data

- Title and meta description are unique per page.
- Open Graph images resolve.
- Structured data validates conceptually and matches visible content.
- Dates, author, organization, address, phone, and ratings are truthful when present.

## Validation Commands

Prefer existing project scripts. Common checks:

- Install dependencies if needed using the project's package manager.
- Run the narrow build/typecheck/lint command for touched files.
- Run the production build for static generation when SEO routes changed.
- Start a local server and inspect one blog page, one service page, sitemap, and robots.txt when practical.
- Use Lighthouse, Playwright, or browser checks for key templates when a frontend is involved.
