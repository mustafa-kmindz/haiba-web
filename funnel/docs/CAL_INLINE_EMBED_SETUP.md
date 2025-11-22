# 📅 Cal.com Inline Embed Setup - Quick Start

## ✅ What You Have

The `booking.html` now includes a **native Cal.com inline embed** instead of an iframe.

**Benefits of inline embed over iframe:**
- ✅ Better performance
- ✅ Month view calendar
- ✅ More interactive
- ✅ Better mobile experience
- ✅ Smoother animations
- ✅ Native Cal.com styling

---

## 🔧 Setup (2 Steps Only!)

### Step 1: Get Your Cal.com Info

**From your Cal.com account:**

1. Go to **Settings → Profile**
2. Copy your **username** (from URL bar: `cal.com/your-username`)
3. Go to **Event Types → Free POC Kickoff Call**
4. Copy the **event slug** from the URL

**Example:**
- Username: `mustafa-kkk`
- Event slug: `free-poc-kickoff-call`
- Full link: `mustafa-kkk/free-poc-kickoff-call`

### Step 2: Update booking.html

**Find line ~725 in `booking.html` and update:**

```javascript
// REPLACE THIS:
calLink: "your-username/free-poc-kickoff-call"

// WITH YOUR ACTUAL INFO:
calLink: "mustafa-kkk/free-poc-kickoff-call"
```

**That's it!** Save and upload.

---

## 📍 Where to Find the Code

In `booking.html`, look for this section around line 725:

```javascript
Cal.ns["booking"]("inline", {
  elementOrSelector: "#my-cal-inline-booking",
  config: { 
    layout: "month_view",
    theme: "light"
  },
  calLink: "your-username/free-poc-kickoff-call"  ← UPDATE THIS LINE
});
```

---

## 🎨 Customization Options

### Change Theme

```javascript
// Light theme (default - current)
config: { theme: "light" }

// Dark theme
config: { theme: "dark" }
```

### Change Calendar Layout

```javascript
// Month view (default - current)
config: { layout: "month_view" }

// Week view
config: { layout: "week_view" }

// Day view
config: { layout: "day_view" }
```

### Adjust Height

In the HTML (around line 312), change this:

```html
<!-- Current (600px height): -->
<div id="my-cal-inline-booking" style="width:100%;height:600px;overflow:auto;..."></div>

<!-- Taller (800px): -->
<div id="my-cal-inline-booking" style="width:100%;height:800px;overflow:auto;..."></div>

<!-- Shorter (400px): -->
<div id="my-cal-inline-booking" style="width:100%;height:400px;overflow:auto;..."></div>
```

---

## 🚀 Testing

1. **Update the calLink** with your username/event-slug
2. **Upload booking.html** to your server
3. **Visit the page:** `https://haiba.co/funnel/booking.html`
4. **Verify calendar loads** - should show month view with your availability
5. **Try booking a time** - should complete without redirecting to Cal.com

---

## 📊 How It Works

```
User visits booking.html
    ↓
Cal.com script loads from CDN
    ↓
Inline calendar renders in #my-cal-inline-booking div
    ↓
User selects available time slot
    ↓
Cal.com handles booking directly
    ↓
Confirmation email sent instantly
    ↓
Meeting appears in your calendar
```

---

## ✨ Features

- ✅ Month view calendar with dates
- ✅ Shows your availability (green = available)
- ✅ One-click booking
- ✅ Auto-confirmation email
- ✅ Google Meet link auto-generated
- ✅ Respects your timezone
- ✅ Mobile responsive

---

## 🔍 Verify It's Working

When the page loads, check browser console (F12):

```javascript
// You should see:
[FUNNEL] Booking calendar page viewed
[FUNNEL] Cal.com calendar loaded
```

If you see those messages, it's working!

---

## 🆘 Troubleshooting

### Calendar Not Showing?

**Problem:** Blank space where calendar should be
**Solution:**
- Check `calLink` has correct username/slug
- Try different layout: `layout: "week_view"`
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode

### Getting JavaScript Errors?

**Problem:** Console shows errors about `Cal` undefined
**Solution:**
- Check Cal.com CDN script is loading (look in Network tab)
- Try different namespace name (e.g., `"mycal"` instead of `"booking"`)

### Availability Not Showing?

**Problem:** Calendar shows but all dates are greyed out
**Solution:**
- Go to Cal.com → Settings → Calendar
- Verify your calendar is connected
- Check availability hours are set (Mon-Fri 10am-5pm)
- Add more available dates

### Booking Not Working?

**Problem:** Clicking time slots does nothing
**Solution:**
- Verify Cal.com event type is in "Public" mode
- Check your email/phone number is added to notifications
- Try different browser
- Contact Cal.com support

---

## 🎯 Best Practices

1. **Test Before Launch**
   - Book a test time yourself
   - Verify confirmation email arrives
   - Check meeting appears in your calendar

2. **Set Clear Availability**
   - Go to Cal.com Settings
   - Define working hours
   - Add 15-30 min buffer between calls

3. **Use Google Meet**
   - Cal.com auto-generates Google Meet links
   - Easier than Zoom for booking
   - Guests get link in confirmation email

4. **Enable Reminders**
   - Go to Event Type Settings
   - Enable "Send reminders"
   - Send 24 hours before call

5. **Monitor Bookings**
   - Check Cal.com dashboard daily
   - Export bookings to track metrics
   - Follow up within 1 hour of booking

---

## 📱 Mobile Responsive

The inline calendar automatically adapts:

```
Desktop (1200px+)
├── Full month view
├── 6 weeks visible
└── Normal size

Tablet (768px-1199px)
├── Month view
├── 5-6 weeks visible
└── Scrollable

Mobile (< 768px)
├── Month view
├── 4 weeks per screen
└── Touch optimized
```

---

## 🔗 Reference Links

- **Cal.com Docs:** https://cal.com/docs
- **Embed Documentation:** https://cal.com/docs/embed
- **Event Types:** https://cal.com/app/event-types
- **Your Booking Link:** `https://cal.com/your-username/free-poc-kickoff-call`

---

## 📝 Code Reference

### Full Configuration Object

```javascript
Cal.ns["booking"]("inline", {
  elementOrSelector: "#my-cal-inline-booking",      // Where to render
  config: { 
    layout: "month_view",                           // month_view, week_view, day_view
    theme: "light"                                  // light or dark
  },
  calLink: "your-username/free-poc-kickoff-call"    // Your Cal.com link
});
```

### Available Layouts

- `"month_view"` - Full month calendar (default)
- `"week_view"` - Week view
- `"day_view"` - Single day view
- `"column_view"` - Schedule columns

---

## ✅ Setup Checklist

- [ ] Got Cal.com username
- [ ] Got event slug (event name)
- [ ] Updated `calLink` in booking.html
- [ ] Uploaded file to server
- [ ] Visited booking page and saw calendar
- [ ] Tried booking a time slot
- [ ] Received confirmation email
- [ ] Meeting appeared in calendar
- [ ] Tested on mobile
- [ ] Ready to share with audience!

---

## 🎉 You're Live!

Your calendar booking system is now active with inline Cal.com embed.

**What happens next:**
1. Share landing.html link with your network
2. People click "Book Your Free Call"
3. They land on booking.html
4. They select a time from the calendar
5. Booking confirmed → email sent → meeting scheduled

---

**Version:** 1.0 (Inline Embed)  
**Date:** October 27, 2025  
**Status:** ✅ Ready to Deploy

📅 **Happy bookings!**
