"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBadgeCheck,
  HiOutlineExternalLink,
} from "react-icons/hi";

const certifications = [
  {
    issuer: "AI DOJO",
    color: "#1e90ff",
    items: [
      {
        name: "Generative AI (Excellent)",
        link: "https://uhg.edcast.com/verify_badge/97MVs6qSwD?user_id=4411699&timestamp=1757918592712&edCast?latest",
      },
      {
        name: "Machine Learning (Excellent)",
        link: "https://uhg.edcast.com/verify_badge/974MmqSSvh?user_id=4411699&timestamp=1775543835051&edCast?latest",
      },
    ],
  },
  {
    issuer: "Microsoft",
    color: "#818cf8",
    items: [
      { name: "AZ-900 Azure Fundamentals" },
      {
        name: "MTA: Java (2021)",
        link: "https://www.credly.com/badges/9ab86240-5d67-4bc4-a2e4-a17151f4c85b?source=linked_in_profile",
      },
      {
        name: "AI Agents",
        link: "https://learn.microsoft.com/api/achievements/share/en-gb/AnubhavSnehi-0577/QSLADH7E?sharingId=BC5B917DD1FD77",
      },
      {
        name: "Copilot Studio",
        link: "https://learn.microsoft.com/api/achievements/share/en-gb/AnubhavSnehi-0577/W2MCADVN?sharingId=BC5B917DD1FD77",
      },
      {
        name: "Power Automate",
        link: "https://learn.microsoft.com/api/achievements/share/en-us/AnubhavSnehi-0577/URVRGS43?sharingId=BC5B917DD1FD77",
      },
    ],
  },
  {
    issuer: "GitHub",
    color: "#a855f7",
    items: [
      {
        name: "Copilot Certification",
        link: "https://uhg.edcast.com/verify_badge/978ph19lmi?user_id=4411699&timestamp=1777017655168&edCast?latest",
      },
    ],
  },
  {
    issuer: "Coding Ninjas",
    color: "#f59e0b",
    items: [
      {
        name: "React Full Stack — Completion",
        link: "http://files.codingninjas.in/certificate2195281ea20a56050dac95ca42c1b6055525e9b.pdf",
      },
      {
        name: "React Full Stack — Excellence",
        link: "http://files.codingninjas.in/certificate21952818eab8d145174f4001f89909ed1fb7f53.pdf",
      },
    ],
  },
  {
    issuer: "Skillsoft",
    color: "#22d3ee",
    items: [
      {
        name: "Advanced Features in Java",
        link: "https://skillsoft.digitalbadges.skillsoft.com/4648dacf-9159-487d-893f-ed67479aa649",
      },
    ],
  },
];

export default function Education() {
  const certRef = React.useRef<HTMLDivElement>(null);
  const certInView = useInView(certRef, { once: true, margin: "-60px" });

  return (
    <section id="education" className="relative">
      <div className="section-divider" />
      <div className="section-container">
        <AnimatedSection>
          <span className="system-label">05 / KNOWLEDGE_BASE</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            Education &amp;{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading">
            Academic foundation and continuous learning
          </p>
        </AnimatedSection>

        {/* Education card */}
        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="console-panel p-6 md:p-8 mb-14 max-w-2xl overflow-hidden relative"
            style={{ borderColor: "rgba(30,144,255,0.18)" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: "linear-gradient(90deg, #1e90ff, #818cf8, transparent)" }}
            />
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5 pointer-events-none"
              style={{ background: "radial-gradient(circle, #1e90ff, transparent)" }}
            />
            <div className="flex items-start gap-5 relative z-10">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(30,144,255,0.12)",
                  border: "1px solid rgba(30,144,255,0.25)",
                  color: "#1e90ff",
                }}
              >
                <HiOutlineAcademicCap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  B.Tech — Information Technology
                </h3>
                <p className="text-accent font-medium mt-1 text-sm">
                  Bengal College of Engineering and Technology
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <span className="tech-tag">Graduated 2022</span>
                  <span className="tech-tag">CGPA: 8.6 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Certifications */}
        <p className="text-xs text-gray-600 uppercase tracking-widest mb-6 font-medium">
          Certifications
        </p>
        <div
          ref={certRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.issuer}
              initial={{ opacity: 0, y: 25 }}
              animate={certInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -4 }}
              className="console-panel p-5 group cursor-default overflow-hidden"
              style={{ borderColor: `${cert.color}18` }}
            >
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full mb-4"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

              <div className="flex items-center gap-2 mb-4">
                <HiOutlineBadgeCheck style={{ color: cert.color }} size={18} />
                <h3 className="text-white font-bold text-sm">{cert.issuer}</h3>
                <span
                  className="ml-auto text-xs px-2 py-0.5 rounded-md font-medium"
                  style={{
                    background: `${cert.color}12`,
                    color: cert.color,
                    border: `1px solid ${cert.color}25`,
                  }}
                >
                  {cert.items.length}
                </span>
              </div>

              <ul className="space-y-2.5">
                {cert.items.map((item) => (
                  <li key={item.name}>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group/link"
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: cert.color, opacity: 0.7 }}
                        />
                        <span className="flex-1 leading-snug">{item.name}</span>
                        <HiOutlineExternalLink
                          size={13}
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0"
                          style={{ color: cert.color }}
                        />
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: cert.color, opacity: 0.5 }}
                        />
                        <span>{item.name}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
