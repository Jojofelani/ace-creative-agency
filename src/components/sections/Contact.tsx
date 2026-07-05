import Reveal from "@/components/Reveal";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote } from "@/components/ui/Placeholder";
import CrystalAccent from "@/components/sections/CrystalAccent";

/**
 * The invitation. Oversized and warm — the last big moment before the footer,
 * lit by the warm end of the crystal's spectrum. Its own line, not an echo of
 * the hero.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="rule-refract relative overflow-hidden px-6 py-32 md:py-52"
      style={{
        background:
          "radial-gradient(80% 60% at 85% 110%, rgba(232,161,92,0.09), transparent 55%)",
      }}
    >
      <CrystalAccent />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal scale={0.92} parallax={0}>
          <h2 className="max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-tight text-paper md:text-8xl">
            Let&apos;s build something <Accent>powerful</Accent>.
          </h2>
        </Reveal>

        <Reveal delay={0.06} y={20}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70">
            Ready to elevate your brand? We&apos;re currently accepting new
            projects for Q3 2026.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={20}>
          <div className="mt-14 flex flex-col gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <a
                href="mailto:hello@aceagency.com"
                className="font-display text-2xl text-paper underline decoration-gold/50 underline-offset-8 transition-colors hover:decoration-gold md:text-3xl"
              >
                hello@aceagency.com
              </a>
              <p className="text-sm text-paper/45">
                Start a project — email, or reach us on social.
              </p>
            </div>
            <PlaceholderNote>
              confirm email, location (New York / Accra?) + socials
            </PlaceholderNote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
