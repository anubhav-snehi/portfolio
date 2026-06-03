"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
import {
  FaJava,
  FaSnowflake,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaLayerGroup,
} from "react-icons/fa";
import { HiOutlineCube, HiOutlineChip } from "react-icons/hi";
import { IconType } from "react-icons";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; icon?: React.ReactNode }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <HiOutlineCube size={20} />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "UI Performance" },
      { name: "RBAC" },
    ],
  },
  {
    title: "Backend",
    icon: <HiOutlineChip size={20} />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Go", icon: <SiGo /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring Batch" },
      { name: "Microservices" },
      { name: "REST APIs" },
      { name: "Event-Driven Architecture" },
    ],
  },
  {
    title: "Data Platforms",
    icon: <FaLayerGroup size={20} />,
    skills: [
      { name: "Snowflake", icon: <FaSnowflake /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Databricks" },
      { name: "Apache Spark", icon: <SiApachespark /> },
      { name: "Delta Lake" },
      { name: "CDC (Delta Lake CDF)" },
      { name: "Unity Catalog" },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase size={20} />,
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Cosmos DB" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud size={20} />,
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

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
          {category.icon}
        </div>
        <h3 className="text-white font-semibold text-lg">{category.title}</h3>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
            className="tech-tag flex items-center gap-1.5"
          >
            {skill.icon && (
              <span className="text-accent text-xs">{skill.icon}</span>
            )}
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
      <div className="section-container">
        <AnimatedSection>
          <div className="accent-line" />
          <h2 className="section-heading">
            Core <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Technologies and tools I work with every day
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* System Design callout */}
        <AnimatedSection delay={0.4} className="mt-8">
          <div className="glass-card p-6 border-accent/20 text-center">
            <span className="text-accent font-semibold text-lg">
              + System Design
            </span>
            <span className="text-gray-400 ml-3">
              — Distributed systems, high availability, scalability patterns
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
