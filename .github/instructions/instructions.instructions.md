---
description: Describe when these instructions should be loaded by the agent based on task context
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->

Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

When creating images, respect the service limit of 10 image creation calls per minute.

## Push and Deployment Workflow

Use the `/custom-push` skill whenever the user asks to push, publish, commit and push, or send code to Git. Do not run direct Git mutation commands. The custom push function is responsible for staging, committing, and pushing the changes.

At appropriate intermediate milestones, offer or perform a push when the user has requested ongoing publishing. Appropriate milestones include:

- After a coherent feature or page group is implemented and locally validated.
- After a meaningful SEO, content, routing, or asset batch is complete and checked.
- Before a deployment handoff, after tests and validation have passed.
- After a production fix has been verified locally and is ready to publish.

Before every push:

1. Read and follow `.github/skills/custom-push/SKILL.md`.
2. Run only `git status --short --branch` to determine whether local changes or unpushed commits exist.
3. If there is nothing to push, do not invoke the custom push function.
4. If changes exist, source `~/.bashrc` and run the custom function exactly as `push "<short imperative comment>"`.
5. Do not run `git add`, `git commit`, `git push`, `git remote`, or inspect/check `origin` directly.
6. Run `git status --short --branch` after the custom push to verify the result.

After a successful push, when the user requests or the task includes server deployment, use the existing SSH alias and server path:

```bash
ssh kmindz
cd ~/haiba-web
git pull
```

Run `pm2 restart 5` only when the deployed change affects the running Node process, server-side behavior, or the user explicitly requests a restart. A static HTML, CSS, JavaScript, image, or metadata-only change normally does not require a PM2 restart unless this deployment environment is known to serve those files through the PM2 process. Never restart blindly; report whether it was needed and whether the command succeeded.

Do not expose credentials, private keys, tokens, or sensitive server output in responses. Report the push comment, deployment result, and restart decision briefly.

## Website SEO Requirements

Apply these requirements whenever creating or modifying a public HTML page, page template, route, image, sitemap, robots file, or structured-data file:

- Use one clear search intent per indexable page and write original, useful content for that intent.
- Use a unique, descriptive `<title>`, meta description, canonical URL, Open Graph title/description/URL/type/image, and X/Twitter card metadata on every indexable page.
- Use exactly one visible, descriptive `<h1>` per page and maintain a logical heading hierarchy with `<h2>` and `<h3>`.
- Use lowercase, descriptive, hyphenated URLs. Prefer stable directory paths such as `/services/plant-design/` over vague names, query-only pages, or filenames with unnecessary extensions.
- Add inline, valid JSON-LD that matches visible page content. Use the appropriate schema type such as `Organization`, `WebSite`, `WebPage`, `Service`, `BreadcrumbList`, or `Article`.
- Use `FAQPage` structured data only when the questions and answers are visibly present and genuinely useful. Never add unsupported reviews, awards, prices, partners, events, or claims to schema.
- Use canonical URLs in JSON-LD, internal links, Open Graph data, and sitemaps consistently. Do not include URL fragments, redirects, duplicate pages, private files, or non-indexable campaign pages in the XML sitemap.
- Give every meaningful image accurate, natural `alt` text describing what is visible and its purpose. Use `alt=""` for decorative images. Do not stuff keywords into alt text or use the filename as alt text.
- Use semantic HTML, accessible labels, keyboard-visible focus states, responsive layouts, sufficient color contrast, descriptive link text, and reduced-motion support.
- Do not hide important information in images. Repeat any important visual label, claim, or service name as nearby HTML text.
- Validate HTML, links, metadata, canonical URLs, JSON-LD, sitemap URLs, mobile rendering, performance, and accessibility before considering a page complete.
- Do not publish unsupported statistics, certifications, customer logos, partnerships, locations, reviews, or technical claims. Confirm business facts before adding them to page copy or structured data.

## Image Creation Workflow

Use the `/create-social-content` skill whenever a page needs a new marketing, hero, service, industry, campaign, social, banner, or share image. Use the local MCP `create_marketing_image` tool for still images. Read and follow `.github/skills/create-social-content/SKILL.md` before invoking the tool. Use the actual Haiba website theme described in the skill, not a generic or invented palette.

For website photography and feature images:

- Prefer `format: "horizontal"` with a 16:9 composition for hero and service images. Create a separate 1200x630 social-share crop where needed.
- Prefer `outputFormat: "jpeg"` and a descriptive lowercase hyphenated filename ending in `.jpg` for photographic assets.
- Always pass `optimize: true`, `quality: "medium"` unless the task specifies otherwise, `outputFileName`, and `outputDirectory` when using the MCP tool.
- Use descriptive asset folders such as `assets/images/services/`, `assets/images/industries/`, or `assets/social/`; do not scatter generated files in the repository root.
- Review the generated image before publishing. Check visual accuracy, readable text, spelling, mobile crop, contrast, compression artifacts, dimensions, and file size.
- Add explicit `width` and `height` attributes in HTML. Use `fetchpriority="high"` only for the primary above-the-fold image and `loading="lazy"` for below-the-fold images.
- Use responsive image markup with `srcset` and `sizes` when multiple image sizes are available. Prefer WebP derivatives through `<picture>` when supported, with the optimized JPG as the fallback.
- Do not use generated images as a substitute for accessible HTML content. The page heading, caption, nearby text, and alt text must communicate the subject independently.
- Never generate or publish invented certification marks, partner logos, customer logos, UI screenshots containing false data, or misleading industrial equipment.
- Respect the service limit of 10 image creation calls per minute. For batches, group the requests deliberately and avoid parallel calls that could exceed the limit.

## Branded Image Prompt Standard

Every Haiba Enterprises image prompt must describe the subject, setting, composition, lighting, visual style, brand colors, exact readable text, and exclusions. Use the following template and replace all bracketed values:

```text
Create a premium horizontal 16:9 website feature image for Haiba Enterprises about [SERVICE NAME].
Show [SPECIFIC SUBJECT, such as a pressure vessel design review, plant 3D model, supplier inspection,
industrial AI dashboard, or secure industrial software workflow] in a realistic [FACILITY OR WORKPLACE]
environment. Use a clean editorial B2B composition with the main subject clearly visible on [LEFT/RIGHT]
and generous uncluttered space for typography on [LEFT/RIGHT]. Use realistic industrial materials,
technically credible details, sharp focus, professional [DAYLIGHT/CONTROLLED TECHNICAL] lighting,
and a confident engineering tone. Match the existing Haiba website theme: white #ffffff and light
backgrounds, deep royal blue #1e40af for headings and primary actions, darker blue #1e3a8a for
hover and emphasis states, bright blue #3b82f6 for highlights, cyan #0891b2 for secondary accents,
and logo blue #0154a0. Keep the palette clean, light, professional, and high contrast.

Include the exact readable text "Haiba Enterprises" and the exact short service label
"[SHORT SERVICE LABEL]" in clean, high-contrast, professional typography. Spell both text strings
exactly, keep them fully visible and unobstructed, and repeat the service label in the page HTML.
The image must be understandable on its own at a glance, without relying on surrounding page copy.

Do not draw or use a logo, icon, lock, network mark, emblem, certification mark, partner logo,
customer logo, watermark, or any brand symbol. Do not add any text other than the two exact text
strings requested. Do not show distorted people, unsafe working practices, fake technical data,
generic stock-photo styling, unrelated equipment, excessive visual clutter, or illegible lettering.
```

For each generated image, write a page-specific alt text after reviewing the actual output. Example: `Pressure vessel and piping design review displayed in a plant engineering workspace` rather than `industrial engineering services image`.