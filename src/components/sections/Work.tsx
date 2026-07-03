import Reveal from "@/components/Reveal";
import { PlaceholderNote, PlaceholderVisual } from "@/components/ui/Placeholder";

/**
 * The emotional peak of the page. Two full-width, ALTERNATING feature panels
 * (not a grid) — image one side, copy the other, flipping each time. This is
 * where the work is the picture and gets the most room and the strongest reveal.
 */

type Feature = {
  index: string;
  title: string;
  tag: string;
  body: string;
  visualLabel: string;
  note: string;
};

const features: Feature[] = [
  {
    index: "01",
    title: "Psalm 23 Shopping Center",
    tag: "Campaign · Content · Ecommerce",
    body: "A culturally grounded Nestlé campaign built on real Ghanaian memory — Milo, Cerelac, Lactogen; the tastes people grew up on. The emotional 'Grew Up On It' story sits on top, while underneath a Mobile Money ecommerce flow turns that feeling into wholesale conversion.",
    visualLabel: "Psalm 23 — campaign visuals",
    note: "confirm 2–3 sentence write-up + real campaign visuals",
  },
  {
    index: "02",
    title: "VivaLoKs",
    tag: "Brand · Content · Social",
    body: "A premium interlocking loc system. We built the content strategy and an installation spotlight series that positioned VivaLoKs as aspirational — a considered choice, not a commodity.",
    visualLabel: "VivaLoKs — installation visuals",
    note: "confirm 2–3 sentence write-up + real install visuals",
  },
];

function FeaturePanel({ feature, reversed }: { feature: Feature; reversed: boolean }) {
  return (
    <Reveal y={44}>
      <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Visual */}
        <div className={reversed ? "md:order-2" : "md:order-1"}>
          <PlaceholderVisual
            label={feature.visualLabel}
            className="aspect-[4/3] w-full"
          />
        </div>

        {/* Copy */}
        <div className={reversed ? "md:order-1" : "md:order-2"}>
          <span className="font-display text-sm text-gold">{feature.index}</span>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-paper/40">
            {feature.tag}
          </p>
          <h3 className="mt-3 font-display text-3xl font-normal leading-tight tracking-tight text-paper md:text-4xl">
            {feature.title}
          </h3>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-paper/70">
            {feature.body}
          </p>
          <div>
            <PlaceholderNote>{feature.note}</PlaceholderNote>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-paper/10 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-paper/40">
            Selected work
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-normal leading-[1.05] tracking-tight text-paper md:text-6xl">
            The work is the proof.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-28 md:mt-28 md:space-y-40">
          {features.map((feature, i) => (
            <FeaturePanel
              key={feature.index}
              feature={feature}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
