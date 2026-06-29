import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Bot,
  Headset,
  LineChart,
  Eye,
  X,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";
import sanjayAsset from "@/assets/sanjay.jpeg.asset.json";
import DisplayCards from "@/components/ui/display-cards";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MagicText } from "@/components/ui/magic-text";
import SocialCards from "@/components/ui/card-fan-carousel";
import { Footer } from "@/components/ui/modem-animated-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjay PC — Full-Stack Developer & AI Engineer" },
      { name: "description", content: "Portfolio of Sanjay PC. Full-Stack MERN developer building autonomous AI agents, real-time analytics, and production-ready products." },
      { property: "og:title", content: "Sanjay PC — Full-Stack & AI" },
      { property: "og:description", content: "MERN + Autonomous AI agents. 200+ LeetCode. Paper & Patent published." },
    ],
  }),
  component: Portfolio,
});

const SANJAY = sanjayAsset.url;

const stack = ["JavaScript", "Python", "React", "Node.js", "Express", "FastAPI", "MongoDB", "MySQL", "TensorFlow", "Gemini", "LangChain", "Docker", "Streamlit"];

type Project = {
  year: string;
  title: string;
  blurb: string;
  stack: string[];
  icon: React.ReactNode;
  image: string;
  problem: string;
  solution: string;
};

const projects: Project[] = [
  {
    year: "2025",
    title: "Autonomous Data Analysis Agent",
    blurb: "NL → executable pandas, sandboxed by AST validation.",
    stack: ["FastAPI", "Gemini", "Docker", "Streamlit", "Pandas"],
    icon: <Bot className="size-4" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    problem:
      "Analysts spend hours writing repetitive pandas code to answer routine questions about CSV datasets, and untrusted LLM-generated code is risky to execute directly.",
    solution:
      "Built a production-ready agent that converts natural-language questions into pandas code, validates it through an AST whitelist, and runs it inside a Docker sandbox — returning charts and tabular insights in seconds.",
  },
  {
    year: "2026",
    title: "Plug-and-Play AI Customer Agent",
    blurb: "Serverless chatbot any business launches by editing one file.",
    stack: ["Node.js", "Express", "Apps Script", "Vanilla JS"],
    icon: <Headset className="size-4" />,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80",
    problem:
      "Small businesses want an AI customer-support agent on their site but can't afford infra, databases, or dev time to stand one up.",
    solution:
      "Designed a zero-infra chatbot where the entire knowledge base lives in a single editable file. Google Apps Script acts as a serverless backend, so anyone can deploy it in minutes.",
  },
  {
    year: "2025",
    title: "Website Traffic Analyzer",
    blurb: "Real-time MERN analytics: visitors, sessions, bounce-rate.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    icon: <LineChart className="size-4" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    problem:
      "Off-the-shelf analytics tools are heavy, expensive, and leak user data to third parties — hard to recommend to indie SaaS founders.",
    solution:
      "Built a self-hosted MERN dashboard that tracks unique visitors, session length, and bounce-rate live, with interactive historical charts powered by a lightweight tracking snippet.",
  },
  {
    year: "2026",
    title: "Student Attention Analyzer",
    blurb: "Webcam-based focus monitor using facial landmarks.",
    stack: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
    icon: <Eye className="size-4" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    problem:
      "Remote learners drift in and out of focus, and educators have no objective way to measure attention during online sessions.",
    solution:
      "Created a webcam-based pipeline that scores Focused vs Distracted in real time using facial landmarks, with a lightweight fallback model when no GPU is available.",
  },
];

const achievements = [
  { k: "200+", v: "LeetCode solved" },
  { k: "160+", v: "DSA problems" },
  { k: "1", v: "Paper published" },
  { k: "1", v: "Patent published" },
];

// Reference-image-style constellation. Each orb has a position (%), size, depth.
type Orb = { id: string; x: number; y: number; size: number; tone?: "deep" | "violet" | "pale" };
const orbs: Orb[] = [
  { id: "a", x: 32, y: 8, size: 22, tone: "deep" },
  { id: "b", x: 14, y: 30, size: 60, tone: "deep" },
  { id: "c", x: 56, y: 22, size: 16, tone: "violet" },
  { id: "d", x: 95, y: 7, size: 14, tone: "pale" },
  { id: "e", x: 82, y: 47, size: 68, tone: "deep" },
  { id: "f", x: 11, y: 60, size: 20, tone: "violet" },
  { id: "g", x: 27, y: 86, size: 36, tone: "deep" },
  { id: "h", x: 48, y: 72, size: 44, tone: "deep" },
  { id: "i", x: 92, y: 84, size: 28, tone: "pale" },
];

// Pill labels for the constellation — drawn from my actual toolkit.
const constellationPills = [
  { label: "MODEL ARCHITECTURES", x: 7, y: 22 },
  { label: "CLOUD DEPLOYMENT", x: 30, y: 13 },
  { label: "PERFORMANCE TUNING", x: 70, y: 16 },
  { label: "DATA PIPELINES", x: 22, y: 78 },
  { label: "API INTEGRATION", x: 44, y: 82 },
  { label: "CI/CD FOR ML", x: 65, y: 67 },
];

// Dashed connector paths in 0–100 viewBox space connecting the orbs.
const connectors = [
  "M 32 8 L 14 30 L 11 60 L 27 86",
  "M 14 30 L 56 22 L 82 47 L 92 84",
  "M 56 22 L 48 72 L 65 67 L 82 47",
  "M 27 86 L 48 72",
  "M 56 22 L 95 7",
  "M 11 60 L 48 72",
  "M 14 30 L 82 47",
];

function orbBackground(tone: Orb["tone"]) {
  switch (tone) {
    case "violet":
      return "radial-gradient(circle at 30% 25%, oklch(0.70 0.20 300), oklch(0.35 0.14 295) 55%, oklch(0.20 0.08 290))";
    case "pale":
      return "radial-gradient(circle at 30% 25%, oklch(0.92 0.05 300), oklch(0.78 0.08 295) 55%, oklch(0.55 0.10 290))";
    default:
      return "radial-gradient(circle at 30% 25%, oklch(0.55 0.16 295), oklch(0.26 0.10 290) 55%, oklch(0.14 0.05 285))";
  }
}

function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? projects[openIdx] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-1.5 sm:py-2 rounded-full bg-surface-lowest/80 backdrop-blur border border-border soft-shadow max-w-[95vw]"
      >
        <span className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap">Sanjay PC</span>
        <a href="#work" className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full hover:bg-surface-high transition">Work</a>
        <a href="#about" className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full hover:bg-surface-high transition">About</a>
        <a href="#contact" className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">Contact</a>
      </motion.nav>


      <main className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-8 pt-20 sm:pt-24">
        {/* HERO */}
        <motion.section
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="bg-surface-lowest pill-section pt-16 sm:pt-24 pb-20 sm:pb-32 soft-shadow mb-6 sm:mb-8 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-32 -right-10 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6 relative">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="relative mb-8 group"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border p-1 bg-surface-lowest">
                <img className="w-full h-full object-cover rounded-full" src={SANJAY} alt="Sanjay PC" />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -right-20 top-4 bg-surface-lowest px-3 py-1 rounded-full border border-border shadow-sm items-center gap-1 whitespace-nowrap"
              >
                <span className="text-xs font-medium">Sanjay PC</span>
                <span>👋</span>
              </motion.div>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] mb-6 sm:mb-8">
              {"Building products,".split(" ").map((w, i) => (
                <motion.span key={i} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }} className="inline-block mr-2 sm:mr-3">
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }} className="inline-block italic">agents</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="inline-block mx-2 sm:mx-3">&</motion.span>
              <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} className="inline-block">experiences.</motion.span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="text-sm sm:text-base text-muted-foreground max-w-xl mb-8 sm:mb-10">
              Full-Stack Developer crafting MERN applications and autonomous AI agents.
              I ship to real users and grow through direct feedback.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: 0.6 }} className="flex flex-wrap gap-3 justify-center">
              <a href="#work" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                See my work →
              </a>
              <a href="mailto:pcsanjay2006@gmail.com" className="inline-flex items-center gap-2 bg-surface-lowest border border-border px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-medium hover:bg-surface-high transition">
                Get in touch
              </a>
            </motion.div>
          </div>
        </motion.section>


        {/* MARQUEE STACK */}
        <section className="bg-surface-low pill-section py-6 sm:py-10 mb-6 sm:mb-8 overflow-hidden">
          <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="font-display text-xl sm:text-3xl text-foreground/70 italic">
                {s} <span className="text-accent not-italic mx-1 sm:mx-2">✦</span>
              </span>
            ))}
          </div>
        </section>


        {/* ABOUT — top headline */}
        <section id="about" className="mb-6 sm:mb-8 bg-surface-lowest pill-section soft-shadow relative overflow-hidden px-5 sm:px-8 md:px-14 pt-12 sm:pt-16 pb-10">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase mb-4 sm:mb-6 inline-block" style={{ color: "oklch(0.45 0.2 290)" }}>
              What I bring to the table
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05]"
            >
              Turning complexity
              <br />
              into <span className="italic">action</span>
            </motion.h2>
          </div>

          {/* Orbital constellation field — desktop */}
          <div className="hidden md:block relative w-full h-[460px] md:h-[520px]">
            {/* Dashed connectors */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <g
                strokeDasharray="0.5 0.8"
                strokeWidth="0.18"
                fill="none"
                vectorEffect="non-scaling-stroke"
                className="stroke-foreground/25"
              >
                {connectors.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </g>
            </svg>

            {/* Orbs */}
            {orbs.map((o, i) => (
              <motion.div
                key={o.id}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.6, type: "spring", stiffness: 140 }}
                className="absolute rounded-full animate-blob"
                style={{
                  left: `${o.x}%`,
                  top: `${o.y}%`,
                  width: `${o.size}px`,
                  height: `${o.size}px`,
                  marginLeft: `-${o.size / 2}px`,
                  marginTop: `-${o.size / 2}px`,
                  background: orbBackground(o.tone),
                  boxShadow: "0 10px 30px -8px oklch(0.25 0.12 285 / 0.45)",
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}

            {/* Pill labels */}
            {constellationPills.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                className="absolute bg-surface-lowest border border-border rounded-md px-3 py-1.5 text-[10px] font-mono tracking-widest shadow-sm whitespace-nowrap"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {p.label}
              </motion.div>
            ))}

            {/* Decorative sparkle */}
            <Sparkles className="absolute right-2 bottom-4 size-5 text-foreground/30" />
          </div>

          {/* Mobile alternative — pills + small orbs grid */}
          <div className="md:hidden relative">
            <div className="relative h-40 mb-6">
              {orbs.slice(0, 6).map((o, i) => (
                <motion.div
                  key={o.id}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 140 }}
                  className="absolute rounded-full animate-blob"
                  style={{
                    left: `${o.x}%`,
                    top: `${o.y}%`,
                    width: `${Math.max(14, o.size * 0.55)}px`,
                    height: `${Math.max(14, o.size * 0.55)}px`,
                    background: orbBackground(o.tone),
                    boxShadow: "0 6px 18px -6px oklch(0.25 0.12 285 / 0.45)",
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {constellationPills.map((p) => (
                <span key={p.label} className="bg-surface-lowest border border-border rounded-md px-2.5 py-1 text-[9px] font-mono tracking-widest shadow-sm">
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </section>


        {/* PROFESSIONAL SUMMARY — scroll reveal magic text */}
        <section className="mb-6 sm:mb-8 bg-surface-low pill-section px-5 sm:px-8 md:px-14 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-surface-lowest rounded-full text-xs font-medium mb-6 sm:mb-8">
              The story
            </span>
            <MagicText
              text="I started as a curious tinkerer who couldn't stop opening dev tools. That curiosity grew into shipping MERN apps, then into training models, then into building autonomous agents that reason, plan, and execute. Today I sit at the seam between products, data, and AI — turning raw ideas into things real people use. Every project I take on is a chance to learn something I didn't know yesterday and ship something better than what existed before."
              className="font-display text-xl sm:text-2xl md:text-4xl leading-snug flex flex-wrap text-foreground"
            />
          </div>
        </section>

        {/* PROJECTS — stacked display cards */}
        <section id="work" className="mb-6 sm:mb-8 bg-surface-low pill-section py-14 sm:py-20 px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-surface-lowest rounded-full text-xs font-medium mb-4 sm:mb-6">Selected Work</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
              Things I&apos;ve <span className="italic">built</span> recently.
            </h2>
            <p className="text-sm text-muted-foreground mt-4">Tap a card to see the full story.</p>
          </div>

          {/* Desktop: stacked cards */}
          <div className="hidden md:flex justify-center items-center min-h-[420px]">
            <DisplayCards
              cards={projects.map((p, i) => ({
                icon: p.icon,
                title: p.title,
                description: p.blurb,
                date: p.year,
                onClick: () => setOpenIdx(i),
              }))}
            />
          </div>

          {/* Mobile: vertical card list */}
          <div className="md:hidden grid gap-4">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setOpenIdx(i)}
                className="text-left bg-surface-lowest border border-border rounded-2xl p-5 active:scale-[0.98] transition hover:border-accent/40"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center size-7 rounded-full bg-surface-high text-accent">{p.icon}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{p.year}</span>
                </div>
                <div className="font-display text-xl text-accent mb-1">{p.title}</div>
                <p className="text-sm text-foreground/80 leading-snug">{p.blurb}</p>
              </button>
            ))}
          </div>
        </section>


        {/* Project Dialog */}
        <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
          <DialogContent className="max-w-3xl w-[95vw] sm:w-full p-0 overflow-hidden bg-surface-lowest border-border">
            {active && (
              <div className="flex flex-col">
                <div className="relative h-44 sm:h-56 w-full overflow-hidden">
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-surface-lowest/20 to-transparent" />
                  <button
                    onClick={() => setOpenIdx(null)}
                    className="absolute top-3 right-3 size-9 rounded-full bg-surface-lowest/90 border border-border flex items-center justify-center hover:bg-surface-high transition"
                    aria-label="Close"
                  >
                    <X className="size-4" />
                  </button>
                  <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                    <span className="text-xs font-mono text-muted-foreground">{active.year}</span>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mt-1">{active.title}</h3>
                  </div>
                </div>

                <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 max-h-[55vh] overflow-y-auto">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                      <Sparkles className="size-3" /> Problem
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/85">{active.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-2">
                      <Sparkles className="size-3" /> Solution
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/85">{active.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-accent mb-3">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {active.stack.map((s) => (
                        <span key={s} className="text-xs px-3 py-1.5 bg-surface-high rounded-full border border-border">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* SKILLS GRID */}
        <section className="mb-6 sm:mb-8 bg-surface-low pill-section p-6 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="inline-block px-4 py-1.5 bg-surface-lowest rounded-full text-xs font-medium mb-4 sm:mb-6">Toolkit</span>
            <h2 className="font-display text-3xl sm:text-4xl">What I work with daily.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { t: "Languages", v: "JS, Python, C++, SQL" },
              { t: "Frontend", v: "React, Streamlit" },
              { t: "Backend", v: "Node, Express, FastAPI" },
              { t: "Data", v: "MongoDB, MySQL" },
              { t: "AI / LLM", v: "Gemini, LangChain, LangGraph" },
              { t: "ML", v: "TensorFlow, scikit-learn" },
              { t: "DevOps", v: "Docker, Vercel, GitHub" },
              { t: "Core CS", v: "DSA · OOP · REST · RDBMS" },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-surface-lowest p-4 sm:p-6 rounded-2xl"
              >
                <div className="text-[10px] sm:text-xs text-accent font-medium uppercase tracking-wider mb-2">{c.t}</div>
                <div className="text-xs sm:text-sm">{c.v}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS — fan carousel */}
        <section className="mb-6 sm:mb-8 bg-surface-lowest pill-section soft-shadow px-4 sm:px-8 md:px-14 py-14 sm:py-20 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="inline-block px-4 py-1.5 bg-surface-high rounded-full text-xs font-medium mb-4 sm:mb-6">Certifications</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">
              Always <span className="italic">leveling up</span>.
            </h2>
            <p className="text-sm text-muted-foreground mt-4">Credentials that shaped the stack.</p>
          </div>

          <SocialCards cards={certifications.map((c) => ({ node: <CertCard data={c} /> }))} />
        </section>

        {/* RECOGNITION + STATS */}
        <section className="mb-6 sm:mb-8 bg-surface-lowest pill-section p-6 sm:p-12 soft-shadow">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 sm:gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-surface-high rounded-full text-xs font-medium mb-4 sm:mb-6">Recognition</span>
              <h2 className="font-display text-3xl sm:text-4xl mb-8 sm:mb-10">Papers, patents & milestones.</h2>
              <div className="divide-y divide-border">
                {[
                  { y: "2025", t: "Paper Published", d: "Autocorrect Algorithm for Real-time text correction in Multilingual keyboard Systems" },
                  { y: "2025", t: "Patent Published", d: "Mayon — The Smart Crop Rotator & Market Profit Optimizer" },
                  { y: "—", t: "LeetCode", d: "200+ problems solved" },
                  { y: "—", t: "SkillRack", d: "100+ problems solved" },
                  { y: "2025", t: "MERN Internship", d: "GSOFT Tech Solutions — agile, code reviews, production REST APIs" },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="grid grid-cols-[44px_1fr] sm:grid-cols-[60px_180px_1fr] gap-x-3 sm:gap-4 gap-y-1 py-4 sm:py-5 items-baseline hover:bg-surface-low transition rounded-xl px-2 sm:px-3 -mx-2 sm:-mx-3"
                  >
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-mono">{row.y}</span>
                    <span className="font-medium text-sm sm:text-base">{row.t}</span>
                    <span className="col-span-2 sm:col-span-1 text-xs sm:text-sm text-muted-foreground">{row.d}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-surface-low rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24">
              <div className="text-xs font-mono uppercase tracking-widest text-accent mb-4 sm:mb-6">By the numbers</div>
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {achievements.map((a) => (
                  <motion.div
                    key={a.v}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface-lowest border border-border rounded-2xl p-4 sm:p-5"
                  >
                    <div className="font-display text-2xl sm:text-3xl md:text-4xl text-accent leading-none">{a.k}</div>
                    <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-2 uppercase tracking-wider">{a.v}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-surface-lowest pill-section py-20 sm:py-32 soft-shadow mb-10 sm:mb-12 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
          </div>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-surface-high rounded-full flex items-center justify-center mb-6 sm:mb-8"
            >
              <Sparkles className="size-6 sm:size-7" />
            </motion.div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl mb-4">
              Tell me about your <span className="italic text-accent">next project</span>.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10">
              Currently open to internships, freelance projects, and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a href="mailto:pcsanjay2006@gmail.com" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition break-all">
                pcsanjay2006@gmail.com
              </a>
              <a href="tel:+919500322339" className="inline-flex items-center justify-center gap-2 bg-surface-lowest border border-border px-6 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-medium hover:bg-surface-high transition">
                +91 95003 22339
              </a>
            </div>
          </div>
        </section>



        {/* FOOTER */}
        <div className="mb-8">
          <Footer
            brandName="Sanjay PC"
            brandDescription="Full-Stack Developer & AI Engineer building MERN products and autonomous agents that ship to real users."
            socialLinks={[
              { icon: <Github className="size-5" />, href: "https://github.com", label: "GitHub" },
              { icon: <Linkedin className="size-5" />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Code2 className="size-5" />, href: "https://leetcode.com", label: "LeetCode" },
              { icon: <Mail className="size-5" />, href: "mailto:pcsanjay2006@gmail.com", label: "Email" },
            ]}
            navLinks={[
              { label: "Work", href: "#work" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ]}
            creatorName="Sanjay PC"
            creatorUrl="mailto:pcsanjay2006@gmail.com"
            brandIcon={<Sparkles className="size-5" />}
          />
        </div>
      </main>
    </div>
  );
}
