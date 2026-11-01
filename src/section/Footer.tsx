import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone, Copy, Check, ExternalLink } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";
import { DoodleStar, SparkleBurst, HalftoneDots, ScribbleUnderline, Squiggle, TapeStrip } from "../components/Doodles";

export function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("freelanceqadir@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+923133594770");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2400);
  };

  return (
    <footer id="contact" className="relative overflow-hidden px-6 pb-10 pt-16 md:px-12">
      <HalftoneDots className="pointer-events-none absolute left-4 top-4 h-24 w-40 text-(--color-gold) opacity-20 md:left-16" />
      <DoodleStar className="pointer-events-none absolute right-[8%] top-2 h-5 w-5 rotate-6 text-(--color-cyan) opacity-60" />
      <Squiggle className="pointer-events-none absolute left-[6%] bottom-10 h-4 w-24 text-(--color-ink)/15" />
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-6xl rounded-[2.5rem] border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) px-8 py-14 text-center shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] md:px-16"
      >
        <TapeStrip color="var(--color-violet)" className="absolute -top-3 left-1/2 z-10 -translate-x-1/2" />
        <DoodleStar className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 text-(--color-gold)" />
        <SparkleBurst className="pointer-events-none absolute -right-4 -top-4 h-10 w-10 text-(--color-accent)" />
        <DoodleStar className="pointer-events-none absolute -bottom-3 right-10 h-6 w-6 text-(--color-cyan)" />
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
          &#9673; Let&rsquo;s Talk
        </p>
        <h2 className="relative mt-3 inline-block font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Got a project? Let&rsquo;s build<br /> something great.
          <ScribbleUnderline className="absolute -bottom-3 left-1/2 h-4 w-2/3 -translate-x-1/2 text-(--color-accent)" />
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center rounded-full bg-(--color-accent) shadow-[4px_6px_0_0_oklch(0.16_0.04_290)] transition-transform hover:-translate-y-0.5">
            <button
              type="button"
              onClick={handleCopyEmail}
              data-cursor="grow"
              title="Click to copy email address"
              className="flex items-center gap-2 rounded-l-full px-7 py-4 font-display text-sm font-extrabold text-(--color-canvas)"
            >
              {copiedEmail ? <Check size={16} strokeWidth={2.5} /> : <Copy size={16} />}
              {copiedEmail ? "Email Copied! ✓" : "freelanceqadir@gmail.com"}
            </button>
            <a
              href="mailto:freelanceqadir@gmail.com"
              data-cursor="grow"
              title="Open in mail app"
              aria-label="Send email via mail app"
              className="flex h-11 w-11 items-center justify-center rounded-r-full border-l border-(--color-canvas)/20 text-(--color-canvas) transition-opacity hover:opacity-75"
            >
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="flex items-center rounded-full border-2 border-(--color-ink)/25 bg-(--color-canvas-raised) transition-colors hover:border-(--color-accent)">
            <button
              type="button"
              onClick={handleCopyPhone}
              data-cursor="grow"
              title="Click to copy phone number"
              className="flex items-center gap-2 rounded-l-full px-7 py-4 font-display text-sm font-extrabold text-(--color-ink) transition-colors hover:text-(--color-accent)"
            >
              {copiedPhone ? <Check size={16} className="text-(--color-accent)" strokeWidth={2.5} /> : <Copy size={16} />}
              {copiedPhone ? "Phone Copied! ✓" : "+92 313 3594770"}
            </button>
            <a
              href="tel:+923133594770"
              data-cursor="grow"
              title="Call phone number"
              aria-label="Call phone number"
              className="flex h-11 w-11 items-center justify-center rounded-r-full border-l border-(--color-ink)/20 text-(--color-ink) transition-colors hover:text-(--color-accent)"
            >
              <Phone size={15} />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-(--color-ink)/60 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Abdul Qadir Khan. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/QadirKhan9" target="_blank" rel="noopener noreferrer" data-cursor="grow" aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-ink)/15 transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"><Github size={15} /></a>
          <a href="https://www.linkedin.com/in/abdul-qadir-khan" target="_blank" rel="noopener noreferrer" data-cursor="grow" aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-ink)/15 transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"><Linkedin size={15} /></a>

        </div>
      </div>
    </footer>
  );
}
