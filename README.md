# Modern Portfolio Website

A production-ready, feature-rich portfolio website built with React 19, TypeScript, and modern web technologies. This portfolio showcases projects, blog posts, skills, and professional experience with advanced animations, accessibility features, and performance optimizations.

## ✨ Features

### Core Functionality
- **Dynamic Routing**: Client-side routing with React Router for seamless navigation
- **Blog System**: Markdown-based blog with syntax highlighting, reading time, and social sharing
- **Project Showcase**: Detailed project pages with image galleries and tech stack information
- **Contact Form**: Validated contact form with toast notifications
- **Resume Download**: One-click resume download functionality

### UI/UX
- **Advanced Animations**: Page transitions, scroll-triggered animations, and micro-interactions using Framer Motion
- **Dark/Light Theme**: Persistent theme switching with smooth transitions
- **Responsive Design**: Mobile-first design that works beautifully on all devices
- **Back to Top Button**: Smooth scroll to top functionality
- **Reading Progress**: Visual progress indicator for blog posts
- **Image Lightbox**: Full-screen image viewer with keyboard navigation

### Performance
- **Code Splitting**: Route-based lazy loading for optimal bundle size
- **Image Optimization**: WebP support with fallbacks and lazy loading
- **Optimized Build**: Minified and compressed production builds
- **Fast Load Times**: Optimized for Lighthouse performance scores above 90

### Accessibility
- **WCAG AA Compliant**: Proper color contrast and semantic HTML
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: ARIA labels and proper heading structure
- **Focus Management**: Focus trapping in modals and proper focus restoration

### SEO
- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media preview optimization
- **Sitemap**: Auto-generated sitemap for search engines
- **RSS Feed**: Blog RSS feed for subscribers

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Markdown**: React Markdown with syntax highlighting
- **SEO**: React Helmet Async
- **Icons**: React Icons

## 📦 Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── features/       # Feature-specific components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Skills, Timeline, Testimonials)
│   └── ui/             # Generic UI components (Button, Card, Modal)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── contexts/           # React contexts (Theme, Toast)
├── data/               # Static data files (JSON)
├── content/            # Blog posts (Markdown)
├── types/              # TypeScript type definitions
└── styles/             # Global styles
\`\`\`

## 🎨 Customization

### Adding Blog Posts
Create markdown files in `src/content/blog/` with frontmatter:

\`\`\`markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description"
tags: ["React", "TypeScript"]
category: "Web Development"
coverImage: "/images/blog/cover.jpg"
---

Your content here...
\`\`\`

### Adding Projects
Update `src/data/projects.json` with your project information.

### Customizing Theme
Modify theme colors in `src/styles/index.css` and `src/utils/theme.ts`.

## 🚀 Deployment

The project is optimized for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build the project with `npm run build` and deploy the `dist` folder.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Akash Thakur**
- Portfolio: [Your Portfolio URL]
- GitHub: [@akash-thakur09](https://github.com/akash-thakur09)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/thakur-aakash/)

