---
name: create-social-content
description: 'Use when creating social media marketing images or short videos with the local MCP tools create_marketing_image and create_marketing_video. Covers prompts, arguments, text-only Haiba Enterprises branding, vertical/horizontal formats, Sora 2 video, output filenames, and result handling.'
argument-hint: 'Describe the social asset, platform/orientation, image or video, brand/copy notes, duration, and filename if needed.'
---

# Create Social Content

Use this skill to create polished social media or marketing assets through the local MCP tools:

- `create_marketing_image` for still images.
- `create_marketing_video` for short Sora 2 MP4 videos.

For Haiba Enterprises cybersecurity/AI marketing assets, follow the text-only branding guidance in this skill. Treat KMindz only as a short internal name. Do not draw or use any logo, icon, lock, network mark, or brand symbol; use only the visible text `Haiba Enterprises` for branding.

The skill is named `create-social-content`. The spelling is intentional: lowercase words separated by hyphens, matching the required skill folder name.

## When to Use

Use this skill when the user asks to create, generate, retry, or refine:

- Product marketing images.
- Branded social images that should follow a text-based brand description.
- Haiba Enterprises branded social or marketing content.
- Social posts, ads, thumbnails, banners, stories, reels, or campaign creatives.
- Short product videos or playful promotional clips.
- Vertical or horizontal assets for social platforms.
- MCP image/video content using the local Azure GPT image and Sora tools.

## Decide the Asset Type

1. If the user asks for an image, poster, visual, ad creative, thumbnail, or still asset, use `create_marketing_image`.
2. If the user asks for a video, motion, clip, reel, animation, sound, or Sora output, use `create_marketing_video`.
3. If the user does not specify image or video, ask one concise clarification unless the wording clearly implies one.
4. When creating Haiba Enterprises assets, use the color and visual-style guidance in this skill. Instruct the generator to use only the text `Haiba Enterprises` and not to draw or use any logo, icon, lock, network mark, or brand symbol.
5. If the user asks to try again, keep the same tool and improve only the prompt or arguments that need changing.

## Haiba Enterprises Branding

For Haiba Enterprises assets, use the color and visual-style guidance below. Generated assets must not draw or use any logo, icon, lock, network mark, or brand symbol.

Use this text-only branding instruction in prompts:

```text
Show the brand only as the exact readable text `Haiba Enterprises`. Do not draw or use any logo, icon, lock, network mark, emblem, or brand symbol.
```

For Haiba Enterprises video generation, use the same text-only branding instruction in the Sora prompt. The exact readable text `Haiba Enterprises` is the only permitted brand identifier.

Prompt additions for branded assets:

```text
Use Haiba Enterprises branding only as the exact readable text `Haiba Enterprises`. Do not draw or use any logo, icon, lock, network mark, emblem, or brand symbol. Match the existing Haiba website theme: white #ffffff and light backgrounds, deep royal blue #1e40af for headings and primary actions, darker blue #1e3a8a for emphasis, bright blue #3b82f6 for highlights, cyan #0891b2 for secondary accents, and logo blue #0154a0. Keep the composition crisp, modern, high contrast, uncluttered, light, and professional B2B.
```

These colors are taken from the existing Haiba website design system and must be preferred for all Haiba assets. Do not introduce the previous purple/orange palette or a dark-first theme unless the user explicitly requests a campaign variation.

## Orientation and Sizes

Use `format` to choose orientation. For images, pass a custom `size` only when exact dimensions are requested. A vertical image size must be exactly 9:16 and a horizontal image size must be exactly 16:9. GPT Image 2 generates its standard size first, then the MCP server resizes the returned image locally.

Image defaults:

| Format | Size |
|---|---|
| `vertical` | `1024x1536` |
| `horizontal` | `1536x1024` |

Video defaults:

| Format | Size |
|---|---|
| `vertical` | `720x1280` |
| `horizontal` | `1280x720` |

Choose vertical for stories, reels, shorts, mobile-first ads, and portrait posts. Choose horizontal for YouTube-style clips, banners, presentation visuals, website hero media, and widescreen ads.

## Image Tool

Tool: `create_marketing_image`

Arguments:

| Argument | Required | Guidance |
|---|---:|---|
| `prompt` | Yes | Describe subject, setting, style, lighting, composition, mood, and exclusions. |
| `format` | Yes | `vertical` or `horizontal`. |
| `size` | No | Final `WIDTHxHEIGHT`; exactly 9:16 for `vertical` or 16:9 for `horizontal`. Resizing occurs locally after Azure succeeds. |
| `quality` | No | `low` or `medium`; defaults to `medium`. |
| `optimize` | No | Boolean; defaults to `false`. Use `true` to recompress for minimal website download size. Optimization may be lossy. |
| `outputFormat` | No | `jpeg` or `png`; use `png` for crisp graphics and generated text tests. |
| `outputFileName` | No | Use a short descriptive `.png`, `.jpg`, or `.jpeg` filename when helpful. |
| `outputDirectory` | No | Directory where the MCP server should save the image. Use this for batch generation into project folders. |

Good image prompt pattern:

```text
[subject/product] in [environment], [composition], [lighting], [style/brand feel], [details], no text, no logos, no extra objects unless requested.
```

Example image call:

```json
{
  "prompt": "A glossy bright green apple on a clean studio surface with crisp water droplets, premium grocery campaign style, fresh morning light, minimal background, sharp product focus, no text, no logos, no hands.",
  "format": "vertical",
  "size": "720x1280",
  "quality": "low",
  "optimize": true,
  "outputFormat": "png",
  "outputFileName": "green-apple-social-post.png",
  "outputDirectory": "social-media-content/service-images/whatsapp"
}
```

For README-driven batches, always pass both `outputFileName` and `outputDirectory`. `outputFileName` alone is only a filename hint for chat clients; it does not choose a folder.

When the user requests a different image size or quality, pass both as tool arguments. Do not put dimensions in the prompt text. Use `optimize: true` for website assets where faster downloads matter. Prefer JPEG for photographs because it usually produces much smaller optimized files; use PNG when transparency or crisp flat graphics are required.

## Video Tool

Tool: `create_marketing_video`

Arguments:

| Argument | Required | Guidance |
|---|---:|---|
| `prompt` | Yes | Describe subject, motion, scene, camera, lighting, mood, audio cues, and exclusions. |
| `model` | No | Default is `sora-2`; use `sora-2` unless the user asks otherwise. |
| `format` | No | `vertical` or `horizontal`; determines default video size. |
| `size` | No | Optional exact size such as `720x1280`, `1280x720`, `1024x1792`, or `1792x1024`. |
| `seconds` | No | Duration as a string, usually `4`, `8`, or `12`. Default is `4`. |
| `outputFileName` | No | Must end in `.mp4`; use a descriptive lowercase hyphenated name. |

Good video prompt pattern:

```text
A short [tone/style] video of [subject] in [setting]. The subject [motion/action]. Camera: [shot/framing/movement]. Lighting: [look]. Audio: [sound/music cues]. No text, no logos, no unwanted objects.
```

Example video call:

```json
{
  "prompt": "A short polished product-style video of a glossy bright green apple on a clean studio surface suddenly bouncing and screaming comically, with expressive wobble, crisp highlights, tiny water droplets, bright elegant product lighting, clean light background. Include simple natural sound: a tiny comedic scream, soft apple bounce taps, and a fresh whoosh. No text, no logos, no hands.",
  "model": "sora-2",
  "format": "horizontal",
  "seconds": "4",
  "outputFileName": "screaming-green-apple-sora.mp4"
}
```

Example branded video call:

```json
{
  "prompt": "A short premium enterprise technology brand video with the exact readable text Haiba Enterprises, clean architecture-led motion graphics, white and light backgrounds with deep royal blue #1e40af, darker blue #1e3a8a, bright blue #3b82f6, cyan #0891b2, and logo blue #0154a0 accents, elegant camera movement, no logo, no icon, no lock, no network mark, no brand symbol, no people faces, no clutter.",
  "model": "sora-2",
  "format": "horizontal",
  "seconds": "4",
  "outputFileName": "branded-secure-ai-agents-sora.mp4"
}
```

## Prompt Quality Checklist

Before calling a tool, make sure the prompt includes:

1. Main subject and product details.
2. Intended platform or orientation when known.
3. Visual style and brand feel.
4. Lighting and background.
5. Composition or camera direction.
6. Motion and audio cues for video.
7. Exact `Haiba Enterprises` text and color guidance for branded assets, with no logo or brand symbols.
8. Exclusions such as no unwanted logos, no hands, or no extra objects.

For Haiba Enterprises branded assets, use the exact readable text `Haiba Enterprises` as the only brand identifier. For other assets, avoid asking the model to place readable text unless the user explicitly needs it.

## Output Handling

After the tool returns:

1. Confirm the file name, format, final size, quality, and optimization status for images; confirm the file name, size, duration, and model for videos.
2. For video, mention the returned status and video ID if the tool provides them.
3. For image batches, verify that the output text includes the saved filesystem path when `outputDirectory` was provided.
4. If the user wants a revision, keep the best parts of the previous prompt and change the specific visual, motion, orientation, or duration requested.
5. If the result is returned only as a chat resource, tell the user the resource/file was produced by the MCP tool but was not saved to a project folder.

## Example User Requests

- `Create a vertical Instagram story image for a fresh green apple campaign.`
- `Make a 4 second horizontal Sora video of a bouncing apple with funny sound.`
- `Try again but make it cleaner, more premium, and no background clutter.`
- `Create a YouTube banner-style product visual for this prompt.`

## Completion Criteria

A request is complete when:

- The correct MCP tool was used.
- Orientation and size match the user's platform or request.
- Image quality is `low` or `medium`, using `medium` by default.
- Image optimization matches the user's request and its lossy tradeoff is appropriate for the asset.
- The prompt is specific enough for polished social content.
- The output file name is appropriate for the media type.
- The response summarizes the produced asset and any useful metadata.
