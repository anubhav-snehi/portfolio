"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

const contactInfo = [
  {
    icon: <HiOutlineMail size={20} />,
    label: "Email",
    value: "snehinishu@gmail.com",
    href: "mailto:snehinishu@gmail.com",
    color: "#1e90ff",
  },
  {
    icon: <HiOutlinePhone size={20} />,
    label: "Phone",
    value: "+91 6207665579",
    href: "tel:+916207665579",
    color: "#818cf8",
  },
  {
    icon: <HiOutlineLocationMarker size={20} />,
    label: "Location",
    value: "Gurugram, India",
    color: "#a855f7",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
    value: "anubhav-snehi-47ba021b1",
    href: "https://linkedin.com/in/anubhav-snehi-47ba021b1",
    color: "#0ea5e9",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:snehinishu@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg text-white placeholder-gray-600 text-sm transition-all duration-300 border"
  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.08)",
  };

  return (
    <section id="contact" className="relative">
      <div className="section-divider" />
      <div className="section-container">
        <AnimatedSection>
          <span className="system-label">06 / OPEN_CHANNEL</span>
          <div className="accent-line" />
          <h2 className="section-heading">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading">
            Have a project in mind or want to connect? I&apos;d love to hear
            from you.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <AnimatedSection key={item.label} delay={0.1 + i * 0.08}>
                {item.href ? (
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="console-panel flex items-center gap-4 p-4 group transition-all duration-300 block"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${item.color}14`,
                        border: `1px solid ${item.color}28`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wider font-medium mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: item.color }}
                    />
                  </motion.a>
                ) : (
                  <div
                    className="console-panel flex items-center gap-4 p-4"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.color}14`,
                        border: `1px solid ${item.color}28`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wider font-medium mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-gray-300 text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          {/* Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="console-panel p-6 md:p-8"
              style={{ borderColor: "rgba(30,144,255,0.12)" }}
            >
              <div
                className="h-0.5 rounded-full mb-6"
                style={{ background: "linear-gradient(90deg, #1e90ff, #818cf8, #a855f7)" }}
              />

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
              >
                {submitted ? (
                  <>
                    <HiOutlineCheckCircle size={18} />
                    Email Client Opened\!
                  </>
                ) : (
                  <>
                    <HiOutlineMail size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
