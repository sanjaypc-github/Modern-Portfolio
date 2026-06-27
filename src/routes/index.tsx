import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Bot, Headset, LineChart, Eye, X, Sparkles } from "lucide-react";
import sanjayAsset from "@/assets/sanjay.jpeg.asset.json";
import DisplayCards from "@/components/ui/display-cards";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

const aboutTags = [
  { label: "REACT", style: "top-[8%] left-[12%]" },
  { label: "FASTAPI", style: "top-[2%] left-[42%]" },
  { label: "MONGODB", style: "top-[18%] right-[10%]" },
  { label: "GEMINI", style: "top-[45%] left-[4%]" },
  { label: "DOCKER", style: "bottom-[18%] left-[22%]" },
  { label: "LANGCHAIN", style: "bottom-[8%] right-[18%]" },
  { label: "TENSORFLOW", style: "top-[55%] right-[6%]" },
];

const aboutOrbs = [
  { style: "top-[12%] left-[40%] w-5 h-5", delay: "0s" },
  { style: "top-[24%] left-[18%] w-12 h-12", delay: "1s" },
  { style: "top-[55%] left-[8%] w-4 h-4", delay: "2s" },
  { style: "top-[40%] right-[18%] w-16 h-16", delay: "0.5s" },
  { style: "bottom-[10%] right-[8%] w-6 h-6", delay: "2.5s" },
  { style: "bottom-[8%] left-[34%] w-9 h-9", delay: "1.5s" },
  { style: "top-[68%] left-[48%] w-14 h-14", delay: "3s" },
];

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
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-full bg-surface-lowest/80 backdrop-blur border border-border soft-shadow"
      >
        <span className="px-4 py-1.5 text-sm font-medium">Sanjay PC</span>
        <a href="#work" className="px-4 py-1.5 text-sm rounded-full hover:bg-surface-high transition">Work</a>
        <a href="#about" className="px-4 py-1.5 text-sm rounded-full hover:bg-surface-high transition">About</a>
        <a href="#contact" className="px-4 py-1.5 text-sm rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">Contact</a>
      </motion.nav>

      <main className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-24">
        {/* HERO */}
        <motion.section
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="bg-surface-lowest pill-section pt-24 pb-32 soft-shadow mb-8 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-32 -right-10 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-6 relative">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="relative mb-8 group"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-border p-1 bg-surface-lowest">
                <img className="w-full h-full object-cover rounded-full" src={SANJAY} alt="Sanjay PC" />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 top-4 bg-surface-lowest px-3 py-1 rounded-full border border-border shadow-sm flex items-center gap-1 whitespace-nowrap"
              >
                <span className="text-xs font-medium">Sanjay PC</span>
                <span>👋</span>
              </motion.div>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8">
              {"Building products,".split(" ").map((w, i) => (
                <motion.span key={i} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }} className="inline-block mr-3">
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }} className="inline-block italic">agents</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="inline-block mx-3">&</motion.span>
              <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} className="inline-block">experiences.</motion.span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="text-muted-foreground max-w-xl mb-10">
              Full-Stack Developer crafting MERN applications and autonomous AI agents.
              I ship to real users and grow through direct feedback.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: 0.6 }} className="flex flex-wrap gap-3 justify-center">
              <a href="#work" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                See my work →
              </a>
              <a href="mailto:pcsanjay2006@gmail.com" className="inline-flex items-center gap-2 bg-surface-lowest border border-border px-7 py-3.5 rounded-full text-sm font-medium hover:bg-surface-high transition">
                Get in touch
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* MARQUEE STACK */}
        <section className="bg-surface-low pill-section py-10 mb-8 overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="font-display text-3xl text-foreground/70 italic">
                {s} <span className="text-accent not-italic mx-2">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT — orbital constellation */}
        <section id="about" className="mb-8 bg-surface-lowest pill-section soft-shadow relative overflow-hidden">
          <div className="relative h-[640px] md:h-[680px]">
            {/* dashed connectors */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <defs>
                <pattern id="d" patternUnits="userSpaceOnUse" width="6" height="1">
                  <line x1="0" y1="0" x2="3" y2="0" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
                </pattern>
              </defs>
              <g strokeDasharray="4 6" strokeWidth="1" fill="none" className="stroke-accent/30">
                <path d="M 18% 12% L 50% 50% L 90% 22%" />
                <path d="M 10% 50% L 50% 50% L 88% 60%" />
                <path d="M 28% 90% L 50% 50% L 78% 88%" />
                <path d="M 42% 6% L 50% 50%" />
              </g>
            </svg>

            {/* gradient orbs */}
            {aboutOrbs.map((o, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full animate-blob ${o.style}`}
                style={{
                  animationDelay: o.delay,
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.55 0.18 290), oklch(0.25 0.08 280) 60%, oklch(0.15 0.05 280))",
                  boxShadow: "0 8px 30px -8px oklch(0.3 0.15 285 / 0.5)",
                }}
              />
            ))}

            {/* floating pill labels */}
            {aboutTags.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className={`absolute ${t.style} bg-surface-lowest border border-border rounded-md px-3 py-1.5 text-[10px] font-mono tracking-widest shadow-sm`}
              >
                {t.label}
              </motion.div>
            ))}

            {/* center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-mono tracking-[0.25em] uppercase mb-6"
                style={{ color: "oklch(0.45 0.2 290)" }}
              >
                What I bring to the table
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-display text-4xl md:text-6xl leading-[1.05]"
              >
                Turning complexity
                <br />
                into <span className="italic">action</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-6 text-muted-foreground max-w-lg leading-relaxed"
              >
                Today's teams need someone who can wire APIs, train models, and ship a UI in the same week.
                I bring every layer of the stack together — translating raw data, LLM pipelines,
                and product intuition into experiences that actually work in production.
              </motion.p>

              {/* stats row */}
              <div className="mt-10 grid grid-cols-4 gap-6">
                {achievements.map((a) => (
                  <div key={a.v} className="text-center">
                    <div className="font-display text-2xl md:text-3xl text-accent">{a.k}</div>
                    <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{a.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS — stacked display cards */}
        <section id="work" className="mb-8 bg-surface-low pill-section py-20 px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-surface-lowest rounded-full text-xs font-medium mb-6">Selected Work</span>
            <h2 className="font-display text-4xl md:text-5xl">
              Things I&apos;ve <span className="italic">built</span> recently.
            </h2>
            <p className="text-sm text-muted-foreground mt-4">Click a card to see the full story.</p>
          </div>

          <div className="flex justify-center items-center min-h-[420px]">
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
        </section>

        {/* Project Dialog */}
        <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-surface-lowest border-border">
            {active && (
              <div className="flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-surface-lowest/20 to-transparent" />
                  <button
                    onClick={() => setOpenIdx(null)}
                    className="absolute top-4 right-4 size-9 rounded-full bg-surface-lowest/90 border border-border flex items-center justify-center hover:bg-surface-high transition"
                    aria-label="Close"
                  >
                    <X className="size-4" />
                  </button>
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs font-mono text-muted-foreground">{active.year}</span>
                    <h3 className="font-display text-3xl md:text-4xl mt-1">{active.title}</h3>
                  </div>
                </div>

                <div className="p-8 space-y-6 max-h-[55vh] overflow-y-auto">
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
        <section className="mb-8 bg-surface-low pill-section p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-surface-lowest rounded-full text-xs font-medium mb-6">Toolkit</span>
            <h2 className="font-display text-4xl">What I work with daily.</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                className="bg-surface-lowest p-6 rounded-2xl"
              >
                <div className="text-xs text-accent font-medium uppercase tracking-wider mb-2">{c.t}</div>
                <div className="text-sm">{c.v}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS LIST */}
        <section className="mb-8 bg-surface-lowest pill-section p-12 soft-shadow">
          <span className="inline-block px-4 py-1.5 bg-surface-high rounded-full text-xs font-medium mb-6">Recognition</span>
          <h2 className="font-display text-4xl mb-10">Papers, patents & milestones.</h2>
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
                className="grid grid-cols-[60px_180px_1fr] gap-4 py-5 items-baseline hover:bg-surface-low transition rounded-xl px-3 -mx-3"
              >
                <span className="text-xs text-muted-foreground font-mono">{row.y}</span>
                <span className="font-medium">{row.t}</span>
                <span className="text-sm text-muted-foreground">{row.d}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-surface-lowest pill-section py-32 soft-shadow mb-12 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
          </div>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-6 relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 bg-surface-high rounded-full flex items-center justify-center mb-8"
            >
              <Sparkles className="size-7" />
            </motion.div>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              Tell me about your <span className="italic text-accent">next project</span>.
            </h2>
            <p className="text-muted-foreground mb-10">
              Currently open to internships, freelance projects, and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:pcsanjay2006@gmail.com" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-medium hover:scale-105 transition">
                pcsanjay2006@gmail.com
              </a>
              <a href="tel:+919500322339" className="inline-flex items-center justify-center gap-2 bg-surface-lowest border border-border px-10 py-4 rounded-full text-sm font-medium hover:bg-surface-high transition">
                +91 95003 22339
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 Sanjay PC. Crafted with care.</span>
          <div className="flex gap-6">
            <a href="https://github.com" className="hover:text-foreground transition">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-foreground transition">LinkedIn</a>
            <a href="https://leetcode.com" className="hover:text-foreground transition">LeetCode</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
