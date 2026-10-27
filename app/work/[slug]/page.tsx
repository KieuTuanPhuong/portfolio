import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { ProjectScreens, StackChips } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

// Every slug is prerendered, so blocking on a small static payload is fine.
export const instant = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-16">
      <header className="pt-10 pb-10 sm:pt-16">
        <Link href="/#work" className="text-sm text-muted hover:underline">
          ← All work
        </Link>
        <div className="mt-6 flex items-center gap-4">
          <Logo name={project.name} src={project.logo} className="size-14" />
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
        </div>
        <p className="mt-3 text-lg text-muted">{project.summary}</p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-muted">Context</dt>
            <dd>
              {project.client} · {project.period}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Role</dt>
            <dd>
              {project.role} · team of {project.team}
            </dd>
          </div>
        </dl>
      </header>

      <Section id="problem" title="Problem">
        <p>{project.problem}</p>
      </Section>

      <Section id="built" title="What I built">
        <ul className="list-disc space-y-2 pl-5">
          {project.built.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="stack" title="Stack">
        <StackChips stack={project.stack} />
      </Section>

      <Section id="outcome" title="Outcome">
        <p>{project.outcome}</p>
      </Section>

      <Section id="screenshots" title="Screenshots">
        <ProjectScreens
          project={project}
          sizes="(min-width: 768px) 736px, 100vw"
        />
        {project.images.length === 0 && (
          <p className="mt-4 text-muted">Screenshots available on request.</p>
        )}
      </Section>

      {project.links && (
        <Section id="links" title="Links">
          <ul className="space-y-2">
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-accent underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </main>
  );
}
