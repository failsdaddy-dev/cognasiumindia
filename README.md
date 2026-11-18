# Cognasium India – main website (cognasiumindia.com)

The main website of **Cognasium India**, live at **https://cognasiumindia.com/** (replaced the old WordPress site on 16 Nov 2026).
Colours, logo, images and words are Cognasium's own.

- **This folder:** `C:\Agents\cognasiumindia-site\main-site\`
- **GitHub:** https://github.com/failsdaddy-dev/cognasiumindia (branch `main`)
- **Hosting:** Vercel project **cognasiumindia** (Hobby plan, owner `failsdaddy-dev`); DNS at Hostinger
- **The ad landing page** (international.cognasiumindia.com) is a separate site in `..\international-site\`.

---

## 1. What it is built with

| Part | Language / tool |
|---|---|
| Page structure | **HTML5** (`index.html`) |
| Design, colours, 3D buttons, mobile layout | **CSS3** (`css/styles.css`, `css/animations.css`) |
| Question flow, WhatsApp links, FAQ, Meta Pixel events | **Vanilla JavaScript** (`js/main.js`) |
| All text, prices, phone number, FAQ, programmes | **JavaScript config file** (`js/config.js`) |
| Fonts | Google Fonts: **Bricolage Grotesque** (headings) and **Nunito** (body text) |

There is no framework, no npm, no build step and no database.

---

## 2. How to run it on your computer

```
cd C:\Agents\cognasiumindia-site\main-site
python -m http.server 8765
```
Then open http://127.0.0.1:8765/ and press `Ctrl + C` to stop. To check the phone layout: in Chrome press `F12`, then `Ctrl + Shift + M`.

---

## 3. Folder layout

```
main-site/
├── index.html          ← the page
├── 404.html            ← unknown addresses → forwards to the homepage
├── css/styles.css      ← design and colours
├── css/animations.css  ← all animations
├── js/config.js        ← ALL editable content
├── js/main.js          ← page logic + Meta Pixel button events
├── assets/             ← favicons, img/ (logo, photos, icons, testimonial photos, wall of fame, og-image)
│   └── CREDITS.md      ← where every image came from (not published)
├── vercel.json         ← redirects for old WordPress links, security headers, caching
├── .vercelignore       ← files kept in GitHub but not published
└── README.md           ← this file (not published)
```
`assets/img/logo-mark-512.png` is not used on the page; it is kept as the best-quality copy of the logo.

---

## 4. Hosting: Vercel + DNS records in Hostinger (decided 16 Nov 2026)

- **Live:** `cognasiumindia.com` (main address) and `www.cognasiumindia.com` (308 redirect to it). DNS at Hostinger:
  `A @ → 216.198.79.1` and `CNAME www → (Vercel value)`. The Google MX and TXT records are untouched (email).
- **Old WordPress links** (/all-courses, /courses/*, /contact, /about-us, /wp/*, …) are sent to `/` by `vercel.json`.
  Any other unknown address shows `404.html`, which forwards to the homepage after 2 seconds.
- **Updating:** edit the files, then `git add -A && git commit -m "…" && git push`. Vercel redeploys automatically.
- **Commit author matters (Vercel Hobby):** Vercel only auto-deploys commits authored by **failsdaddy-dev**.
  This repo has a repo-local identity `failsdaddy-dev <340529014+failsdaddy-dev@users.noreply.github.com>`.
  Commits by anyone else (e.g. this PC's global `jayeshpatel2179`) are skipped. Fix: Vercel → Deployments → ⋯ → **Create Deployment** → `main`.
- **Moved into `main-site/` on 18 Nov 2026:** the git repo root is this folder, so the Vercel settings (Root Directory `./`) did not change.
- **Removed 18 Nov 2026** (still in git history): `_upload/` and the zip (old manual-upload copies), `_redirects` (Netlify)
  and `.htaccess` (Hostinger hosting), which are not used on Vercel.
- **Plan:** Vercel's free Hobby plan is for personal, non-commercial use. A business site is meant to be on **Pro**.

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

**Tracking:** the Meta Pixel is in the `<head>` of `index.html`. Every WhatsApp and enquiry-form button sends one event, `Lead` (see section 8). Google Analytics is not installed.

**Search engines:** the page is `index, follow` (it is the homepage).

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
6. **The problem, plus an "Our recommendation" card:** beginner, some experience and advanced, each with the programme to start with. A sample feedback card is built but switched off.
7. **Why Cognasium + founder (cream, added 16 Nov 2026):** five reasons, then the founder card for Nitiksha with her photo and bio.
8. **Programmes at Cognasium (navy):** classroom photo, tagline, the 4 main programmes (Core, MUN, Create, Triad), the 5 supporting programmes and the vision pillars. Stats and coach cards stay hidden until real data is added.
9. **Membership models (yellow):** 4 cards (Debate, Creative Writing, MUN, Current Affairs), each with monthly, quarterly and annual fees and who each plan suits. The main button opens that programme's Bigin enquiry form; under it is an "or ask on WhatsApp" link. A "Fee concessions" card sits under the cards.
10. **Wall of fame (navy, added 16 Nov 2026):** 6 achievement posters (click to open full size) and the "Joining the dots" schools collage.
11. **Testimonials:** the five published on cognasiumindia.com.
12. **FAQ:** four questions.
13. **Final call to action:** WhatsApp button and call link.
14. **Footer:** contacts as published, Instagram, YouTube, copyright.
15. **Phones only:** a WhatsApp bar fixed to the bottom of the screen.

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
- **The client's Google Doc "Final landing page outlay" (16 Nov 2026)**, which wins wherever sources differ:
  - Why Cognasium, the founder bio and photo (`founder-nitiksha.jpg`)
  - the wall of fame posters (`fame-*.jpg`) and the schools collage
  - programmes (Core, MUN, Create, Triad, plus 5 supporting programmes), which replace the old website's Book Clubs / Reading Clubs / Workshops list
  - the full fee table, the level recommendations and the fee concessions
  - the 3 Bigin enquiry forms (`forms` in `config.js`). The doc's QR code images were not used; the buttons link straight to the forms.
- **Not used:** any Taivas text, numbers, photos or names. Taivas is a competitor.

---

## 8. Still missing (needed from Cognasium)

- [x] Phone/WhatsApp number confirmed: **+91 92206 36572** (16 Nov 2026). The old +91 93151 36811 and the "Main website" footer link were removed.
- [x] Full fee table received in the Google Doc (16 Nov 2026).
- [ ] Whether GST is included in the fees.
- [ ] A separate debate enquiry form. The doc gives the "cognasium-60-current-affairs-enquiry" form for debate, so Debate and Current Affairs both use it for now.
- [ ] Confirm the World Champion line: the doc is read as Arnav Agarwal being both WSDC 2025 Panama World Champion and WSDC Kenya 2026 finalist.
- [ ] Confirm consent from the families to show the wall of fame posters (they show children's names, photos and schools).
- [ ] Real upcoming class or demo dates for the countdown.
- [ ] Real stats (students trained, tournaments, years running).
- [x] Founder name, bio and photo (Google Doc). Other coach names and photos are still missing.
- [ ] Real feedback categories and a sample coach note (for the sample feedback card).
- [ ] The original logo as PNG or SVG. The current one is cropped from a WhatsApp screenshot.
- [x] Testimonial photos switched ON (18 Nov 2026) at the owner's request: the real photos published on the old site, never stock photos. Some show children. The classroom photo shows children from behind.
- [ ] Approve the question and answer wording, "Best for Grades 6 to 8", Google Meet, and the "Malaysia and the Philippines" mention.
- [x] Indexing decision: switched to `index, follow` because the page is now the main homepage (16 Nov 2026).
- [x] Meta Pixel `4022027848040743` installed in `index.html` (16 Nov 2026). **One button event only (17 Nov 2026): `Lead`.** Every WhatsApp button and every enquiry form button sends `Lead`, with `channel` (whatsapp/form), `content_name` (programme or button id) and `button_text`. The old `ConversionWhatsAppButton` and `Contact` events were removed. The base code still sends `PageView` on page load. Event name: `config.js` → `tracking.event`.
- [ ] Google Analytics ID (not installed).
- [ ] A final link-preview image (`assets/img/og-image.jpg`, 1200×630) and the final page address.

---

## 9. Rules for future work on this project

- Work **only** inside `C:\Agents\cognasiumindia-site`: the main site in `main-site\`, the ad page in `international-site\`. Never mix files between them.
- Claude never changes DNS or Hostinger settings itself. Pushing happens only when the owner asks; commits must be authored by `failsdaddy-dev`.
- No made-up numbers, prices, dates, names or guaranteed-result claims. Missing facts go in `config.js` as hidden entries and in the list above.
- Never use stock photos next to named testimonials or as "Cognasium students".
- Keep everything editable in `js/config.js`.
