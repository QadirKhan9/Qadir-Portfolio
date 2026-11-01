import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Globe, ArrowUpRight, Bot, Mic, ListChecks, BookOpen, Video, Wrench } from "lucide-react";
import { ScribbleUnderline, TapeStrip, DoodleStar, SparkleBurst, HalftoneDots } from "../components/Doodles";

const GH = "https://github.com/QadirKhan9";

type Category = "ai" | "fullstack" | "python";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Agents" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "python", label: "Python" },
] as const;

const PROJECTS = [
  {
    title: "Synthox AI",
    tag: "Multi-Agent AI Platform",
    categories: ["ai", "fullstack"] as Category[],
    icon: Bot,
    accent: "--color-violet",
    rotate: "-rotate-1",
    href: `${GH}/Multi-Agent-Ai`,
    live: "https://multi-agent-ai-liart.vercel.app",
    points: [
      "Next.js/TypeScript platform where a Router Agent (Llama 3.3 70B) delegates requests to 6 specialized agents: chat, web search, image generation, code execution, PDF export and voice.",
      "Persistent long-term memory using PostgreSQL pgvector with 768-dimensional embeddings, plus Redis-based rate limiting and a shared fallback system across all agents.",
    ],
    stack: "Next.js, TypeScript, Tailwind CSS, Prisma, NextAuth.js, Groq, Gemini, Cloudinary",
  },
  {
    title: "Jarvis AI",
    tag: "Personal Voice Assistant",
    categories: ["ai", "python"] as Category[],
    icon: Mic,
    accent: "--color-coral",
    rotate: "rotate-1",
    href: `${GH}/Jarvis-AI`,
    points: [
      "Python-based assistant with voice commands, real-time info retrieval, AI chatbot, image/video generation, speech-to-text and text-to-speech.",
      "Fully modular architecture with a custom GUI for a native desktop-assistant experience.",
    ],
    stack: "Python",
  },
  {
    title: "YTFactory",
    tag: "Autonomous AI Video Engine",
    categories: ["ai", "python"] as Category[],
    icon: Video,
    accent: "--color-cyan",
    rotate: "-rotate-1",
    href: `${GH}/YTFactory-Autonomous-AI-Video-Production-Engine`,
    live: "https://ytfactory-autonomous-ai-video-production-engine-ac74a.containers.snapdeploy.app/",
    points: [
      "Broadcast-grade YouTube documentary generation from a single topic or prompt, powered by an autonomous 23-step state machine.",
      "Multi-provider LLM routing (Groq, Gemini), stock footage harvesting, neural TTS voiceover, automated QC verification, and modern dark-glass Web UI.",
    ],
    stack: "Python, FFmpeg, Groq, Gemini, Neural TTS, Docker",
  },
  {
    title: "Physical AI & Humanoid Robotics Book",
    tag: "Docs Platform",
    categories: ["fullstack", "ai"] as Category[],
    icon: BookOpen,
    accent: "--color-gold",
    rotate: "rotate-1",
    href: `${GH}/New-Ai-book`,
    live: "https://new-ai-book-xi.vercel.app",
    points: [
      "Docusaurus-based documentation platform with an AI chat widget, one-click Urdu translation and a full authentication/profile system.",
    ],
    stack: "Docusaurus, AI chat",
  },
  {
    title: "Todo App with AI Chatbot",
    tag: "Full-Stack App",
    categories: ["fullstack", "ai"] as Category[],
    icon: ListChecks,
    accent: "--color-accent",
    rotate: "-rotate-1",
    href: `${GH}/Todo-app-website-with-chatbot`,
    live: "https://todo-app-website-with-chatbot.vercel.app",
    points: [
      "Stateless FastAPI backend integrating an OpenAI Agent to power an in-app chatbot for task management.",
      "User authentication, conversation persistence and tool-calling for external operations.",
    ],
    stack: "FastAPI, OpenAI Agents",
  },
  {
    title: "Utility Tools",
    tag: "Python Utilities",
    categories: ["python"] as Category[],
    icon: Wrench,
    accent: "--color-violet",
    rotate: "rotate-1",
    href: GH,
    live: "https://unit-converter108.streamlit.app/",
    points: ["Lightweight Python utilities: file converter, QR code generator and unit converter."],
    stack: "Python",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeTab as Category));

  const getCount = (id: string) => {
    if (id === "all") return PROJECTS.length;
    return PROJECTS.filter((p) => p.categories.includes(id as Category)).length;
  };

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20 md:px-12">
      <HalftoneDots className="pointer-events-none absolute right-4 top-2 h-24 w-40 text-(--color-coral) opacity-25 md:right-14" />
      <SparkleBurst className="pointer-events-none absolute left-[3%] top-24 h-7 w-7 text-(--color-cyan) opacity-70" />
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
          &#9673; Projects
        </p>
        <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Things I&rsquo;ve built
          <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-coral)" />
        </h2>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {CATEGORIES.map(({ id, label }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                data-cursor="grow"
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-xs font-extrabold transition-all ${
                  isActive
                    ? "bg-(--color-accent) text-(--color-canvas) shadow-[3px_4px_0_0_oklch(0.16_0.04_290)]"
                    : "border-2 border-(--color-ink)/15 bg-(--color-canvas-raised) text-(--color-ink)/75 hover:border-(--color-accent) hover:text-(--color-accent)"
                }`}
              >
                <span>{label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isActive
                      ? "bg-(--color-canvas) text-(--color-accent)"
                      : "bg-(--color-ink)/10 text-(--color-ink)/60"
                  }`}
                >
                  {getCount(id)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(({ title, tag, icon: Icon, accent, rotate, href, live, points, stack }, i) => (
              <motion.div
                key={title}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ rotate: 0, y: -8 }}
                className={`group relative flex flex-col rounded-3xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) p-6 shadow-[6px_8px_0_0_oklch(0.10_0.03_290)] ${rotate}`}
              >
                <TapeStrip
                  color={`var(${accent})`}
                  className={`absolute -top-3 z-10 ${i % 2 === 0 ? "left-6 -rotate-[8deg]" : "right-6 rotate-[6deg]"}`}
                />
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-(--color-canvas)"
                  style={{ backgroundColor: `var(${accent})` }}
                >
                  <Icon size={22} />
                </span>
                <span className="mt-4 text-xs font-bold uppercase tracking-wider text-(--color-ink)/60">{tag}</span>
                <h3 className="mt-1 font-display text-xl font-extrabold tracking-tight">{title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-(--color-ink)/80">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-(--color-ink)/60">
                  <span className="font-bold text-(--color-ink)/80">Stack:</span> {stack}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="grow"
                      className="inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-4 py-2 font-display text-xs font-extrabold text-(--color-canvas) transition-transform hover:-translate-y-0.5"
                    >
                      <Globe size={14} /> Live Demo <ArrowUpRight size={14} />
                    </a>
                  )}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="grow"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-(--color-ink)/25 px-4 py-2 font-display text-xs font-extrabold transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
                <DoodleStar className="pointer-events-none absolute -right-2 -top-2 h-5 w-5 text-(--color-gold) opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
