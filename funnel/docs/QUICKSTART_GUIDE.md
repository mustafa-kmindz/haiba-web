# HAIBA POC FUNNEL - QUICK START GUIDE

## 🚀 Your Assets Are Ready!

### Files Created:
1. ✅ **email-template.html** - Email campaign template for Mailerlite
2. ✅ **landing.html** - Lead capture landing page
3. ✅ **poc.html** - Detailed POC information page
4. ✅ **thank-you.html** - Post-submission confirmation
5. ✅ **process-lead.php** - Form processing backend
6. ✅ **POC_MARKETING_STRATEGY.md** - Complete marketing guide

---

## 📧 Email Template Usage

### Step 1: Copy Email Content
```
Open: /email-template.html
Copy: All HTML content (Ctrl+A → Ctrl+C)
```

### Step 2: Create Campaign in Mailerlite
```
1. Login to Mailerlite.com
2. Campaigns → New Campaign → Code Editor
3. Paste the HTML you copied
4. Personalize:
   - Replace "Hi there!" with "{$subscriber.name}"
   - Update CTA link to: https://yourdomain.com/landing
5. Test on mobile
6. Schedule and send
```

### Step 3: Email Subject Line Variations
- "Have an idea? We'll build it for FREE."
- "Turn Your Idea Into Reality (No Cost)"
- "From Dream to Demo: Free POC Inside"
- "Your Innovation Idea Deserves a Chance"
- "See Your Idea Working in 3 Weeks (Free)"

---

## 🌐 Landing Page Setup

### Live at:
```
https://yourdomain.com/landing.html
```

### Key Features:
- ✅ Hero section with clear value prop
- ✅ Idea capture form (7 fields)
- ✅ 6-phase journey timeline
- ✅ Social proof & success metrics
- ✅ Funnel tracking built-in
- ✅ Mobile responsive

### Form Fields Collected:
1. Your Name
2. Work Email
3. Company/Startup Name
4. **Your Idea Title** (NEW - what they're building)
5. **Idea Description** (NEW - 2-3 sentences)
6. **POC Scope** (NEW - what to build)
7. **Timeline** (NEW - when go live)
8. Phone (optional)

---

## 📋 POC Details Page

### Live at:
```
https://yourdomain.com/poc.html
```

### Use For:
- Link in email as "Learn more about POC"
- Retargeting (show to email non-clickers)
- SEO traffic (organic search: "free MVP", "POC")

### Content Includes:
- 6-phase journey visual
- "What's Included in FREE POC" checklist
- 3 success stories (editable)
- 8-question FAQ section
- Final CTA to landing page

---

## ✅ Thank You Page

### Triggered at:
```
https://yourdomain.com/thank-you.html?email=user@company.com
```

### What Happens:
1. Form submitted on landing.html
2. Data sent to process-lead.php
3. Confirmation email sent to user
4. Redirect to thank-you.html
5. Sales team notified via Mailerlite

### Next Steps Message:
- Initial review (24 hours)
- Kickoff call (1 week)
- POC development (2-4 weeks)
- Live demo
- Go/no-go decision
- Production planning

---

## 🔧 Backend Setup (process-lead.php)

### Required:
1. **Mailerlite API Key**
   ```
   Login: mailerlite.com → Settings → Integrations → API
   Copy: Your API Key
   ```

2. **Mailerlite Group ID**
   ```
   Create new group/list called "POC Inquiries"
   Copy: Group ID
   ```

### Configuration:
Edit `process-lead.php` line 97-98:
```php
$api_key = "YOUR_MAILERLITE_API_KEY";
$group_id = "YOUR_MAILERLITE_GROUP_ID";
```

### Or Use Environment Variables:
```bash
export MAILERLITE_API_KEY="your_key_here"
export MAILERLITE_GROUP_ID="your_group_id_here"
```

### What It Does:
- Validates form submission
- Adds lead to Mailerlite
- Sends confirmation email
- Logs locally (/leads_log/)
- Tracks funnel events

---

## 📊 Mailerlite Automation Setup

### Create 3 Email Sequences

#### Sequence 1: "Startup POC Track"
```
Trigger: Subscribed to "POC Inquiries" + Industry = Startup
Email 1 (immediate): Welcome + next steps
Email 2 (day 3): Success story from founder
Email 3 (day 7): Feature highlight + deadline
```

#### Sequence 2: "Intrapreneur Track"
```
Trigger: Subscribed to "POC Inquiries" + Industry = Corporate
Email 1 (immediate): How to present to leadership
Email 2 (day 3): Case study: Intrapreneur wins
Email 3 (day 7): Board-ready presentation tips
```

#### Sequence 3: "Company POC Track"
```
Trigger: Subscribed to "POC Inquiries" + Company size = Medium/Large
Email 1 (immediate): ROI calculator
Email 2 (day 3): Risk mitigation story
Email 3 (day 7): Direct sales call offer
```

---

## 🎯 Recommended Sending Schedule

### Week 1: Pilot
- Segment: 500 high-quality emails (your best contacts)
- Email template: email-template.html
- Monitor: Open rate, click rate, form submissions

### Week 2: Optimize
- Analyze: Which subject line worked best?
- Tweak: Update POC landing page based on feedback
- Prepare: Set up automation sequences

### Week 3: Scale
- Send to: All 1,000 emails
- Segment: By role (CEO, CTO, Founder, etc.)
- Test: Multiple subject lines (A/B test)

### Week 4+: Continuous
- Monthly sends: 5,000 targeted emails
- Retargeting: Ads to page visitors (no form submit)
- Content: Blog posts about POC success stories

---

## 💡 Email Subject Lines (Ready to Use)

### For Startup Founders:
1. "Have an idea? We'll build it for FREE."
2. "See Your Startup Idea Working in 3 Weeks"
3. "Validate Your Startup Idea (No Risk)"
4. "From Napkin Sketch to Working Prototype"
5. "Your Startup Deserves a Free POC"

### For Intrapreneurs:
1. "Turn Your Innovation Idea Into a Board Presentation"
2. "Free Demo That Gets Internal Approval"
3. "What If Someone Else Pitches Your Idea First?"
4. "Impress Your CEO With a Working Prototype"
5. "Innovation Ideas Need Proof. We'll Build It."

### For Established Companies:
1. "Test Your Digital Strategy Before Full Investment"
2. "Free Pilot: Reduce Risk, Validate Demand"
3. "Proof-of-Concept (No Strings, No Cost)"
4. "One Free Pilot Could Save Millions"
5. "What If Your Next Big Idea Started Free?"

---

## 📈 Expected Results (First 3 Months)

### Conservative Estimate:
```
Emails Sent:          5,000
Delivered:            4,900 (98%)
Opened:             1,225 (25%)
Clicked:              183 (14.9%)
Landed:               183 (100%)
Viewed Form:          118 (64%)
Submitted:             18 (15%)

CONVERSION RATE:     0.36%
Leads per Month:     6 (average)
POCs Started:        4-5/month
Revenue:            $240K-$500K (annualized)
```

### Optimistic Estimate:
```
Emails Sent:          5,000
Delivered:            4,900 (98%)
Opened:             1,470 (30%)
Clicked:              250 (17%)
Landed:               250 (100%)
Viewed Form:          180 (72%)
Submitted:             30 (16.7%)

CONVERSION RATE:     0.6%
Leads per Month:     10 (average)
POCs Started:        7-8/month
Revenue:            $420K-$800K (annualized)
```

---

## 🔄 Weekly Operations Checklist

### Monday
- [ ] Review new leads from Mailerlite
- [ ] Check form submissions from weekend
- [ ] Prepare sales outreach emails
- [ ] Review engagement metrics

### Wednesday
- [ ] Send 1st follow-up to non-openers
- [ ] Analyze open/click rates
- [ ] Test new subject line variation
- [ ] Update POC landing page based on feedback

### Friday
- [ ] Compile weekly metrics report
- [ ] Check sales team progress (kickoff calls)
- [ ] Identify high-performing email variants
- [ ] Plan next week's sends

### End of Month
- [ ] Full funnel analysis (see template below)
- [ ] ROI calculation
- [ ] Optimization recommendations
- [ ] Plan next month's testing

---

## 📊 Metrics Dashboard

### Daily Tracking
```
Landing Page Visitors: ____
Form Views: ____
Form Submissions: ____
Daily Conversion Rate: ____

POC Kickoff Calls: ____
POCs Started: ____
POCs Completed: ____
Production Conversions: ____
```

### Monthly Dashboard
```
FUNNEL METRICS:
- Emails Sent: ____
- Delivery Rate: ____% (Target: 98%+)
- Open Rate: ____% (Target: 25%+)
- Click Rate: ____% (Target: 12%+)
- Form Conversion: ____% (Target: 15%+)
- Overall Conversion: ____% (Target: 0.5%+)

ENGAGEMENT:
- Avg Page Time: ____ mins
- Scroll Depth: ____%
- Form Completion Time: ____ mins
- Field Drop-Off: ____

SALES:
- Leads This Month: ____
- Kickoff Calls Completed: ____
- POCs Started: ____
- POCs Completed: ____
- Production Conversions: ____
- Revenue: $____

ROI:
- Email Cost: $____
- Revenue Generated: $____
- ROI: ____% (Target: 500%+)
```

---

## 🎁 Launch Week Timeline

### Monday
- [ ] Review all files (email, landing, POC, thank-you pages)
- [ ] Test form submission (try submitting test lead)
- [ ] Verify Mailerlite integration
- [ ] Send internal test emails

### Tuesday
- [ ] Get feedback from team
- [ ] Make final adjustments
- [ ] Prepare Mailerlite list/segments
- [ ] Upload email template to Mailerlite

### Wednesday
- [ ] Send pilot to 100 internal contacts (trusted network)
- [ ] Monitor for bounces/issues
- [ ] Collect feedback

### Thursday
- [ ] Optimize based on feedback
- [ ] Prepare retargeting ads
- [ ] Brief sales team
- [ ] Set up automation sequences

### Friday
- [ ] Launch to full 500-person pilot list
- [ ] Monitor open rates (look for 20%+ first day)
- [ ] Track form submissions
- [ ] Celebrate! 🎉

---

## 🚨 Troubleshooting

### Form Not Submitting?
1. Check browser console (F12) for errors
2. Verify process-lead.php is accessible
3. Check file permissions (644 for PHP file)
4. Test with different browser

### Emails Not Arriving?
1. Check Mailerlite spam folder
2. Verify sender email is authenticated (SPF/DKIM)
3. Check email list for suppressions
4. Test with personal email first

### Thank-You Page Not Loading?
1. Verify thank-you.html exists
2. Check path in process-lead.php (line: redirect)
3. Test URL manually in browser
4. Check for JavaScript errors

### Mailerlite Not Receiving Leads?
1. Verify API key is correct
2. Check Group ID exists and is correct
3. Test API with Postman
4. Check server error logs

---

## 📞 Support

For questions or issues:
- Email: enquiry@haiba.co
- Phone: +973-33185642
- Check logs: `/leads_log/` for daily lead backups

---

## ✨ Success Tips

1. **Personalize Everything** - Use names, reference their ideas
2. **Follow Up Fast** - 24-hour kickoff call = 80%+ conversion
3. **Show Not Tell** - Live demo > words
4. **Celebrate POC Launches** - Create momentum
5. **Share Success Stories** - Real outcomes resonate
6. **Get Feedback** - Continuously optimize subject lines
7. **Be Genuine** - This is a real offer (free POC) - customers sense authenticity

---

**Ready to Launch? Let's Go! 🚀**

Questions? → enquiry@haiba.co
