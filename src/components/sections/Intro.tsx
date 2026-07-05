import Reveal from "@/components/Reveal";
import ZoomIn from "@/components/scroll/ZoomIn";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Positioning. Short, no 3D. The room goes quiet after the hero — one clear
 * statement of who ACE is. Its scroll moment continues the hero portal: the
 * text arrives oversized and zooms back to its normal size as you scroll in.
 */
export default function Intro() {
  return (
    <section
      id="intro"
      className="rule-refract overflow-hidden px-6 py-32 md:py-48"
    >
      <div className="mx-auto max-w-5xl">
        <ZoomIn from={1.35}>
          <h2 className="font-display text-3xl font-light leading-[1.18] tracking-tight text-paper md:text-[3.4rem]">
            We build brands that define <Accent>culture</Accent>.
          </h2>
        </ZoomIn>
        <Reveal parallax={0}>
          <PlaceholderNote>confirm positioning line</PlaceholderNote>
        </Reveal>
      </div>
    </section>
  );
}
