export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-10">
      <h2
        id={`${id}-title`}
        className="text-sm font-semibold uppercase tracking-wider text-muted"
      >
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
