import Reveal from "@/components/Reveal";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Positioning. Short, no 3D. The room goes quiet after the hero — one clear
 * statement of who ACE is.
 */
export default function Intro() {
  return (
    <section id="intro" className="border-t border-paper/10 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.22em] text-paper/40">
            Accra, Ghana
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-normal leading-[1.15] tracking-tight text-paper md:text-5xl">
            ACE is a creative and digital agency in Accra doing brand, content,
            and design that&apos;s{" "}
            <span className="text-gold">culturally grounded</span> — not generic.
          </h2>
          <PlaceholderNote>confirm exact positioning line</PlaceholderNote>
        </Reveal>
      </div>
    </section>
  );
}
