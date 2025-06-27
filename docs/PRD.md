 # Personal Website PRD - HuiRuJin (惠如瑾)
**Lawyer & Diver Personal Portfolio Website**

## Document Information
- **Version**: 2.1.2
- **Last Updated**: December 27, 2024
- **Status**: ✅ GRADIENT DESIGN COMPLETE & READY FOR DEPLOYMENT
- **Maintained By**: Development Team

## 📋 Product Version History

### Version 2.1.2 (December 27, 2024) - GRADIENT DESIGN IMPLEMENTATION  
**Implementation Status**: ✅ COMPLETED
**GitHub Pages Status**: ✅ VERIFIED COMPATIBLE

**Visual Enhancement Delivered**:
- Modern gradient background: Smooth transition from #6B73FF to #000DFF
- Enhanced button design: Gradient styling with hover effects and smooth transitions
- Improved accessibility: White text on gradient background for better contrast
- Consistent theme: All pages (homepage, about, resources, contact) updated with gradient design

**Technical Achievements**:
- CSS-based gradient implementation: No performance impact, clean code structure
- Maintained typography: Chinese 仿宋 and English Times New Roman fonts preserved
- Zero build errors: All 8 pages generate successfully with new design
- Cross-browser compatibility: Gradient styles work across modern browsers

### Version 2.1.1 (December 27, 2024) - NAVIGATION FIX
**Implementation Status**: ✅ COMPLETED
**GitHub Pages Status**: ✅ VERIFIED COMPATIBLE

**Critical Fix Delivered**:
- GitHub Pages navigation fix: All links now work correctly
- BasePath integration: Navigation buttons properly prefixed with `/HuiRuJin`
- Environment handling: Development and production paths both functional
- User experience: Seamless navigation between all pages on GitHub Pages

**Technical Achievements**:
- Zero impact on performance: Same 87.2 kB shared JS bundle
- Development environment preserved: Local development still uses relative paths
- Production optimization: Automatic basePath injection for GitHub Pages
- Cross-page navigation fully functional

### Version 2.1 (December 27, 2024) - DESIGN REFINEMENT
**Implementation Status**: ✅ COMPLETED & DEPLOYED
**GitHub Pages Status**: ✅ VERIFIED COMPATIBLE

**Key Features Delivered**:
- Refined color scheme: Soft blue background (#93B8D4) with golden yellow text (#F5CB76)
- Enhanced button design: #F5CB76 background with #93B8D4 text and hover effects
- Typography improvement: Chinese 仿宋 (FangSong), English Times New Roman
- Optimized resources page layout: Better text hierarchy and spacing
- Maintained performance: Same 87.2 kB shared JS bundle size

**Technical Achievements**:
- Cross-platform font compatibility with proper fallbacks
- Improved accessibility with better color contrast ratios
- Enhanced user experience with refined button interactions
- Zero performance impact while improving visual design

### Version 2.0 (December 27, 2024) - MAJOR REDESIGN
**Implementation Status**: ✅ COMPLETED & DEPLOYED
**GitHub Pages Status**: ✅ VERIFIED COMPATIBLE

**Key Features Delivered**:
- New color scheme: Teal blue background (#02AFB7) with golden yellow text (#F5CB76)
- Restructured navigation: Three-button layout ("个人介绍", "能帮助链接的资源", "联系方式")
- Page architecture: Separate dedicated pages for different content types
- Enhanced UX: Rectangular avatar positioned left of text content
- Simplified contact: WeChat and LinkedIn focus on homepage

**Technical Achievements**:
- 5 total pages successfully generated and optimized
- Static export verified for GitHub Pages deployment
- Mobile-responsive design maintained across all new pages
- SEO optimization implemented for all routes
- Zero build errors or compatibility issues

### Version 1.1 (December 2024) - FOUNDATION RELEASE
**Implementation Status**: ✅ DEPLOYED
**Features**: Bilingual structure, professional content, GitHub Pages integration

### Version 1.0 (December 2024) - MVP
**Implementation Status**: ✅ COMPLETED
**Features**: Basic project setup, configuration, documentation

## 🎉 Implementation Status
- ✅ **Bilingual Website**: Chinese default (/) + English (/en) structure implemented
- ✅ **Professional Design**: Modern, responsive design with enhanced content
- ✅ **GitHub Pages**: Successfully deployed and accessible
- ✅ **SEO Optimized**: Proper metadata, hreflang, and OpenGraph implementation
- ✅ **Language Navigation**: Intuitive toggle between Chinese and English versions
- ✅ **User Feedback v2.1.2**: All requirements from `6_27_v3.txt` successfully completed
- ✅ **Modern Gradient Design**: Beautiful gradient background (#6B73FF to #000DFF) with white text
- ✅ **Enhanced Typography**: Chinese 仿宋 (FangSong), English Times New Roman
- ✅ **Gradient Button Design**: Gradient buttons (#000DFF to #6B73FF) with smooth hover effects
- ✅ **Optimized Layout**: Enhanced resources page text hierarchy and spacing
- ✅ **User Feedback v2.0**: All 6 requirements from `6_27_v1.txt` successfully completed
- ✅ **Enhanced Navigation**: Three-button structure with dedicated pages for different content
- ✅ **Improved Layout**: Rectangular avatar positioned left of text content
- ✅ **Streamlined Contact**: Simplified contact information on homepage

---

## 1. Project Overview

### 1.1 Project Description
A modern, bilingual personal website showcasing professional legal expertise and diving passion. The website will serve as a digital portfolio and contact platform for potential clients and diving enthusiasts.

### 1.2 Target Audience
- **Primary**: Legal clients seeking professional services
- **Secondary**: Diving community and potential diving partners
- **Tertiary**: Professional network and recruiters

### 1.3 Project Goals
- Establish professional online presence
- Showcase legal expertise and diving achievements
- Provide multilingual accessibility (English/Chinese)
- Enable easy content management and updates
- Ensure optimal performance and SEO

---

## 2. Functional Requirements

### 2.1 Core Features

#### 2.1.1 Multilingual Support (Priority: High)
- **English Version**: Default language for international reach
- **Chinese Version**: 中文版本支持中文客户
- Language toggle functionality
- Localized content management
- Cultural adaptation for design elements

#### 2.1.2 Professional Portfolio (Priority: High)
- **Legal Section**:
  - Education background
  - Professional experience
  - Practice areas
  - Notable cases (where permitted)
  - Certifications and bar admissions
  - Client testimonials

- **Diving Section**:
  - Diving certifications (PADI, SSI, etc.)
  - Diving experience and locations
  - Underwater photography gallery
  - Diving blog/journal
  - Safety records and achievements

#### 2.1.3 Contact & Communication (Priority: High)
- Professional contact form
- Office location and hours
- Social media integration
- LinkedIn profile connection
- Emergency contact for diving services

#### 2.1.4 Content Management (Priority: Medium)
- Blog/news section
- Case studies (legal)
- Diving trip reports
- Photo galleries
- Document downloads (CV, certifications)

### 2.2 Technical Requirements

#### 2.2.1 GitHub Pages Deployment (Priority: High)
- Static site generation compatible with GitHub Pages
- Custom domain support
- SSL certificate integration
- Automated deployment pipeline
- Branch-based staging environment

#### 2.2.2 Performance Requirements (Priority: High)
- Page load time < 3 seconds
- Mobile-first responsive design
- SEO optimization
- Accessibility compliance (WCAG 2.1 AA)
- Cross-browser compatibility

#### 2.2.3 Content Management Structure (Priority: High)
```
/content/
  /personal/
    - profile.json (personal info)
    - bio_en.md
    - bio_zh.md
  /legal/
    - experience_en.json
    - experience_zh.json
    - certifications.json
    - practice-areas_en.md
    - practice-areas_zh.md
  /diving/
    - certifications.json
    - logbook.json
    - locations_en.json
    - locations_zh.json
  /media/
    /photos/
      /professional/
      /diving/
      /personal/
    /documents/
      - cv_en.pdf
      - cv_zh.pdf
      /certifications/
```

---

## 3. Design Requirements

### 3.1 UI/UX Specifications

#### 3.1.1 Design Philosophy (Priority: High)
- **Professional**: Clean, trustworthy, authoritative
- **Modern**: Contemporary design trends, minimalist
- **Accessible**: Clear navigation, readable typography
- **Bilingual**: Seamless language switching experience

#### 3.1.2 Visual Identity (Priority: High)
- **Color Palette**: 
  - Primary: Deep navy blue (#1a365d) - professionalism
  - Secondary: Ocean blue (#2b6cb0) - diving theme
  - Accent: Gold (#d69e2e) - premium, legal tradition
  - Neutral: Grays (#718096, #f7fafc)

- **Typography**:
  - Headings: Playfair Display (elegant, professional)
  - Body: Inter (modern, readable)
  - Chinese: Noto Sans SC (optimized for Chinese characters)

- **Layout**:
  - Grid-based responsive design
  - Card-based content organization
  - Parallax scrolling for visual appeal
  - Sticky navigation

#### 3.1.3 Component Library (Priority: Medium)
- Navigation header with language toggle
- Hero section with professional photo
- Service cards for legal specializations
- Gallery component for diving photos
- Contact form with validation
- Footer with social links and contact info

### 3.2 Responsive Design (Priority: High)
- **Desktop**: 1200px+ (full experience)
- **Tablet**: 768px-1199px (optimized layout)
- **Mobile**: 320px-767px (touch-optimized)

---

## 4. Content Strategy

### 4.1 Content Structure

#### 4.1.1 English Content
```
Home (/)
├── About Me
│   ├── Professional Background
│   ├── Diving Journey
│   └── Personal Philosophy
├── Legal Services (/legal)
│   ├── Practice Areas
│   ├── Experience
│   ├── Case Studies
│   └── Client Resources
├── Diving (/diving)
│   ├── Certifications
│   ├── Dive Log
│   ├── Photography
│   └── Safety & Training
├── Blog (/blog)
│   ├── Legal Insights
│   ├── Diving Adventures
│   └── Personal Reflections
└── Contact (/contact)
    ├── Office Information
    ├── Consultation Booking
    └── Emergency Diving Contact
```

#### 4.1.2 Chinese Content (中文内容)
```
首页 (/zh)
├── 关于我 (/zh/about)
│   ├── 专业背景
│   ├── 潜水之旅
│   └── 个人理念
├── 法律服务 (/zh/legal)
│   ├── 执业领域
│   ├── 从业经验
│   ├── 案例研究
│   └── 客户资源
├── 潜水 (/zh/diving)
│   ├── 认证资格
│   ├── 潜水日志
│   ├── 水下摄影
│   └── 安全培训
├── 博客 (/zh/blog)
│   ├── 法律见解
│   ├── 潜水冒险
│   └── 个人感悟
└── 联系方式 (/zh/contact)
    ├── 办公室信息
    ├── 咨询预约
    └── 潜水紧急联系
```

### 4.2 SEO Strategy (Priority: Medium)
- Keyword optimization for legal services
- Local SEO for legal practice location
- Diving-related keyword optimization
- Meta descriptions in both languages
- Schema markup for professional services
- Google Business Profile integration

---

## 5. Technical Architecture

### 5.1 Technology Stack (Priority: High)

#### 5.1.1 Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Content**: MDX + JSON for data
- **Deployment**: GitHub Pages (static export)
- **Analytics**: Google Analytics 4

#### 5.1.2 Development Tools
- **Package Manager**: pnpm
- **Code Quality**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **CI/CD**: GitHub Actions
- **Image Optimization**: next/image with static optimization

#### 5.1.3 Third-party Integrations
- **Forms**: React Hook Form + EmailJS
- **Maps**: Google Maps Embed API
- **Social**: Social media meta tags
- **Fonts**: Google Fonts + Font optimization

### 5.2 File Structure (Priority: High)
```
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── PRD.md
│   ├── DEVELOPMENT.md
│   └── DEPLOYMENT.md
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── legal/
│   │   ├── diving/
│   │   └── gallery/
│   ├── documents/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── sections/
│   │   └── layout/
│   ├── lib/
│   │   ├── i18n/
│   │   ├── utils/
│   │   └── data/
│   ├── content/
│   │   ├── legal/
│   │   ├── diving/
│   │   └── personal/
│   └── types/
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 6. Project Timeline & Milestones

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup and configuration
- [ ] Basic Next.js application with TypeScript
- [ ] Tailwind CSS and component library setup
- [ ] Internationalization (i18n) configuration
- [ ] Content structure and data modeling

### Phase 2: Core Development (Week 3-5)
- [ ] Homepage with hero section
- [ ] About page (bilingual)
- [ ] Legal services section
- [ ] Diving portfolio section
- [ ] Contact form implementation
- [ ] Navigation and language switching

### Phase 3: Content & Media (Week 6-7)
- [ ] Content management system setup
- [ ] Image gallery implementation
- [ ] Blog/news section
- [ ] Document management
- [ ] SEO optimization

### Phase 4: Polish & Testing (Week 8)
- [ ] Responsive design refinement
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Content review and proofreading

### Phase 5: Deployment (Week 9)
- [ ] GitHub Pages configuration
- [ ] Custom domain setup
- [ ] SSL certificate installation
- [ ] Analytics implementation
- [ ] Final testing and launch

---

## 7. Success Metrics

### 7.1 Technical Metrics
- Page load speed < 3 seconds
- Lighthouse score > 90
- Mobile usability score > 95
- Zero accessibility violations
- 100% uptime on GitHub Pages

### 7.2 Business Metrics
- Contact form submissions
- Page views and session duration
- Language preference distribution
- Social media engagement
- Professional inquiry conversion rate

---

## 8. Risk Assessment & Mitigation

### 8.1 Technical Risks
- **GitHub Pages limitations**: Use static site generation, avoid server-side features
- **Image optimization**: Implement proper compression and lazy loading
- **Bilingual complexity**: Use established i18n libraries and proper content structure
- **Mobile performance**: Prioritize mobile-first development

### 8.2 Content Risks
- **Legal compliance**: Review all content for professional standards and confidentiality
- **Photo usage rights**: Ensure all images have proper licensing
- **Bilingual accuracy**: Native speaker review for Chinese content
- **Professional liability**: Disclaimers and proper professional boundaries

---

## 9. Maintenance & Updates

### 9.1 Content Updates
- Monthly blog post additions
- Quarterly certification updates
- Annual professional photo refresh
- Ongoing diving log entries

### 9.2 Technical Maintenance
- Dependency updates (monthly)
- Security patches (as needed)
- Performance monitoring (ongoing)
- Backup and version control (automated)

---

## 10. Conclusion

This PRD serves as the foundational document for the HuiRuJin personal website project. It balances professional legal requirements with personal diving passion while ensuring technical excellence and multilingual accessibility.

**Next Steps**: Review and approval of this PRD, followed by technical setup and development kickoff as outlined in the project timeline.