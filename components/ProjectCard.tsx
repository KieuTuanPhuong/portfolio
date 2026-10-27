import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Logo } from "./Logo";
import { Slider } from "./Slider";

export function StackChips({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line px-2.5 py-0.5 text-sm text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectScreens({
  project,
  sizes,
}: {
  project: Project;
  sizes: string;
}) {
  return (
    <Slider label={`${project.name} screenshots`}>
      {project.images.length > 0
        ? project.images.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes={sizes}
              className="aspect-[16/10] w-full bg-line object-contain"
            />
          ))
        : [1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex aspect-[16/10] items-center justify-center bg-line/50 text-muted"
            >
              Screenshot {n}
            </div>
          ))}
    </Slider>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative flex h-full flex-col gap-3 rounded-lg border border-line p-5 hover:border-muted">
      {/* above the stretched link so swipes and hover reach the slider */}
      <div className="relative z-10">
        <ProjectScreens
          project={project}
          sizes="(min-width: 640px) 320px, 100vw"
        />
      </div>
      <div className="flex items-center gap-3">
        <Logo name={project.name} src={project.logo} className="size-10" />
        <h3 className="text-lg font-semibold">
          <Link
            href={`/work/${project.slug}`}
            className="after:absolute after:inset-0 hover:underline"
          >
            {project.name}
          </Link>
        </h3>
      </div>
      <p className="text-muted">{project.summary}</p>
      <div className="mt-auto pt-2">
        <StackChips stack={project.stack} />
      </div>
    </article>
  );
}
