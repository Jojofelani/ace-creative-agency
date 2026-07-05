import Reveal from "@/components/Reveal";
import DrawLine from "@/components/scroll/DrawLine";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Voice. A left-set aside against a vertical refraction rule — a different
 * layout family from the centered/oversized statement sections, so it reads as
 * a quiet margin note, not a third big headline. The direct, reflective ACE
 * tone: why the work is made this way.
 */
export default function About() {
  return (
    <section id="about" className="rule-refract px-6 py-32 md:py-48">
      <div className="mx-auto flex max-w-4xl gap-7 md:gap-10">
        {/* Vertical refraction rule — draws downward like a beam of light as the
            aside enters, retracts on the way up. */}
        <DrawLine
          vertical
          className="w-px shrink-0 self-stretch"
          style={{
            background: "linear-gradient(180deg, #6C7BD6, #E8A15C)",
          }}
        />
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.22em] text-paper/45">
            Who we are
          </p>
          <div className="space-y-6">
            <p className="font-display text-2xl font-light leading-[1.4] tracking-tight text-paper md:text-[2rem]">
              Ace Creative Agency was founded on a simple belief: that brands
              shouldn&apos;t just be seen, they should be <Accent>felt</Accent>.
              Powered by 360 Graphics, we combine decades of technical expertise
              with a fresh, fashion-forward design approach.
            </p>
            <p className="max-w-prose text-lg leading-relaxed text-paper/70">
              We work with visionaries who refuse to compromise. From global
              retailers like H&amp;M to disruptive tech startups, our process is
              the same — uncover the truth, and tell it beautifully.
            </p>
          </div>
          <PlaceholderNote>confirm client names (H&amp;M?) + brand story</PlaceholderNote>
        </Reveal>
      </div>
    </section>
  );
}
