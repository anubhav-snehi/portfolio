"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { HiOutlineCalendar, HiOutlineOfficeBuilding } from "react-icons/hi";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  color: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Optum (UnitedHealth Group)",
    role: "Lead Engineer (Promoted)",
    period: "Aug 2022 — Present",
    type: "Full-time",
    color: "#1e90ff",
    bullets: [
      "Scaled a mission-critical, event-driven healthcare platform to reliably process 10M+ member records daily, enabling near-real-time analytics, regulatory reporting, and downstream integrations.",
      "Accelerated data product delivery across Snowflake, Kafka, Databricks (Bronze→Silver→Gold), backend services, and UI, achieving zero Sev-1/Sev-2 production incidents at launch.",
      "Boosted data freshness and lowered compute costs by 20–30% by implementing CDC-driven pipelines (Delta Lake CDF); eliminated full recomputations and improved SLA adherence.",
      "Elevated pipeline throughput by 65–80%, cutting end-to-end processing time from 3–5 hours to under 1 hour.",
      "Cut infrastructure spend by $10K+ annually by designing high-throughput bulk-copy and backup frameworks moving millions of records in 15–20 minutes.",
      "Owned Unity Catalog migration (RBAC, lineage, governance) across multiple Databricks workspaces, securing access for 50+ datasets.",
      "Architected resilient, replayable event-driven ingestion flows (Snowflake → Kafka → Databricks → Event Hub), establishing a single source of truth for millions of member records across 10+ downstream services.",
      "Transitioned to a hybrid MySQL + Cosmos DB data model, streamlining data access patterns for operational teams by 70%.",
      "Delivered fault-tolerant PDF generation, bulk print, and document workflows processing 10K+ documents/day with retries and idempotency.",
      "Launched self-service bulk user provisioning supporting 100+ users per batch with full validation and audit trails.",
      "Instituted Datadog-driven observability, enabling faster root-cause analysis and reduced MTTR for high-severity incidents.",
      "Implemented GenAI-powered agents via Microsoft Copilot Studio, automating 90% of repetitive administrative tasks and saving 20+ hours weekly.",
    ],
  },
  {
    company: "Think Future Technologies",
    role: "Software Engineer",
    period: "Jan 2022 — Jul 2022",
    type: "Full-time",
    color: "#818cf8",
    bullets: [
      "Designed complex React UI/UX flows with real-time chat and RBAC for 300+ users, while architecting a high-performance dashboard that reduced page load times from 5s to 1.8s (64% improvement) and navigation friction by 25%.",
    ],
  },
  {
    company: "Techmihirnaik Group",
    role: "Technical Head — Promoted from Intern",
    period: "Aug 2021 — Jan 2022",
    type: "Internship → Full-time",
    color: "#a855f7",
    bullets: [
      "Advanced to Technical Head within 6 months, leading a team to architect and deliver a multi-vendor platform (hostel booking, food delivery, laundry, transportation), scaling to 1,000+ users.",
      "Optimized the platform end-to-end (UI, APIs, admin panel), reducing page load time by ~55% and manual operational effort by ~40%.",
      "Integrated Razorpay with 95%+ payment success rate, ~99% uptime, and 98% defect-free production releases.",
      "Shipped multiple client applications and collaborated directly with stakeholders, increasing digital engagement by 30%+ and reducing feature rework by ~35%.",
    ],
  },
];

function TimelineCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = React.useState(false);

  const visibleBullets = expanded ? exp.bullets : exp.bullets.slice(0, 4);
  const hasMore = exp.bullets.length > 4;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-10 md:pl-14 pb-14 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 z-10 flex items-center justify-center w-6 h-6 rounded-full"
        style={{ background: `${exp.color}20`, border: `2px solid ${exp.color}60` }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}` }} />
      </div>

      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div
          className="absolute left-[11px] top-8 bottom-0 w-px"
          style={{ background: `linear-gradient(to bottom, ${exp.color}40, ${experiences[index + 1].color}20, transparent)` }}
        />
      )}

      {/* Card */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
        className="console-panel overflow-hidden"
        style={{ borderColor: `${exp.color}18` }}
      >
        {/* Top accent bar */}
        <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <HiOutlineOfficeBuilding style={{ color: exp.color }} size={18} />
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {exp.company}
                </h3>
              </div>
              <p className="font-semibold text-sm md:text-base" style={{ color: exp.color }}>
                {exp.role}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm flex-shrink-0">
              <HiOutlineCalendar size={14} />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* Badge */}
          <span
            className="inline-block px-3 py-1 font-mono text-[10px] uppercase tracking-wider mb-5 font-medium"
            style={{
              background: `${exp.color}12`,
              color: exp.color,
              border: `1px solid ${exp.color}30`,
            }}
          >
            {exp.type}
          </span>

          {/* Bullets */}
          <ul className="space-y-3">
            {visibleBullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                className="flex gap-3 text-gray-400 text-sm leading-relaxed"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: exp.color, opacity: 0.7 }}
                />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>

          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-5 text-sm font-medium flex items-center gap-1.5 transition-colors duration-300"
              style={{ color: exp.color }}
            >
              {expanded ? "Show less" : `Show ${exp.bullets.length - 4} more achievements`}
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                ↓
              </motion.span>
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-divider" />
      <div className="section-container">
        <AnimatedSection>
          <span className="system-label">02 / DEPLOYMENT_HISTORY</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            My professional journey building systems at scale
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl">
          {experiences.map((exp, i) => (
            <TimelineCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
