export type Project = {
  slug: string;
  name: string;
  logo?: string; // path in /public; initials placeholder when absent
  period: string;
  client: string;
  role: string;
  team?: string; // omitted when the team size isn't known
  stack: string[];
  summary: string; // one line, used on the card
  problem: string;
  built: string[]; // 3–5 bullets
  outcome: string;
  images: { src: string; alt: string; width: number; height: number }[];
  links?: { label: string; href: string }[];
};

// Screenshots are 1440×900 captures saved as public/work/<slug>/<n>.jpg.
const shots = (slug: string, alts: string[]) =>
  alts.map((alt, i) => ({
    src: `/work/${slug}/${i + 1}.jpg`,
    alt,
    width: 1440,
    height: 900,
  }));

// Order is by strength, not date. Text comes from ~/.career-ops/cv.md.
export const projects: Project[] = [
  {
    slug: "maivietland",
    name: "MaiVietLand",
    period: "Sep 2025 – Present",
    client: "Glinteco client (real-estate exchange)",
    role: "Full-Stack Developer",
    stack: ["React.js", "Next.js", "Django", "Storybook"],
    summary:
      "ERP, investor sales portal and a Storybook design system for a real-estate exchange.",
    problem:
      "A Vietnamese real-estate exchange needed an internal ERP, a public portal for property investors, and admin tools for content, CRM and sales.",
    built: [
      "ERP web app in React, Vite, TypeScript, Radix UI and Tailwind CSS, started as Glinteco's ERP demo, plus work on its Django backend",
      "Public real-estate investment portal in Next.js",
      "Micro-frontend shell hosting the CMS, CRM and ERP modules",
      "@mvl/ui-registry: shadcn-based design system implemented from Figma, documented in Storybook (370+ stories)",
      "Contributions to Open CMS, a headless CMS SDK with a dynamic schema engine",
    ],
    outcome:
      "In active development since Sep 2025: ERP, investor portal, micro-frontend admin shell and a shared design system.",
    images: shots("maivietland", [
      "Investor portal home page with property search",
      "Project listing with properties open for sale and price ranges",
      "Home page section with featured projects and property categories",
      "Storybook story for the project detail product carousel",
      "Storybook docs page for the Avatar component",
      "ERP sign-in screen",
    ]),
  },
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
    images: shots("dstax-compliance", [
      "Design system page with button variants and enhanced inputs",
      "Design system forms and fields section",
      "Compliance app sign-in screen",
    ]),
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
    images: shots("parrot-ai", [
      "AI Learning Parrot landing page",
      "Learning features: reading, speaking, writing and listening practice",
      "Teacher portal sign-in screen",
    ]),
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
    images: shots("vietnam-data", [
      "Data exchange home page, signed in, with data search",
      "Data product registration form on the exchange",
      "Merchant portal dashboard: products by type, contracts and revenue",
      "Auction portal: published auction list with starting prices",
    ]),
  },
  {
    slug: "glinteco-website",
    name: "Glinteco Website",
    period: "Mar 2026 – Oct 2026",
    client: "Glinteco (in-house)",
    role: "Full-Stack Developer",
    stack: ["Next.js", "Strapi"],
    summary:
      "Company website in three languages and an Australian campaign landing page, both on Strapi.",
    problem:
      "Glinteco needed a localised company website and a landing page for its Australian web design & SEO campaign, both editable in a CMS.",
    built: [
      "Company website in Next.js, localised in Vietnamese, English and Japanese",
      "Strapi CMS for case studies, blog posts and careers",
      "CMS-driven page blocks for the Australian web design & SEO landing page",
    ],
    outcome:
      "Campaign landing page live at web.glinteco.com; company site on the same Next.js + Strapi stack.",
    images: shots("glinteco-website", [
      "Home page hero: bespoke solutions designed for startups",
      "Client logos and positioning statement",
      "About us page hero: human judgement amplified by AI",
      "AU campaign landing page hero with a free website audit form",
      "Campaign page section on conversion-first UX, SEO and automation",
    ]),
    links: [{ label: "AU campaign landing page", href: "https://web.glinteco.com" }],
  },
  {
    slug: "junn",
    name: "Jünn",
    period: "Jun 2026 – Sep 2026",
    client: "Glinteco client (3D render & property marketing studio)",
    role: "Frontend Developer",
    stack: ["Next.js"],
    summary:
      "Marketing site for a 3D render studio, plus AURUM, a luxury property showcase.",
    problem:
      "Jünn, a cinematic 3D render and property marketing studio, needed a site for the studio and a showcase for a client property, 97 Ahumoana Drive in Auckland.",
    built: [
      "Marketing site for the Jünn studio",
      "AURUM property showcase for 97 Ahumoana Drive, Auckland",
      "AURUM design system for a luxury real-estate look",
    ],
    outcome: "AURUM is live at junn.com.au.",
    images: shots("junn", [
      "Jünn home page: cinematic 3D visuals and property marketing",
      "Renders page featuring a New Zealand residence",
      "Full-screen intro with a 3D interior render",
      "AURUM hero for 97 Ahumoana Drive",
      "AURUM location section: Weiti Bay, Okura Bush, Auckland",
      "AURUM design system page with the colour palette",
    ]),
    links: [{ label: "AURUM at junn.com.au", href: "https://junn.com.au" }],
  },
  {
    slug: "holisticvn",
    name: "HolisticVN",
    period: "Apr 2026 – Aug 2026",
    client: "Glinteco client (Sydney care provider)",
    role: "Full-Stack Developer",
    stack: ["Next.js", "React.js", "Strapi"],
    summary:
      "Two websites for a Vietnamese-led Sydney care provider, one on a Strapi CMS.",
    problem:
      "HolisticVN, a Vietnamese-led care provider in Sydney offering NDIS support, aged care and family day care, needed websites to present its services.",
    built: [
      "Next.js site with a Strapi CMS and a blog",
      "React/Vite site for its services and programs",
    ],
    outcome: "Next.js + Strapi site live at holisticvn.com.au.",
    images: shots("holisticvn", [
      "Home page hero: holistic care, real family",
      "Service stats and what makes HolisticVN different",
      "Care services by stage of life: NDIS, aged care, family day care",
      "React site hero for the school holiday 1-on-1 support program",
      "Care services overview on the React site",
    ]),
    links: [{ label: "holisticvn.com.au", href: "https://holisticvn.com.au" }],
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
    images: shots("pirc-ai", [
      "Onboarding screen with customer testimonials",
      "Sign-up form",
      "Sign-in screen",
    ]),
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
    images: shots("endeverous", [
      "Sign-in screen with email and Google sign-in",
      "Sign-up screen",
    ]),
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
    images: shots("vietplastic-wsps", [
      "VietPlastic home page hero",
      "Product categories: lids, sauce cups and cups",
      "Company award section",
      "News page",
    ]),
    links: [{ label: "vietplastic.vn", href: "https://vietplastic.vn" }],
    // TODO: add the Western Sydney Piano School live site link
  },
  {
    slug: "luxe-paradise",
    name: "Luxe Paradise Hospitality",
    period: "2023",
    client: "Glinteco client (Hanoi hotel chain)",
    role: "Full-Stack Developer",
    stack: ["Django", "django CMS", "Tailwind CSS"],
    summary:
      "Website for a Hanoi hotel chain plus property sites for rooms, dining and offers.",
    problem:
      "Luxe Paradise Hospitality, a Hanoi hotel and serviced-apartment chain, needed a group website and a site per property, with content in Vietnamese and English.",
    built: [
      "Group website for the hotel chain",
      "Property sites with rooms, dining, gallery and offers pages",
      "Bilingual Vietnamese/English content managed in django CMS",
    ],
    outcome: "Live at luxeparadisehospitality.com.",
    images: shots("luxe-paradise", [
      "Group home page with hotel booking search",
      "Property site home page with room search",
      "Room types page",
      "Restaurant and bar page",
    ]),
    links: [
      {
        label: "luxeparadisehospitality.com",
        href: "https://luxeparadisehospitality.com/vi/",
      },
      {
        label: "LPP75 property site",
        href: "https://lpp75.luxeparadisehospitality.com/vi/",
      },
    ],
  },
  {
    slug: "john-lloyd",
    name: "John Lloyd Design Portfolio",
    period: "Sep 2024 – Sep 2025",
    client: "Glinteco client (product design leader)",
    role: "Frontend Developer",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    summary: "Case-study pages for a product design leader's portfolio site.",
    problem:
      "A product design leader needed a portfolio presenting case studies from Capital One, United Airlines, Abbott and Sanofi.",
    built: [
      "Home page with a grid of case-study highlights",
      "Case-study pages for Capital One, United Airlines, Abbott and Sanofi",
    ],
    outcome: "A static case-study site in HTML, Tailwind CSS and JavaScript.",
    images: shots("john-lloyd", [
      "Portfolio hero with John Lloyd's introduction",
      "Grid of case-study highlights",
      "Case-study highlights for Idyoma and other products",
    ]),
  },
  {
    slug: "ramp-up",
    name: "RAMP UP",
    period: "Jun 2026 – Jul 2026",
    client: "Glinteco (in-house onboarding portal)",
    role: "Code Reviewer & Intern Mentor",
    stack: ["NestJS", "Next.js"],
    summary:
      "Mentored the intern team building Glinteco's engineer onboarding portal and reviewed their PRs.",
    problem:
      "Glinteco wanted new engineers to ramp up through clear learning tracks, GitHub PR review and measurable progress, and gave the build to an intern team.",
    built: [
      "Reviewed the interns' pull requests",
      "Guided the interns on how to work",
    ],
    outcome:
      "The intern team built learning tracks, exercises, GitHub PR review and progress tracking under my review.",
    images: shots("ramp-up", [
      "RAMP UP landing page: onboarding through learning tracks and PR review",
      "RAMP UP sign-in screen",
    ]),
  },
];
