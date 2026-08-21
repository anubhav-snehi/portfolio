# AS//SYSTEMS

Personal portfolio for **Anubhav Snehi**, Lead Engineer. The site presents distributed data-platform work through an interactive systems-console interface.

**Live site:** [portfolio](https://anubhav-snehi-portfolio.vercel.app)

## Highlights

- Original **AS//SYSTEMS** circuit monogram and responsive technical identity
- Dark-first theme with a dedicated high-contrast daylight mode
- Interactive `INGEST → STREAM → COMPUTE → SERVE` architecture telemetry, on desktop and mobile
- Auto-rotating technology rail covering data, backend, cloud, and frontend platforms
- Project-specific local SVG system snapshots with lazy-loaded `next/image` rendering
- Resume download and direct WhatsApp `Connect 1:1` action
- Animated career timeline, technology matrix, project cards, certifications, and contact workflow
- Responsive layout tested for desktop and mobile widths
- Browser security headers and casual copy deterrence for public content

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14, App Router |
| Language | TypeScript, React 18 |
| Styling | Tailwind CSS 3, custom CSS design tokens |
| Animation | Framer Motion, CSS keyframes |
| Icons | React Icons |
| Visibility | `react-intersection-observer` |

## Run Locally

```bash
npm install --registry=https://registry.npmjs.org
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production verification run:

```bash
npx tsc --noEmit
npm run build
```

Do not copy `node_modules` or `.next` between machines. They are generated locally and ignored by Git.

## Deploy

Vercel is the recommended deployment target.

1. Push the personal GitHub repository branch connected to Vercel.
2. Vercel installs dependencies from `package-lock.json` and builds the Next.js app automatically.
3. Add any future secrets only through Vercel environment variables, never in source files.

## Project Structure

```text
src/
├── app/
│   ├── globals.css          # Themes, design tokens, animation, security UX styles
│   ├── layout.tsx           # Metadata and application shell
│   └── page.tsx             # Section composition
└── components/
	├── Hero.tsx             # Interactive telemetry, stack rail, actions
	├── PortfolioLogo.tsx    # AS//SYSTEMS brand mark
	├── Projects.tsx         # Project snapshots and case-study cards
	└── ...                  # About, Experience, Skills, Education, Contact, Footer

public/
├── project-visuals/         # Original local SVG project visuals
└── resume/Anubhav_Resume.pdf
```

## Notes

The site disables ordinary text selection, context menus, and dragging as a casual copy deterrent. This does not prevent a determined visitor from inspecting public browser code, which is not technically possible for any public website.
