import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LINES = [
  { t: "const qadir = {", c: "text-(--color-ink)/90" },
  { t: '  role: "Junior Software Engineer",', c: "text-(--color-cyan)" },
  { t: '  stack: ["Next.js", "Python", "FastAPI"],', c: "text-(--color-gold)" },
  { t: '  agents: ["Groq", "Gemini", "OpenAI"],', c: "text-(--color-coral)" },
  { t: "  status: \"building cool things ⚡\",", c: "text-(--color-accent)" },
  { t: "};", c: "text-(--color-ink)/90" },
];

export function Terminal() {
  const full = LINES.map((l) => l.t).join("\n");
  const [n, setN] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => (v >= full.length + 40 ? 0 : v + 1));
    }, 55);
    return () => clearInterval(id);
  }, [full.length]);

  let left = Math.min(n, full.length);
  return (
    <motion.div
      animate={{ rotate: [-1.5, 0.5, -1.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mt-12 w-full max-w-md rounded-2xl border-2 border-dashed border-(--color-ink)/20 bg-(--color-canvas-raised) shadow-[6px_8px_0_0_oklch(0.10_0.03_290)]"
    >
      <div className="flex items-center gap-2 border-b border-(--color-ink)/10 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-(--color-coral)" />
        <span className="h-3 w-3 rounded-full bg-(--color-gold)" />
        <span className="h-3 w-3 rounded-full bg-(--color-accent)" />
        <span className="ml-3 font-mono text-xs text-(--color-ink)/50">about-me.ts</span>
      </div>
      <pre className="min-h-[170px] overflow-hidden px-4 py-4 font-mono text-xs leading-relaxed sm:text-[13px]">
        {LINES.map((l, i) => {
          const take = Math.max(0, Math.min(l.t.length, left));
          left -= l.t.length + 1;
          const active = take > 0 && take < l.t.length + 1 && left < 0;
          return (
            <div key={i} className={l.c}>
              {l.t.slice(0, take)}
              {active && <span className="ml-px inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-(--color-accent)" />}
            </div>
          );
        })}
      </pre>
    </motion.div>
  );
}

const CHIPS = [
  { label: "Next.js", cls: "left-0 top-[18%]", color: "--color-violet", d: 0 },
  { label: "Python", cls: "right-0 top-[46%]", color: "--color-gold", d: 0.6 },
  { label: "Groq", cls: "left-[-4%] top-[56%]", color: "--color-cyan", d: 1.2 },
  { label: "Gemini", cls: "right-[4%] bottom-[6%]", color: "--color-coral", d: 1.8 },
  { label: "React", cls: "left-[10%] bottom-[2%]", color: "--color-accent", d: 2.4 },
];

export function OrbitChips() {
  return (
    <>
      {CHIPS.map((c) => (
        <motion.span
          key={c.label}
          animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: c.d }}
          className={`absolute z-20 rounded-full px-3 py-1 font-mono text-xs font-bold text-(--color-canvas) shadow-[3px_4px_0_0_oklch(0.16_0.04_290)] ${c.cls}`}
          style={{ backgroundColor: `var(${c.color})` }}
        >
          {c.label}
        </motion.span>
      ))}
    </>
  );
}
