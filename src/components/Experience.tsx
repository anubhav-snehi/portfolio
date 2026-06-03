"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Optum (UnitedHealth Group)",
    role: "Senior Software Engineer (Promoted)",
    period: "Aug 2022 — Present",
    type: "Full-time",
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
    bullets: [
      "Designed complex React UI/UX flows with real-time chat and RBAC for 300+ users, while architecting a high-performance dashboard that reduced page load times from 5s to 1.8s (64% improvement) and navigation friction by 25%.",
    ],
  },
  {
    company: "Techmihirnaik Group",
    role: "Technical Head — Promoted from Intern",
    period: "Aug 2021 — Jan 2022",
    type: "Internship → Full-time",
    bullets: [
      "Advanced to Technical Head within 6 months, leading a team to architect and deliver a multi-vendor platform (hostel booking, food delivery, laundry, transportation), scaling to 1,000+ users.",
      "Optimized the platform end-to-end (UI, APIs, admin panel), reducing page load time by ~55% and manual operational effort by ~40%.",
      "Integrated Razorpay with 95%+ payment success rate, ~99% uptime, and 98% defect-free production releases.",
      "Shipped multiple client applications and collaborated directly with stakeholders, increasing digital engagement by 30%+ and reducing feature rework by ~35%.",
    ],
  },
];

function TimelineCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expanded, setExpanded] = React.useState(false);

  const visibleBullets = expanded ? exp.bullets : exp.bullets.slice(0, 4);
  const hasMore = exp.bullets.length > 4;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Timeline dot & line */}
      <div className="absolute left-0 top-1.5 z-10">
        <div className="glow-dot" />
      </div>
      {index < experiences.length - 1 && (
        <div className="absolute left-[5px] top-5 bottom-0 w-px bg-gradient-to-b from-accent/40 to-transparent" />
      )}

      {/* Card */}
      <div className="glass-card-hover p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <HiOutlineBriefcase className="text-accent flex-shrink-0" />
              {exp.company}
            </h3>
            <p className="text-accent font-medium mt-1">{exp.role}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm flex-shrink-0">
            <HiOutlineCalendar className="text-accent" />
            {exp.period}
          </div>
        </div>

        <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 mb-4">
          {exp.type}
        </span>

        {/* Bullets */}
        <ul className="space-y-3">
          {visibleBullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              className="flex gap-3 text-gray-300 text-sm leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
              <span>{bullet}</span>
            </motion.li>
          ))}
        </ul>

        {/* Show more button */}
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-accent text-sm font-medium hover:text-accent-light transition-colors flex items-center gap-1"
          >
            {expanded ? "Show less" : `Show ${exp.bullets.length - 4} more`}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ↓
            </motion.span>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="accent-line" />
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subheading">
            My professional journey building systems at scale
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-4xl">
          {experiences.map((exp, i) => (
            <TimelineCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
