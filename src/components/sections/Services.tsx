import Reveal from "@/components/Reveal";
import DrawLine from "@/components/scroll/DrawLine";
import { Accent } from "@/components/ui/Accent";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Our expertise. A disciplined list, not a feature grid shouting. Descriptions
 * for the first three come from the master content; the last two are structure
 * awaiting real copy.
 */

const services = [
  {
    title: "Branding & Identity",
    body: "We craft distinct visual identities that tell compelling stories and resonate with your audience.",
    todo: false,
  },
  {
    title: "Web Design & Dev",
    body: "Immersive, high-performance websites built on modern tech stacks like Next.js.",
    todo: false,
  },
  {
    title: "Social Media",
    body: "Strategic content and management to grow your community and engage customers.",
    todo: false,
  },
  {
    title: "Motion & Digital",
    body: "Motion design and digital work that brings the brand to life across every screen.",
    todo: true,
  },
  {
    title: "Creative Strategy",
    body: "The thinking underneath: positioning, messaging, and the plan that ties it all together.",
    todo: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="rule-refract px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-paper/45">
            Our expertise
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-light leading-[1.05] tracking-tight text-paper md:text-5xl">
            Bridging the gap between <Accent>strategy</Accent> and{" "}
            <Accent>art</Accent>.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04} parallax={4}>
              <div className="relative py-8 md:py-10">
                {/* Divider draws across as a cool→warm refraction beam */}
                <DrawLine
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(108,123,214,0.55), rgba(245,243,239,0.5) 50%, rgba(232,161,92,0.55))",
                  }}
                />
                <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                  <h3 className="font-display text-2xl font-normal text-paper md:text-3xl">
                    {service.title}
                  </h3>
                  <div className="max-w-prose">
                    <p className="text-base leading-relaxed text-paper/60">
                      {service.body}
                    </p>
                    {service.todo && (
                      <PlaceholderNote>confirm description</PlaceholderNote>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
