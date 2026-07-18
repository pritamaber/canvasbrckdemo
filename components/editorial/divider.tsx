/** Floorsy-style centered diamond divider for editorial headings. */
export function EDivider() {
  return (
    <div className="mx-auto mt-6 flex items-center justify-center gap-2 text-gold">
      <span className="h-px w-16 bg-gold/30 sm:w-24" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
      <span className="h-2.5 w-2.5 rotate-45 border border-gold/70" />
      <span className="h-2.5 w-2.5 rotate-45 bg-gold/70" />
      <span className="h-2.5 w-2.5 rotate-45 border border-gold/70" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/60" />
      <span className="h-px w-16 bg-gold/30 sm:w-24" />
    </div>
  );
}
