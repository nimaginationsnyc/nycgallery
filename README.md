# Nimaginationsnyc — Gallery Website

A clean, elegant portfolio site for original paintings and drawings.
Built with [Astro](https://astro.build) and hosted on GitHub Pages.

**Live site:** https://nimaginationsnyc.github.io

---

## One-time setup (do this once)

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under *Source*, select **GitHub Actions**
3. Save — from now on every push to `main` rebuilds and deploys the site automatically.

---

## How to add a new artwork (no code needed)

### Step 1 — Upload your image

1. Go to the repo on GitHub
2. Click into the `public/images/` folder
3. Click **Add file → Upload files**
4. Drag your image file in (JPG recommended, under 5 MB for fast loading)
5. Click **Commit changes**

Use a simple, descriptive filename with no spaces — e.g. `sunset-hudson-2024.jpg`

### Step 2 — Add it to the artwork list

1. Click on `src/data/artworks.yaml`
2. Click the **pencil icon** (Edit this file)
3. Copy one of the existing entries and paste it at the top of the list
4. Fill in your details:

```yaml
- title: "Sunset, Hudson"
  image: "sunset-hudson-2024.jpg"
  medium: "Oil on canvas"
  size: "24 × 36 in"
  year: 2024
  available: true
  featured: false
```

5. Click **Commit changes** — the site rebuilds in about 60 seconds.

> **featured: true** pins the piece to the very top of the gallery and is good for your newest or most important work.
> **available: false** marks a piece as sold or not for sale (the "Inquire" button is hidden).

---

## How to update the About page

Edit `src/data/artist.yaml`:

- Change `name`, `tagline`, `bio`, or `statement` directly
- To add a photo: upload a photo to `public/images/`, then set `photo: "your-photo.jpg"`

---

## How to add a social media link

Edit `src/data/site.yaml`. Uncomment or add a line under `social:`:

```yaml
social:
  instagram: "https://instagram.com/nimaginationsnyc"
  facebook: "https://facebook.com/yourpage"
```

Remove a line entirely to hide that icon.

---

## How to add an exhibition

Edit `src/data/exhibitions.yaml`. Add an entry at the top:

```yaml
- title: "Solo Show"
  venue: "Gallery Name"
  location: "New York, NY"
  start: "2025-03-01"
  end: "2025-04-15"
  status: "upcoming"       # options: current | upcoming | past
  description: "Optional short description."
```

---

## Switching to a custom domain

1. In `astro.config.mjs`, update `site`:
   ```js
   site: 'https://yourdomain.com',
   ```
2. Add a file named `CNAME` in the `public/` folder containing just your domain:
   ```
   yourdomain.com
   ```
3. In your domain registrar, point DNS to GitHub Pages:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a `CNAME` record → `nimaginationsnyc.github.io`
4. In GitHub repo → Settings → Pages → set your custom domain

---

## Local development (for developers)

```bash
npm install
npm run dev
```

Opens at http://localhost:4321

```bash
npm run build    # production build → dist/
npm run preview  # preview the built site locally
```

---

## Project structure

```
src/
  data/
    artworks.yaml     ← add/remove artworks here
    artist.yaml       ← about page content
    exhibitions.yaml  ← exhibitions list
    site.yaml         ← name, email, social links
  pages/
    index.astro       ← gallery homepage
    about.astro       ← about the artist
    exhibitions.astro ← exhibitions page
    contact.astro     ← contact page
public/
  images/             ← upload artwork images here
```
