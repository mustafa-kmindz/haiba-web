# HTML to Image Converter

Convert HTML email templates to PNG, JPEG, or WebP images. Two options available: CLI for automation and Web UI for interactive use.

## Installation

```bash
npm install
```

This installs the required dependencies:
- **puppeteer**: Headless Chrome browser for rendering HTML
- **minimist**: CLI argument parsing
- **express**: Web server framework

## Usage

### Option 1: Command-Line Interface (CLI)

Perfect for automation, scripts, and batch processing.

#### Basic Usage

```bash
node html-to-image.js <input-file.html> [output-file.png] [options]
```

**Note:** Images are saved to the `output/` folder by default. You can specify just a filename, a relative path, or an absolute path.

#### Examples

**Convert with default settings (PNG format, 800x1200px):**
```bash
node html-to-image.js ../email-templates/email-01-founder.html
# Output: ./output/email-01-founder.png (auto-created)
```

**Convert and specify output filename (saved to output folder):**
```bash
node html-to-image.js ../email-templates/email-01-founder.html founder-email.png
# Output: ./output/founder-email.png
```

**Convert with full path:**
```bash
node html-to-image.js ../email-templates/email-01-founder.html /custom/path/founder-email.png
# Output: /custom/path/founder-email.png
```

**Convert to JPEG with high quality:**
```bash
node html-to-image.js ../email-templates/email-02-intrapreneur.html intrapreneur.jpg --format=jpeg --quality=95
```

**Convert to WebP with custom dimensions:**
```bash
node html-to-image.js ../email-templates/email-template-dark.html preview.webp --format=webp --width=600 --height=800
```

**Capture full scrollable height:**
```bash
node html-to-image.js ../email-templates/email-01-founder.html full-page.png --full-page
```

#### CLI Options

| Option | Description | Default | Example |
|--------|-------------|---------|---------|
| `--format` | Output format: png, jpeg, webp | `png` | `--format=jpeg` |
| `--quality` | Image quality (1-100) | `90` | `--quality=95` |
| `--width` | Viewport width in pixels | `800` | `--width=600` |
| `--height` | Viewport height in pixels | `1200` | `--height=1600` |
| `--full-page` | Capture entire scrollable height | `false` | `--full-page` |

### Option 2: Web User Interface

Interactive web interface for easy conversion without command line.

#### Start the Server

```bash
node html-to-image-web.js
# Server running at http://localhost:3001
```

#### Using the Web Interface

1. Open http://localhost:3001 in your browser
2. Select an HTML file to convert
3. Configure settings:
   - Output filename
   - Format (PNG, JPEG, WebP)
   - Dimensions (width, height)
   - Quality slider
   - Full page capture option
4. Click "Convert to Image"
5. Download the resulting image

## NPM Scripts

```bash
# CLI conversion
npm run convert-cli -- ../email-templates/email-01-founder.html output.png

# Web server
npm run convert-web

# Email sender (existing)
npm run send-cli
npm run send-web
```

## Format Comparison

| Format | Pros | Cons | Use Case |
|--------|------|------|----------|
| **PNG** | Lossless, transparent bg support | Larger file size | When quality is critical |
| **JPEG** | Smaller file size, universal support | Lossy compression | Email previews, general use |
| **WebP** | Best compression, modern format | Less universal support | Web displays, modern browsers |

## Quality Settings

- **PNG**: Format doesn't support quality settings (always lossless)
- **JPEG**: 1-100 (higher = better quality, larger file)
- **WebP**: 1-100 (recommended: 85-95)

## Examples Workflow

### Batch Convert All Templates

```bash
#!/bin/bash
cd /path/to/funnel/script

# Convert all email templates to PNG (saved to output/ folder)
for file in ../email-templates/*.html; do
    echo "Converting $file..."
    node html-to-image.js "$file"
done
```

### Convert for Email Preview

```bash
node html-to-image.js ../email-templates/email-01-founder.html preview.jpg \
  --format=jpeg \
  --quality=90 \
  --width=800 \
  --height=auto
```

### Generate High-Quality Archive

```bash
node html-to-image.js ../email-templates/email-template-dark.html archive.png \
  --width=1200 \
  --height=2000 \
  --full-page
```

## Troubleshooting

### Issue: Command not found
- Make sure you're in the `/funnel/script` directory
- Run `npm install` first to install dependencies

### Issue: Puppeteer errors on Linux
```bash
# Install additional dependencies on Linux
sudo apt-get install libx11-xcb1 libxss1 libnss3
```

### Issue: Slow conversion
- This is normal for the first run (Chromium download)
- Subsequent runs use cached browser
- For batch operations, consider the Node.js version and system resources

## File Locations

```
/funnel/
├── script/
│   ├── html-to-image.js          ← CLI version
│   ├── html-to-image-web.js      ← Web UI version
│   ├── package.json              ← Dependencies
│   └── README.md                 ← This file
├── email-templates/
│   ├── email-01-founder.html
│   ├── email-02-intrapreneur.html
│   ├── email-template-dark.html
│   └── email-template-light.html
```

## Output

Converted images are saved in the current directory or specified location with the requested format extension.

Example outputs:
```
founder-email.png
intrapreneur-preview.jpg
dark-template.webp
```

## Performance Tips

1. **Smaller dimensions** = Faster conversion
2. **JPEG format** = Slightly faster than PNG
3. **Full page disabled** = Faster conversion
4. **Reuse browser session** = If converting multiple files, consider implementing batch processing

## Security Notes

- Only HTML files are accepted in web UI
- Temporary files are stored in system temp directory
- Consider running on restricted network if processing sensitive templates

## License

MIT - Part of Haiba Enterprises email campaign system
