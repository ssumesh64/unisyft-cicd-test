"use client";

import { motion } from "framer-motion";
import {
  Brain, Shield, Plug, BarChart3, Layers, Headphones,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { features } from "@/lib/features";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Brain, Shield, Plug, BarChart3, Layers, Headphones,
};

const colorMap: Record<string, { icon: string; glow: string; border: string; shadow: string }> = {
  "ai-powered": { icon: "#6381FF", glow: "rgba(99,129,255,0.12)", border: "rgba(99,129,255,0.35)", shadow: "rgba(99,129,255,0.25)" },
  security: { icon: "#10B981", glow: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.35)", shadow: "rgba(16,185,129,0.25)" },
  integration: { icon: "#A855F7", glow: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.35)", shadow: "rgba(168,85,247,0.25)" },
  analytics: { icon: "#F59E0B", glow: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.35)", shadow: "rgba(245,158,11,0.25)" },
  scalable: { icon: "#06B6D4", glow: "rgba(6,182,212,0.12)", border: "rgba(6,182,212,0.35)", shadow: "rgba(6,182,212,0.25)" },
  support: { icon: "#F43F5E", glow: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.35)", shadow: "rgba(244,63,94,0.25)" },
};

export function Innovation() {
  return (
    <section id="innovation" className="py-section-lg relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.03] blur-[150px] pointer-events-none bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent"
      />

      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl leading-tight">
            Why UniSyft.
          </h2>
          <p className="mt-6 text-xl text-body leading-relaxed">
            Shared foundations that power every product.
          </p>
        </AnimatedSection>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            const colors = colorMap[feature.id];
            return (
              <AnimatedSection key={feature.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-3xl bg-surface p-7 sm:p-8 h-full transition-all duration-200"
                  style={{ border: "1px solid var(--border)" }}
                >
                  {/* Animated gradient border on hover */}
                  <div
                    className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${colors.border}, transparent, ${colors.border}, transparent)`,
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMaskComposite: "xor",
                      padding: "1px",
                      borderRadius: "1.5rem",
                    }}
                  />

                  {/* Glow behind card */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -z-10 blur-xl"
                    style={{ backgroundColor: colors.glow }}
                  />

                  {/* Falling shadow */}
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-2xl"
                    style={{ backgroundColor: colors.shadow }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:scale-110"
                      style={{
                        backgroundColor: `${colors.icon}10`,
                        border: `1px solid ${colors.icon}15`,
                      }}
                    >
                      {Icon && (
                        <span style={{ color: colors.icon }}>
                          <Icon size={26} />
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-heading">{feature.title}</h3>
                    <p className="mt-3 text-sm text-body/90 leading-relaxed">{feature.description}</p>
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
