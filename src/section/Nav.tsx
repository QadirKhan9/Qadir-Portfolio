import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { DoodleStar, ScribbleUnderline } from "../components/Doodles";

const LINKS = ["Home", "Projects", "About", "Contact"];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 1, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12"
    >
      <a href="#top" data-cursor="grow" className="relative font-display text-xl font-extrabold tracking-tight">
        QADIR<span className="text-(--color-accent)">.</span>
        <DoodleStar className="pointer-events-none absolute -right-4 -top-3 h-3.5 w-3.5 rotate-12 text-(--color-gold)" />
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {LINKS.map((link) => (
          <a
            key={link}
            href={link === "Home" ? "#top" : `#${link.toLowerCase()}`}
            data-cursor="grow"
            className="group relative text-sm font-medium text-(--color-ink)/80 transition-colors hover:text-(--color-accent)"
          >
            {link}
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-2 w-full text-(--color-accent) opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </nav>
      <button
        type="button"
        data-cursor="grow"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-(--color-ink)/25 text-(--color-ink) md:hidden"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-6 right-6 top-full flex flex-col gap-1 rounded-2xl border border-(--color-ink)/15 bg-(--color-canvas-raised) p-3 shadow-xl md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#top" : `#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-(--color-ink)/80 transition-colors hover:bg-(--color-ink)/5 hover:text-(--color-accent)"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
}
