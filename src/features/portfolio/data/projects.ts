import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "restack",
    title: "ReStack",
    period: {
      start: "05.2025",
    },
    link: "https://react-wheel-picker.chanhdai.com",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "Package Publishing",
      "NPM Registry",
      "GitHub Actions",
    ],
    description: `Built a full-stack DSA revisit system that uses spaced repetition and daily reminders to improve long-term problem retention.
  - Developed a personalized dashboard to track progress and manage each user's DSA problem backlog in one workflow.
  - Implemented an intelligent revisit scheduler that prioritizes due problems and automates 1 daily email reminder cycle.
  - Integrated Clerk authentication for secure sign-in and account management across protected user flows.
  - Containerized frontend (React + Vite), backend (Go + Gorm), and PostgreSQL with Docker Compose for 1-command local setup and reproducible environments.`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "auditflow",
    title: "AuditFlow",
    period: {
      start: "05.2025",
    },
    link: "",
    skills: [
      "Node.js",
      "Express",
      "React",
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Puppeteer",
      "Lighthouse",
      "JWT",
      "Zustand",
      "Chart.js",
    ],
    description: `Built an automated lead-generation audit platform that scans prospect websites for technical issues and turns results into outreach-ready deliverables.
- Architected a dual-subdomain setup (auditflow.com + app.auditflow.com) from 1 React codebase with 2 build modes, separating SEO-focused marketing from app workflows.
- Implemented a 3-tier scan engine: Basic (30-60s), Normal (2-5min), and Advanced (5-15min), balancing scan depth against turnaround time.
- Delivered 5-dimension scoring (performance, SEO, mobile responsiveness, security, accessibility) with branded PDF/HTML reports and AI-personalized outreach emails.
- Added CRM and bulk-processing workflows to manage prospect status, follow-ups, and multi-site audits in a single dashboard.`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "amalearn",
    title: "AmaLearn (LMS)",
    period: {
      start: "01.2025",
    },
    skills: [
      "Next.js",
      "TypeScript",
      "LangChain",
      "Tailwind CSS",
      "PostgreSQL",
      "OpenAI",
      "Pinecone",
      "Vercel",
    ],
    description: `Designed, developed, and deployed a full-stack LMS used by 1200+ project management technology students at Lagos State University.
- Consolidated 3 core resource types (course materials, past questions, and academic resources) into one searchable learning platform.
- Implemented RAG-based AI search (OpenAI + Pinecone) so students can query documents and get instant, context-aware answers.
- Optimized data-fetching with React Query caching and production hardening, sustaining 99% uptime on Vercel.`,
    link: "#",
  },
  {
    id: "ekopulse",
    title: "EkoPulse",
    period: {
      start: "01.2025",
    },
    link: "https://amalearn.nurenijamiu.tech",
    skills: [
      "React",
      "Leaflet",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Clerk",
      "Vercel",
    ],
    description: `Developed a full-stack civic platform that enables Lagos residents to report and track environmental issues through a map-first workflow.
- Implemented Clerk-based RBAC for 2 user groups (citizens and authorities), securing reporting, assignment, and status-management flows.
- Built an interactive Leaflet map with real-time Socket.io updates to synchronize issue submissions and status changes as they happen.
- Integrated Cloudinary media uploads for photo evidence, improving issue verification quality and report clarity.`,
  },
  {
    id: "screenforge",
    title: "ScreenForge",
    period: {
      start: "03.2024",
    },
    link: "https://screenforge.nurenijamiu.tech",
    skills: [
      "Company Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
]
