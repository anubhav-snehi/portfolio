import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anubhav Snehi | Senior Software Engineer",
  description:
    "Portfolio of Anubhav Snehi — Senior Software Engineer specializing in distributed data platforms, event-driven systems, and cloud-native microservices.",
  keywords: [
    "Anubhav Snehi",
    "Senior Software Engineer",
    "Portfolio",
    "Full Stack Developer",
    "Data Engineer",
    "Snowflake",
    "Kafka",
    "Databricks",
    "Azure",
    "React",
    "Java",
    "Python",
  ],
  authors: [{ name: "Anubhav Snehi" }],
  openGraph: {
    title: "Anubhav Snehi | Senior Software Engineer",
    description:
      "Building large-scale distributed data and backend platforms. 4+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg grid-bg">{children}</body>
    </html>
  );
}
