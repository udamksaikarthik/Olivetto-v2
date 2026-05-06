# Olivetto — Restaurant Website

A clean, mobile-responsive marketing website for **Olivetto Italian Restaurant**, 252B Sunderland Road, South Shields NE34 6QY.

Built with vanilla **HTML5, CSS3, and JavaScript** — no build step, no frameworks, no dependencies. Drop the files on any static host and it just works.

---

## ✨ Features

- **Delrio's-inspired layout** — fixed left sidebar with the restaurant wordmark, frosted dark content panels, warm Italian-restaurant atmosphere.
- **Big, clear brand-mark** in the top-left (script logo + tagline) — visible on every section.
- **Fully mobile responsive** — sidebar collapses into a slide-in drawer with a hamburger toggle.
- **Sections**: Welcome · Our Story · À La Carte Menu · Lunch & Breakfast · Bookings · Contact (with Google Map) · Opening Hours.
- **Interactive cards** — change colour on hover, and again on click/tap (toggles an "active" state).
- **Active-section highlight** in the sidebar nav as you scroll.
- **Smooth scroll** between sections with reveal-on-scroll animations.
- **Booking form** (front-end demo — wired with validation, ready for a backend hook).
- **Embedded Google Map** of the restaurant's location.
- **Accessibility**: keyboard nav, ARIA labels, reduced-motion support, focus-visible states.
- **Performance**: zero JS dependencies, font preconnect, lazy-loaded map iframe.
- **Print-friendly** stylesheet (clean menu print).

---

## 📁 Project Structure

```
olivetto/
├── index.html          # Single-page HTML — all sections
├── css/
│   └── styles.css      # All styles (responsive, dark theme, animations)
├── js/
│   └── script.js       # Interactions: drawer, nav scroll-spy, cards, form
├── assets/             # (empty — drop real photos here when supplied)
└── README.md
```

> The `assets/` folder is reserved for real Olivetto photos (interior shots, dishes, team). Once the client provides them, swap them into the relevant sections of `index.html`.

---

## 🚀 Run Locally

No build step needed. Just open `index.html` in a browser, or for live-reload during edits:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000

# OR with Node
npx serve .
```

---

## 🌐 Free Hosting + Custom Domain Options

You can host this site **completely free** with a custom domain. Here are the realistic options ranked by what makes sense for selling this to a client:

### 🥇 Option 1 — Cloudflare Pages (recommended for client work)
- **Cost**: free forever, unlimited bandwidth, unlimited sites.
- **Custom domain**: free SSL, easy DNS if domain is on Cloudflare.
- **Deploy**: connect your GitHub repo → push → live in ~30 seconds.
- **Why for clients**: fast global CDN, professional-grade infrastructure, no "powered by" branding.
- **Steps**:
  1. Push the project to a GitHub repo.
  2. Go to dash.cloudflare.com → Pages → Create project → Connect to Git.
  3. Build command: *(leave empty)*. Output directory: `/`.
  4. After deploy, go to **Custom domains** → add `olivettorestaurant.co.uk` → follow DNS instructions.

### 🥈 Option 2 — Netlify
- **Cost**: free tier (100 GB bandwidth/mo — plenty for a restaurant site).
- **Custom domain**: free, includes auto-SSL.
- **Deploy**: drag-and-drop the folder, OR connect GitHub.
- **Bonus**: free **Netlify Forms** (100 submissions/mo) — wire the booking form to it without any backend code by adding `data-netlify="true"` to the `<form>` tag. Submissions go straight to the client's email.
- **Why for clients**: easiest "drag and drop" deployment, generous free tier, form handling built-in.

### 🥉 Option 3 — GitHub Pages
- **Cost**: free.
- **Custom domain**: supported, free SSL via Let's Encrypt.
- **Deploy**: push to a repo, enable Pages in settings.
- **Caveat**: public repo unless you have a paid GitHub plan. Fine for a marketing site, but not ideal if you want to keep the code private while selling it.

### 🥉 Option 4 — Vercel
- **Cost**: free hobby tier.
- **Custom domain**: free, auto-SSL.
- **Deploy**: similar to Cloudflare/Netlify — connect GitHub.
- **Caveat**: free tier is for non-commercial use. If the client pays you, you should technically be on the Pro tier — read their fair-use policy. For pitching/demos, free is fine.

### 💷 Custom Domain — How to Get It Cheap

You'll need to **buy** the domain (this part isn't free, but it's cheap):

| Registrar | `.co.uk` (UK restaurant) | `.com` |
|---|---|---|
| **Cloudflare Registrar** | n/a | ~£8/yr (at-cost, no markup — best value) |
| **Namecheap** | ~£6–8/yr first year | ~£8–10/yr |
| **123 Reg** (UK) | ~£9/yr | ~£12/yr |

**My recommendation for Olivetto**: register `olivettorestaurant.co.uk` or `olivettosouthshields.co.uk` on Namecheap or Cloudflare, point it at Cloudflare Pages, done.

### 💡 How to Price This For The Client

Since hosting is free and a domain is ~£8/yr, you can offer the client:

- **One-off build fee**: £350–£600 (typical for a small UK restaurant single-page site).
- **+ £60–120/year maintenance**: covers domain renewal + small updates (menu changes, hours, photos).
- Or charge a flat one-off fee and tell them they renew the domain themselves.

Be transparent that hosting is free — but charge for your **time, design, and ongoing changes**. That's the value, not the server.

---

## 🛠️ What To Customise Before Sending To Client

1. **Real photos** — replace the atmospheric background with actual interior shots from the restaurant. Drop them into `assets/` and update the `.bg-layer` rule in `styles.css`.
2. **Menu prices** — the menu is current as of the data shared, but ask the client to confirm before launch.
3. **Booking form backend** — currently a front-end demo. Easy options:
   - Netlify Forms (add `data-netlify="true"` to `<form>`)
   - Formspree (free 50 submissions/mo)
   - EmailJS (free 200 emails/mo, sends straight to client's inbox)
4. **Social links** — only Facebook is linked. Add Instagram if they have one.
5. **Logo** — currently uses the **Pinyon Script** Google Font as the wordmark. If the client has a real logo image, swap the `.brand-script` text for an `<img>`.
6. **Domain & favicon** — add a `favicon.ico` and decide on the domain name.

---

## 🎨 Design Notes

- **Aesthetic**: warm, candle-lit Italian restaurant — inspired by the Delrio's reference the client liked. Deep browns, warm gold, cream type, dark frosted panels.
- **Type**: *Pinyon Script* for the wordmark · *Cormorant Garamond* for headings & body · *Jost* for UI labels and small caps. All from Google Fonts, free to use commercially.
- **Letters stay still** — no jittery animations on text (per the brief). Reveal animations are gentle fades on scroll.
- **Cards** change colour on hover and on click/tap — confirmed working on touch devices.
- **Italian flag colours** appear subtly as accent (green, red) without being kitschy.

---

## 📞 Restaurant Info (already embedded)

- **Address**: 252B Sunderland Road, South Shields NE34 6QY
- **Phone**: 0191 691 5531
- **Email**: olivetreenook@gmail.com
- **Facebook**: facebook.com/profile.php?id=100093670509996
- **Hours**: Tue–Thu 12–9pm · Fri–Sat 12–10pm · Sun 12–6pm · Mon closed

---

## 📄 License

Built for client pitch. All restaurant content (menu, address, photos) belongs to Olivetto. Code is yours to license to the client however you arrange it.
