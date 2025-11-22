# Haiba Email Templates - User Guide

## Overview
Two professionally designed, responsive email templates for Haiba Enterprises' funnel marketing campaign. Both templates follow the company's brand guidelines and are optimized for all major email clients.

## Templates

### 1. email-template-dark.html
**Theme:** Dark Mode Premium
- **Color Scheme:** Dark background (#0f172a) with green & cyan accents
- **Vibe:** Premium, professional, modern
- **Best For:** B2B audiences, tech-savvy recipients, evening sends
- **Key Colors:** #10b981 (green), #06b6d4 (cyan), #0f172a (dark)

### 2. email-template-light.html
**Theme:** Light Mode Clean
- **Color Scheme:** Light background (#f8fafc) with blue accents
- **Vibe:** Professional, accessible, trustworthy
- **Best For:** General audiences, morning sends, maximum readability
- **Key Colors:** #1e40af (primary blue), #0891b2 (cyan), #f8fafc (light)

## Both Templates Include

✅ **Responsive Design**
- Mobile-first approach
- Works on all screen sizes
- Tested on major email clients (Gmail, Outlook, Apple Mail, etc.)

✅ **Optimized Content**
- "From Mind to Market" headline
- "Your Idea Made Real in 4 Weeks" tagline
- Problem/Solution comparison
- 4-Week transformation roadmap
- Trust & credibility proof points
- Clear CTA button with fallback text

✅ **Email Client Compatibility**
- Inline styles for maximum compatibility
- No external dependencies
- No external images required
- All graphics embedded (CSS gradients, icons via emoji)
- Fallback colors for Outlook

✅ **Brand Consistency**
- Uses Haiba's official color palette
- Matches website design system
- Professional typography
- Proper spacing and hierarchy

## How to Use

### Method 1: Copy & Send (Recommended)

1. **Open the template** in your text editor or browser
2. **Select all content** (Ctrl+A / Cmd+A)
3. **Copy** the entire HTML
4. **Paste into your email client:**
   - Gmail: Paste in compose > Format as needed
   - Outlook: New Email > Insert > Online Pictures > (Paste HTML in source)
   - Mail Clients: Compose > Source/HTML view > Paste

### Method 2: Use as Email File

1. Save the file with `.html` extension
2. Open in your email client directly
3. Or upload to email marketing platform (Mailchimp, ConvertKit, etc.)

### Method 3: Email Marketing Platform

**For Mailchimp, ConvertKit, Klaviyo, etc.:**
1. Create new campaign
2. Select "Code Editor" or "HTML" option
3. Copy entire template HTML
4. Paste into editor
5. Test preview
6. Send

## Email Client Support

| Client | Dark | Light | Notes |
|--------|------|-------|-------|
| Gmail | ✅ | ✅ | Excellent support |
| Outlook | ✅ | ✅ | Some gradient limitations |
| Apple Mail | ✅ | ✅ | Full support |
| iPhone Mail | ✅ | ✅ | Responsive |
| Android Mail | ✅ | ✅ | Responsive |
| Thunderbird | ✅ | ✅ | Full support |
| Yahoo Mail | ✅ | ✅ | Good support |

## Customization Tips

### Change CTA Link
Find this line and replace the URL:
```html
<a href="https://haiba.co/funnel/landing.html" class="cta-button">
```

### Change Phone Number
Find and update:
```html
<a href="tel:+97333185642">📞 +973-33185642</a>
```

### Change Email Address
Find and update:
```html
<a href="mailto:enquiry@haiba.co">📧 enquiry@haiba.co</a>
```

### Update Copyright Year
Find and update:
```html
&copy; 2025 Haiba Enterprises. All rights reserved.
```

### Add Custom Content
- Add text between existing paragraphs
- Maintain font-size 15px for body copy
- Use `<strong>` tags for emphasis
- Keep line-height at 1.8 for readability

## Best Practices for Sending

### Before Sending:
1. ✅ Preview in multiple email clients (Gmail, Outlook, Apple Mail)
2. ✅ Test all links (CTA button, phone, email)
3. ✅ Check spam score (use tools like Mail-tester.com)
4. ✅ Verify text displays correctly
5. ✅ Check emoji rendering

### Sending Tips:
1. **Subject Line Suggestions:**
   - "Your $Million Idea Starts Here 💡"
   - "From Mind to Market - 4 Week Challenge"
   - "Turn Your Idea Into Reality"

2. **Send Time:** 
   - Dark template: 6-9 PM
   - Light template: 9-11 AM

3. **Preheader Text:**
   - "Your Idea. Our Execution. Shared Success."

4. **Unsubscribe:** 
   - Always include at bottom (legal requirement)
   - Currently included in template

### Testing:
- Send test email to Gmail, Outlook, Apple Mail
- Check on mobile and desktop
- Verify all buttons are clickable
- Confirm images/colors display correctly

## Technical Details

### File Sizes:
- Dark template: ~17 KB
- Light template: ~17 KB
- Both well within email size limits

### Encoding:
- UTF-8 (supports all characters)
- Emoji-compatible
- No external fonts required

### Dependencies:
- ✅ None - completely self-contained
- ✅ No CDN calls
- ✅ No tracking pixels (by default)
- ✅ No image downloads required

## Accessibility

Both templates include:
- ✅ Semantic HTML structure
- ✅ Readable color contrast
- ✅ Alt text where needed
- ✅ Responsive text sizing
- ✅ Clear hierarchy

## Troubleshooting

### Buttons Not Showing?
- Some email clients require `!important` flags
- Try copy-pasting into email client's HTML editor

### Colors Look Different?
- Different email clients render CSS differently
- Test in target clients before sending
- Dark mode templates look best in Gmail, Outlook

### Links Not Working?
- Verify URLs start with `http://` or `https://`
- Phone links need `tel:` prefix (included)
- Email links need `mailto:` prefix (included)

### Mobile Layout Issues?
- Check viewport meta tag is present
- Media queries are set at 600px breakpoint
- Adjust if sending to specific device type

## Questions or Issues?

Contact: enquiry@haiba.co
Phone: +973-33185642

---

**Last Updated:** October 27, 2025
**Template Version:** 1.0
**Compatible:** All modern email clients
