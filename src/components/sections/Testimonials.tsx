import Reveal from "@/components/Reveal";
import RiseMask from "@/components/scroll/RiseMask";
import GlowCard from "@/components/ui/GlowCard";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Social proof band. Master shipped a marquee of template demo quotes (named
 * "Jay Nadeau" etc.) — those are NOT real ACE testimonials, so this renders the
 * section as clearly-marked structure with neutral placeholder attributions,
 * ready for real client quotes. Kept in the dark/refraction card language.
 */

const testimonials = [
  {
    quote:
      "Collaborating with the team elevated our brand to new heights. Their strategic approach and creative execution were flawless — every detail meticulously crafted.",
    name: "Client name",
    role: "Marketing Director, Company",
  },
  {
    quote:
      "An exceptional experience from start to finish. They translated our ideas into a stunning digital presence — professional, responsive, and incredibly talented.",
    name: "Client name",
    role: "Founder, Company",
  },
  {
    quote:
      "Fresh concepts, delivered on time and beyond expectations. The range — from brand to motion to web — is nothing short of extraordinary.",
    name: "Client name",
    role: "Creative Director, Company",
  },
];

export default function Testimonials() {
  return (
    <section className="rule-refract px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        <RiseMask className="mb-5">
          <p className="text-xs uppercase tracking-[0.22em] text-paper/45">
            Kind words
          </p>
        </RiseMask>
        <RiseMask delay={0.12}>
          <h2 className="max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight text-paper md:text-6xl">
            See for <Accent>yourself</Accent>.
          </h2>
        </RiseMask>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.06} parallax={7}>
              <GlowCard className="h-full rounded-sm">
                <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-paper/10 bg-ink/40 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-refract-cool/8 via-transparent to-refract-warm/8" />
                  <blockquote className="relative text-base leading-relaxed text-paper/75">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="relative mt-8">
                    <p className="font-display text-lg text-paper">{t.name}</p>
                    <p className="text-sm text-paper/45">{t.role}</p>
                  </figcaption>
                </figure>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <PlaceholderNote>
            placeholder testimonials — replace with real client quotes
          </PlaceholderNote>
        </div>
      </div>
    </section>
  );
}
