import Image from "next/image";

// Decorative: the customer name is always rendered next to it.
export function Logo({
  name,
  src,
  className,
}: {
  name: string;
  src?: string;
  className: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt=""
        width={56}
        height={56}
        className={`${className} shrink-0 rounded-md object-contain`}
      />
    );
  }
  const initials = name
    .split(" ")
    .filter((word) => /^\w/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  return (
    <span
      aria-hidden="true"
      className={`${className} flex shrink-0 items-center justify-center rounded-md border border-dashed border-muted text-sm font-semibold text-muted`}
    >
      {initials}
    </span>
  );
}
