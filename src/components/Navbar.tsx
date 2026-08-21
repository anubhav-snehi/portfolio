"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiMoon, HiSun, HiX } from "react-icons/hi";
import PortfolioLogo from "./PortfolioLogo";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    const nextLightMode = !isLightMode;
    setIsLightMode(nextLightMode);
    document.documentElement.classList.toggle("light", nextLightMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      // Progress bar
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-2xl border-b border-dark-border/50 shadow-xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
              className="relative group flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              <PortfolioLogo />
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className={`relative px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-200"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 border-x border-cyan/20 bg-cyan/[0.06]"
                        style={{
                          background: "rgba(34,211,238,0.06)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
                className="hidden md:block btn-primary text-xs px-5 py-2 font-mono uppercase tracking-[0.1em]"
              >
                Hire Me
              </a>

              <button
                type="button"
                onClick={toggleTheme}
                className="theme-switch relative grid h-9 w-[4.5rem] grid-cols-2 items-center rounded-full border border-cyan/30 bg-[#07111f]/80 p-1 text-cyan shadow-inner shadow-black/20 transition-all duration-300 hover:border-cyan/70 focus:outline-none focus:ring-1 focus:ring-cyan"
                aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
                title={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
              >
                <motion.span
                  animate={{ x: isLightMode ? 0 : 32 }}
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  className="absolute left-1 top-1 h-7 w-7 rounded-full border border-cyan/30 bg-[#123b5a] shadow-[0_3px_10px_rgba(8,145,178,0.28)]"
                />
                <span className="relative z-10 flex items-center justify-center"><HiSun size={15} className={isLightMode ? "text-amber-400" : "text-slate-500"} /></span>
                <span className="relative z-10 flex items-center justify-center"><HiMoon size={15} className={isLightMode ? "text-slate-500" : "text-indigo-200"} /></span>
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-dark-lighter/50"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dark/95 backdrop-blur-2xl border-b border-dark-border/50 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-white bg-accent/10 border border-accent/20"
                        : "text-gray-400 hover:text-white hover:bg-dark-lighter/50"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleClick("#contact"); }}
                    className="block btn-primary text-sm text-center"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
