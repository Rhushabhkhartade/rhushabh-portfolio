# RHUSHABH KHARTADE &mdash; LUXURY PERSONAL PORTFOLIO

> A minimal, high-performance personal portfolio website celebrating the intersection of **UI Design** and **Cyber Security**. Engineered with Next.js 16, React 19, Tailwind CSS v4, and Motion.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-black?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-black?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-black?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Motion](https://img.shields.io/badge/Motion-14.x-black?style=for-the-badge)](https://motion.dev/)

---

## Brand Identity & Aesthetic Direction

- **Brand**: Rhushabh Kishor Khartade
- **Dual Identity**: UI Designer &bull; Cyber Security Student
- **Design Language**: Black, White, and Metallic Silver luxury editorial aesthetic. Minimalist, sophisticated international agency quality with generous whitespace, crisp micro-typography, and zero visual clutter.
- **Academic Foundation**: B.Tech CSE (Cyber Security) at JD College of Engineering and Technology, Nagpur (Currently Pursuing, 2025&ndash;2029 Expected).

---

## Technology Architecture

- **Framework**: [Next.js 16.4.5](https://nextjs.org) (App Router, Turbopack, Cache Components, Partial Prerendering)
- **Library**: [React 19.3.0](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/turbopack`
- **Animations**: [Motion](https://motion.dev) (`motion/react`) for fluid physics and staggered typography reveals
- **Icons**: [Lucide React](https://lucide.dev) & Custom SVG Monogram / Brand Glyphs
- **Type Safety**: Strict TypeScript interfaces throughout (`types/portfolio.ts`)
- **Data Architecture**: Content separated into clean, typed data stores in `content/`

---

## Portfolio Sections

1. **Floating Navigation Header (`#overview`)**  
   Pill-shaped floating navbar with custom `RK.` monogram, live availability status beacon, smooth anchor links, and an animated mobile drawer.

2. **Hero Section (`#overview`)**  
   Full-screen desktop composition featuring large editorial typography, dual title (*UI Designer | Cyber Security Student*), professional portrait frame with SVG architectural fallback, and primary CTAs.

3. **Selected Works (`#work`)**  
   Curated asymmetric 12-column editorial grid showcasing 9 case studies with real interface screenshots, subtle hover zoom, responsive cropping, and interactive specification modals:
   - **Sentinel X**: Autonomous Endpoint Threat Detection UI Concept
   - **Our Heritage**: Nagpur Architectural & Cultural Exhibition Concept
   - **MedCycle**: Circular Medical Equipment Redistribution Platform Concept
   - **NetFlow**: Network Flow & Telemetry Dashboard Concept
   - **Blood AI**: Functional Full-Stack Blood Bank Inventory & Demand Forecasting Application
   - **Disaster Management**: Real-Time Emergency Telemetry & Incident Coordination Concept
   - **Tela Web**: Modern Multi-Step Checkout & Logistics Web Experience Concept
   - **Gaming Console UI**: Next-Gen Entertainment Console & Digital Store Concept
   - **Shoes Page**: High-Impact Editorial Lifestyle Footwear Landing Concept

4. **About Me & Design Philosophy (`#about` & `#philosophy`)**  
   - Detailed biography on the fusion of visual design and cyber defense.
   - Four core tenets: *Clarity over complexity*, *Functionality with visual elegance*, *Consistency in every detail*, and *Technology-driven creativity*.

5. **Skills & Expertise (`#skills`)**  
   Two distinct, dignified capability columns without arbitrary progress bars or percentages:
   - **UI Design & Creative**: UI Design, Figma, Canva, Poster Design, Banner Design, Visual Design, Layout & Typography.
   - **Cyber Security & Technology**: Cyber Security Fundamentals, Linux, Kali Linux, Bash, PowerShell, Networking Fundamentals, C++, HTML, CSS, JavaScript.

6. **Experience & Achievements (`#experience`)**  
   - Academic Spotlight: B.Tech CSE (Cyber Security) at JDCOET Nagpur.
   - Designathon Winner (JDCOET &mdash; CSE Department Forum Club).
   - Wall Magazine Coordinator (Abhedhya Forum).
   - Hackathon Participation (5 Hackathons Participated).
   - Ideathon Participant (Nagpur Yuva Manthan).
   - Future-ready certificate gallery (conditionally rendered only when images are supplied).

7. **Contact Section & Footer (`#contact`)**  
   - Direct outreach with working mailto copy feedback (`iamrhushabh888@gmail.com`).
   - Verified channels for [LinkedIn](https://www.linkedin.com/in/rhushabh-khartade-980545384) and [GitHub](https://github.com/Rhushabhkhartade).
   - Minimal luxury footer with brand monogram, quick navigation, and back-to-top scroll.

---

## Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or higher (v20+ recommended)
- **Package Manager**: npm, pnpm, or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rhushabhkhartade/rhushabh-portfolio.git
   cd rhushabh-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npm run build` | Compiles an optimized static production build |
| `npm run start` | Runs the built production server locally |
| `npm run lint` | Runs ESLint analysis across all project files |
| `npm run typecheck` | Validates TypeScript types across the entire project |

---

## Project Structure

```
rhushabh-portfolio/
├── app/                        # Next.js 16 App Router
│   ├── globals.css             # Tailwind v4 theme tokens & luxury styling
│   ├── icon.svg                # RK. brand favicon
│   ├── layout.tsx              # Root layout & SEO OpenGraph metadata
│   ├── page.tsx                # Single-page editorial composition
│   ├── robots.ts               # Search engine indexing configuration
│   └── sitemap.ts              # XML sitemap generator
├── components/
│   ├── layout/                 # Header (Navbar) and Footer components
│   ├── sections/               # Hero, Works, About, Skills, Experience, Contact
│   └── ui/                     # Reusable design tokens (buttons, badges, icons, cards)
├── content/                    # Typed editable content data stores
│   ├── experience.ts           # Education, achievements, and certificate data
│   ├── projects.ts             # 9 curated project specifications and galleries
│   ├── site-config.ts          # Core site config, bio, socials, and navigation
│   └── skills.ts               # Categorized skills and toolsets
├── public/
│   └── images/
│       ├── profile/            # Verified profile portrait
│       └── projects/           # Screenshots organized across 9 project folders
└── types/
    └── portfolio.ts            # Strict TypeScript interfaces
```

---

## Deployment

This portfolio is statically prerendered and optimized for instant deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Import the repository into the **Vercel Dashboard**.
3. Next.js 16 will be auto-detected with build command `next build`.
4. Click **Deploy**.

Alternatively, it can be deployed to Netlify, Cloudflare Pages, or AWS Amplify using the standard Next.js build output.

---

## Contact & Connect

- **Email**: [iamrhushabh888@gmail.com](mailto:iamrhushabh888@gmail.com)
- **LinkedIn**: [linkedin.com/in/rhushabh-khartade-980545384](https://www.linkedin.com/in/rhushabh-khartade-980545384)
- **GitHub**: [github.com/Rhushabhkhartade](https://github.com/Rhushabhkhartade)

---

&copy; 2026 Rhushabh Kishor Khartade. All rights reserved.
