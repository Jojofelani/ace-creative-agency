import Reveal from "@/components/Reveal";
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
        {/* Vertical refraction rule — the divider language, turned on its side */}
        <div
          aria-hidden="true"
          className="w-px shrink-0 self-stretch"
          style={{
            background: "linear-gradient(180deg, #6C7BD6, #E8A15C)",
          }}
        />
        <Reveal>
          <p className="font-display text-2xl font-light leading-[1.4] tracking-tight text-paper md:text-[2rem]">
            We make work the way we&apos;d want to be spoken to. Directly, and
            with respect for where it lands. Culture isn&apos;t a garnish here.
            It&apos;s <Accent>the starting point</Accent>.
          </p>
          <PlaceholderNote>confirm about / voice copy</PlaceholderNote>
        </Reveal>
      </div>
    </section>
  );
}
