import Reveal from "@/components/Reveal";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * The invitation. Oversized and warm — the last big moment before the footer,
 * lit by the warm end of the crystal's spectrum. Its own line, not an echo of
 * the hero.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="rule-refract px-6 py-32 md:py-52"
      style={{
        background:
          "radial-gradient(80% 60% at 85% 110%, rgba(232,161,92,0.09), transparent 55%)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-tight text-paper md:text-8xl">
            Tell us what you&apos;re <Accent>making</Accent>.
          </h2>
        </Reveal>

        <Reveal delay={0.08} y={20}>
          <div className="mt-14 flex flex-col gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <a
                href="mailto:hello@ace.example"
                className="font-display text-2xl text-paper underline decoration-gold/50 underline-offset-8 transition-colors hover:decoration-gold md:text-3xl"
              >
                hello@ace.example
              </a>
              <p className="text-sm text-paper/45">
                Email · WhatsApp · Instagram
              </p>
            </div>
            <PlaceholderNote>
              confirm email, WhatsApp, socials + any form fields
            </PlaceholderNote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
