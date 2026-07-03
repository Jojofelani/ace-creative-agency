import { PlaceholderNote } from "@/components/ui/Placeholder";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <span className="font-display text-2xl tracking-tight text-paper">
          ACE
        </span>

        <div className="flex flex-col gap-2 md:items-end">
          <nav className="flex gap-6 text-sm text-paper/50">
            <a href="#" className="transition-colors hover:text-paper">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-paper">
              WhatsApp
            </a>
            <a href="#" className="transition-colors hover:text-paper">
              Email
            </a>
          </nav>
          <PlaceholderNote>confirm socials + any secondary links</PlaceholderNote>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-xs text-paper/30">
        © {new Date().getFullYear()} ACE Creative Agency
      </p>
    </footer>
  );
}
