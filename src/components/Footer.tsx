"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlineHeart } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold">
              <span className="gradient-text">A</span>
              <span className="text-white">nubhav</span>
            </span>
            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1 justify-center md:justify-start">
              &copy; {currentYear} — Built with{" "}
              <HiOutlineHeart className="text-red-400 inline" size={14} /> using
              Next.js &amp; Tailwind CSS
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: <FaLinkedinIn size={16} />,
                href: "https://linkedin.com/in/anubhav-snehi-47ba021b1",
                label: "LinkedIn",
              },
              {
                icon: <HiOutlineMail size={16} />,
                href: "mailto:snehinishu@gmail.com",
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="p-2.5 rounded-lg bg-dark-card/60 border border-dark-border/50 text-gray-400
                           hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8">
          <a
            href="#home"
            className="text-xs text-gray-600 hover:text-accent transition-colors duration-300 uppercase tracking-wider"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
