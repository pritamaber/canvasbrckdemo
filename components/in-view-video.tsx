"use client";

import { useEffect, useRef } from "react";

/**
 * A muted, looping background video that only loads and plays while it is
 * on (or near) screen, and pauses otherwise. This keeps pages with many
 * full-bleed category films from decoding a dozen videos at once.
 *
 * No `autoPlay` + `preload="none"` means the source isn't fetched until the
 * IntersectionObserver calls play().
 */
export function InViewVideo({
  src,
  poster,
  className,
  onError,
}: {
  src?: string;
  poster?: string;
  className?: string;
  onError?: () => void;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play?.().catch(() => {});
        } else {
          el.pause?.();
        }
      },
      { rootMargin: "150px 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      onError={onError}
    />
  );
}
