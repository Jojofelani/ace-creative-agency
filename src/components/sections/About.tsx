import Reveal from "@/components/Reveal";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Voice. Short. The direct, reflective ACE tone — why the work is made this way.
 */
export default function About() {
  return (
    <section id="about" className="border-t border-paper/10 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.22em] text-paper/40">
            Why we make it this way
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-display text-2xl font-normal leading-[1.35] tracking-tight text-paper md:text-3xl">
            We make work the way we&apos;d want to be spoken to — directly, and
            with respect for where it lands. Culture isn&apos;t a garnish here.
            It&apos;s the starting point.
          </p>
          <PlaceholderNote>confirm about / voice copy</PlaceholderNote>
        </Reveal>
      </div>
    </section>
  );
}
