import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const button =
  "inline-flex h-11 items-center rounded-full border border-line px-5 font-medium hover:border-muted";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-16">
      <header className="py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl sm:text-2xl">{profile.title}</p>
        <p className="mt-4 text-muted">{profile.availability}</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className={`${button} border-foreground bg-foreground text-background hover:border-muted`}
            >
              Email
            </a>
          </li>
          <li>
            <a href={profile.github} className={button}>
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} className={button}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.cv} download className={button}>
              Download CV
            </a>
          </li>
        </ul>
      </header>

      <Section id="work" title="Selected work">
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="how" title="How I work">
        <ul className="space-y-5">
          {profile.howIWork.map((item) => (
            <li key={item.title}>
              <p className="font-semibold">{item.title}</p>
              <p className="mt-1 text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="stack" title="Stack">
        <dl className="grid gap-5 sm:grid-cols-3">
          {profile.stack.map(({ group, items }) => (
            <div key={group}>
              <dt className="font-semibold">{group}</dt>
              <dd className="mt-1 text-muted">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="contact" title="Contact">
        <a
          href={`mailto:${profile.email}`}
          className="break-all text-xl font-semibold text-accent underline sm:text-2xl"
        >
          {profile.email}
        </a>
        <p className="mt-4 text-muted">
          Or message me on{" "}
          <a href={profile.linkedin} className="text-accent underline">
            LinkedIn
          </a>
          . {profile.rate} · remote contract or part-time.
        </p>
      </Section>
    </main>
  );
}
