/**
 * The signature type move. The one recurring idea the page is about (being
 * grounded, being felt) is always set in Fraunces italic, in a single warm
 * refraction tone. Same-family italic emphasis, not gradient text. The one
 * gradient moment on the page is the hero line; everything else stays solid.
 */
export function Accent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <em className={`font-display italic leading-[1.1] text-refract-warm ${className}`}>
      {children}
    </em>
  );
}
