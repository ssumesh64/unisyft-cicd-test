"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Check,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { products } from "@/lib/products";
import { sectorSteps } from "@/lib/sectors";
import type { SectorStep } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  GraduationCap,
  HeartPulse,
  TrendingUp,
};

function SectorCard({ sector, index }: { sector: SectorStep; index: number }) {
  const product = products.find((p) => p.id === sector.productId);
  const accentColor = product?.color ?? "#4F6EF7";
  const Icon = product ? iconMap[product.icon] : null;
  const isLive = product?.status === "live";

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative rounded-3xl bg-surface p-7 sm:p-8 h-full overflow-hidden transition-all duration-200 ${
          index === 0 ? "sm:col-span-2" : ""
        }`}
        style={{ border: `1px solid var(--border)` }}
      >
        {/* Animated gradient border on hover */}
        <div
          className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${accentColor}40, ${accentColor}15, transparent, ${accentColor}30)`,
            mask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
            borderRadius: "1.5rem",
          }}
        />

        {/* Glow behind card */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -z-10 blur-xl"
          style={{ backgroundColor: `${accentColor}12` }}
        />

        {/* Falling shadow */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-2xl"
          style={{ backgroundColor: `${accentColor}20` }}
        />

        <div className="relative z-10">
          {/* Icon + Sector + Status */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              {Icon && (
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${accentColor}10`,
                    border: `1px solid ${accentColor}15`,
                  }}
                >
                  <span style={{ color: accentColor }}>
                    <Icon size={22} />
                  </span>
                </div>
              )}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                  {sector.sector}
                </p>
                {product && (
                  <p className="text-sm font-bold text-heading">
                    {product.name}
                  </p>
                )}
              </div>
            </div>
            {isLive ? (
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  color: accentColor,
                  backgroundColor: `${accentColor}10`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: accentColor }}
                />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-surface-hover text-muted">
                Coming Soon
              </span>
            )}
          </div>

          {/* Market Reality Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            className="mb-4"
          >
            <p
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: accentColor }}
            >
              {sector.marketInsight.stat}
            </p>
            <p className="text-xs text-muted mt-1">
              {sector.marketInsight.statLabel}
            </p>
          </motion.div>

          {/* Narrative */}
          <p className="text-sm text-body/90 leading-relaxed">
            {sector.marketInsight.narrative}
          </p>

          {/* Trend Pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {sector.trends.map((trend, idx) => (
              <motion.span
                key={trend}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.3 + idx * 0.05,
                  duration: 0.25,
                }}
                className="text-[11px] font-medium px-3 py-1 rounded-full transition-all duration-200 hover:scale-105"
                style={{
                  color: accentColor,
                  backgroundColor: `${accentColor}08`,
                  border: `1px solid ${accentColor}12`,
                }}
              >
                {trend}
              </motion.span>
            ))}
          </div>

          {/* Divider */}
          <div
            className="my-6 h-px w-full"
            style={{ backgroundColor: `${accentColor}12` }}
          />

          {/* UniSyft Response */}
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: accentColor }}
          >
            {sector.unisyftResponse.headline}
          </p>
          <div className="space-y-2">
            {sector.unisyftResponse.bullets.map((bullet, idx) => (
              <motion.div
                key={bullet}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.4 + idx * 0.05,
                  duration: 0.25,
                }}
                className="flex items-center gap-2.5"
              >
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-[13px] text-body/90">{bullet}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6">
            {product?.id === "edsyft" ? (
              <a
                href="https://www.edsyft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-5 py-2.5 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  color: "#fff",
                  background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
                  boxShadow: `0 4px 20px ${accentColor}40`,
                }}
              >
                Launch EdSyft
                <ExternalLink size={14} />
              </a>
            ) : (
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-5 py-2.5 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  color: accentColor,
                  backgroundColor: `${accentColor}10`,
                  border: `1px solid ${accentColor}20`,
                }}
              >
                <Sparkles size={14} />
                Join Waitlist
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-section-lg relative">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.03] blur-[150px] pointer-events-none bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent"
      />

      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-8">
            <ArrowUpRight size={14} className="text-brand-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
              Where Industries Are Headed
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl leading-tight">
            Built for the future.
          </h2>
          <p className="mt-6 text-xl text-body leading-relaxed">
            Three sectors. Three trajectories. One platform powering them all.
          </p>
        </AnimatedSection>

        {/* Sector Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectorSteps.map((sector, i) => (
            <SectorCard key={sector.productId} sector={sector} index={i} />
          ))}
        </div>

        {/* Connecting Bar */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 glass glass-shine rounded-3xl p-6 sm:p-8 text-center">
            <p className="text-sm sm:text-base font-medium text-heading">
              One shared intelligence layer.
              <span className="text-brand-primary"> Three sectors transformed. </span>
              That&apos;s the UniSyft advantage.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
