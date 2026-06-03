"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiOutlineAcademicCap,
  HiOutlineBadgeCheck,
  HiOutlineExternalLink,
} from "react-icons/hi";

const certifications = [
  {
    issuer: "AI DOJO",
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
    items: [
      {
        name: "Copilot Certification",
        link: "https://uhg.edcast.com/verify_badge/978ph19lmi?user_id=4411699&timestamp=1777017655168&edCast?latest",
      },
    ],
  },
  {
    issuer: "Coding Ninjas",
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
    items: [
      {
        name: "Advanced Features in Java",
        link: "https://skillsoft.digitalbadges.skillsoft.com/4648dacf-9159-487d-893f-ed67479aa649",
      },
    ],
  },
];

export default function Education() {
  const [certRef, certInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Education */}
      <section id="education" className="relative">
        <div className="section-container">
          <AnimatedSection>
            <div className="accent-line" />
            <h2 className="section-heading">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subheading">
              Academic foundation and continuous learning
            </p>
          </AnimatedSection>

          {/* Education card */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card-hover p-6 md:p-8 mb-16 max-w-2xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                  <HiOutlineAcademicCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    B.Tech — Information Technology
                  </h3>
                  <p className="text-accent font-medium mt-1">
                    Bengal College of Engineering and Technology
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-3">
                    <span className="tech-tag">2022</span>
                    <span className="tech-tag">CGPA: 8.6</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications grid */}
          <div
            ref={certRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.issuer}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  certInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <HiOutlineBadgeCheck className="text-accent" size={20} />
                  <h3 className="text-white font-semibold">{cert.issuer}</h3>
                </div>
                <ul className="space-y-2">
                  {cert.items.map((item) => (
                    <li key={item.name}>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-colors duration-300 group/link"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                          <span className="flex-1">{item.name}</span>
                          <HiOutlineExternalLink
                            size={14}
                            className="opacity-0 group-hover/link:opacity-100 transition-opacity text-accent flex-shrink-0"
                          />
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
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
    </>
  );
}
