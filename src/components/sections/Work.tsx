import Reveal from "@/components/Reveal";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote, PlaceholderVisual } from "@/components/ui/Placeholder";

/**
 * The emotional peak of the page. Two full-width, ALTERNATING feature panels
 * (not a grid) — image one side, copy the other, flipping each time. This is
 * where the work is the picture: the visuals bleed wider than the text sections,
 * get the most vertical air, and the strongest (clip) reveal.
 *
 * No 01/02 numbering — two parallel projects aren't a sequence. The tag leads,
 * because the tag encodes something true about each piece.
 */

type Feature = {
  title: string;
  tag: string;
  body: string;
  visualLabel: string;
  note: string;
};

const features: Feature[] = [
  {
    title: "Psalm 23 Shopping Center",
    tag: "Campaign · Content · Ecommerce",
    body: "A culturally grounded Nestlé campaign built on real Ghanaian memory — Milo, Cerelac, Lactogen; the tastes people grew up on. The emotional 'Grew Up On It' story sits on top, while underneath a Mobile Money ecommerce flow turns that feeling into wholesale conversion.",
    visualLabel: "Psalm 23 — campaign visuals",
    note: "confirm 2–3 sentence write-up + real campaign visuals",
  },
  {
    title: "VivaLoKs",
    tag: "Brand · Content · Social",
    body: "A premium interlocking loc system. We built the content strategy and an installation spotlight series that positioned VivaLoKs as aspirational — a considered choice, not a commodity.",
    visualLabel: "VivaLoKs — installation visuals",
    note: "confirm 2–3 sentence write-up + real install visuals",
  },
];

function FeaturePanel({ feature, reversed }: { feature: Feature; reversed: boolean }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
      {/* Visual — bleeds wider (7 of 12 cols), clip reveal */}
      <div
        className={`overflow-hidden rounded-sm md:col-span-7 ${
          reversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <Reveal scale={1.06} y={0}>
          <PlaceholderVisual
            label={feature.visualLabel}
            className="aspect-[3/2] w-full"
          />
        </Reveal>
      </div>

      {/* Copy — narrower (5 of 12 cols) */}
      <div className={`md:col-span-5 ${reversed ? "md:order-1" : "md:order-2"}`}>
        <Reveal y={36}>
          <p className="text-xs uppercase tracking-[0.2em] text-refract-cool/80">
            {feature.tag}
          </p>
          <h3 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-paper md:text-5xl">
            {feature.title}
          </h3>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-paper/70">
            {feature.body}
          </p>
          <div>
            <PlaceholderNote>{feature.note}</PlaceholderNote>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="rule-refract px-6 py-32 md:py-52"
      style={{
        background:
          "radial-gradient(90% 60% at 15% 0%, rgba(108,123,214,0.07), transparent 55%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-paper/45">
            Selected work
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.02] tracking-tight text-paper md:text-7xl">
            The work is the <Accent>proof</Accent>.
          </h2>
        </Reveal>

        <div className="mt-24 space-y-32 md:mt-32 md:space-y-52">
          {features.map((feature, i) => (
            <FeaturePanel
              key={feature.title}
              feature={feature}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
