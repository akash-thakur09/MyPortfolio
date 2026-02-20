# 🚀 Modern Portfolio Website

A production-ready, feature-rich portfolio website built with React, TypeScript, and modern web technologies. Showcases projects, blog posts, skills, and professional experience with a beautiful, accessible, and performant user interface.

![Portfolio Preview](https://via.placeholder.com/1200x600/10b981/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎨 Core Features
- **Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Modern Dark Theme** - Beautiful dark theme optimized for readability
- **Progressive Web App (PWA)** - Installable app with offline support
- **Blog Engine** - Markdown-based blog with syntax highlighting and reading time
- **Project Showcase** - Filterable project gallery with detailed project pages
- **Contact Form** - Validated contact form with real-time error feedback
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap, and RSS feed

### 🎯 Advanced Features
- **Smooth Animations** - Page transitions, scroll-triggered animations, and micro-interactions using Framer Motion
- **GitHub Activity** - Live GitHub activity feed with caching
- **Analytics Ready** - Framework-agnostic analytics integration
- **Image Optimization** - WebP support, lazy loading, and blur-up placeholders
- **Lightbox Gallery** - Full-screen image viewer with keyboard and touch gesture support
- **Skills Visualization** - Modern tag-based skills display with proficiency indicators
- **Timeline** - Professional experience and education timeline
- **Testimonials** - Client reviews and recommendations
- **Back to Top** - Smooth scroll-to-top button
- **Reading Progress** - Progress indicator for blog posts

### ♿ Accessibility
- **WCAG 2.1 AA Compliant** - Proper color contrast, focus indicators, and ARIA labels
- **Keyboard Navigation** - Full keyboard support for all interactive elements
- **Screen Reader Friendly** - Semantic HTML and proper ARIA attributes
- **Touch Targets** - Minimum 44x44px touch targets for mobile devices

### ⚡ Performance
- **Code Splitting** - Route-based lazy loading for optimal bundle size
- **Optimized Bundle** - Main bundle under 200KB (gzipped: ~64KB)
- **Service Worker** - Cache-first strategy for static assets
- **Image Lazy Loading** - Below-fold images load on demand

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing with lazy loading
- **Framer Motion** - Animation library
- **TailwindCSS** - Utility-first CSS framework

### Content & Data
- **React Markdown** - Markdown rendering for blog posts
- **Gray Matter** - Frontmatter parsing
- **Remark Prism** - Syntax highlighting for code blocks

### SEO & Meta
- **React Helmet Async** - Dynamic meta tags and SEO

### Development
- **Vitest** - Unit testing framework
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🚀 Build & Deploy

### Production Build
```bash
npm run build
# or
yarn build
```

The build output will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Deploy

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages
```bash
npm run build
# Push the dist folder to gh-pages branch
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── manifest.json      # PWA manifest
│   ├── sw.js             # Service worker
│   ├── robots.txt        # SEO robots file
│   ├── sitemap.xml       # SEO sitemap
│   └── rss.xml           # Blog RSS feed
├── src/
│   ├── components/        # React components
│   │   ├── features/     # Feature-specific components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── contexts/         # React contexts (Theme, Toast)
│   ├── content/          # Markdown blog posts
│   │   └── blog/
│   ├── data/             # JSON data files
│   │   ├── projects.json
│   │   ├── skills.json
│   │   ├── timeline.json
│   │   └── testimonials.json
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── router/           # Routing configuration
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## 🎨 Customization

### 1. Personal Information

Update your personal information in the following files:

**`src/data/skills.json`** - Your technical skills
```json
{
  "skills": [
    {
      "name": "React",
      "category": "Frontend",
      "level": "expert"
    }
  ]
}
```

**`src/data/projects.json`** - Your projects
```json
{
  "projects": [
    {
      "id": "1",
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["React", "TypeScript"],
      "image": "/path/to/image.jpg",
      "liveUrl": "https://example.com",
      "githubUrl": "https://github.com/username/repo"
    }
  ]
}
```

**`src/data/timeline.json`** - Work experience and education
**`src/data/testimonials.json`** - Client testimonials

### 2. Blog Posts

Create markdown files in `src/content/blog/`:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
author: "Your Name"
tags: ["react", "typescript"]
image: "/path/to/image.jpg"
---

Your blog content here...
```

### 3. Theme Colors

The portfolio uses a dark theme by default. You can customize the colors by editing `src/styles/index.css`:

```css
:root {
  --color-bg: #0a0a0a;
  --color-fg: #ffffff;
  --color-primary: #10b981;
  --color-accent: #22c55e;
}
```

> **Note**: Light theme support is planned for a future release.

### 4. GitHub Activity

Update the GitHub username in `src/components/sections/GitHubActivity.tsx`:

```typescript
const data = await fetchGitHubActivity('your-github-username');
```

### 5. Analytics

Configure your analytics provider in `src/utils/analytics.ts`:

```typescript
// Example for Google Analytics
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
    page_path: event.path,
  });
}
```

### 6. PWA Configuration

Update `public/manifest.json`:

```json
{
  "name": "Your Name - Portfolio",
  "short_name": "Portfolio",
  "description": "Your portfolio description",
  "theme_color": "#10b981"
}
```

Add your app icons:
- `public/icon-192.png` (192x192)
- `public/icon-512.png` (512x512)

## 🧪 Testing

### Run Tests
```bash
npm run test
# or
yarn test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
# or
yarn test:watch
```

### Test Coverage
```bash
npm run test:coverage
# or
yarn test:coverage
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Akash Thakur**

- Website: [your-website.com](https://your-website.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [Font Awesome](https://fontawesome.com/)

## 📊 Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~200KB (main bundle)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s

## 🔒 Security

- No sensitive data stored in localStorage
- HTTPS only in production
- Content Security Policy headers recommended
- Regular dependency updates

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me via email: your.email@example.com
- Connect on LinkedIn

---

⭐ If you found this project helpful, please consider giving it a star!

Made with ❤️ by Akash Thakur
