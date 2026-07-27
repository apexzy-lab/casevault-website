# Casevault — Cloudflare Pages release

This repository builds the complete Casevault marketing website as a fast,
static Cloudflare Pages project.

## Preview locally

```powershell
npm run dev
```

Open `http://127.0.0.1:4173`.

## Build and validate

```powershell
npm run build
npm run validate
```

The production-ready output is written to `cloudflare-pages`.

## GitHub to Cloudflare Pages

GitHub is the source of truth. Cloudflare Pages should be connected to the
repository and deploy directly from the `main` branch. The included GitHub
Actions workflow runs the full build and validation suite on every push and
pull request. Cloudflare remains responsible for the actual deployment, so no
Cloudflare API token is stored in GitHub.

1. Create or select the Casevault GitHub repository.
2. Push this repository to its `main` branch.
3. In Cloudflare, choose **Workers & Pages → Create → Pages → Connect to Git**.
4. Authorize GitHub, select the Casevault repository and use the settings below.
5. Deploy the preview URL and verify it before connecting `casvault.com`.

## Cloudflare Pages build settings

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `cloudflare-pages`
- Node.js version: `22`
- Production branch: `main`

After the first deployment, add `casvault.com` under **Custom domains** in the
Pages project. Keep the existing WordPress site live until the Pages custom
domain is verified and the final deployment has been checked.

Every future merge or push to `main` will trigger a new Cloudflare Pages
deployment. Pull requests receive isolated Cloudflare preview deployments.

## Before the domain switch

1. Confirm the app, support and `sales@casvault.com` destinations are correct.
2. Have counsel review the migrated Terms and Privacy wording before launch.
3. Connect analytics and consent management.
4. Verify the production domain, submit `sitemap.xml` in Google Search Console,
   and inspect key URLs.

## Generated controls

- `robots.txt` points crawlers to the sitemap.
- `sitemap.xml` lists every indexable page.
- `_headers` adds security and long-lived asset caching headers.
- `_redirects` preserves common legacy `.html` and `/home` URLs.
- Every page has a unique title, meta description, canonical URL, Open Graph
  metadata, structured data, and one clear H1.
