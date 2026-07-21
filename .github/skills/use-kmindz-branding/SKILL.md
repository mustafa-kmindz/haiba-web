---
name: use-kmindz-branding
description: 'Use when creating KryptoMindz Technologies or KryptoMindz cybersecurity/AI images, social media content, marketing content, posters, videos, and campaign assets. Applies text-only logo/icon geometry, colors, lock-and-network motif, typography guidance, and output quality checks. KMindz is shorthand only; visible brand text should use KryptoMindz Technologies.'
argument-hint: 'Describe the KryptoMindz Technologies asset to create; include platform, format, and copy if needed.'
---

# Use KryptoMindz Technologies Branding

## Purpose

Use this skill to create consistent KryptoMindz Technologies branded visuals and marketing content. It packages the text-only brand icon description, color palette, logo treatment, and content-generation workflow so generated assets feel recognizably connected to KryptoMindz Technologies.

Use it together with `/create-social-content` when producing actual image or video files through the local MCP tools.

## When to Use

Use this skill whenever the user asks for any of these:

- KryptoMindz Technologies or KryptoMindz-branded content.
- KMindz requests, where KMindz is only shorthand for KryptoMindz Technologies.
- Social media images, LinkedIn posts, WhatsApp creatives, banners, posters, thumbnails, or ads for KryptoMindz Technologies.
- Marketing content, campaign visuals, service images, AI/security/technology visuals with KryptoMindz Technologies branding.
- Logo/icon recreation or text prompts that use the KryptoMindz Technologies security network mark.
- Branded Sora videos or GPT image prompts that need the logo described in text.

## Naming Rule

Use `KryptoMindz Technologies` for visible brand text in generated images, posters, social media graphics, and videos. Treat `KMindz` as a short internal shorthand only. Do not render `KMindz` as the public brand name unless the user explicitly asks for that exact visible text.

## Brand Identity

KryptoMindz visual identity should feel like cybersecurity, AI infrastructure, trusted automation, and enterprise-grade technology.

Core motifs:

- Connected network nodes.
- Central security lock.
- Purple-to-blue technology gradient.
- Orange security hub/accent.
- Clean, modern, high-contrast composition.
- Professional B2B tone.

Avoid:

- Generic stock business people unless specifically requested.
- Random logos or logo-like marks.
- Busy circuit-board clutter.
- Dark, unreadable text overlays.
- One-color purple-only themes.
- Misspelling the brand unless the user explicitly requests a specific spelling.

## Color Palette

Use these colors consistently:

| Role | Hex | Usage |
|---|---|---|
| Deep purple | `#6b198d` | Lower-left logo gradient, deep brand accent |
| Mid violet-blue | `#5435b0` | Middle gradient, secondary brand accent |
| Bright blue | `#1974c8` | Upper-right logo gradient, technology highlight |
| Orange | `#ff6b22` | Central lock hub, key callout accent |
| White | `#ffffff` | Lock line art, high-contrast text, clean surfaces |
| Navy | `#071426` | Premium cybersecurity background |
| Soft off-white | `#f6f8fb` | Light layout background |
| Gold accent | `#f5b642` | Optional small highlight, use sparingly |

Logo gradient:

```svg
<linearGradient id="purpleBlue" x1="0" y1="192" x2="192" y2="0" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#6b198d"/>
  <stop offset="0.45" stop-color="#5435b0"/>
  <stop offset="1" stop-color="#1974c8"/>
</linearGradient>
```

## Text-Only Icon Description

The KryptoMindz Technologies icon is a flat cybersecurity network mark. It contains eight circular network nodes connected by thick rounded lines. The network uses a diagonal purple-to-blue gradient from `#6b198d` through `#5435b0` to `#1974c8`. A central orange circle `#ff6b22` contains a white outline lock.

Key geometry:

- Canvas/viewBox: `0 0 192 192`
- Node radius: `24`
- Connector stroke width: `16`
- Central lock circle: center `(96,96)`, radius `27`, fill `#ff6b22`
- Lock stroke: `#ffffff`, width `5`, rounded caps and joins

Node centers:

```text
(24,24), (96,24), (168,24), (24,88), (24,168), (96,168), (168,104), (168,168)
```

Connector paths:

```svg
<path d="M24 24v56l70 88"/>
<path d="M24 80l72-56"/>
<path d="M24 80v88"/>
<path d="M94 168l74-64"/>
<path d="M168 104v64"/>
```

## Prompt Pattern for Branded Images

Use this pattern for branded static images:

```text
Create a polished KryptoMindz Technologies branded [asset type] for [platform/use case]. Use a text-described KryptoMindz Technologies brand mark as visual identity inspiration: eight circular connected network nodes, a purple-to-blue diagonal gradient, and a central orange security lock hub. Build a clean enterprise cybersecurity/AI visual system with navy #071426 and white #ffffff base, purple #6b198d, violet-blue #5435b0, bright blue #1974c8, and orange #ff6b22 accents. Composition should be crisp, modern, high contrast, uncluttered, and professional B2B. Any visible brand name must read `KryptoMindz Technologies`. [Text/copy instructions]. No random logos, no clutter, no distorted lock, no unreadable text.
```

When generated text matters, keep it short and exact. For important campaign copy, prefer generating the image without text and add text later with layout tooling.

## MCP Image Workflow

When creating real files through the local MCP image tool:

1. Use `/create-social-content` plus this skill's brand rules.
2. Put all brand/logo guidance directly inside the prompt text.
3. Use `outputFormat: "png"` for crisp graphics and text tests.
4. Always pass both `outputFileName` and `outputDirectory` when the user expects a saved file.
5. If an image request appears stuck, cancel it from the client and retry with a simpler prompt.

Example image call:

```json
{
  "prompt": "Create a polished KryptoMindz Technologies branded LinkedIn service image using a text-described brand mark as visual identity inspiration: eight circular connected network nodes in a purple-to-blue gradient and a central orange security lock hub. Build a clean enterprise cybersecurity and AI automation visual system with navy and white base, purple, violet-blue, bright blue, and orange accents. Keep it crisp, modern, high contrast, uncluttered, and professional B2B. Any visible brand name must read KryptoMindz Technologies. No extra logos, no people, no clutter, no unreadable text.",
  "format": "horizontal",
  "outputFormat": "png",
  "outputFileName": "linkedin-kryptomindz-technologies-service.png",
  "outputDirectory": "social-media-content/service-images/linkedin"
}
```

## MCP Video Workflow

For branded Sora videos:

1. Put the KryptoMindz Technologies brand mark description directly into the prompt text.
2. Keep video prompts focused on motion, scene, brand treatment, duration, and aspect.
3. Avoid asking Sora to render lots of readable text.
4. Use horizontal for LinkedIn/YouTube-style assets and vertical for short-form social posts.
5. Ask for subtle brand-colored motion rather than forcing exact logo placement in every frame.

Example video prompt phrase:

```text
Use KryptoMindz Technologies branding as text-only visual inspiration: purple-to-blue connected network nodes and an orange security lock accent. Create a clean enterprise cybersecurity motion graphic with flowing secure data paths, a calm high-trust tone, and no readable text.
```

## Quality Checks

Before finishing a branded asset task, verify:

- The brand colors are present and balanced, especially `#6b198d`, `#5435b0`, `#1974c8`, and `#ff6b22`.
- The visual includes a security/network/AI trust motif where appropriate.
- The output does not invent extra logos or off-brand symbols.
- Text spelling uses `KryptoMindz Technologies` for public brand text unless the user explicitly provides another spelling.
- Saved files are written to the requested `outputDirectory` when one was provided.
- For MCP outputs, the tool response says the file was saved to disk.

## Related Skill

Use with `/create-social-content` for actual generation of marketing images or Sora videos.
