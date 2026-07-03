/**
 * The signature type move. The one recurring idea the page is about —
 * being grounded, being felt — is always set in Fraunces italic and tinted
 * with the crystal's refraction (cool → warm). It's the through-line the eye
 * learns from the hero down to the contact line.
 */
export function Accent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <em
      className={`bg-gradient-to-r from-refract-cool via-paper to-refract-warm bg-clip-text font-display italic text-transparent ${className}`}
    >
      {children}
    </em>
  );
}
