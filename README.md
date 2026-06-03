# Anubhav Snehi — Portfolio

A modern, animated portfolio website built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**.

## Features

- Dark glassmorphism design with DodgerBlue accent
- Smooth scroll-triggered animations (Framer Motion)
- Typewriter hero animation with role rotation
- Interactive experience timeline with expand/collapse
- Responsive design — mobile-first
- SEO-optimized with Open Graph metadata
- Floating particle background effects
- Contact form with mailto integration
- Animated skill cards and stat counters

## Tech Stack

| Layer       | Tech                                  |
| ----------- | ------------------------------------- |
| Framework   | Next.js 14 (App Router)               |
| Language    | TypeScript                            |
| Styling     | Tailwind CSS 3                        |
| Animations  | Framer Motion                         |
| Icons       | React Icons (FontAwesome, Heroicons)  |
| Scroll      | react-intersection-observer           |

## Getting Started

### 1. Install dependencies

```bash
cd portfolio
npm install
```

> **Note:** If you're behind a corporate proxy/VPN, you may need to configure your npm registry:
> ```bash
> # Temporarily use public registry
> npm install --registry https://registry.npmjs.org
> ```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push the code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Deploy — Vercel auto-detects Next.js and handles everything

### Netlify

1. Build: `npm run build`
2. Deploy the `.next` directory or use Netlify's Next.js plugin

### GitHub Pages (Static Export)

Add to `next.config.mjs`:
```js
const nextConfig = { output: 'export' };
```

Then:
```bash
npm run build
# Deploy the `out/` directory
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Main page composing all sections
│   │   └── globals.css       # Global styles, animations, utilities
│   └── components/
│       ├── AnimatedSection.tsx   # Reusable scroll-triggered wrapper
│       ├── Navbar.tsx            # Sticky nav with active section tracking
│       ├── Hero.tsx              # Full-screen hero with typing animation
│       ├── About.tsx             # Summary, stats, highlight cards
│       ├── Experience.tsx        # Timeline with expandable cards
│       ├── Skills.tsx            # Categorized skill grid
│       ├── Projects.tsx          # Project showcase cards
│       ├── Education.tsx         # Education + Certifications
│       ├── Contact.tsx           # Contact form + info cards
│       └── Footer.tsx            # Footer with social links
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

## Customization

- **Colors:** Edit `tailwind.config.ts` → `theme.extend.colors.accent`
- **Content:** Edit individual component files in `src/components/`
- **Fonts:** Change the Google Fonts import in `globals.css`
- **Animations:** Modify keyframes in `tailwind.config.ts` or `globals.css`
