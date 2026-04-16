# Raviteja Velanati — 3D Portfolio

A personal 3D portfolio website built with React, TypeScript, Three.js, React Three Fiber, and GSAP. Features animated sections, a 3D character scene, scroll-driven effects, and a modern dark theme.

🔗 **Live site**: [https://3d-portfolio-teal-nu.vercel.app](https://3d-portfolio-teal-nu.vercel.app)

## About

**Raviteja Velanati** — AI & LLM Software Engineer with 3.5+ years of experience building reliable AI infrastructure across LLM evaluation, human-in-the-loop workflows, and data pipelines. Currently at GlobalLogic (supporting Google AI).

- 📍 Newark, California
- 🎓 MS Computer Science, Clark University
- 💼 Open to Software Engineer / AI Platform / GenAI Infrastructure roles
- 📧 tejareddi0011@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/raviteja-velanati/) · [GitHub](https://github.com/ravitejav-dev)

## Features

- **3D Character Scene** — Interactive Three.js character with React Three Fiber
- **Animated Sections** — GSAP-powered scroll animations and transitions
- **Stats Dashboard** — Animated counters (3.5+ years, 80% efficiency gain, 10K+ records)
- **Featured Projects** — Showcase of AI/LLM projects with tech tags
- **Tech Stack Grid** — Categorized skills with scroll-triggered animations and marquee
- **Certifications** — Industry credentials from Walmart, Microsoft, Google, and more
- **Contact CTA** — Mailto integration with pre-filled subject/body
- **Responsive Design** — Works across desktop and mobile
- **Custom Cursor** — Interactive cursor with hover effects
- **SEO Optimized** — Meta tags and Open Graph for social sharing

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Core** | React 18, TypeScript, Vite |
| **3D & Animation** | Three.js, React Three Fiber, GSAP, ScrollTrigger |
| **Libraries** | react-icons, react-fast-marquee, @vercel/analytics |
| **Deployment** | Vercel |

## Sections

| Section | Description |
|---------|-------------|
| Landing | Hero with 3D character and name/role |
| About | Bio with "seeking roles" badge and location info |
| Stats | Animated counters for key achievements |
| What I Do | AI Infrastructure & Backend Engineering |
| Career | Timeline (GlobalLogic, MassDigi/WPI, Wells Fargo) |
| Projects | 4 featured AI/LLM project cards |
| Tech Stack | 6 categorized skill groups + scrolling marquee |
| Certifications | 6 industry certifications |
| Contact | CTA, email, phone, social links |

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/ravitejav-dev/3D-Portfolio.git
cd 3D-Portfolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

## Project Structure

```
├── public/                    # Static assets, resume PDF, favicon
├── src/
│   ├── components/
│   │   ├── Character/         # 3D scene + character logic
│   │   ├── styles/            # Component CSS files
│   │   ├── About.tsx          # Bio + seeking-roles badge
│   │   ├── Career.tsx         # Career timeline
│   │   ├── Certifications.tsx # Industry credentials
│   │   ├── Contact.tsx        # Contact CTA + details
│   │   ├── Landing.tsx        # Hero section
│   │   ├── MainContainer.tsx  # Page layout composition
│   │   ├── Projects.tsx       # Featured project cards
│   │   ├── Stats.tsx          # Animated stat counters
│   │   ├── TechStack.tsx      # Categorized skill grid
│   │   └── WhatIDo.tsx        # Specializations
│   ├── context/               # Global providers
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Any push to `main` triggers auto-deployment.

To deploy manually:

```bash
npm run build
vercel --prod
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Raviteja Velanati**
