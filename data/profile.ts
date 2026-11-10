// Hardcoded: VERCEL_PROJECT_PRODUCTION_URL resolves to the auto-generated *.vercel.app alias, not this one.
export const siteUrl = "https://tuanphuongkieu.vercel.app";

export const profile = {
  name: "Kieu Tuan Phuong",
  title: "Senior Frontend Developer — Next.js / React / Vue",
  availability:
    "Remote contract & part-time · Hanoi, GMT+7 · US and EU meeting hours OK",
  description:
    "Senior frontend developer for remote contract and part-time work. Next.js, React, Vue and Nuxt on Python, Django and Strapi backends. Case studies from client projects in real estate, education, data and hospitality.",
  email: "phuongkieuht11@gmail.com",
  github: "https://github.com/KieuTuanPhuong",
  linkedin: "https://linkedin.com/in/tuanphuongkieu",
  cv: "/cv.pdf",
  rate: "From $30/hr",
  howIWork: [
    {
      title: "Design the flow → build it → wire the backend",
      body: "From UI/UX flow design to a production frontend on Python, Django, Strapi or Go APIs.",
    },
    {
      title: "Async-first",
      body: "Written updates, small PRs, decisions in writing. Flexible hours across time zones.",
    },
    {
      title: "Fast onboarding",
      body: "Twelve client codebases since 2023, from solo builds to teams of 13.",
    },
  ],
  // Only tools used in the projects above, the CV, or the base-next starter.
  stack: [
    {
      group: "Frontend",
      items: ["Next.js", "React.js", "Vue.js", "Nuxt.js", "TypeScript", "Vite"],
    },
    {
      group: "UI & design systems",
      items: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Storybook", "UI/UX design"],
    },
    {
      group: "Data, forms & i18n",
      items: ["TanStack Query", "Zustand", "React Hook Form", "Zod", "Orval", "next-intl"],
    },
    {
      group: "Backend & CMS",
      items: ["Python", "Django", "django CMS", "Strapi"],
    },
    {
      group: "Testing & tooling",
      items: ["Jest", "Vitest", "Playwright", "Husky", "Git"],
    },
    {
      group: "Also",
      items: ["AI model integration", "SEO landing pages", "Flutter (learning)"],
    },
  ],
};
