# HKSxGSD

A deployable static site for HKSxGSD.

## Local Preview

Open `index.html` in a browser, or run a local static server:

```bash
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Deploy

This repo is ready for static hosting on Netlify, Vercel, or Cloudflare Pages.

For Vercel:

- Framework preset: `Other`
- Output directory: `.`

For Netlify:

- Build command: leave blank
- Publish directory: `.`

For Cloudflare Pages:

- Framework preset: `None`
- Build command: leave blank
- Output directory: `.`
