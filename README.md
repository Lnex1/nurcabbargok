# Fatma Nur Cabbar Gok - Developer Website

A premium, responsive indie developer website showcasing mobile apps, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌐 Live Site

**URL:** https://lnex1.github.io/nurcabbargok/

## ✨ Features

- 🌍 **Bilingual Support** - English and Turkish with path-based routing
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎨 **Premium Design** - Feminine, pastel aesthetic with soft rounded corners
- ⚡ **Static Export** - Optimized for GitHub Pages deployment
- 🔍 **SEO Ready** - Meta tags, OpenGraph, sitemap, and robots.txt
- ♿ **Accessible** - Keyboard navigation, focus states, semantic HTML

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Outfit (Google Fonts)
- **Deployment:** GitHub Pages via GitHub Actions

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions deployment
├── locales/               # Translation files (en.json, tr.json)
├── public/
│   └── brand/            # Logo, icons, and brand assets
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── en/           # English pages
│   │   └── tr/           # Turkish pages
│   ├── components/       # Reusable React components
│   ├── data/             # Static data (apps list)
│   ├── lib/              # Utilities (i18n)
│   └── types/            # TypeScript type definitions
├── CONTENT_GUIDE.md      # How to update content
├── DEPLOY.md             # Deployment instructions
└── tailwind.config.ts    # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/lnex1/nurcabbargok.git
cd nurcabbargok

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000/nurcabbargok](http://localhost:3000/nurcabbargok) to view the site.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 📖 Documentation

- **[DEPLOY.md](./DEPLOY.md)** - Deployment guide for GitHub Pages
- **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** - How to update content, add languages, etc.

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#E879F9` | Main accent, buttons, links |
| Secondary | `#A78BFA` | Secondary elements |
| Accent | `#FB7185` | Highlights, badges |
| Pastel Purple | `#FAF5FF` | Backgrounds |

### Typography

- **Font Family:** Outfit
- **Headings:** Bold, gradient or neutral-900
- **Body:** Regular, neutral-600

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/en/` | English landing page |
| `/tr/` | Turkish landing page |
| `/*/apps/` | Apps listing |
| `/*/zodiac-flow/` | Zodiac Flow product page |
| `/*/support/` | Support & contact |
| `/*/privacy-policy/` | Privacy Policy |
| `/*/terms-of-service/` | Terms of Service |

## 🔧 Configuration

### Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_BASE_PATH` | Base path for GitHub Pages (set automatically in CI) |

### Next.js Config

Key settings in `next.config.ts`:

```typescript
{
  output: "export",
  basePath: "/nurcabbargok",
  assetPrefix: "/nurcabbargok/",
  trailingSlash: true,
  images: { unoptimized: true }
}
```

## 📝 Content Updates

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions on:

- Updating text content
- Replacing screenshots
- Adding new apps
- Adding new languages
- Updating legal pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📜 License

© 2025 Fatma Nur Cabbar Gok. All rights reserved.

---

Made with ❤️ in Turkey
