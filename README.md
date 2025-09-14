# TailwindCSS Resume

This is my personal resume website built with TailwindCSS from scratch. I wanted something clean, responsive, and easy to print as a PDF. Figured I'd share it in case it's useful for anyone else building their own resume site.

## Features

- Responsive design that works on mobile and desktop
- Print-optimized layout for PDF generation
- Fast loading with TailwindCSS
- Clean, minimal design
- Ready for deployment on Cloudflare Pages or any static hosting

## Getting Started

### What you'll need
- Node.js 16 or higher
- npm or yarn

### Local development
```bash
# Install dependencies
npm install

# Start development with live reload
npm run dev-server

# Or just build CSS and watch for changes
npm run dev

# Build for production
npm run build
```

## Deployment

I've set this up to work well with Cloudflare Pages, but it should work with any static hosting service.

### Cloudflare Pages (my choice)

Connect your repository and use these build settings:
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** None

### Other hosting options

After running `npm run build`, you can upload the contents of the `dist` folder to any static host.

## How it's organized

```
├── index.html          # The resume page
├── input.css          # TailwindCSS source
├── styles.css         # Generated CSS (dev only)
├── scripts.js         # Email reveal functionality
├── tailwind.config.js # TailwindCSS setup
├── package.json       # Dependencies and scripts
├── _redirects         # Cloudflare Pages routing
├── dist/              # Build output directory
└── README.md          # This file
```

## What's included

- **TailwindCSS** for styling
- **Devicon** for tech stack icons
- **Vanilla JavaScript** for the email reveal feature
- Print-friendly CSS
- Security headers and performance optimizations

## Notes

Feel free to fork this and make it your own! The structure is pretty straightforward to customize.

*Icons are sourced from [devicon.dev](https://devicon.dev)*
