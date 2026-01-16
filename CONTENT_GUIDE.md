# Content Guide

This guide explains how to update and customize the website content.

## Table of Contents

1. [Updating Text Content](#updating-text-content)
2. [Replacing Screenshots](#replacing-screenshots)
3. [Setting Contact Email](#setting-contact-email)
4. [Adding New Apps](#adding-new-apps)
5. [Adding New Languages](#adding-new-languages)
6. [Updating Legal Pages](#updating-legal-pages)

---

## Updating Text Content

All translatable text is stored in the `/locales` directory:

- `/locales/en.json` - English translations
- `/locales/tr.json` - Turkish translations

### Structure

The JSON files are organized by section:

```json
{
  "meta": { /* SEO metadata */ },
  "nav": { /* Navigation labels */ },
  "hero": { /* Hero section content */ },
  "featuredApp": { /* Featured app section */ },
  "apps": { /* Apps page content */ },
  "zodiacFlowPage": { /* Zodiac Flow page content */ },
  "support": { /* Support page content */ },
  "privacy": { /* Privacy policy metadata */ },
  "terms": { /* Terms of service metadata */ },
  "footer": { /* Footer content */ }
}
```

### Example: Updating the Hero Tagline

1. Open `/locales/en.json`
2. Find the `hero` section
3. Update the `tagline` and `subtitle` values
4. Repeat for `/locales/tr.json` with Turkish translations

```json
{
  "hero": {
    "tagline": "Your New Tagline Here",
    "subtitle": "Your new subtitle text here."
  }
}
```

---

## Replacing Screenshots

Screenshots are referenced in the Zodiac Flow page. Currently, placeholder images are used.

### To Add Real Screenshots:

1. **Prepare your screenshots**
   - Recommended size: 1290 × 2796 pixels (iPhone 15 Pro Max)
   - Format: PNG or WebP
   - Name them: `screenshot-1.png`, `screenshot-2.png`, etc.

2. **Add screenshots to the public folder**
   ```
   /public/screenshots/
   ├── screenshot-1.png
   ├── screenshot-2.png
   ├── screenshot-3.png
   └── screenshot-4.png
   ```

3. **Update the Zodiac Flow page**
   - Edit `/src/app/en/zodiac-flow/page.tsx` and `/src/app/tr/zodiac-flow/page.tsx`
   - Replace the placeholder divs with actual `<Image>` components

---

## Setting Contact Email

The contact email appears in multiple places. To update it:

### 1. Update Locale Files

In both `/locales/en.json` and `/locales/tr.json`:

```json
{
  "support": {
    "email": "your-actual-email@domain.com"
  }
}
```

### 2. Update Footer Component

In `/src/components/Footer.tsx`, update the email:

```tsx
<p className="text-neutral-400 text-sm mb-4">
  your-actual-email@domain.com
</p>
```

---

## Adding New Apps

Apps are defined in `/src/data/apps.ts`.

### To Add a New App:

1. Add a new entry to the `apps` array:

```typescript
{
  id: "your-new-app",
  name: "Your New App",
  tagline: "App tagline here",
  description: "Full description of your app.",
  icon: "/brand/your-new-app-icon.svg",
  appStoreUrl: "https://apps.apple.com/app/your-app-id",
  status: "available", // or "coming-soon"
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
}
```

2. Add the app icon to `/public/brand/your-new-app-icon.svg`

3. If the app is "available", create a dedicated page for it (similar to Zodiac Flow)

---

## Adding New Languages

The site supports path-based localization and can be extended with new languages.

### Steps to Add a New Language (e.g., German):

1. **Create the translation file**
   - Copy `/locales/en.json` to `/locales/de.json`
   - Translate all values to German

2. **Update the types**
   In `/src/types/index.ts`:
   ```typescript
   export type Locale = "en" | "tr" | "de";
   export const locales: Locale[] = ["en", "tr", "de"];
   ```

3. **Update the i18n utility**
   In `/src/lib/i18n.ts`:
   ```typescript
   import deMessages from "../../locales/de.json";
   
   const messages: Record<Locale, typeof enMessages> = {
     en: enMessages,
     tr: trMessages,
     de: deMessages,
   };
   ```

4. **Create locale-specific pages**
   - Create `/src/app/de/` directory
   - Copy all pages from `/src/app/en/` to `/src/app/de/`
   - Update the `locale` constant in each page from `"en"` to `"de"`

5. **Update the Header component**
   - Modify the language toggle to support multiple languages
   - Consider using a dropdown for 3+ languages

6. **Update the sitemap**
   In `/src/app/sitemap.ts`, add `"de"` to the locales array.

---

## Updating Legal Pages

The Privacy Policy and Terms of Service pages contain placeholder text that must be replaced.

### Privacy Policy

Edit the following files:
- `/src/app/en/privacy-policy/page.tsx`
- `/src/app/tr/privacy-policy/page.tsx`

Look for `[PLACEHOLDER: ...]` comments and replace with actual content.

### Terms of Service

Edit the following files:
- `/src/app/en/terms-of-service/page.tsx`
- `/src/app/tr/terms-of-service/page.tsx`

Look for `[PLACEHOLDER: ...]` comments and replace with actual content.

### Important Sections to Update:

1. **Introduction** - Your company/developer information
2. **Data Collection** - Actual data you collect
3. **Third-Party Services** - Real services you use (Supabase, RevenueCat, etc.)
4. **Contact Information** - Real email address
5. **Governing Law** - Your actual jurisdiction

---

## Quick Reference

| Task | File(s) to Edit |
|------|-----------------|
| Update hero text | `/locales/en.json`, `/locales/tr.json` |
| Change contact email | `/locales/*.json`, `/src/components/Footer.tsx` |
| Add app screenshots | `/public/screenshots/`, page components |
| Add new app | `/src/data/apps.ts` |
| Add new language | Multiple files (see section above) |
| Update privacy policy | `/src/app/*/privacy-policy/page.tsx` |
| Update terms | `/src/app/*/terms-of-service/page.tsx` |
| Change colors | `/tailwind.config.ts`, `/src/app/globals.css` |
| Update logo | `/public/brand/nc-logo.svg`, `/public/brand/favicon.svg` |

---

## Need Help?

If you need assistance with content updates, refer to the codebase structure or open an issue on GitHub.
