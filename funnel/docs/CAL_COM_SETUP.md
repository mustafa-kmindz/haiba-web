# 📅 Cal.com Booking Integration Setup Guide

## ✅ You've Completed Cal.com Setup!

If you've followed the 5 steps on Cal.com, you now have:
- ✅ Cal.com account created
- ✅ Calendar connected (Google/Outlook)
- ✅ "Free POC Kickoff Call" event type created
- ✅ Public booking link generated

---

## 🔧 Step 1: Get Your Cal.com Username & Link

1. **Log in to Cal.com**
2. **Go to "Settings" → "Profile"**
3. **Copy your username** (appears in URL: `cal.com/your-username`)
4. **Your booking link:** `https://cal.com/your-username/free-poc-kickoff-call`

---

## 📝 Step 2: Update booking.html

Open `funnel/booking.html` and find this line (around line 314):

```html
<iframe src="https://cal.com/your-username/free-poc-kickoff-call?embed=true" frameborder="0" scrolling="no" style="overflow: hidden;"></iframe>
```

**Replace `your-username` with your actual Cal.com username.**

Example:
```html
<iframe src="https://cal.com/mustafa/free-poc-kickoff-call?embed=true" frameborder="0" scrolling="no" style="overflow: hidden;"></iframe>
```

---

## 🌐 Step 3: Upload Files to Your Server

Upload these files to your `haiba-web/funnel/` directory:

```
funnel/
├── booking.html          ← NEW! (calendar booking page)
├── landing.html          ← UPDATED! (points to booking)
├── poc.html              ← UPDATED! (points to booking)
├── thank-you.html
├── email-template.html
├── process-lead.php
└── ... (other files)
```

---

## 🚀 Step 4: Test the Booking Flow

1. **Visit your landing page:**
   ```
   https://haiba.co/funnel/landing.html
   ```

2. **Click "Book Your Free Call"** button
   - Should navigate to `https://haiba.co/funnel/booking.html`

3. **Try booking a time slot:**
   - Calendar should load (embedded Cal.com)
   - Click a time slot
   - You'll be redirected to Cal.com to complete booking
   - Confirmation email sent automatically

4. **Check your Cal.com account:**
   - New booking should appear in your calendar
   - You'll get notification email

---

## 📧 Step 5: Mailerlite Integration (Optional)

If you want to automatically add booking details to Mailerlite when someone books:

### Option A: Cal.com Webhooks (Advanced)
```
1. Go to Cal.com Settings → Integrations → Webhooks
2. Add webhook URL pointing to your lead capture endpoint
3. Trigger: "Booking created"
4. Send to: https://haiba.co/funnel/capture-booking.php
```

### Option B: Manual Process (Recommended for Now)
1. When someone books, they get Cal.com confirmation email
2. Send them a follow-up email from Mailerlite with details
3. Manually check Cal.com for new bookings daily

---

## 🎯 Updated Funnel Flow

```
Email Campaign
    ↓
Landing Page (funnel/landing.html)
    ↓ CTA: "Book Your Free Call"
    ↓
Booking Page (funnel/booking.html)
    ↓
Cal.com Calendar (embedded)
    ↓ User selects time
    ↓
Cal.com Confirmation
    ↓
Automated Email + Calendar Invite
    ↓
Kickoff Call at scheduled time
    ↓
POC Build (2-4 weeks)
    ↓
Production Revenue
```

---

## 📊 What Changed

### Before (Form-Based)
- ❌ Form friction
- ❌ Manual follow-up required
- ❌ Higher drop-off rate
- ❌ No calendar integration

### After (Calendar-Based)
- ✅ Interactive & modern
- ✅ Automatic confirmations
- ✅ Calendar sends reminders
- ✅ Professional experience
- ✅ Higher booking rates (expected +40-60%)

---

## 🔗 Files Updated

| File | Change | Link |
|------|--------|------|
| `booking.html` | NEW | Calendar booking page |
| `landing.html` | Updated | CTA points to booking |
| `poc.html` | Updated | CTA points to booking |
| `thank-you.html` | No change | Still works for future |
| `process-lead.php` | No change | Still available if needed |

---

## 📱 Mobile Responsive

The booking calendar is fully responsive:
- Desktop: Full 600px calendar
- Tablet: Optimized layout
- Mobile: Scrollable, touch-friendly

---

## ✨ Pro Tips

1. **Set your availability:**
   - Go to Cal.com Settings
   - Set working hours (Mon-Fri, 10am-5pm recommended)
   - Add buffer time between calls (15-30 min)

2. **Customize event details:**
   - Add preparation tips
   - Include your timezone
   - Add Google Meet link (auto-generates)

3. **Use Cal.com reminder emails:**
   - Go to Event Type Settings
   - Enable "Send reminders"
   - 24 hours before call

4. **Track bookings:**
   - Check Cal.com dashboard daily
   - Note: You'll get email notification per booking
   - Export to see trends

---

## 🆘 Troubleshooting

### Calendar Not Loading?
- Check Cal.com is in "public" mode (not draft)
- Verify username is correct in iframe src
- Clear browser cache and reload

### Not Receiving Booking Notifications?
- Check Cal.com notification settings
- Add your email to "notifications"
- Check spam folder

### Time Zone Wrong?
- Go to Cal.com Settings → Calendar
- Verify timezone is set correctly
- Update your availability to match

### Meeting Link Not Generating?
- Go to Event Type → Location
- Select Google Meet or Zoom
- Make sure Cal.com is authorized to access your account

---

## 🎉 You're Live!

Your booking system is now live. Next steps:

1. ✅ Share `landing.html` with your network
2. ✅ Update email campaigns to link to landing page
3. ✅ Monitor bookings in Cal.com
4. ✅ Follow up with kickoff calls
5. ✅ Build POCs
6. ✅ Convert to production revenue

---

## 📞 Support

- **Cal.com Docs:** https://cal.com/docs
- **Cal.com Support:** support@cal.com
- **Your booking:** `https://cal.com/your-username/free-poc-kickoff-call`

---

**Version:** 1.0  
**Date:** October 27, 2025  
**Status:** ✅ Ready to Launch

🚀 **Happy booking calls!**
