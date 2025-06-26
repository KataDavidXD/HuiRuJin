# HuiRuJin Personal Website

**Professional website for HuiRuJin - Maritime Lawyer & Professional Diver**

A modern, bilingual personal website showcasing professional legal expertise and diving passion, built with Next.js and deployed on GitHub Pages.

## 🌟 Features

- **Bilingual Support**: Full English and Chinese (Mandarin) language support
- **Modern UI**: Clean, professional design with responsive layout
- **GitHub Pages**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Search engine friendly with proper meta tags
- **Performance**: Lighthouse score >90 with optimized images and code
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Live Demo

- **Production**: [https://username.github.io/HuiRuJin](https://username.github.io/HuiRuJin)
- **English Version**: [/en](https://username.github.io/HuiRuJin/en)
- **Chinese Version**: [/zh](https://username.github.io/HuiRuJin/zh)

## 📋 Project Structure

```
HuiRuJin/
├── docs/                     # Project documentation
│   ├── PRD.md               # Product Requirements Document
│   ├── DEVELOPMENT.md       # Development status tracking
│   └── DEPLOYMENT.md        # Deployment guide
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable UI components
│   ├── content/             # Content management
│   │   ├── personal/        # Personal information
│   │   ├── legal/          # Legal experience data
│   │   └── diving/         # Diving certifications
│   ├── lib/                # Utilities and configurations
│   │   └── i18n/           # Internationalization
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
│   ├── images/             # Organized image assets
│   └── documents/          # PDFs and downloads
└── .github/workflows/      # CI/CD automation
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Internationalization**: next-intl
- **Deployment**: GitHub Pages (Static Export)
- **CI/CD**: GitHub Actions
- **Package Manager**: npm

## 📱 Responsive Design

- **Desktop**: 1200px+ (Full experience)
- **Tablet**: 768px-1199px (Optimized layout)
- **Mobile**: 320px-767px (Touch-optimized)

## 🌍 Internationalization

The website supports two languages:
- **English** (`/en`): Default language
- **Chinese** (`/zh`): Simplified Chinese

### Content Structure
- Navigation and UI elements: JSON translation files
- Content data: Structured JSON with bilingual support
- SEO metadata: Localized for each language

## 🎨 Design System

### Color Palette
- **Primary**: Deep navy blue (#1a365d) - Professional authority
- **Ocean**: Ocean blue (#0ea5e9) - Diving theme
- **Gold**: Warm gold (#f59e0b) - Legal tradition
- **Neutral**: Gray scale for typography and backgrounds

### Typography
- **Headings**: Playfair Display (Elegant, professional)
- **Body**: Inter (Modern, readable)
- **Chinese**: Noto Sans SC (Optimized for Chinese characters)

## 📊 Content Management

All content is centrally managed through structured JSON files:

### Personal Information (`src/content/personal/`)
- `profile.json`: Basic information, contact details, photos
- Bilingual bio and philosophy
- Social media links and professional statistics

### Legal Experience (`src/content/legal/`)
- `experience.json`: Work history, education, certifications
- Practice areas with detailed descriptions
- Notable cases and publications

### Diving Experience (`src/content/diving/`)
- `certifications.json`: Diving qualifications and statistics
- Dive locations and specializations
- Conservation efforts and safety training

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 8.0.0
```

### Installation
```bash
# Clone the repository
git clone https://github.com/username/HuiRuJin.git
cd HuiRuJin

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run export       # Static export for GitHub Pages
npm run lint         # Lint code
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
```

## 📦 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

2. **Automatic Deployment**
   - Push to `main` branch triggers CI/CD
   - Build and deploy via GitHub Actions
   - Status available in Actions tab

3. **Custom Domain** (Optional)
   - Add CNAME file with domain name
   - Configure DNS A records
   - Enable SSL certificate

### Environment Variables

For production deployment, configure:
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📈 Performance

### Target Metrics
- **Lighthouse Score**: >90
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

### Optimization Features
- Static site generation
- Image optimization
- Code splitting
- Bundle analysis
- Lazy loading

## 🔧 Customization

### Content Updates
1. Edit JSON files in `src/content/`
2. Update translations in `src/lib/i18n/locales/`
3. Replace images in `public/images/`
4. Commit changes to trigger deployment

### Design Customization
1. Modify color palette in `tailwind.config.js`
2. Update typography in theme configuration
3. Customize components in `src/components/`

### Adding New Sections
1. Create new content JSON files
2. Add route pages in `src/app/`
3. Update navigation in translation files
4. Create corresponding components

## 📝 Documentation

- **[PRD](docs/PRD.md)**: Complete product requirements
- **[Development Status](docs/DEVELOPMENT.md)**: Progress tracking
- **[Deployment Guide](docs/DEPLOYMENT.md)**: Detailed deployment instructions

## 🔒 Security

- HTTPS enforcement
- Content Security Policy headers
- XSS protection
- CSRF protection
- No sensitive data exposure

## 🌱 Environmental Considerations

- Optimized for minimal bandwidth usage
- Green hosting via GitHub Pages
- Efficient code and image optimization
- Marine conservation content promotion

## 📞 Support

For technical support or content updates:
- **Email**: contact@huirujin.com
- **Issues**: [GitHub Issues](https://github.com/username/HuiRuJin/issues)
- **Documentation**: Check `/docs` folder

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS
- shadcn/ui for beautiful components
- The diving and legal communities for inspiration

---

**Built with ❤️ by HuiRuJin | Combining legal precision with diving passion** Personal Website

**Professional website for HuiRuJin - Maritime Lawyer & Professional Diver**

A modern, bilingual personal website showcasing professional legal expertise and diving passion, built with Next.js and deployed on GitHub Pages.

## 🌟 Features

- **Bilingual Support**: Full English and Chinese (Mandarin) language support
- **Modern UI**: Clean, professional design with responsive layout
- **GitHub Pages**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Search engine friendly with proper meta tags
- **Performance**: Lighthouse score >90 with optimized images and code
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Live Demo

- **Production**: [https://username.github.io/HuiRuJin](https://username.github.io/HuiRuJin)
- **English Version**: [/en](https://username.github.io/HuiRuJin/en)
- **Chinese Version**: [/zh](https://username.github.io/HuiRuJin/zh)

## 📋 Project Structure

```
HuiRuJin/
├── docs/                     # Project documentation
│   ├── PRD.md               # Product Requirements Document
│   ├── DEVELOPMENT.md       # Development status tracking
│   └── DEPLOYMENT.md        # Deployment guide
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable UI components
│   ├── content/             # Content management
│   │   ├── personal/        # Personal information
│   │   ├── legal/          # Legal experience data
│   │   └── diving/         # Diving certifications
│   ├── lib/                # Utilities and configurations
│   │   └── i18n/           # Internationalization
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
│   ├── images/             # Organized image assets
│   └── documents/          # PDFs and downloads
└── .github/workflows/      # CI/CD automation
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Internationalization**: next-intl
- **Deployment**: GitHub Pages (Static Export)
- **CI/CD**: GitHub Actions
- **Package Manager**: npm

## 📱 Responsive Design

- **Desktop**: 1200px+ (Full experience)
- **Tablet**: 768px-1199px (Optimized layout)
- **Mobile**: 320px-767px (Touch-optimized)

## 🌍 Internationalization

The website supports two languages:
- **English** (`/en`): Default language
- **Chinese** (`/zh`): Simplified Chinese

### Content Structure
- Navigation and UI elements: JSON translation files
- Content data: Structured JSON with bilingual support
- SEO metadata: Localized for each language

## 🎨 Design System

### Color Palette
- **Primary**: Deep navy blue (#1a365d) - Professional authority
- **Ocean**: Ocean blue (#0ea5e9) - Diving theme
- **Gold**: Warm gold (#f59e0b) - Legal tradition
- **Neutral**: Gray scale for typography and backgrounds

### Typography
- **Headings**: Playfair Display (Elegant, professional)
- **Body**: Inter (Modern, readable)
- **Chinese**: Noto Sans SC (Optimized for Chinese characters)

## 📊 Content Management

All content is centrally managed through structured JSON files:

### Personal Information (`src/content/personal/`)
- `profile.json`: Basic information, contact details, photos
- Bilingual bio and philosophy
- Social media links and professional statistics

### Legal Experience (`src/content/legal/`)
- `experience.json`: Work history, education, certifications
- Practice areas with detailed descriptions
- Notable cases and publications

### Diving Experience (`src/content/diving/`)
- `certifications.json`: Diving qualifications and statistics
- Dive locations and specializations
- Conservation efforts and safety training

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 8.0.0
```

### Installation
```bash
# Clone the repository
git clone https://github.com/username/HuiRuJin.git
cd HuiRuJin

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run export       # Static export for GitHub Pages
npm run lint         # Lint code
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
```

## 📦 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

2. **Automatic Deployment**
   - Push to `main` branch triggers CI/CD
   - Build and deploy via GitHub Actions
   - Status available in Actions tab

3. **Custom Domain** (Optional)
   - Add CNAME file with domain name
   - Configure DNS A records
   - Enable SSL certificate

### Environment Variables

For production deployment, configure:
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📈 Performance

### Target Metrics
- **Lighthouse Score**: >90
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

### Optimization Features
- Static site generation
- Image optimization
- Code splitting
- Bundle analysis
- Lazy loading

## 🔧 Customization

### Content Updates
1. Edit JSON files in `src/content/`
2. Update translations in `src/lib/i18n/locales/`
3. Replace images in `public/images/`
4. Commit changes to trigger deployment

### Design Customization
1. Modify color palette in `tailwind.config.js`
2. Update typography in theme configuration
3. Customize components in `src/components/`

### Adding New Sections
1. Create new content JSON files
2. Add route pages in `src/app/`
3. Update navigation in translation files
4. Create corresponding components

## 📝 Documentation

- **[PRD](docs/PRD.md)**: Complete product requirements
- **[Development Status](docs/DEVELOPMENT.md)**: Progress tracking
- **[Deployment Guide](docs/DEPLOYMENT.md)**: Detailed deployment instructions

## 🔒 Security

- HTTPS enforcement
- Content Security Policy headers
- XSS protection
- CSRF protection
- No sensitive data exposure

## 🌱 Environmental Considerations

- Optimized for minimal bandwidth usage
- Green hosting via GitHub Pages
- Efficient code and image optimization
- Marine conservation content promotion

## 📞 Support

For technical support or content updates:
- **Email**: contact@huirujin.com
- **Issues**: [GitHub Issues](https://github.com/username/HuiRuJin/issues)
- **Documentation**: Check `/docs` folder

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS
- shadcn/ui for beautiful components
- The diving and legal communities for inspiration

---

**Built with ❤️ by HuiRuJin | Combining legal precision with diving passion**