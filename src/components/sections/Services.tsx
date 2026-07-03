import Reveal from "@/components/Reveal";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * What we do. Plain-language, in ACE's voice — short declarative lines, no
 * agency-speak. Kept quiet: a disciplined list, not a feature grid shouting.
 */

const services = [
  {
    title: "Brand & identity",
    body: "The core idea, and the system that carries it — name, mark, voice, the way it all holds together.",
  },
  {
    title: "Content & social",
    body: "Work made for the feed and the culture around it. Made to be watched, saved, and passed on.",
  },
  {
    title: "Design",
    body: "Considered design across everything you put out — from a single post to a full campaign.",
  },
  {
    title: "Photography & video",
    body: "We shoot it ourselves. Real people, real places — made to feel like here, not a stock library.",
  },
  {
    title: "Copywriting & strategy",
    body: "The thinking underneath and the words on top. What to say, and how to say it so it lands.",
  },
];

export default function Services() {
  return (
    <section id="services" className="rule-refract px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-paper/45">
            What we do
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-tight text-paper md:text-5xl">
            We make the thing, not just the deck.
          </h2>
          <PlaceholderNote>confirm exact service groups</PlaceholderNote>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04}>
              <div className="grid gap-4 border-t border-paper/10 py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-10">
                <h3 className="font-display text-2xl font-normal text-paper md:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-prose text-base leading-relaxed text-paper/60">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
