"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";
import { FaBrain, FaUsers, FaUtensils } from "react-icons/fa";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  icon: React.ReactNode;
  link?: string;
  accent?: string;
}

const projects: Project[] = [
  {
    title: "Healthcare Treatment Cost Prediction",
    subtitle: "End-to-end ML pipeline with ensemble methods",
    description:
      "Machine learning system for healthcare cost prediction using distributed hyperparameter optimization on Databricks.",
    bullets: [
      "Achieved R² = 0.88 (regression) and F1 = 88.7% (classification) on 20K+ patient records, scoring top grade in Optum AI capstone.",
      "Benchmarked 11 models via 3-fold CV; tuned XGBRegressor with L1/L2 regularization, reducing overfitting gap by 25% using Spark-parallelized search (3x faster).",
      "Engineered 4 domain-driven features (smoker×BMI, BMI²) boosting predictive signal to 0.56 correlation; zero-leakage preprocessing pipeline.",
    ],
    tech: ["Python", "PySpark", "scikit-learn", "XGBoost", "Databricks"],
    icon: <FaBrain size={24} />,
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
    icon: <HiOutlineCode size={24} />,
  },
  {
    title: "Roommate | Multi-Service Platform",
    subtitle: "Integrated multi-vendor ecosystem",
    description:
      "Full-stack platform for room booking, laundry, food services, and more — serving 1,000+ users with 98% defect-free releases.",
    bullets: [
      "Created a scalable architecture supporting 1,000+ users, streamlining service discovery and booking workflows.",
      "Implemented end-to-end workflows (UI, backend, testing), achieving 98% defect-free releases and reducing production issues by ~60%.",
      "Tuned performance using JavaScript & Django, ensuring <2s response time and ~99% uptime.",
    ],
    tech: ["JavaScript", "Django", "React", "REST APIs", "Razorpay"],
    icon: <FaUsers size={24} />,
    link: "https://roommate.techmihirnaik.in",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card-hover overflow-hidden group"
    >
      {/* Card header with gradient */}
      <div className="relative p-6 pb-4 bg-gradient-to-br from-accent/5 to-transparent">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
              {project.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-accent/80 mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-accent/10 text-gray-400 hover:text-accent transition-all duration-300 flex-shrink-0"
              aria-label={`Visit ${project.title}`}
            >
              <HiOutlineExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 pb-6">
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <ul className="space-y-2 mb-5">
          {project.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-gray-300 text-sm leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="accent-line" />
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Highlights from my engineering and AI work
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
