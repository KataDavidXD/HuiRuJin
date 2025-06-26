 # Deployment Guide
**HuiRuJin Personal Website - GitHub Pages Deployment**

## Table of Contents
1. [GitHub Pages Setup](#github-pages-setup)
2. [Build Configuration](#build-configuration)
3. [Custom Domain Configuration](#custom-domain-configuration)
4. [CI/CD Pipeline](#cicd-pipeline)
5. [Environment Variables](#environment-variables)
6. [Deployment Checklist](#deployment-checklist)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 GitHub Pages Setup

### Prerequisites
- GitHub repository with admin access
- Next.js project configured for static export
- Domain name (optional, for custom domain)

### Step 1: Repository Configuration

1. **Enable GitHub Pages**
   ```bash
   # Navigate to repository Settings > Pages
   # Source: Deploy from a branch
   # Branch: gh-pages
   # Folder: / (root)
   ```

2. **Branch Structure**
   - `main`: Development and source code
   - `gh-pages`: Deployment branch (auto-generated)

### Step 2: Next.js Configuration

Create or update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://username.github.io/HuiRuJin' 
    : '',
  basePath: process.env.NODE_ENV === 'production' 
    ? '/HuiRuJin' 
    : '',
  
  // Internationalization for GitHub Pages
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: false
  }
}

module.exports = nextConfig
```

### Step 3: Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build",
    "deploy": "npm run export && touch ./dist/.nojekyll",
    "lint": "next lint"
  }
}
```

---

## 🔧 Build Configuration

### Static Export Setup

1. **Configure Static Generation**
   ```typescript
   // app/layout.tsx
   export const dynamic = 'force-static'
   
   // For each page that needs static generation
   export async function generateStaticParams() {
     return [
       { locale: 'en' },
       { locale: 'zh' }
     ]
   }
   ```

2. **Image Optimization**
   ```typescript
   // Since GitHub Pages doesn't support Next.js Image optimization
   // Use unoptimized images or pre-optimized assets
   
   // components/OptimizedImage.tsx
   import Image from 'next/image'
   
   export default function OptimizedImage({ src, alt, ...props }) {
     return (
       <Image
         src={src}
         alt={alt}
         unoptimized={true}
         {...props}
       />
     )
   }
   ```

3. **Asset Handling**
   ```
   public/
   ├── images/          # Static images
   ├── documents/       # PDFs and downloads
   ├── icons/          # Favicons and icons
   └── .nojekyll       # Disable Jekyll processing
   ```

### Build Process

```bash
# Development build
npm run dev

# Production build
npm run build

# Static export (for GitHub Pages)
npm run export

# Deploy to GitHub Pages
npm run deploy
```

---

## 🌐 Custom Domain Configuration

### Step 1: Domain Setup

1. **Purchase Domain** (recommended providers):
   - Namecheap
   - Google Domains
   - GoDaddy

2. **DNS Configuration**
   ```
   # A Records (for apex domain)
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   
   # CNAME Record (for www subdomain)
   www.yourdomain.com -> username.github.io
   ```

### Step 2: GitHub Configuration

1. **Custom Domain Setting**
   ```bash
   # In repository Settings > Pages
   # Custom domain: www.yourdomain.com
   # Enforce HTTPS: ✓ (enable after DNS propagation)
   ```

2. **CNAME File**
   ```bash
   # Create public/CNAME file
   echo "www.yourdomain.com" > public/CNAME
   ```

### Step 3: SSL Certificate

GitHub automatically provides SSL certificates for custom domains:
- Certificate generation: 24-48 hours after DNS setup
- Automatic renewal: Managed by GitHub
- Force HTTPS: Enable after certificate is active

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        with:
          static_site_generator: next
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build with Next.js
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Alternative Workflow (for older setup)

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install and Build
        run: |
          npm ci
          npm run export
          touch ./dist/.nojekyll
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🔐 Environment Variables

### Development Variables

Create `.env.local`:
```bash
# Development environment
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key

# Google Maps API (if used)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-api-key
```

### Production Variables

Configure in GitHub repository settings:
```bash
# Repository Settings > Secrets and variables > Actions

# Secrets
EMAILJS_SERVICE_ID=your-service-id
EMAILJS_TEMPLATE_ID=your-template-id
EMAILJS_PUBLIC_KEY=your-public-key
GOOGLE_MAPS_API_KEY=your-maps-api-key

# Variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## ✅ Deployment Checklist

### Pre-Deployment

- [ ] **Code Review**
  - [ ] All features implemented and tested
  - [ ] No console errors or warnings
  - [ ] Responsive design verified
  - [ ] Cross-browser compatibility checked

- [ ] **Content Verification**
  - [ ] All text content proofread
  - [ ] Images optimized and compressed
  - [ ] Contact information verified
  - [ ] Legal disclaimers reviewed

- [ ] **Technical Validation**
  - [ ] Build process successful
  - [ ] Static export working
  - [ ] No broken links
  - [ ] SEO meta tags configured

### Deployment Process

- [ ] **Repository Setup**
  - [ ] GitHub Pages enabled
  - [ ] Deployment branch configured
  - [ ] CI/CD workflow active
  - [ ] Environment variables set

- [ ] **Domain Configuration**
  - [ ] DNS records configured
  - [ ] CNAME file created
  - [ ] SSL certificate active
  - [ ] HTTPS enforcement enabled

### Post-Deployment

- [ ] **Verification**
  - [ ] Site loads correctly
  - [ ] All pages accessible
  - [ ] Forms working properly
  - [ ] Analytics tracking active

- [ ] **Performance Check**
  - [ ] Page speed optimized
  - [ ] Mobile responsiveness verified
  - [ ] SEO validation completed
  - [ ] Accessibility audit passed

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Failures

**Problem**: Build fails during GitHub Actions
```bash
Error: Export encountered errors on following paths:
/en/some-page
```

**Solution**:
```typescript
// Ensure all pages have proper static generation
export async function generateStaticParams() {
  // Return all possible paths
}

// Add error boundaries
export default function ErrorBoundary({ error }) {
  return <div>Error: {error.message}</div>
}
```

#### 2. Assets Not Loading

**Problem**: Images and CSS not loading after deployment

**Solution**:
```javascript
// next.config.js - Update asset prefix
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://username.github.io/repository-name'
    : '',
  basePath: process.env.NODE_ENV === 'production' 
    ? '/repository-name'
    : ''
}
```

#### 3. 404 Errors on Page Refresh

**Problem**: Direct URLs return 404 errors

**Solution**:
```bash
# Add 404.html to public directory
# GitHub Pages will serve this for all 404s
cp public/index.html public/404.html
```

#### 4. Custom Domain SSL Issues

**Problem**: SSL certificate not generating

**Solution**:
1. Verify DNS configuration
2. Wait 24-48 hours for propagation
3. Disable/re-enable custom domain in settings
4. Check domain ownership verification

### Debug Commands

```bash
# Local testing
npm run build && npm run start

# Check static export
npm run export && cd dist && python -m http.server 3000

# Verify build output
ls -la dist/
cat dist/.nojekyll
cat dist/CNAME

# Test GitHub Pages URL
curl -I https://username.github.io/repository-name
```

### Performance Optimization

```bash
# Bundle analysis
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build

# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

---

## 📞 Support Resources

### Documentation
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Tools
- [GitHub Pages Health Check](https://github.com/github/pages-health-check)
- [DNS Checker](https://dnschecker.org/)
- [SSL Certificate Checker](https://www.sslshopper.com/ssl-checker.html)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [GitHub Community Forum](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

*Last Updated: December 2024*
*Next Review: Post-deployment*