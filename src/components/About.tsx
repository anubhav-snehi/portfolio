"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience", color: "#1e90ff" },
  { value: 10, suffix: "M+", label: "Records / Day", color: "#818cf8" },
  { value: 80, suffix: "%", label: "Throughput Boost", color: "#a855f7" },
  { value: 90, suffix: "%", label: "Tasks Automated", color: "#22d3ee" },
];

const highlights = [
  {
    icon: <HiOutlineDatabase size={22} />,
    title: "Data Platforms",
    desc: "Snowflake, Kafka, Databricks pipelines processing millions of records daily.",
    color: "#1e90ff",
  },
  {
    icon: <HiOutlineCode size={22} />,
    title: "Full Stack",
    desc: "Java, Python, Go, React — microservices to frontends, end-to-end.",
    color: "#818cf8",
  },
  {
    icon: <HiOutlineCloud size={22} />,
    title: "Cloud-Native",
    desc: "Azure, Docker, Kubernetes with Datadog observability at scale.",
    color: "#a855f7",
  },
  {
    icon: <HiOutlineLightningBolt size={22} />,
    title: "GenAI & Automation",
    desc: "Built AI agents eliminating 90% repetitive work, saving 20+ hours/week.",
    color: "#22d3ee",
  },
];

function AnimatedCounter({
  value,
  suffix,
  color,
}: {
  value: number;
  suffix: string;
  color: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums font-black text-3xl md:text-4xl" style={{ color }}>
      {displayed}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-divider" />
      <div className="section-container">
        <AnimatedSection>
          <span className="system-label">01 / SYSTEM_PROFILE</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            Turning complex problems into scalable, reliable systems
          </p>
        </AnimatedSection>

        {/* Summary */}
        <AnimatedSection delay={0.1}>
          <div
            className="console-panel p-6 md:p-8 mb-14 overflow-hidden"
            style={{
              borderColor: "rgba(30,144,255,0.15)",
            }}
          >
            {/* Decorative corner gradient */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #818cf8, transparent)",
                transform: "translate(30%, -30%)",
              }}
            />
            <p className="text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
              Lead Engineer with{" "}
              <strong className="text-white">4+ years</strong> of experience
              building and owning large-scale distributed data and backend
              platforms. Delivered{" "}
              <strong className="gradient-text">10M+ records/day</strong>{" "}
              pipelines and event-driven systems across{" "}
              <strong className="text-white">Snowflake, Kafka, Databricks</strong>,
              improving throughput by{" "}
              <strong className="gradient-text">65–80%</strong>, lowering
              compute costs by <strong className="gradient-text">20–30%</strong>
              , and reducing processing from{" "}
              <strong className="text-white">3–5 hours to under 1 hour</strong>.
              Shipped{" "}
              <strong className="gradient-text">GenAI automation</strong> that
              removed 90% of repetitive admin work, saving 20+ hours/week.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.1 + i * 0.08}>
              <div
                className="console-panel text-center p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 group"
                style={{
                  borderColor: `${stat.color}18`,
                }}
              >
                <div className="mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    color={stat.color}
                  />
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
                <div
                  className="mt-3 h-0.5 rounded-full mx-auto w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="console-panel p-6 flex gap-4 group cursor-default"
                style={{ borderColor: `${item.color}18` }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
