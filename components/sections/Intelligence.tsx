"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  MessageCircle,
  Sparkles,
  Wand2,
  Lightbulb,
  ArrowLeftRight,
  Globe,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const aiCapabilities = [
  {
    icon: Cpu,
    title: "AI Agents",
    subtitle: "Autonomous execution",
    description:
      "Intelligent agents that understand context, make decisions, and execute complex multi-step tasks across your entire workflow — from grading to compliance reporting.",
    iconColor: "#6381FF",
    glowColor: "rgba(99, 129, 255, 0.15)",
    borderColor: "rgba(99, 129, 255, 0.4)",
    shadowColor: "rgba(99, 129, 255, 0.3)",
  },
  {
    icon: MessageCircle,
    title: "Embedded Assistant",
    subtitle: "Always-on support",
    description:
      "A conversational AI assistant lives inside every product. Ask questions, get contextual help, troubleshoot issues, and learn new features — all without leaving your screen.",
    iconColor: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.15)",
    borderColor: "rgba(168, 85, 247, 0.4)",
    shadowColor: "rgba(168, 85, 247, 0.3)",
  },
  {
    icon: Wand2,
    title: "Smart Automation",
    subtitle: "Zero-effort workflows",
    description:
      "AI identifies repetitive patterns in your daily operations and eliminates them automatically. Schedule, route, notify, and generate — hands-free.",
    iconColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.15)",
    borderColor: "rgba(16, 185, 129, 0.4)",
    shadowColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    icon: Lightbulb,
    title: "Predictive Insights",
    subtitle: "Decisions before you ask",
    description:
      "Context-aware recommendations that surface before you need them. Risk flags, optimization suggestions, and personalized next-best-actions tailored to your role.",
    iconColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.15)",
    borderColor: "rgba(245, 158, 11, 0.4)",
    shadowColor: "rgba(245, 158, 11, 0.3)",
  },
  {
    icon: Globe,
    title: "Natural Language",
    subtitle: "Talk to your software",
    description:
      "Generate reports, query data, or navigate complex features with plain English prompts. No menus, no tutorials — just type what you want.",
    iconColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.15)",
    borderColor: "rgba(6, 182, 212, 0.4)",
    shadowColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    icon: ArrowLeftRight,
    title: "Instant Recovery",
    subtitle: "Never get stuck",
    description:
      "Made a wrong turn? AI-powered undo lets you instantly back out of any action. Describe what went wrong and revert in one step — zero data loss.",
    iconColor: "#F43F5E",
    glowColor: "rgba(244, 63, 94, 0.15)",
    borderColor: "rgba(244, 63, 94, 0.4)",
    shadowColor: "rgba(244, 63, 94, 0.3)",
  },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="py-section-lg relative">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-[0.04] blur-[150px] pointer-events-none bg-gradient-to-br from-brand-primary via-brand-secondary to-transparent"
      />

      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-8">
            <Sparkles size={14} className="text-brand-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
              Intelligence
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl leading-[1.05]">
            AI isn&apos;t a feature.
            <br />
            <span className="text-muted/70">It&apos;s how we think.</span>
          </h2>
          <p className="mt-8 text-lg text-body leading-relaxed max-w-xl mx-auto">
            Autonomous agents, embedded assistants, and predictive automation —
            AI is woven into every layer of the UniSyft platform.
          </p>
        </AnimatedSection>

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl bg-surface p-7 sm:p-8 h-full transition-all duration-200"
                  style={{
                    border: `1px solid var(--border)`,
                  }}
                >
                  {/* Animated gradient border on hover */}
                  <div
                    className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${cap.borderColor}, transparent, ${cap.borderColor}, transparent)`,
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMaskComposite: "xor",
                      padding: "1px",
                      borderRadius: "1.5rem",
                    }}
                  />

                  {/* Glow behind card */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none -z-10 blur-xl"
                    style={{ backgroundColor: cap.glowColor }}
                  />

                  {/* Bottom falling shadow */}
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none blur-2xl"
                    style={{ backgroundColor: cap.shadowColor }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        backgroundColor: `${cap.iconColor}10`,
                        border: `1px solid ${cap.iconColor}15`,
                      }}
                    >
                      <span style={{ color: cap.iconColor }}>
                        <Icon size={26} />
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-heading">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-medium mt-1 transition-colors duration-200" style={{ color: cap.iconColor }}>
                      {cap.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-body/90 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
