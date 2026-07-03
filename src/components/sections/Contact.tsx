import Reveal from "@/components/Reveal";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * The invitation. Clear, warm, and unmissable — the last bold-ish moment before
 * the footer, but still quiet next to the crystal.
 */
export default function Contact() {
  return (
    <section id="contact" className="border-t border-paper/10 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.22em] text-paper/40">
            Start a project
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-normal leading-[1.02] tracking-tight text-paper md:text-7xl">
            Let&apos;s make something worth looking at.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <a
                href="mailto:hello@ace.example"
                className="font-display text-xl text-paper underline decoration-gold/50 underline-offset-8 transition-colors hover:decoration-gold md:text-2xl"
              >
                hello@ace.example
              </a>
              <p className="text-sm text-paper/40">
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
