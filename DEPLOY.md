# Deployment Guide for GitHub Pages

This guide explains how to deploy the website to GitHub Pages.

## Prerequisites

- Node.js 20 or later
- npm
- A GitHub repository

## Configuration

The site is configured for GitHub Pages with the following settings in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nurcabbargok",
  assetPrefix: "/nurcabbargok/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys the site when you push to the `main` branch.

### Setup Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/lnex1/nurcabbargok.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically run on the next push

3. **Verify the deployment**
   - After the workflow completes, visit: https://lnex1.github.io/nurcabbargok/
   - Check that all pages load correctly
   - Verify the language toggle works (EN ↔ TR)

## Manual Deployment

If you prefer to deploy manually:

1. **Build the site locally**
   ```bash
   npm install
   npm run build
   ```

2. **The static files will be in the `out` directory**

3. **Deploy the `out` directory to GitHub Pages**

## Verifying URLs

After deployment, verify these URLs work correctly:

| Page | English | Turkish |
|------|---------|---------|
| Home | https://lnex1.github.io/nurcabbargok/en/ | https://lnex1.github.io/nurcabbargok/tr/ |
| Apps | https://lnex1.github.io/nurcabbargok/en/apps/ | https://lnex1.github.io/nurcabbargok/tr/apps/ |
| Zodiac Flow | https://lnex1.github.io/nurcabbargok/en/zodiac-flow/ | https://lnex1.github.io/nurcabbargok/tr/zodiac-flow/ |
| Support | https://lnex1.github.io/nurcabbargok/en/support/ | https://lnex1.github.io/nurcabbargok/tr/support/ |
| Privacy Policy | https://lnex1.github.io/nurcabbargok/en/privacy-policy/ | https://lnex1.github.io/nurcabbargok/tr/privacy-policy/ |
| Terms of Service | https://lnex1.github.io/nurcabbargok/en/terms-of-service/ | https://lnex1.github.io/nurcabbargok/tr/terms-of-service/ |

## Troubleshooting

### Assets not loading
- Ensure all asset references use the basePath
- Check that `assetPrefix` is correctly set

### 404 errors on routes
- Verify `trailingSlash: true` is set in next.config.ts
- Check that all internal links end with `/`

### Build errors
- Run `npm run build` locally to see detailed errors
- Ensure all TypeScript types are correct

## Environment Variables

The following environment variable is used during build:

- `NEXT_PUBLIC_BASE_PATH`: Set to `/nurcabbargok` for production builds

This is automatically set in the GitHub Actions workflow.
