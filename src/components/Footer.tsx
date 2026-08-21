"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlineHeart, HiArrowUp } from "react-icons/hi";
import PortfolioLogo from "./PortfolioLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(30,144,255,0.3), rgba(129,140,248,0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <PortfolioLogo compact />
              <span className="font-mono text-sm font-bold tracking-[0.08em]">
                <span className="text-cyan">ANUBHAV</span><span className="text-slate-500">.DEV</span>
              </span>
            </div>
            <p className="text-gray-600 text-xs flex items-center gap-1.5 justify-center md:justify-start">
              &copy; {currentYear} — Built with{" "}
              <HiOutlineHeart className="text-red-500" size={12} /> using
              Next.js &amp; Tailwind CSS
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: <FaLinkedinIn size={15} />,
                href: "https://linkedin.com/in/anubhav-snehi-47ba021b1",
                label: "LinkedIn",
                color: "#0ea5e9",
              },
              {
                icon: <HiOutlineMail size={15} />,
                href: "mailto:snehinishu@gmail.com",
                label: "Email",
                color: "#818cf8",
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                aria-label={s.label}
              >
                <span style={{ color: s.color }}>{s.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-8">
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-300 transition-colors duration-300 uppercase tracking-widest"
          >
            <HiArrowUp size={12} />
            Back to Top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
