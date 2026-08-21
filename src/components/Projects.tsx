"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";
import { FaBrain, FaUsers } from "react-icons/fa";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  icon: React.ReactNode;
  image: string;
  link?: string;
  color: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Healthcare Treatment Cost Prediction",
    subtitle: "End-to-end ML pipeline with ensemble methods",
    description:
      "Machine learning system for healthcare cost prediction using distributed hyperparameter optimization on Databricks.",
    bullets: [
      "Achieved R² = 0.88 (regression) and F1 = 88.7% (classification) on 20K+ patient records, scoring top grade in Optum AI capstone.",
      "Benchmarked 11 models via 3-fold CV; tuned XGBRegressor with L1/L2 regularization, reducing overfitting gap by 25% using Spark-parallelized search (3× faster).",
      "Engineered 4 domain-driven features (smoker×BMI, BMI²) boosting predictive signal to 0.56 correlation; zero-leakage preprocessing pipeline.",
    ],
    tech: ["Python", "PySpark", "scikit-learn", "XGBoost", "Databricks"],
    icon: <FaBrain size={26} />,
    image: "/project-visuals/cost-prediction.svg",
    color: "#1e90ff",
    featured: true,
  },
  {
    title: "Health Insurance Claim Approval Agent",
    subtitle: "GenAI-powered claim validation system",
    description:
      "End-to-end claim approval system using Generative AI, RAG, and Agentic AI for automated healthcare claim processing.",
    bullets: [
      "Built end-to-end claim approval system using Generative AI, RAG, and Agentic AI, reducing manual claim validation effort by 30–40% in simulated workflows.",
    ],
    tech: ["Generative AI", "RAG", "Agentic AI", "LangChain", "Python"],
    icon: <HiOutlineCode size={26} />,
    image: "/project-visuals/claim-agent.svg",
    color: "#818cf8",
  },
  {
    title: "Roommate | Multi-Service Platform",
    subtitle: "Integrated multi-vendor ecosystem",
    description:
      "Full-stack platform for room booking, laundry, food services — serving 1,000+ users with 98% defect-free releases.",
    bullets: [
      "Created a scalable architecture supporting 1,000+ users, streamlining service discovery and booking workflows.",
      "Implemented end-to-end workflows (UI, backend, testing), achieving 98% defect-free releases and reducing production issues by ~60%.",
      "Tuned performance using JavaScript & Django, ensuring <2s response time and ~99% uptime.",
    ],
    tech: ["JavaScript", "Django", "React", "REST APIs", "Razorpay"],
    icon: <FaUsers size={26} />,
    image: "/project-visuals/roommate-platform.svg",
    link: "https://roommate.techmihirnaik.in",
    color: "#a855f7",
  },
];

function FeaturedProjectCard({ project }: { project: Project }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="console-panel overflow-hidden mb-6 group"
      style={{ borderColor: `${project.color}20` }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, #818cf8, transparent)` }}
      />

      <div className="p-6 md:p-8 grid md:grid-cols-5 gap-8">
        {/* Left info */}
        <div className="md:col-span-3">
          <div className="flex items-start gap-4 mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                color: project.color,
              }}
            >
              {project.icon}
            </div>
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-1.5"
                style={{ color: project.color }}
              >
                Featured Project
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            {project.description}
          </p>

          <ul className="space-y-3">
            {project.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
                className="flex gap-3 text-gray-300 text-sm leading-relaxed"
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: project.color }}
                />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: visual and tech stack */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="relative mb-5 aspect-[16/10] overflow-hidden border border-cyan/20 bg-[#050914]">
              <Image
                src={project.image}
                alt={`${project.title} system visualization`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-cyan/20 bg-[#050914]/90 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-cyan">
                <span>System Snapshot</span>
                <span className="flex items-center gap-1 text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> live</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3 font-medium">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-300"
                  style={{
                    background: `${project.color}0d`,
                    color: `${project.color}cc`,
                    border: `1px solid ${project.color}25`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link w-fit"
              style={{ color: project.color }}
            >
              <HiOutlineExternalLink size={16} />
              <span className="group-hover/link:underline">View Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5 }}
      className="console-panel overflow-hidden group cursor-default flex flex-col"
      style={{ borderColor: `${project.color}18` }}
    >
      <div className="h-0.5 w-0 group-hover:w-full transition-all duration-700"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="relative aspect-[16/8] overflow-hidden border-b border-cyan/15 bg-[#050914]">
        <Image
          src={project.image}
          alt={`${project.title} system visualization`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#070b17] to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-start gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                color: project.color,
              }}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs mt-0.5" style={{ color: `${project.color}99` }}>
                {project.subtitle}
              </p>
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 hover:text-white transition-all duration-300 hover:bg-dark-lighter/60 flex-shrink-0"
              aria-label={`Visit ${project.title}`}
            >
              <HiOutlineExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>

        <ul className="space-y-2 mb-5 flex-1">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-gray-400 text-sm leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color, opacity: 0.7 }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs rounded-md"
              style={{
                background: `${project.color}0d`,
                color: `${project.color}aa`,
                border: `1px solid ${project.color}20`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative">
      <div className="section-divider" />
      <div className="section-container">
        <AnimatedSection>
          <span className="system-label">04 / SELECTED_DEPLOYMENTS</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Highlights from my engineering and AI work
          </p>
        </AnimatedSection>

        {/* Featured project */}
        {featured.map((p) => (
          <FeaturedProjectCard key={p.title} project={p} />
        ))}

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
