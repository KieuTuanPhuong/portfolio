"use client";

import { Children, useEffect, useRef, useState } from "react";

export function Slider({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const slides = Children.toArray(children);
  const track = useRef<HTMLUListElement>(null);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);
  const [index, setIndex] = useState(0);

  const stop = () => clearInterval(timer.current);
  const play = () => {
    stop();
    timer.current = setInterval(() => {
      const el = track.current;
      if (!el) return;
      const next = (Math.round(el.scrollLeft / el.clientWidth) + 1) % slides.length;
      el.scrollTo({ left: next * el.clientWidth });
    }, 1200);
  };

  useEffect(() => stop, []);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={slides.length > 1 ? play : undefined}
      onMouseLeave={stop}
      className="relative"
    >
      <ul
        ref={track}
        tabIndex={0}
        aria-label={`${label}, scroll horizontally`}
        onScroll={(e) =>
          setIndex(
            Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth),
          )
        }
        className="flex snap-x snap-mandatory overflow-x-auto rounded-lg border border-line [scrollbar-width:none] motion-safe:scroll-smooth"
      >
        {slides.map((slide, i) => (
          <li
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            className="w-full shrink-0 snap-start"
          >
            {slide}
          </li>
        ))}
      </ul>
      {slides.length > 1 && (
        <p className="absolute right-2 bottom-2 rounded-full bg-background/90 px-2 text-xs text-muted">
          {index + 1} / {slides.length}
        </p>
      )}
    </div>
  );
}
