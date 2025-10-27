# Email Campaign Setup - Quick Start (5 Minutes)

## What You Have Now ✅

### 📧 Two Complete Email Solutions:

#### **Option A: 4 Separate Standalone Files** (Best for A/B Testing)
- `email-01-founder.html` - For startup founders
- `email-02-intrapreneur.html` - For corporate innovators
- `email-03-company.html` - For mid-market leaders
- `email-04-tech-team.html` - For engineering teams

**Use this if**: You want to A/B test which persona converts best

#### **Option B: 1 Flexible Template** (Best for CRM Integration)
- `email-template-multipersona.html` - One template with 4 personas

**Use this if**: You have a CRM that can handle dynamic variables

---

## 🚀 Get Started (Pick One Path)

### Path A: Send 4 Variants to Test (Recommended First Step)

**Step 1: Pick Your Test Group**
- Get 20 emails (5 per persona)
- Or use your existing list and divide into 4 groups

**Step 2: Send Each Variant**
```
Group 1 (5 emails) → email-01-founder.html
Group 2 (5 emails) → email-02-intrapreneur.html
Group 3 (5 emails) → email-03-company.html
Group 4 (5 emails) → email-04-tech-team.html
```

**Step 3: Track Performance**
- Open rates
- Click rates
- Form submissions
- Meeting bookings

**Step 4: Pick Winner** (after 7-14 days)
- Use highest-performing variant for next batch

---

### Path B: Use Dynamic Template (For CRM Users)

**Step 1: Set Up CRM Tags**
- Tag each contact: `persona:founder`, `persona:intrapreneur`, etc.

**Step 2: Upload Flexible Template**
- Use `email-template-multipersona.html`
- Replace `const PERSONA = "founder"` with merge tag: `{{PERSONA}}`

**Step 3: Send**
- Template automatically adjusts per recipient

---

## 📋 Quick Reference - Which Email For Which Person?

| Contact Type | Use This File | How to Spot Them |
|--------------|--------------|-----------------|
| **Startup Founder** | email-01-founder.html | "Founder," "Co-founder," "CEO" at <5 person company |
| **Corporate Innovator** | email-02-intrapreneur.html | Manager in Innovation/R&D/Digital at 100+ company |
| **Business Leader** | email-03-company.html | CEO/Owner at 20-500 person company |
| **Tech Leader** | email-04-tech-team.html | VP Eng, Engineering Manager, "Tech Lead" |

---

## 📊 Key Metrics to Watch

| Metric | What It Tells You | Target Range |
|--------|------------------|--------------|
| **Open Rate** | If subject line works | 15-35% |
| **Click Rate** | If message resonates | 4-15% |
| **Form Submission** | If CTA converts | 1-5% |
| **Meeting Booked** | If truly qualified | 0.5-2% |

---

## 📧 Subject Line Ideas (By Persona)

**Founder**: 
- "Your MVP in 4 weeks (for $0)"
- "Ready to launch?"

**Intrapreneur**: 
- "How to get your innovation funded"
- "Board-ready POC in 4 weeks?"

**Company**: 
- "Test your idea before betting big"
- "Innovation without the risk"

**Tech Team**: 
- "Stop building features nobody wants"
- "Real user data in 4 weeks"

---

## ✅ Pre-Send Checklist (2 Min)

- [ ] Tested email in Gmail (desktop)
- [ ] Tested email on mobile
- [ ] All links work
- [ ] Images load
- [ ] Subject line ready
- [ ] Tracking codes set up
- [ ] Analytics ready
- [ ] Test email sent to yourself first

---

## 🎯 Success Criteria

**Week 1**: Email renders correctly in all clients  
**Week 2**: 20%+ open rate, 5%+ click rate  
**Week 3**: 1%+ form submissions  
**Week 4**: 0.5%+ meeting bookings  

---

## 📞 If Something Doesn't Work

**Email not rendering?**
- Check in Gmail, Outlook, Apple Mail
- Likely CSS issue
- Use "view in browser" or "view in email client" option

**Links not working?**
- Verify URLs in CTA button
- Test each link
- Check your landing page URLs

**Low open rates?**
- Try different subject line
- Send at different time (Tue-Thu, 10am-2pm best)
- Check if emails going to spam

**Low click rates?**
- CTA may not resonate with persona
- Try different variant with that group
- Review copy for alignment

---

## 📈 Next Steps (After Testing)

1. **Day 7**: Check initial open/click rates
2. **Day 14**: Full performance analysis
3. **Day 21**: Decide which variant to scale
4. **Day 28**: Scale winner to full list
5. **Ongoing**: Continue segmenting for new contacts

---

## 🔗 Links

**Your 4 Email Files**:
```
/funnel/email-01-founder.html
/funnel/email-02-intrapreneur.html
/funnel/email-03-company.html
/funnel/email-04-tech-team.html
```

**Guides**:
```
/funnel/docs/AB_TESTING_GUIDE.md - Full testing strategy
/funnel/docs/EMAIL_VARIANTS_COMPARISON.md - Detailed comparison
/funnel/docs/MULTIPERSONA_EMAIL_GUIDE.md - Flexible template guide
/funnel/docs/persona_mapping.csv - CRM reference
```

**Landing Pages**:
```
Founder: https://haiba.co/funnel/landing.html?persona=founder
Intrapreneur: https://haiba.co/funnel/landing.html?persona=intrapreneur
Company: https://haiba.co/funnel/landing.html?persona=company
Tech Team: https://haiba.co/funnel/landing.html?persona=tech-team
```

---

## 💡 Pro Tips

1. **Personalize names** - "Hi John" > "Hey there" (20-30% better open rates)
2. **Mobile first** - 60%+ opens on mobile, design is mobile-responsive ✅
3. **Single CTA** - Only one main button (not multiple links)
4. **Best send times** - Tuesday-Thursday, 10am-12pm
5. **Follow up** - 40% of opens happen after 2-3 sends

---

**Ready to launch?** Pick Option A or B above and send your first batch! 🚀

Questions? See the detailed guides in `/funnel/docs/`
