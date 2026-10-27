// Vercel sets this at build time to the production domain (custom domain once added).
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const profile = {
  name: "Kieu Tuan Phuong",
  title: "Senior Frontend Developer — Next.js / React / Vue",
  availability:
    "Remote contract & part-time · Hanoi, GMT+7 · US and EU meeting hours OK",
  description:
    "Senior frontend developer for remote contract and part-time work. Next.js, React, Vue and Nuxt on Python, Django and Strapi backends. Case studies from six client projects.",
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
      body: "Six client codebases in two years, in teams of 3 to 13.",
    },
  ],
  stack: [
    {
      group: "Frontend",
      items: ["Next.js", "React.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
    },
    { group: "Backend & CMS", items: ["Python", "Django", "Strapi"] },
    {
      group: "Tooling",
      items: ["Git", "AI model integration", "UI/UX design", "SEO landing pages"],
    },
  ],
};
