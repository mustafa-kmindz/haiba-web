# Multi-Persona Email Template - Implementation Guide

## Overview
This flexible email template adapts to 4 different target audiences without changing the HTML file structure. Change ONE variable and the entire email personalization updates.

---

## 🎯 The 4 Personas

### 1. **FOUNDER** (Startup Founders)
- **Focus**: Idea validation, speed to market, capital efficiency
- **Pain Point**: "Ideas stay ideas"
- **Solution Focus**: Prototype ownership, time-to-market
- **Persona ID**: `founder`

### 2. **INTRAPRENEUR** (Internal Innovation Teams)
- **Focus**: Internal approval, proof-of-concept for budget
- **Pain Point**: "Show me proof before I approve budget"
- **Solution Focus**: Board-ready metrics, executive backing
- **Persona ID**: `intrapreneur`

### 3. **COMPANY** (Small-Mid Size Companies)
- **Focus**: Digital transformation pilots, low-risk testing
- **Pain Point**: "Full investment feels risky without testing"
- **Solution Focus**: Pilot validation, minimal risk
- **Persona ID**: `company`

### 4. **TECH-TEAM** (Engineering Teams)
- **Focus**: Feature validation, killing assumptions, backlog prioritization
- **Pain Point**: "We're building features nobody wants"
- **Solution Focus**: User-validated features, data-driven decisions
- **Persona ID**: `tech-team`

---

## 🚀 How to Use

### Method 1: Direct HTML File Editing (Simplest)
1. Open `email-template-multipersona.html`
2. Find line 575 (or search for `const PERSONA = "founder"`)
3. Change the value to one of:
   - `"founder"`
   - `"intrapreneur"`
   - `"company"`
   - `"tech-team"`
4. Save and send
5. Repeat for each recipient segment

**Example:**
```javascript
const PERSONA = "intrapreneur"; // This email is for an intrapreneur
```

### Method 2: Email Service Integration (Recommended)
If you use email marketing tools (Mailchimp, HubSpot, Klaviyo, etc.):

```javascript
const PERSONA = "{{PERSONA_TYPE}}"; // Merge tag from your CRM
```

Then in your email system, segment recipients:
- Tag: `PERSONA_TYPE = founder`
- Tag: `PERSONA_TYPE = intrapreneur`
- Tag: `PERSONA_TYPE = company`
- Tag: `PERSONA_TYPE = tech-team`

### Method 3: Dynamic Landing Page
Host this file and use URL parameters:
- `https://haiba.co/funnel/email.html?persona=founder`
- `https://haiba.co/funnel/email.html?persona=intrapreneur`
- etc.

Add this to the script:
```javascript
const urlParams = new URLSearchParams(window.location.search);
const PERSONA = urlParams.get('persona') || "founder";
```

---

## 📊 What Changes By Persona

| Element | Founder | Intrapreneur | Company | Tech Team |
|---------|---------|--------------|---------|-----------|
| **Hero Icon** | 💡 | 🎯 | 🔄 | ⚙️ |
| **Hero Title** | "From Mind to Market" | "Prove It. Get Funded." | "Test Before You Invest" | "Backlog ➜ Validated Features" |
| **Greeting** | "Builder" | "Innovator" | "Leader" | "Team" |
| **Problem Focus** | "Ideas stay ideas" | "Nobody believes without proof" | "Investment without proof feels risky" | "What do users actually want?" |
| **Feature Values** | Investment, Time, Satisfaction, Ownership | Board Approval %, Weeks, Metrics, Confidentiality | Risk Level, Weeks, Ownership, Scale-ready | User Feedback, MVP Weeks, Kill Assumptions, Build What Matters |
| **Roadmap Steps** | Share → Build → Validate → Launch | Document → Prototype → Test → Present | Plan → Build → Pilot → Decide | Select → Build → Release → Learn |
| **Trust Stats** | 150+ ideas, $2B+ raised, 89% production | 65+ projects, $500M+ approved, 92% funded | 120+ pilots, 85% production, 6-month payback | 80+ features, 72% core features, 3x faster |
| **CTA Text** | "Build My Prototype Now" | "Get Your POC Now" | "Start My Innovation Pilot" | "Start Feature Validation" |

---

## 💡 Best Practices

### Segmentation Strategy
1. **Email List Audit**: Review your contacts
   - Do they have their own startup? → `founder`
   - Do they work in a company with ideas? → `intrapreneur`
   - Are they decision-makers at mid-size companies? → `company`
   - Are they engineering managers/tech leads? → `tech-team`

2. **A/B Testing**
   - Send Founder version to 30% of unknown segment
   - Track: Open rate, Click rate, Form completions
   - Winner gets used for rest of segment

3. **CRM Tagging**
   Tag your CRM contacts with `persona:founder`, `persona:intrapreneur`, etc.
   Then map in your email tool's merge tags

### Email Service Examples

**Mailchimp:**
```
Replace "founder" with merge tag: *|PERSONA|*
In CSV upload: persona column with values
```

**HubSpot:**
```
Property: "Persona"
Create contacts property with dropdown: Founder, Intrapreneur, Company, Tech Team
Use in email: {{contact.persona}}
```

**Gmail/Direct Send:**
```
Save 4 versions of this file:
- email-founder.html
- email-intrapreneur.html
- email-company.html
- email-techteam.html

Send appropriate version to each segment
```

---

## 🔧 Testing

### Test All 4 Versions
1. Open the HTML file in a browser
2. Open Browser Console (F12 or Cmd+Option+I)
3. Paste each:
   ```javascript
   personalize('founder')
   personalize('intrapreneur')
   personalize('company')
   personalize('tech-team')
   ```
4. Verify each version shows correct:
   - Hero section
   - Greeting
   - Problem/Solution
   - Features
   - Roadmap
   - Trust stats
   - CTA

### Email Client Testing
Send to:
- Gmail
- Outlook
- Apple Mail
- Mobile (iOS Mail, Gmail mobile)

Test with each persona value to ensure rendering is consistent.

---

## 📈 Tracking & Results

### Recommended Metrics
Track these for each persona:
1. **Open Rate** - Which resonates?
2. **Click Rate** - Which CTA works?
3. **Conversion** - Which leads to meetings?
4. **Meeting-to-Customer** - Which converts best?

### Expected Performance
- **Founder**: High urgency, 25-35% conversion to call
- **Intrapreneur**: Medium urgency, 15-25% conversion  
- **Company**: Long sales cycle, 8-15% conversion
- **Tech Team**: High engagement if right fit, 20-30% conversion

---

## 🛠️ Customization

### Add Your Own Persona
Edit the `personaConfig` object:

```javascript
personaConfig.mynewpersona = {
    heroIcon: "🎨",
    heroTitle: "Your Title Here",
    heroSubtitle: "Your subtitle",
    greeting: "Hey there, CustomPerson!",
    intro: "Your custom intro with <strong>bold</strong> text",
    ctaPre: "Your CTA Pre-text",
    ctaButton: "Your Button Text →",
    ctaPost: "Your post text"
};

// Then use it:
const PERSONA = "mynewpersona";
```

### Styling Changes
All CSS is in the `<style>` tag. Key classes to customize:
- `.hero` - Top section background
- `.problem-solution` - Problem/solution boxes
- `.features-grid` - Stats boxes
- `.cta-button` - Call-to-action button
- `.trust-box` - Trust/social proof section

---

## ✅ Checklist Before Sending

- [ ] Chosen a segmentation strategy
- [ ] Tagged CRM contacts with persona
- [ ] Tested all 4 versions in browser
- [ ] Sent test emails to personal accounts
- [ ] Checked rendering on mobile
- [ ] Set up tracking for open/click rates
- [ ] Set up conversion tracking
- [ ] Created 2-week analysis plan

---

## 📞 Support

Questions? Contact: enquiry@haiba.co
