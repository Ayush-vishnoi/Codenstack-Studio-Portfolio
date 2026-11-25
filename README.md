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

## Deploy to Cloudflare Pages

This is a fully static site (no backend, no SSR), so Cloudflare Pages serves it directly.

1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22` (or rely on `.nvmrc`)
4. Click **Save and Deploy**.

`public/_redirects` contains `/*  /index.html  200`, which Cloudflare Pages copies into `dist/` and uses
as the SPA fallback so `/services`, `/about`, `/contact` etc. work on direct load and refresh.

### Custom domain

1. Pages project → **Custom domains** → add `codenstack.in` and `www.codenstack.in`.
2. If the domain's DNS is on Cloudflare, records are created automatically. Otherwise add the
   `CNAME` records Cloudflare shows at your registrar.
3. HTTPS is issued automatically.
4. Keep your demo subdomains (`hrms.`, `shop.`, `voice.`, `customeriq.`) pointing at their own hosts —
   adding the apex domain to Cloudflare Pages does not affect them.

> `vercel.json` is kept for anyone deploying to Vercel instead; Cloudflare ignores it.
