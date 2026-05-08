export const NAV_ITEMS = ["home", "about", "experience", "skills", "projects", "contact"]

export const EXPERIENCE = [
  {
    role: "SDE Intern",
    company: "HashForGamers",
    fullName: "Hash for Gamers Pvt. Ltd.",
    location: "Mumbai, Remote",
    period: "Jul 2025 – Mar 2026",
    bullets: [
      "Contributing to the development of the gaming cafe lounge booking B2B web application, owning end-to-end development across the frontend and backend stack of multiple microservices.",
      "Revamped the vendor dashboard using React, Tailwind, and Next.js, optimized slow Flask/Python APIs, and added real-time notifications, improving load times and overall user experience for vendors.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Flask", "Python", "Microservices"],
  },
]

export const PROJECTS = [
  {
    title: "BuildSpace",
    tag: "Full Stack Platform",
    tagline: "Execution-first platform for builders to ship ideas in public",
    bullets: [
      "Built full-stack with Next.js 15, Supabase, and Drizzle ORM; implemented real-time task boards via Supabase Realtime, AI-powered idea validation using Google Gemini with structured output, and event-driven notification pipelines via Inngest.",
      "Designed a decay-based Execution Score engine tracking builder activity signals (tasks, updates, milestones) with time-weighted scoring, team application workflows with role-based access control, and secure account lifecycle management with cascading data deletion.",
    ],
    tech: ["Next.js 15", "Supabase", "Drizzle ORM", "Google Gemini", "Inngest", "TypeScript"],
    github: "https://github.com/prshntrajput/buildspace",
    live: "https://buildspace-egju.vercel.app/",
  },
  {
    title: "NexusTrade",
    tag: "AI Research Terminal",
    tagline: "AI-powered stock research terminal with real-time price feeds and intelligent analysis",
    bullets: [
      "Built with Next.js 15 App Router, Supabase, PostgreSQL, and Inngest, featuring AI-generated reports via Gemini 2.0 Flash with sentiment classification, key risks, technical outlook, and snapshot indicators including RSI, MACD, and Bollinger Bands.",
      "Engineered a real-time price feed by bridging a Finnhub WebSocket to clients via Supabase Realtime Broadcast, with tick-level flash animations and SWR-cached REST fallback to eliminate loading states on mount.",
    ],
    tech: ["Next.js 15", "Supabase", "PostgreSQL", "Gemini 2.0 Flash", "Inngest", "SWR", "Finnhub WS"],
    github: "https://github.com/prshntrajput/nexustrade",
    live: "https://nexustrade-alpha.vercel.app",
  },
  {
    title: "Pet4U",
    tag: "Web Platform",
    tagline: "Web-based pet adoption platform connecting adopters with shelters and individuals",
    bullets: [
      "Built with Next.js and Tailwind CSS; TanStack Query for efficient data fetching and state management; backend powered by Node.js and Express.js for a smooth and responsive user experience.",
      "Real-time adoption request updates and integrated chat system via Socket.IO, enabling instant communication between adopters and pet providers.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "Socket.IO", "TanStack Query","Redux", "Tailwind CSS"],
    github: "https://github.com/prshntrajput/pet4u",
    live: "https://pet4u-zeta.vercel.app/",
  },
]

export const SKILL_CATEGORIES = [
  {
    label: "Languages",
    skills: ["JavaScript", "TypeScript", "Python3", "Go"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TanStack Query", "Redux"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "WebSockets", "BullMQ", "Inngest"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  },
  {
    label: "ORMs & DevTools",
    skills: ["Drizzle ORM", "Prisma ORM", "Mongoose ODM", "Docker", "Git", "Postman"],
  },
  {
    label: "AI & Cloud",
    skills: ["LangChain.js", "LangGraph.js", "Gemini", "Claude Code", "Vercel"],
  },
  {
    label: "Architecture",
    skills: ["REST", "MVC", "Pub-Sub", "OOP", "SOLID", "Clean Architecture"],
  },
]
