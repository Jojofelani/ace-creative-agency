/**
 * Quiet, clearly-marked placeholders so real content can be dropped in later.
 * Deliberately low-key: they must not compete with the crystal.
 */

export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-4 inline-block rounded-full border border-gold/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-gold/80">
      Placeholder: {children}
    </span>
  );
}

export function PlaceholderVisual({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-sm border border-paper/10 ${className}`}
    >
      {/* Subtle refraction wash — never loud. */}
      <div className="absolute inset-0 bg-gradient-to-br from-refract-cool/10 via-transparent to-refract-warm/10" />
      <span className="relative px-6 text-center text-[0.7rem] uppercase tracking-[0.2em] text-paper/30">
        [ {label} ]
      </span>
    </div>
  );
}
