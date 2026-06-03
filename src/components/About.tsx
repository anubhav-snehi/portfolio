"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";
import {
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineCloud,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10M+", label: "Records/Day Processed" },
  { value: "65-80%", label: "Throughput Improvement" },
  { value: "90%", label: "Admin Tasks Automated" },
];

const highlights = [
  {
    icon: <HiOutlineDatabase size={24} />,
    title: "Data Platforms",
    desc: "Snowflake, Kafka, Databricks pipelines processing millions of records daily",
  },
  {
    icon: <HiOutlineCode size={24} />,
    title: "Full Stack",
    desc: "Java, Python, Go, React — microservices to frontends, end to end",
  },
  {
    icon: <HiOutlineCloud size={24} />,
    title: "Cloud-Native",
    desc: "Azure, Docker, Kubernetes with Datadog observability at scale",
  },
  {
    icon: <HiOutlineLightningBolt size={24} />,
    title: "GenAI & Automation",
    desc: "Built AI agents that eliminated 90% repetitive work, saving 20+ hrs/week",
  },
];

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const numericPart = target.replace(/[^0-9.]/g, "");
  const nonNumericSuffix = target.replace(/[0-9.]/g, "");

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {numericPart}
          {nonNumericSuffix}
          {suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">{target}{suffix}</span>
      )}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <AnimatedSection>
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
          <div className="glass-card p-6 md:p-8 mb-12">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Senior Software Engineer with <strong className="text-white">4+ years</strong> of
              experience building and owning large-scale distributed data and backend platforms.
              Delivered{" "}
              <strong className="text-accent">10M+ records/day</strong> pipelines
              and event-driven systems across{" "}
              <strong className="text-white">
                Snowflake, Kafka, and Databricks
              </strong>
              , improving throughput by{" "}
              <strong className="text-accent">65–80%</strong>, lowering compute
              costs by <strong className="text-accent">20–30%</strong>, and
              reducing end-to-end processing from{" "}
              <strong className="text-white">3–5 hours to under 1 hour</strong>.
              Strong in system design, reliability/observability (Datadog), data
              governance/security (Unity Catalog, RBAC), and cloud-native
              microservices on Azure. Shipped{" "}
              <strong className="text-accent">
                GenAI automation
              </strong>{" "}
              that removed 90% repetitive admin work and saved 20+ hours/week.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.1 + i * 0.1}>
              <div className="glass-card-hover p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  <CountUp target={stat.value} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.1 + i * 0.1}>
              <div className="glass-card-hover p-6 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
