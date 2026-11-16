# Cognasium India – Debate Landing Page

A one-page ad landing page for **Cognasium India** (https://cognasiumindia.com/).
Layout and behaviour follow the reference page https://book.taivasedu.com/book.
Colours, logo, images and words are Cognasium's own.

- **Status:** first build is done. It is waiting for your review and for the items in the "Still missing" list below.
- **Built on:** 14 Nov 2026.
- **Not live yet:** nothing has been uploaded or deployed.

---

## 1. What it is built with

| Part | Language / tool |
|---|---|
| Page structure | **HTML5** (`index.html`) |
| Design, colours, 3D buttons, mobile layout | **CSS3** (`css/styles.css`) |
| Question flow, WhatsApp links, FAQ, countdown | **Vanilla JavaScript** (`js/main.js`) |
| All text, prices, phone number, FAQ, dates | **JavaScript config file** (`js/config.js`) |
| Fonts | Google Fonts: **Bricolage Grotesque** (headings) and **Nunito** (body text) |

There is no framework, no npm, no build step and no database. You upload the files as they are.

---

## 2. How to run it on your computer

**Option A (simplest):** double-click `index.html`. It opens in Chrome or Edge.

**Option B (closer to the live site):** run a small local server, then open http://127.0.0.1:8765/
```
cd C:\Agents\cognasiumindia-site
python -m http.server 8765
```
Press `Ctrl + C` to stop it.

**To check the phone layout:** in Chrome press `F12`, then `Ctrl + Shift + M`, and pick a phone such as iPhone 12.

---

## 3. Folder layout

```
cognasiumindia-site/
├── index.html          ← the page (upload)
├── css/styles.css      ← design and colours (upload)
├── css/animations.css  ← all animations (upload)
├── js/config.js        ← ALL editable content (upload)
├── js/main.js          ← page logic (upload)
├── assets/             ← favicons + img/ (upload)
│   └── img/            logo, photos, icons, testimonial photos, og-image
├── vercel.json         ← Vercel: redirects for old WordPress links + caching
├── 404.html            ← any unknown address → forwards to the homepage
├── _redirects          ← Netlify: old WordPress links go to the homepage
├── .htaccess           ← Hostinger: same redirect rule
├── _upload/            ← GENERATED clean copy for uploading (don't edit)
├── cognasium-site-upload.zip ← GENERATED zip of _upload (don't edit)
└── README.md           ← this file (never uploaded)
```

### Files that get hosted
Only the files in **`_upload/`** (or the same files in **`cognasium-site-upload.zip`**):
`index.html`, `css/`, `js/`, `assets/`, `_redirects` (Netlify), `.htaccess` (Hostinger).

- `_upload/` and the zip are **generated copies**. Never edit them. Edit the main files, then ask Claude to
  "rebuild the upload folder and zip", so they get refreshed.
- `README.md` stays on your computer and is never published.

---

## 4. Hosting plan: this page replaces the old WordPress site (decided 16 Nov 2026)

The new page becomes **https://cognasiumindia.com/** (the homepage). The old WordPress site is removed.
The page is now set to `index, follow` with `canonical` and `og:url` = https://cognasiumindia.com/.

**Before switching:** back up WordPress in hPanel (**Websites → Manage → Backups**).
Old WordPress links (/about-us, /courses, blog posts…) redirect to the homepage via `_redirects` (Netlify)
or `.htaccess` (Hostinger), so visitors don't hit a 404.

### CHOSEN: Vercel + DNS records in Hostinger (decided 16 Nov 2026)
- Vercel uses **`vercel.json`** for redirects. It sends the old WordPress paths (/all-courses, /courses/*, /contact,
  /become-instructor, /university-*, /wp/*, …) to `/` and sets caching. Any other unknown address shows **`404.html`**,
  which forwards to the homepage after 2 seconds. `_redirects` and `.htaccess` are ignored on Vercel.
- **GitHub repo (public):** https://github.com/failsdaddy-dev/cognasiumindia, branch `main`. This project folder *is* the
  repo, first pushed 16 Nov 2026. `.vercelignore` keeps `README.md`, `_redirects` and `.htaccess` off the live site, and
  `.gitignore` keeps `_upload/` and the zip out of git.
- **Deploying:** in Vercel choose **Add New → Project → Import** `failsdaddy-dev/cognasiumindia`, with Framework Preset = **Other**,
  Root Directory `./`, Build Command empty, and Output Directory empty.
- **Updating:** edit the files, then `git add -A && git commit -m "…" && git push`. Vercel redeploys automatically.
- **Domain:** in the Vercel project, open **Settings → Domains**, add `cognasiumindia.com` and `www.cognasiumindia.com`, and copy the
  exact records Vercel shows into Hostinger DNS: the `@` **A record** replaces the Hostinger IP, and `www` gets a **CNAME**.
  Leave MX and TXT records alone. Delete any `@` AAAA record.
- **Plan:** Vercel's free Hobby plan is for personal, non-commercial use. A business site is meant to be on **Pro**.

### Option A – Netlify (free) + DNS records in Hostinger
1. Go to https://app.netlify.com, sign up, then **Add new site → Deploy manually** and drag the **`_upload`** folder.
2. **Site configuration → Domain management → Add a domain** and enter `cognasiumindia.com`.
   Netlify also adds `www.cognasiumindia.com`.
3. Netlify shows the exact DNS values to use. Copy them from Netlify; don't use values from memory.
4. In hPanel go to **Domains → cognasiumindia.com → DNS / Nameservers → DNS records**:
   - `@` (root): **A record** with Netlify's load-balancer IP. Replace the existing `@` A record that points to Hostinger.
     A root domain cannot use a CNAME.
   - `www`: **CNAME** pointing to `your-site-name.netlify.app`. Replace the existing `www` record.
   - Do **not** touch MX, TXT or other records (email and verification).
5. Wait from 15 minutes up to 24 hours. Then in Netlify, under **Domain management → HTTPS**, check that the
   free SSL certificate is active.
6. **To update the site later:** Netlify → Deploys → drag the refreshed `_upload` folder again.

### Option B – keep it on Hostinger (no DNS change at all)
1. Take the backup, then in File Manager empty `public_html`: move the WordPress files into a folder
   such as `public_html_old_wordpress` outside it, or delete them only after the backup is confirmed.
   In hPanel you can also remove the WordPress installation from **Websites → WordPress**.
2. Upload `cognasium-site-upload.zip` into `public_html` and **Extract**. Delete the zip.
   `index.html` must sit directly in `public_html`.
3. Purge the cache (**Website → Cache Manager → Purge All**) and open https://cognasiumindia.com/

You never need to transfer the domain; it stays registered at Hostinger in both options.

### Old plan (no longer used)
Earlier the page was going to live at cognasiumindia.com/book/ next to WordPress. If you ever go back to that:
switch `robots` to `noindex, follow`, set `canonical`/`og:url` to `/book/`, and upload into `public_html/book/`.

---

## 5. How to edit things (always in `js/config.js`)

| Want to change… | Look for in `config.js` |
|---|---|
| WhatsApp number | `whatsapp.number` (digits only, e.g. `919220636572`) |
| Pre-filled WhatsApp message | `whatsapp.quizMessage`, `whatsapp.generalMessage` |
| Hero heading / text / photo | `hero` |
| Question 1 & 2 answers, result text | `quiz` |
| Countdown to next class | `sessions` (empty = hidden; see the example in the file) |
| Prices | `pricing.plans` (`pricing.enabled: false` hides the section; `featured: true` gives the navy header band; `badge` sets the small tag, e.g. "MAIN PROGRAMME") |
| Stats numbers | `proof.stats` (empty = hidden) |
| Coach cards | `proof.coaches` (empty = hidden) |
| Testimonials / show photos | `testimonials.items`, `testimonials.usePhotos` |
| FAQ | `faq.items` |
| Footer contacts / Instagram | `footer` |
| Colours | `theme` (also in `css/styles.css` under `:root`) |

**To swap an image:** put the new file in `assets/img/` and change its path in `config.js`.

**Tracking (Meta Pixel / Google Analytics):** paste the code at the marked comment `TRACKING SCRIPTS GO HERE` in the `<head>` of `index.html`.

**Search engines:** the page is currently `noindex`. To let Google index it, change it to `index, follow` in `index.html`.

---

## 6. Page sections (top to bottom)

1. **Header:** Cognasium logo.
2. **Hero (yellow):** "Already debating at school? Take it international."
3. **Two-question flow:**
   - Question 1: the child's goal.
   - Question 2: the child's grade.
   - Then a result card with a WhatsApp button whose message is pre-filled with the answers.
   - A countdown card appears above the questions only when a real session date is set.
4. **What you get:** five cards.
5. **How it works:** three steps.
6. **The problem, plus a "Who we train" card.** A sample feedback card is built but switched off.
7. **Pricing:** International Debating ₹4,500 a month and Current Affairs ₹2,500 a month.
8. **Why families choose Cognasium:**
   - Classroom photo and the site's tagline.
   - The five programmes and the vision pillars.
   - Stats and coach cards are hidden until real data is added.
9. **Testimonials:** the five published on cognasiumindia.com.
10. **FAQ:** four questions.
11. **Final call to action:** WhatsApp button and call link.
12. **Footer:** contacts as published, Instagram, YouTube, copyright.
13. **Phones only:** a WhatsApp bar fixed to the bottom of the screen.

**Design notes:**
- **Colours:** yellow `#FFD51F` and navy `#00174D`, taken from the logo. Text contrast passes WCAG AA.
- **Buttons:** 3D "push" style that lifts on hover and presses down on click. The main result button has a looping shine.
- **Reduced motion:** all animations stop when the device asks for reduced motion.

### Animations (added 14 Nov 2026, all in `css/animations.css` + the end of `js/main.js`)
- **Header:** sticky; shrinks with a shadow on scroll; the logo is bigger and sits further left and wiggles on hover; a yellow reading-progress bar; a WhatsApp button (tablet and desktop only).
- **Hero:**
  - title lines slide up one by one
  - "Take it international" wipes in, then a shine sweeps across it
  - chips pop in, with a pulsing red live dot on LIVE ONLINE
  - the photo drops in, floats, and tilts towards the mouse
  - floating speech bubbles with typing dots, sparkles, a spinning globe, a mic and dashed rings (only a few on phones)
- **Moving ribbon** of Cognasium programmes under the hero (edit in `config.js` → `marquee`). It pauses on hover.
- **Questions:** answer buttons pop in one after another, and a confetti burst plays on the result card.
- **On scroll:** sections and cards fade or slide in one after another; step numbers spin in; prices count up from ₹0; the "Main programme" badge bounces.
- **Hover:** cards lift, and the icons bob.
- **Final call to action:** pulsing rings around the WhatsApp button.
- **Phones:** the sticky WhatsApp bar slides in after the hero and gives a small nudge every few seconds.
- **Reduce motion:** when the visitor's device asks for it, all of this switches off and everything shows normally.

Tip: if a change doesn't show in the browser, press **Ctrl + F5** to reload without the cache.

---

## 7. Where the content came from

- **cognasiumindia.com:**
  - programmes (Book Clubs, Reading Clubs, Workshops, Debate Clubs, Individual Classes)
  - vision pillars
  - the five testimonials
  - contacts, Instagram, YouTube, images
- **The Loom call with the client:**
  - focus on debating first, then Current Affairs
  - target: children already debating at school (ideally Grades 6–8)
  - 3 months of live online training, then a first international tournament (team, tournament search and registration handled; tournament fees extra)
  - prices of ₹4,500 and ₹2,500 a month
- **Not used:** any Taivas text, numbers, photos or names. Taivas is a competitor.

---

## 8. Still missing (needed from Cognasium)

- [x] Phone/WhatsApp number confirmed: **+91 92206 36572** (16 Nov 2026). The old +91 93151 36811 and the "Main website" footer link were removed.
- [ ] Confirm the prices of ₹4,500 and ₹2,500, and whether GST is included.
- [ ] Real upcoming class or demo dates for the countdown.
- [ ] Real stats (students trained, tournaments, years running).
- [ ] Coach or founder names, roles and photos.
- [ ] Real feedback categories and a sample coach note (for the sample feedback card).
- [ ] The original logo as PNG or SVG. The current one is cropped from a WhatsApp screenshot.
- [ ] Consent to show the testimonial photos (switched off now; some show children). The classroom photo shows children from behind.
- [ ] Approve the question and answer wording, "Best for Grades 6 to 8", Google Meet, and the "Malaysia and the Philippines" mention.
- [x] Indexing decision: switched to `index, follow` because the page is now the main homepage (16 Nov 2026).
- [ ] Meta Pixel and Google Analytics IDs.
- [ ] A final link-preview image (`assets/img/og-image.jpg`, 1200×630) and the final page address.

---

## 9. Rules for future work on this project

- Work **only** inside `C:\Agents\cognasiumindia-site`.
- Claude never changes DNS, Hostinger or Netlify settings itself and never uploads. The owner does that.
- No made-up numbers, prices, dates, names or guaranteed-result claims. Missing facts go in `config.js` as hidden entries and in the list above.
- Don't add tracking scripts until the IDs are supplied.
- Keep everything editable in `js/config.js`.
