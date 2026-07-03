import Reveal from "@/components/Reveal";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Positioning. Short, no 3D. The room goes quiet after the hero — one clear
 * statement of who ACE is, no eyebrow, no ceremony. Just the thesis.
 */
export default function Intro() {
  return (
    <section id="intro" className="rule-refract px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-3xl font-light leading-[1.18] tracking-tight text-paper md:text-[3.4rem]">
            A creative and digital studio in Accra. We make brand, content, and
            design that&apos;s <Accent>culturally grounded</Accent>. The kind of
            work that could only come from here, never generic.
          </h2>
          <PlaceholderNote>confirm exact positioning line</PlaceholderNote>
        </Reveal>
      </div>
    </section>
  );
}
