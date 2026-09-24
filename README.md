# Bloom Dashboard

Interactive prototype of the Bloom dashboard, built from the Figma file (frames **a** and **dark theme**).
The site is plain HTML/CSS/JS in `public/`; `server.js` is a zero-dependency Node.js static server.

## Requirements

Node.js 18 or newer. No `npm install` needed — there are no dependencies.

## Run locally

```bash
npm start
```

Open http://localhost:3000. Use `PORT=8080 npm start` for another port, or `npm run dev` to restart on server changes.
Add `?theme=dark` or `?theme=light` to the URL to open in a specific theme.

## Structure

```
server.js           static server (MIME types, caching, safe paths)
package.json        scripts: start, dev
vercel.json         Vercel config: serves public/ as a static site
public/
  index.html        page markup
  styles.css        layout, design tokens, light + dark theme, animations
  app.js            content data and all interactions
  fonts/            Makira (Regular, Medium, SemiBold, Bold, ExtraBold)
  assets/           images and icons exported from Figma
  assets/dark/      dark-theme icon variants
  assets/masks/     filled copies of Figma mask shapes (used as CSS masks)
```

## Deploy

**Vercel** — import the GitHub repository; `vercel.json` already tells Vercel to serve `public/` with no build step.
Just click **Deploy**.

**Any Node host** (Render, Railway, a VPS…) — start command `npm start`; the server reads `PORT` from the environment.
