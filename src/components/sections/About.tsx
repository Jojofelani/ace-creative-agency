import Reveal from "@/components/Reveal";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Voice. Short, centered, quiet — a whisper between the work and the invitation.
 * The direct, reflective ACE tone: why the work is made this way.
 */
export default function About() {
  return (
    <section id="about" className="rule-refract px-6 py-32 md:py-48">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-display text-2xl font-light leading-[1.4] tracking-tight text-paper md:text-[2rem]">
            We make work the way we&apos;d want to be spoken to — directly, and
            with respect for where it lands. Culture isn&apos;t a garnish here.
            It&apos;s <Accent>the starting point</Accent>.
          </p>
          <div>
            <PlaceholderNote>confirm about / voice copy</PlaceholderNote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
