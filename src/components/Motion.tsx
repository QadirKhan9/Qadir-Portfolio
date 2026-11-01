import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

const TECH = [
  "AI Automation",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "n8n",
  "OpenAI Agents",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Node.js",
  "Tailwind",
  "Groq",
  "Gemini",
  "Git",
];

export function Marquee() {
  const row = [...TECH, ...TECH];
  return (
    <div className="relative overflow-hidden border-y-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) py-4 -rotate-1">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-extrabold uppercase tracking-wider text-(--color-ink)/80">
            {t}
            <span className="text-(--color-accent)">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function Particles() {
  const dots = Array.from({ length: 14 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    size: 4 + (i % 4) * 2,
    delay: (i * 1.3) % 9,
    dur: 9 + (i % 5) * 2,
    color: ["--color-accent", "--color-cyan", "--color-violet", "--color-gold", "--color-coral"][i % 5],
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: d.left, width: d.size, height: d.size, backgroundColor: `var(${d.color})`,
            animation: `rise ${d.dur}s linear ${d.delay}s infinite`, opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
