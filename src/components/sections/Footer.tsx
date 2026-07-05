import { PlaceholderNote } from "@/components/ui/Placeholder";

/**
 * Multi-column footer carrying the migrated master content — brand blurb +
 * socials, service links, company links, and contact — in the site's dark /
 * refraction language. Unverified items (social hrefs, location, legal pages)
 * are marked as placeholders.
 */

const serviceLinks = [
  "Branding & Identity",
  "Web Design",
  "Social Media Management",
  "Motion & Digital",
  "Creative Strategy",
];

const companyLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socials = ["Instagram", "LinkedIn", "Twitter"];

export default function Footer() {
  return (
    <footer className="rule-refract px-6 pt-24 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <span className="font-display text-2xl tracking-tight text-paper">
              ACE <span className="text-gold">AGENCY</span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-paper/55">
              Powered by 360 Graphics. A bold, strategy-driven creative studio for
              global brands and startups.
            </p>
            <div className="flex gap-5 text-sm text-paper/50">
              {socials.map((s) => (
                <a key={s} href="#" className="transition-colors hover:text-paper">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-display text-sm font-semibold text-gold">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <a
                    href="#services"
                    className="text-sm text-paper/55 transition-colors hover:text-paper"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 font-display text-sm font-semibold text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/55 transition-colors hover:text-paper"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-gold">Contact</h4>
            <a
              href="mailto:hello@aceagency.com"
              className="block text-sm text-paper/55 transition-colors hover:text-paper"
            >
              hello@aceagency.com
            </a>
            <p className="text-sm text-paper/55">New York, NY</p>
            <a
              href="#contact"
              className="press inline-block rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink hover:bg-white"
            >
              Start a project
            </a>
            <PlaceholderNote>confirm socials, location + legal links</PlaceholderNote>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 md:flex-row">
          <p>© {new Date().getFullYear()} Ace Creative Agency powered by 360 Graphics</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-paper">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-paper">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
