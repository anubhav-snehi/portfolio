"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { HiOutlineDownload, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import {
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaMicrosoft, FaSnowflake } from "react-icons/fa";

const roles = [
  "Lead Engineer",
  "Data Platform Architect",
  "Cloud-Native Builder",
  "GenAI Innovator",
];

const pipelineNodes = [
  {
    id: "ingest",
    label: "INGEST",
    detail: "CDC ingestion and validation for high-volume member data.",
    metric: "10M+ events/day",
    className: "left-[7%] top-[16%] text-cyan border-cyan/40",
  },
  {
    id: "stream",
    label: "STREAM",
    detail: "Replayable Kafka flows keep downstream systems in sync.",
    metric: "10+ consumers",
    className: "left-[7%] bottom-[15%] text-indigo-300 border-indigo-400/40",
  },
  {
    id: "compute",
    label: "COMPUTE",
    detail: "Databricks and Delta pipelines turn raw events into governed data.",
    metric: "65-80% faster",
    className: "left-[49%] top-[40%] text-indigo-200 border-indigo-300/40",
  },
  {
    id: "serve",
    label: "SERVE",
    detail: "Reliable APIs, audit trails, and production observability at the edge.",
    metric: "99.99% available",
    className: "right-[7%] top-[40%] text-emerald-300 border-emerald-400/40",
  },
];

const stackSignals = [
  { name: "Snowflake", icon: <FaSnowflake />, color: "#29b5e8" },
  { name: "Kafka", icon: <SiApachekafka />, color: "#e9e9e9" },
  { name: "Databricks", icon: <span className="font-mono text-xs font-bold">DBX</span>, color: "#ff3621" },
  { name: "Spring", icon: <SiSpringboot />, color: "#6db33f" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326ce5" },
  { name: "React", icon: <SiReact />, color: "#61dafb" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Python", icon: <SiPython />, color: "#ffd343" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "Azure", icon: <FaMicrosoft />, color: "#0078d4" },
];

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 11) % 100}%`,
        duration: `${8 + ((i * 7) % 12)}s`,
        delay: `${(i * 11) % 12}s`,
        size: `${2 + ((i * 5) % 4)}px`,
        color: ["#22d3ee", "#60a5fa", "#818cf8", "#34d399"][i % 4],
        signal: i % 9 === 0,
      })),
    []
  );

  return (
    <div className="particle-layer absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.signal ? "particle-signal" : ""}`}
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
            boxShadow: `0 0 ${p.signal ? "14px" : "8px"} ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

function ArchitecturePanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNode = pipelineNodes[activeIndex];

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % pipelineNodes.length);
    }, 3400);
    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-xl"
      style={{ perspective: "1200px" }}
    >
      <div className="corner-frame relative border border-cyan/30 bg-[#070b17]/90 p-5 shadow-2xl shadow-cyan/10">
        <div className="mb-6 flex items-center justify-between border-b border-cyan/15 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
          <span>Distributed System / Live</span>
          <span className="flex items-center gap-2 text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> operational</span>
        </div>
        <div className="relative h-72 overflow-hidden border border-slate-800 bg-[#040711]">
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-cyan/20" />
          <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-indigo-400/20" />
          <div className="telemetry-scan absolute inset-x-0 top-[23%] h-px" />
          <svg viewBox="0 0 420 270" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path d="M83 66 V200 H178 V135 H248 H365" fill="none" stroke="#22d3ee" strokeOpacity=".42" strokeWidth="1.5" />
            <path d="M83 200 H178 V135 H248" fill="none" stroke="#818cf8" strokeOpacity=".32" strokeWidth="1.5" />
            <path d="M248 135 H365" fill="none" stroke="#34d399" strokeOpacity=".5" strokeWidth="1.5" />
            <circle cx="178" cy="135" r="4" fill="#67e8f9" />
            <circle cx="248" cy="135" r="4" fill="#a5b4fc" />
          </svg>
          <motion.span animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }} style={{ offsetPath: "path('M83 66 V200 H178 V135 H248 H365')" }} className="absolute left-0 top-0 h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px_#22d3ee]" />
          {pipelineNodes.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveIndex(pipelineNodes.findIndex((item) => item.id === node.id))}
              className={`absolute border bg-[#0b1020] px-2 py-1 font-mono text-[10px] tracking-[0.14em] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-cyan ${node.className} ${activeNode.id === node.id ? "bg-cyan/15 shadow-[0_0_18px_rgba(34,211,238,0.3)]" : "opacity-70 hover:opacity-100"}`}
              aria-pressed={activeNode.id === node.id}
            >
              {node.label}
            </button>
          ))}
        </div>
        <div className="mt-3 flex min-h-[58px] items-center gap-3 border border-cyan/15 bg-cyan/[0.03] px-3 font-mono">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_10px_#22d3ee]" />
          <p className="text-[10px] leading-relaxed text-slate-400"><span className="text-cyan">{activeNode.label}</span> / {activeNode.detail}</p>
          <span className="ml-auto shrink-0 border-l border-cyan/20 pl-3 text-[10px] text-emerald-300">{activeNode.metric}</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 font-mono">
          {[['10M+', 'events/day'], ['99.99%', 'availability'], ['< 1h', 'processing']].map(([value, label]) => <div key={label} className="border-l border-cyan/25 pl-3"><p className="text-sm font-semibold text-slate-100">{value}</p><p className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">{label}</p></div>)}
        </div>
      </div>
    </motion.div>
  );
}

function MobileTelemetry() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNode = pipelineNodes[activeIndex];

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % pipelineNodes.length);
    }, 3400);
    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 border border-cyan/20 bg-[#070b17]/85 p-4 font-mono lg:hidden"
    >
      <div className="mb-4 flex items-center justify-between border-b border-cyan/15 pb-3 text-[9px] uppercase tracking-[0.18em] text-cyan">
        <span>Pipeline / Mobile</span>
        <span className="flex items-center gap-1.5 text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> live</span>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 -translate-y-1/2">
          <motion.span
            animate={{ left: ["10%", "90%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_#22d3ee]"
          />
        </div>
        <div className="grid grid-cols-4 gap-1">
        {pipelineNodes.map((node, index) => (
          <button
            key={node.id}
            type="button"
            onClick={() => setActiveIndex(pipelineNodes.findIndex((item) => item.id === node.id))}
            className={`relative min-w-0 border px-1.5 py-2 font-mono text-[9px] tracking-[0.08em] transition-all focus:outline-none focus:ring-1 focus:ring-cyan ${activeNode.id === node.id ? "border-cyan/70 bg-cyan/15 text-cyan" : "border-slate-800 bg-[#090d19] text-slate-500"}`}
            aria-pressed={activeNode.id === node.id}
          >
            {node.label}
            {index < pipelineNodes.length - 1 && (
              <span className="absolute -right-1 top-1/2 z-10 h-px w-2 bg-cyan/35" />
            )}
          </button>
        ))}
        </div>
      </div>
      <div className="mt-4 border-l-2 border-cyan bg-cyan/[0.04] px-3 py-2.5">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[10px] font-semibold text-cyan">{activeNode.label}</span>
          <span className="text-[10px] text-emerald-300">{activeNode.metric}</span>
        </div>
        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">{activeNode.detail}</p>
      </div>
    </motion.div>
  );
}

function StackRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStack = stackSignals[activeIndex];

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % stackSignals.length);
    }, 1000);
    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  const selectStack = (name: string) => {
    setActiveIndex(stackSignals.findIndex((item) => item.name === name));
  };

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      className="mt-9 max-w-xl border-y border-cyan/15 py-3 font-mono"
    >
      <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.18em] text-slate-500">
        <span>Stack / deployed</span>
        <span className="text-cyan">{activeStack.name}</span>
      </div>
      <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-11">
        {stackSignals.map((item) => (
          <motion.button
            key={item.name}
            type="button"
            onMouseEnter={() => selectStack(item.name)}
            onFocus={() => selectStack(item.name)}
            onClick={() => selectStack(item.name)}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex h-9 w-full items-center justify-center border text-base transition-colors focus:outline-none focus:ring-1 focus:ring-cyan sm:h-10 ${activeStack.name === item.name ? "bg-slate-950" : "border-transparent text-slate-600 hover:border-cyan/25"}`}
            style={{
              color: item.color,
              borderColor: activeStack.name === item.name ? `${item.color}80` : undefined,
              boxShadow: activeStack.name === item.name ? `0 0 16px ${item.color}35` : undefined,
            }}
            aria-label={`Select ${item.name} technology`}
          >
            {item.icon}
          </motion.button>
        ))}
      </div>
      <div className="relative mt-3 h-px overflow-hidden bg-cyan/15">
        <motion.span
          animate={{ left: ["-10%", "100%"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 h-px w-16 bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_10px_#22d3ee]"
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 35 : 75
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="hero-console-bg absolute inset-0" />
      <div className="circuit-grid absolute inset-0" />
      <Particles />

      <div className="section-container relative z-10 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── Left column ── */}
          <div className="text-left">
            {/* Status badge */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 border border-emerald-400/25 bg-emerald-400/[0.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] mb-8"
              style={{
                background: "transparent",
                border: "none",
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="availability-status text-emerald-400 font-medium">
                Open to exciting opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-5"
            >
              <span className="text-white">Hi, I&apos;m </span>
              <br />
              <span className="gradient-text">Anubhav Snehi</span>
            </motion.h1>

            {/* Typed role */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-10 md:h-12 flex items-center mb-7"
            >
              <span
                className="role-signal text-lg md:text-xl font-semibold font-mono tracking-tight"
              >
                {displayText}
              </span>
              <span
                className="role-caret w-0.5 h-6 md:h-7 ml-1 animate-blink-caret"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-gray-400 text-base md:text-lg max-w-xl mb-5 leading-relaxed"
            >
              Building large-scale distributed data platforms &amp; event-driven
              systems. Turning complex problems into elegant, scalable solutions.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex items-center gap-2 text-gray-500 mb-10"
            >
              <HiOutlineLocationMarker className="text-accent" size={16} />
              <span className="text-sm">Gurugram, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <HiOutlineMail size={17} />
                Get in Touch
              </a>
              <a
                href="#projects"
                className="btn-outline flex items-center gap-2 text-sm"
              >
                View My Work
              </a>
              <a
                href="/resume/Anubhav_Resume.pdf"
                download="Anubhav_Snehi_Resume.pdf"
                className="btn-outline flex items-center gap-2 text-sm"
              >
                <HiOutlineDownload size={17} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              {[
                {
                  icon: <FaLinkedinIn size={17} />,
                  href: "https://linkedin.com/in/anubhav-snehi-47ba021b1",
                  label: "LinkedIn",
                  color: "#0ea5e9",
                },
                {
                  icon: <HiOutlineMail size={17} />,
                  href: "mailto:snehinishu@gmail.com",
                  label: "Email",
                  color: "#818cf8",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="hero-social-link flex items-center gap-3 rounded-lg border px-5 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:-translate-y-1 hover:text-white focus:outline-none focus:ring-1 focus:ring-cyan"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  aria-label={social.label}
                  title={social.label}
                >
                  <span style={{ color: social.color }}>{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </motion.div>

            <StackRail />

            <MobileTelemetry />
          </div>

          {/* ── Right column: architecture telemetry ── */}
          <div className="hero-telemetry justify-center items-center">
            <ArchitecturePanel />
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown className="text-gray-600" size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
