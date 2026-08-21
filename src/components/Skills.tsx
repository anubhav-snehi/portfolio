"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiSpringboot,
  SiApachekafka,
  SiApachespark,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiDatadog,
  SiGit,
} from "react-icons/si";
import { FaJava, FaSnowflake, FaDatabase, FaCloud, FaBrain, FaLayerGroup } from "react-icons/fa";
import { HiOutlineCube, HiOutlineChip } from "react-icons/hi";

interface Skill { name: string; icon?: React.ReactNode }
interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <HiOutlineCube size={20} />,
    color: "#22d3ee",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "UI Performance" },
      { name: "RBAC" },
    ],
  },
  {
    title: "Backend",
    icon: <HiOutlineChip size={20} />,
    color: "#1e90ff",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Go", icon: <SiGo /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring Batch" },
      { name: "Microservices" },
      { name: "REST APIs" },
      { name: "Event-Driven Arch." },
    ],
  },
  {
    title: "Data Platforms",
    icon: <FaLayerGroup size={20} />,
    color: "#818cf8",
    skills: [
      { name: "Snowflake", icon: <FaSnowflake /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Databricks" },
      { name: "Apache Spark", icon: <SiApachespark /> },
      { name: "Delta Lake" },
      { name: "CDC / Delta CDF" },
      { name: "Unity Catalog" },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase size={20} />,
    color: "#f59e0b",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Cosmos DB" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud size={20} />,
    color: "#a855f7",
    skills: [
      { name: "Azure" },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "CI/CD" },
      { name: "Git", icon: <SiGit /> },
      { name: "Datadog", icon: <SiDatadog /> },
    ],
  },
  {
    title: "AI / ML",
    icon: <FaBrain size={20} />,
    color: "#34d399",
    skills: [
      { name: "Generative AI" },
      { name: "RAG" },
      { name: "Agentic AI" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "XGBoost" },
      { name: "scikit-learn" },
      { name: "NLP" },
    ],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5 }}
      className="console-panel p-6 group cursor-default transition-all duration-500 overflow-hidden"
      style={{ borderColor: `${category.color}18` }}
    >
      {/* Top accent */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full mb-5"
        style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${category.color}15`,
            border: `1px solid ${category.color}30`,
            color: category.color,
          }}
        >
          {category.icon}
        </div>
        <h3 className="text-white font-bold text-base">{category.title}</h3>
        <span
          className="ml-auto text-xs font-mono px-2 py-0.5 rounded-md"
          style={{
            background: `${category.color}12`,
            color: category.color,
            border: `1px solid ${category.color}25`,
          }}
        >
          {category.skills.length}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md
                       transition-all duration-300 cursor-default"
            style={{
              background: `${category.color}0d`,
              color: `${category.color}cc`,
              border: `1px solid ${category.color}20`,
            }}
            whileHover={{
              background: `${category.color}20`,
              borderColor: `${category.color}45`,
              scale: 1.05,
            }}
          >
            {skill.icon && <span className="text-xs">{skill.icon}</span>}
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-divider" />
      <div className="section-container">
        <AnimatedSection>
          <span className="system-label">03 / TECHNOLOGY_MATRIX</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            Core <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I work with every day
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* System design callout */}
        <AnimatedSection delay={0.5} className="mt-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="console-panel p-5 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(30,144,255,0.06), rgba(168,85,247,0.06))",
              borderColor: "rgba(129,140,248,0.2)",
            }}
          >
            <span
              className="font-bold text-base bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #1e90ff, #a855f7)" }}
            >
              + System Design
            </span>
            <span className="text-gray-500 ml-3 text-sm">
              Distributed systems · High availability · Scalability patterns · CAP theorem
            </span>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
