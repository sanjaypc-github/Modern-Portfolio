import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import sanjayAsset from "@/assets/sanjay.jpeg.asset.json";

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

const projects = [
  {
    year: "2025",
    title: "Autonomous Data Analysis Agent",
    blurb: "Production-ready agent that converts natural-language questions into executable pandas code inside an AST-validated sandbox.",
    stack: ["FastAPI", "Gemini", "Docker", "Streamlit"],
    icon: "smart_toy",
  },
  {
    year: "2026",
    title: "Plug-and-Play AI Customer Agent",
    blurb: "Serverless chatbot any business can launch by editing one knowledge file. No DB, no infra — Apps Script as the backend.",
    stack: ["Node.js", "Express", "Apps Script", "Vanilla JS"],
    icon: "support_agent",
  },
  {
    year: "2025",
    title: "Website Traffic Analyzer",
    blurb: "Real-time MERN analytics dashboard — unique visitors, session tracking, bounce-rate, and interactive historical charts.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    icon: "monitoring",
  },
  {
    year: "2026",
    title: "Student Attention Analyzer",
    blurb: "Webcam-based focus monitor scoring Focused vs Distracted via facial landmarks with a lightweight fallback pipeline.",
    stack: ["Python", "OpenCV", "TensorFlow"],
    icon: "visibility",
  },
];

const achievements = [
  { k: "200+", v: "LeetCode solved" },
  { k: "160+", v: "DSA problems" },
  { k: "1", v: "Paper published" },
  { k: "1", v: "Patent published" },
];

function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
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
          {/* Floating blobs */}
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
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
                  className="inline-block mr-3"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="inline-block italic"
              >
                agents
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="inline-block mx-3"
              >
                &
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="inline-block"
              >
                experiences.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-muted-foreground max-w-xl mb-10"
            >
              Full-Stack Developer crafting MERN applications and autonomous AI agents.
              I ship to real users and grow through direct feedback.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <a href="#work" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                See my work
                <span className="material-symbols-outlined text-[20px]">north_east</span>
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

        {/* ABOUT / STATS */}
        <section id="about" className="mb-8 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-surface-lowest pill-section p-12 soft-shadow"
          >
            <span className="inline-block px-4 py-1.5 bg-surface-high rounded-full text-xs font-medium mb-6">About</span>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A Full-Stack Developer with a soft spot for{" "}
              <span className="italic text-accent">autonomous agents</span> and products that actually ship.
            </h2>
            <p className="mt-8 text-muted-foreground max-w-2xl leading-relaxed">
              Currently studying at Sri Eshwar College of Engineering (CGPA 7.935), interning across MERN
              stacks, and obsessed with the loop of: build → ship → feedback → refine. I care about clean
              REST APIs, secure sandboxes for AI code-execution, and interfaces that disappear.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {achievements.map((a) => (
              <div key={a.v} className="bg-surface-lowest pill-section p-6 soft-shadow flex flex-col justify-center">
                <div className="font-display text-4xl text-accent">{a.k}</div>
                <div className="text-xs text-muted-foreground mt-2">{a.v}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="mb-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-surface-high rounded-full text-xs font-medium mb-6">Selected Work</span>
            <h2 className="font-display text-4xl md:text-5xl">
              Things I&apos;ve <span className="italic">built</span> recently.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-surface-lowest pill-section p-8 soft-shadow flex flex-col cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-surface-high rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent">{p.icon}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{p.year}</span>
                </div>
                <h3 className="font-display text-2xl mb-3 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 bg-surface-high rounded-full">{s}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

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
              <span className="material-symbols-outlined text-[32px]">handshake</span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              Tell me about your <span className="italic text-accent">next project</span>.
            </h2>
            <p className="text-muted-foreground mb-10">
              Currently open to internships, freelance projects, and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:pcsanjay2006@gmail.com" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-medium hover:scale-105 transition">
                <span className="material-symbols-outlined text-[20px]">mail</span>
                pcsanjay2006@gmail.com
              </a>
              <a href="tel:+919500322339" className="inline-flex items-center justify-center gap-2 bg-surface-lowest border border-border px-10 py-4 rounded-full text-sm font-medium hover:bg-surface-high transition">
                <span className="material-symbols-outlined text-[20px]">call</span>
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
