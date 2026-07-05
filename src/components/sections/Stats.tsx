import Reveal from "@/components/Reveal";
import DrawLine from "@/components/scroll/DrawLine";
import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * The proof-in-numbers band, migrated from master. Each stat sits under a
 * cool→warm refraction beam that draws in on scroll. Numbers are unverified —
 * marked as placeholders until real figures are confirmed.
 */

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "25", label: "Global Awards" },
  { value: "18", label: "Team Members" },
];

export default function Stats() {
  return (
    <section className="rule-refract px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05} parallax={5}>
              <div className="relative pt-6">
                <DrawLine
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(108,123,214,0.6), rgba(232,161,92,0.6))",
                  }}
                />
                <h3 className="font-display text-5xl font-light tracking-tight text-paper md:text-6xl">
                  {stat.value}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-paper/50">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <PlaceholderNote>confirm real numbers</PlaceholderNote>
        </div>
      </div>
    </section>
  );
}
