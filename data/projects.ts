export type Project = {
  slug: string;
  name: string;
  logo?: string; // path in /public; initials placeholder when absent
  period: string;
  client: string;
  role: string;
  team: string;
  stack: string[];
  summary: string; // one line, used on the card
  problem: string;
  built: string[]; // 3–5 bullets
  outcome: string;
  images: { src: string; alt: string; width: number; height: number }[];
  links?: { label: string; href: string }[];
};

// Order is by strength, not date. Text comes from ~/.career-ops/cv.md.
export const projects: Project[] = [
  {
    slug: "dstax-compliance",
    name: "DStax Compliance",
    period: "Mar 2026 – May 2026",
    client: "Glinteco client (tax compliance)",
    role: "Lead Frontend Developer & UI/UX Designer",
    team: "3 (1 frontend)",
    stack: ["Next.js", "Python"],
    summary:
      "Designed the full app flow and UI/UX from scratch as lead frontend.",
    problem:
      "Tax auditors and their clients needed one secure place to audit tax variance reports and manage the files and folders behind them.",
    built: [
      "Complete application flow and UI/UX, designed from scratch",
      "Secure platform connecting tax auditors with their clients",
      "Auditing workflow for tax variance reports",
      "File and folder management for complex audit documents",
    ],
    outcome:
      "Owned the frontend end to end as the only frontend developer on a team of 3, from flow design to implementation.",
    images: [],
  },
  {
    slug: "parrot-ai",
    name: "Parrot AI",
    period: "Mar 2025 – Jun 2025",
    client: "Glinteco client (AI-powered English learning)",
    role: "Core Frontend Developer",
    team: "13 (4 frontend)",
    stack: ["Next.js", "Python"],
    summary:
      "Student, Teacher and Admin portals for an AI-powered English learning ecosystem.",
    problem:
      "Vietnamese students needed English learning personalised by AI, and their teachers and school administrators needed their own tools around it.",
    built: [
      "Student portal",
      "Teacher portal",
      "School Administrator portal",
      "AI model integration to personalise learning for each student",
    ],
    outcome:
      "Three role-specific web interfaces on one AI-powered learning platform.",
    images: [],
  },
  {
    slug: "vietnam-data",
    name: "Vietnam Data",
    period: "Jun 2025 – Dec 2025",
    client: "Glinteco client (exchange & auction platform)",
    role: "Frontend Developer",
    team: "8 (3 frontend)",
    stack: ["Next.js", "Golang"],
    summary:
      "Four interconnected portals: Exchange, Administration, Auction and Merchant.",
    problem:
      "The platform was split across four web portals that had to work together as one product.",
    built: [
      "Exchange portal",
      "Administration portal",
      "Auction portal",
      "Merchant portal",
      "The connections between all four",
    ],
    outcome:
      "Four portals developed and interconnected against a Go backend.",
    images: [],
  },
  {
    slug: "pirc-ai",
    name: "Pirc AI",
    period: "Nov 2024 – Mar 2025",
    client: "Glinteco client (US construction estimation SaaS)",
    role: "Frontend Developer",
    team: "4 (2 frontend, 2 backend)",
    stack: ["React.js", "Python"],
    summary:
      "Interfaces that visualise AI-generated pricing estimates for home upgrades and repairs.",
    problem:
      "AI-generated cost estimates for home upgrades and repairs had to be presented clearly enough for US users to read and act on.",
    built: [
      "Dynamic interfaces that visualise AI-generated pricing estimates",
      "Estimate views for home upgrade and repair jobs",
    ],
    outcome:
      "The estimate visualisation frontend of a US construction estimation SaaS.",
    images: [],
  },
  {
    slug: "endeverous",
    name: "Endeverous",
    period: "Jul 2024 – Nov 2024",
    client: "Glinteco client (tech industry social network)",
    role: "Frontend Developer",
    team: "4 (2 frontend, 2 backend)",
    stack: ["Nuxt.js", "Python"],
    summary:
      "Co-developed the Nuxt.js frontend of a social network for tech professionals.",
    problem:
      "A niche social network for technology professionals needed a frontend that felt like an app, not a website.",
    built: [
      "Frontend co-developed with one other frontend developer",
      "Nuxt.js app with a highly responsive, app-like experience",
    ],
    outcome: "The frontend of a niche tech-industry social network.",
    images: [],
  },
  {
    slug: "vietplastic-wsps",
    name: "Vietplastic & Western Sydney Piano School",
    period: "Jan 2026 – Mar 2026",
    client: "Two client websites",
    role: "Full-Stack Developer",
    team: "4 per project (2 developers, 2 designers)",
    stack: ["Next.js", "Strapi"],
    summary:
      "Two client websites delivered end to end: Next.js frontend, Strapi CMS.",
    problem:
      "Two businesses needed websites whose content could be managed in a CMS.",
    built: [
      "Next.js frontend for each site",
      "Strapi CMS backend for each site",
      "End-to-end delivery of both projects",
    ],
    outcome: "Two client websites delivered end to end.",
    images: [],
    // TODO: add { label, href } for both live sites
  },
];
