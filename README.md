# Codenstack — website

Multi-page portfolio + lead-generation site (Home, Services, How We Work, Tech, About, Contact). React 19 + Vite + Tailwind CSS v4. No backend.

## Folder structure

```
index.html                 SEO: title, meta description, Open Graph, favicon, fonts
public/
  favicon.png              PNG favicon fallback (copy of brand icon)
  brand/                   Official brand files: icon (.svg/.png), animated (.svg/.gif), full logo (.png)
  screenshots/             Product screenshots (.webp recommended)
src/
  config/site.ts           ★ ALL editable content: products, links, credentials, services,
                             tech stack, founder bio, contact email, form endpoint
  pages/                   One file per page (Home, ServicesPage, ProcessPage, TechPage, AboutPage, ContactPage)
  components/              Reusable sections (Navbar, Hero, Products, Services, CtaBand, ...)
  routes.tsx               URL → page mapping (React Router)
  App.tsx                  Mounts the router
  index.css                Brand colors, buttons, cards, animations
vercel.json                SPA rewrite so /services, /about etc. work on refresh
```

## Customise content

Everything editable lives in `src/config/site.ts`.

1. **Products / demo credentials / screenshots**: `products`.
   Set `image: '/screenshots/hrms.webp'` to swap the illustrated placeholder for a real screenshot.
2. **Founder bio & photo**: `founder`.
3. **Contact form**: optional. Leave `contact.formEndpoint` empty and the form falls back to a
   `mailto:` link that opens the visitor's email app with the message pre-filled. To send submissions
   server-side, create a form at formspree.io and paste `https://formspree.io/f/<id>` into
   `contact.formEndpoint`. For Web3Forms use `https://api.web3forms.com/submit` and set `web3formsKey`.
4. **LinkedIn / GitHub URLs**: `contact.linkedin`, `contact.github`. Leave either empty to hide that link.
5. **Logo files**: live in `public/brand/` (paths set in `site.logo`).
6. **OG image**: currently the brand logo PNG; optionally add a dedicated 1200×630 image and update `index.html`.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:8443
pnpm build      # production build in dist/
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com → **Add New… → Project** → import the repo.
3. Vercel auto-detects **Vite**: build command `pnpm build` (or `npm run build`), output directory `dist`. Click **Deploy**.

## Connect codenstack.in

1. Vercel → your project → **Settings → Domains** → add `codenstack.in` and `www.codenstack.in`.
2. At your domain registrar's DNS settings add:
   - `A` record, host `@`, value `76.76.21.21`
   - `CNAME` record, host `www`, value `cname.vercel-dns.com`
     (Or switch the domain's nameservers to Vercel's.) Use the exact values Vercel shows on the Domains page.
3. Wait for DNS to propagate. Vercel issues HTTPS automatically.
4. Keep your demo subdomains (`hrms.`, `shop.`, `voice.`, `customeriq.`) pointing at their own hosts —
   adding the apex domain to Vercel does not affect them.
