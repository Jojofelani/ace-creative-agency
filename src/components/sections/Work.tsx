import Reveal from "@/components/Reveal";
import SlideIn from "@/components/scroll/SlideIn";
import RiseMask from "@/components/scroll/RiseMask";
import GlowCard from "@/components/ui/GlowCard";
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
    tag: "Campaign, Content, Ecommerce",
    body: "A Nestlé campaign built on the tastes people grew up on — Milo, Cerelac, Lactogen. The emotional 'Grew Up On It' story sits on top, while underneath a Mobile Money ecommerce flow turns that feeling into wholesale orders.",
    visualLabel: "Psalm 23 campaign visuals",
    note: "confirm 2-3 sentence write-up + real campaign visuals",
  },
  {
    title: "VivaLoKs",
    tag: "Brand, Content, Social",
    body: "A premium interlocking loc system. We built the content strategy and an installation spotlight series that showed the craft up close — so buyers saw a system worth choosing, not a product to price-shop.",
    visualLabel: "VivaLoKs installation visuals",
    note: "confirm 2-3 sentence write-up + real install visuals",
  },
  {
    title: "Lumina Fashion",
    tag: "Branding",
    body: "",
    visualLabel: "Lumina Fashion visuals",
    note: "placeholder project — confirm details or remove",
  },
  {
    title: "Urban Architect",
    tag: "Web Design",
    body: "",
    visualLabel: "Urban Architect visuals",
    note: "placeholder project — confirm details or remove",
  },
  {
    title: "Neon Energy",
    tag: "Strategy",
    body: "",
    visualLabel: "Neon Energy visuals",
    note: "placeholder project — confirm details or remove",
  },
  {
    title: "Velvet Cafe",
    tag: "Social Media",
    body: "",
    visualLabel: "Velvet Cafe visuals",
    note: "placeholder project — confirm details or remove",
  },
];

function FeaturePanel({ feature, reversed }: { feature: Feature; reversed: boolean }) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
      {/* Visual — bleeds wider (7 of 12 cols), clip reveal + stronger float,
          with the edge-line glow + tilt on hover. */}
      <GlowCard
        className={`overflow-hidden rounded-sm md:col-span-7 ${
          reversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <Reveal scale={1.08} y={0} parallax={12}>
          <PlaceholderVisual
            label={feature.visualLabel}
            className="aspect-[3/2] w-full"
          />
        </Reveal>
      </GlowCard>

      {/* Copy — narrower (5 of 12 cols); slides in from the side opposite the
          visual so the panel assembles from both edges toward the centre. */}
      <div className={`md:col-span-5 ${reversed ? "md:order-1" : "md:order-2"}`}>
        <SlideIn from={reversed ? "left" : "right"}>
          <p className="text-xs uppercase tracking-[0.2em] text-refract-cool/80">
            {feature.tag}
          </p>
          <h3 className="mt-4 font-display text-3xl font-light leading-tight tracking-tight text-paper md:text-5xl">
            {feature.title}
          </h3>
          {feature.body && (
            <p className="mt-6 max-w-prose text-base leading-relaxed text-paper/70">
              {feature.body}
            </p>
          )}
          <div className="mt-6">
            <PlaceholderNote>{feature.note}</PlaceholderNote>
          </div>
        </SlideIn>
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
        <RiseMask className="mb-5">
          <p className="text-xs uppercase tracking-[0.22em] text-paper/45">
            Featured work
          </p>
        </RiseMask>
        <RiseMask delay={0.12}>
          <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.02] tracking-tight text-paper md:text-7xl">
            The work is the <Accent>proof</Accent>.
          </h2>
        </RiseMask>

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
