#!/usr/bin/env node

/**
 * HTML to Image Converter
 * Converts HTML email templates or remote pages to PNG/JPEG/WebP images
 * 
 * Usage:
 *   node html-to-image.js <input-file.html|url> [output-file.png] [options]
 *   node html-to-image.js ../email-templates/email-01-founder.html output.png
 *   node html-to-image.js ../email-templates/email-01-founder.html output.jpg --format=jpeg --quality=95
 *   node html-to-image.js https://example.com output.png
 *   node html-to-image.js https://example.com/page output.jpg --format=jpeg --quality=95
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

// Configuration
const DEFAULT_FORMAT = 'png'; // png, jpeg, webp
const DEFAULT_QUALITY = 90;
const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 1200;

async function convertHtmlToImage() {
    const inputFile = args._[0];
    const outputFile = args._[1];

    // Validation
    if (!inputFile) {
        console.error('❌ Error: Input HTML file or URL is required');
        console.error('\nUsage:');
        console.error('  node html-to-image.js <input.html|url> [output.png] [options]');
        console.error('\nExamples:');
        console.error('  node html-to-image.js ../email-templates/email-01-founder.html output.png');
        console.error('  node html-to-image.js ../email-templates/email-02-intrapreneur.html output.jpg --format=jpeg --quality=95');
        console.error('  node html-to-image.js https://example.com output.png');
        console.error('  node html-to-image.js https://example.com/page output.jpg --format=jpeg --quality=95');
        console.error('\nOptions:');
        console.error('  --format=png|jpeg|webp     Output format (default: png)');
        console.error('  --quality=1-100            Image quality (default: 90)');
        console.error('  --width=px                 Viewport width (default: 800)');
        console.error('  --height=px                Viewport height (default: 1200)');
        console.error('  --full-page                Capture full scrollable height');
        console.error('  --crop-to-content          Crop to .wrapper element only (no background)');
        console.error('  --timeout=ms               Navigation timeout in milliseconds (default: 30000)');
        process.exit(1);
    }

    // Detect if input is a URL or file path
    const isUrl = /^https?:\/\//.test(inputFile);
    
    // Create output directory if it doesn't exist
    const scriptDir = path.dirname(__filename);
    const defaultOutputDir = path.join(scriptDir, 'output');
    
    // Determine output path
    let outputPath;
    if (outputFile) {
        // If output file is just a filename (no path), put it in output folder
        if (!path.isAbsolute(outputFile) && !outputFile.includes(path.sep)) {
            outputPath = path.resolve(defaultOutputDir, outputFile);
        } else {
            outputPath = path.resolve(outputFile);
        }
    } else {
        // Default to output folder with sanitized name
        let defaultFileName;
        if (isUrl) {
            // For URLs, use domain name or sanitize the URL
            const urlObj = new URL(inputFile);
            defaultFileName = urlObj.hostname.replace(/\./g, '-') + '.png';
        } else {
            defaultFileName = `${path.parse(inputFile).name}.png`;
        }
        outputPath = path.resolve(defaultOutputDir, defaultFileName);
    }

    // Check if input file exists (only for local files)
    if (!isUrl && !fs.existsSync(path.resolve(inputFile))) {
        console.error(`❌ Error: Input file not found: ${path.resolve(inputFile)}`);
        process.exit(1);
    }

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${outputDir}`);
    }

    // Parse options
    const format = (args.format || DEFAULT_FORMAT).toLowerCase();
    const quality = Math.min(100, Math.max(1, parseInt(args.quality) || DEFAULT_QUALITY));
    const width = parseInt(args.width) || DEFAULT_WIDTH;
    const height = parseInt(args.height) || DEFAULT_HEIGHT;
    const fullPage = args['full-page'] || false;
    const cropToContent = args['crop-to-content'] || false;
    const timeout = parseInt(args.timeout) || 30000;

    // Validate format
    if (!['png', 'jpeg', 'webp'].includes(format)) {
        console.error(`❌ Error: Invalid format. Supported formats: png, jpeg, webp`);
        process.exit(1);
    }

    try {
        console.log(`📄 Converting HTML to image...`);
        console.log(`   Input:  ${isUrl ? '(URL) ' : '(File) '}${inputFile}`);
        console.log(`   Output: ${outputPath}`);
        console.log(`   Format: ${format.toUpperCase()}`);
        console.log(`   Quality: ${quality}`);
        console.log(`   Dimensions: ${width}x${height}${fullPage ? ' (full page)' : ''}`);

        // Launch browser
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        // Set viewport
        await page.setViewport({
            width: width,
            height: height,
            deviceScaleFactor: 1
        });

        // Load HTML from URL or file
        const navigationUrl = isUrl ? inputFile : `file://${path.resolve(inputFile)}`;
        await page.goto(navigationUrl, { waitUntil: 'networkidle0', timeout: timeout });

        // If crop-to-content, get the actual content dimensions
        let screenshotOptions = {
            path: outputPath,
            fullPage: fullPage
        };

        if (cropToContent) {
            // Get the bounding box of the wrapper element
            const bbox = await page.evaluate(() => {
                const wrapper = document.querySelector('.wrapper');
                if (wrapper) {
                    const rect = wrapper.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top,
                        width: rect.width,
                        height: rect.height
                    };
                }
                return null;
            });

            if (bbox) {
                screenshotOptions.clip = bbox;
                console.log(`   Cropped to content: ${bbox.width}x${bbox.height}`);
            }
        }

        // Add format-specific options
        if (format === 'jpeg') {
            screenshotOptions.type = 'jpeg';
            screenshotOptions.quality = quality;
        } else if (format === 'webp') {
            screenshotOptions.type = 'webp';
            screenshotOptions.quality = quality;
        } else {
            screenshotOptions.type = 'png';
            // PNG doesn't have quality setting, but we'll keep it consistent
        }

        // Take screenshot
        await page.screenshot(screenshotOptions);

        await browser.close();

        // Get file size
        const stats = fs.statSync(outputPath);
        const fileSizeKB = (stats.size / 1024).toFixed(2);

        console.log(`✅ Success! Image saved: ${outputPath}`);
        console.log(`   File size: ${fileSizeKB} KB`);

    } catch (error) {
        console.error(`❌ Error during conversion:`, error.message);
        process.exit(1);
    }
}

// Run conversion
convertHtmlToImage();
