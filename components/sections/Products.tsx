"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  TrendingUp,
  ArrowUpRight,
  ExternalLink,
  Check,
  X,
  Sparkles,
  Shield,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { products } from "@/lib/products";
import type { Product } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  GraduationCap,
  HeartPulse,
  TrendingUp,
};

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const Icon = iconMap[product.icon];
  const isLive = product.status === "live";
  const accentColor = product.color;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl"
        style={{
          border: `1px solid ${accentColor}25`,
          boxShadow: `0 0 80px ${accentColor}15, 0 25px 50px rgba(0,0,0,0.3)`,
        }}
      >
        {/* Animated gradient border */}
        <div
          className="absolute -inset-[1px] rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${accentColor}50, ${accentColor}10, ${accentColor}30, transparent, ${accentColor}50)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
            borderRadius: "1.5rem",
          }}
        />

        {/* Content */}
        <div className="relative z-10 bg-surface rounded-3xl p-8 sm:p-10 overflow-y-auto overflow-x-hidden product-wizard-scroll max-h-[84vh] w-full border border-transparent">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: `${accentColor}10`,
                  border: `1px solid ${accentColor}15`,
                }}
              >
                {product.id === "edsyft" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/edsyft-dark.png"
                      alt="EdSyft"
                      fill
                      className="object-contain dark:hidden p-3"
                    />
                    <Image
                      src="/edsyft-white.png"
                      alt="EdSyft"
                      fill
                      className="object-contain hidden dark:block p-3"
                    />
                  </div>
                )}
                {product.id !== "edsyft" && Icon && (
                  <span style={{ color: accentColor }}>
                    <Icon size={28} />
                  </span>
                )}
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                  {product.sector}
                </p>
                <h3 className="text-2xl font-bold text-heading">{product.name}</h3>
                {isLive && (
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full mt-1"
                    style={{
                      color: accentColor,
                      backgroundColor: `${accentColor}10`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                    Live
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-muted hover:text-heading hover:bg-surface-hover transition-all duration-200"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Tagline */}
          <p className="text-base text-body leading-relaxed">{product.tagline}</p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {product.highlights.map((h, idx) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
                className="text-center p-3 rounded-2xl"
                style={{
                  backgroundColor: `${accentColor}08`,
                  border: `1px solid ${accentColor}10`,
                }}
              >
                <p className="text-xl font-bold" style={{ color: accentColor }}>{h.metric}</p>
                <p className="text-[11px] text-muted mt-0.5">{h.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-sm text-body/90 leading-relaxed"
          >
            {product.longDescription}
          </motion.p>

          {/* Features */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            {product.features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.05, duration: 0.25 }}
                className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-colors duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: `${accentColor}06`,
                  border: `1px solid ${accentColor}08`,
                }}
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
                <p className="text-[13px] text-body/90">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom stats badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {[
              { icon: Shield, label: "Enterprise Security" },
              { icon: Zap, label: "AI-Powered" },
              { icon: Users, label: `${product.highlights[0]?.metric || ""}+ Users` },
              { icon: BarChart3, label: "Real-Time Analytics" },
            ].map(({ icon: BadgeIcon, label }, idx) => {
              const BIcon = BadgeIcon;
              return (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    color: accentColor,
                    backgroundColor: `${accentColor}08`,
                    border: `1px solid ${accentColor}12`,
                  }}
                >
                  <BIcon size={11} />
                  {label}
                </span>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="mt-8 flex items-center gap-3"
          >
            {product.id === "edsyft" ? (
              <a
                href="https://www.edsyft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-6 py-3 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  color: "#fff",
                  background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
                  boxShadow: `0 4px 20px ${accentColor}40`,
                }}
              >
                Launch EdSyft
                <ExternalLink size={14} />
              </a>
            ) : product.status === "live" ? (
              <a
                href={product.href}
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-6 py-3 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  color: "#fff",
                  background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
                  boxShadow: `0 4px 20px ${accentColor}40`,
                }}
              >
                Explore
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <a
                href="#get-started"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-6 py-3 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const Icon = iconMap[product.icon];
  const isLive = product.status === "live";
  const accentColor = product.color;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative rounded-3xl bg-surface cursor-pointer p-7 sm:p-8 h-full overflow-hidden transition-all duration-200"
      style={{
        border: `1px solid var(--border)`,
      }}
    >
      {/* Hover gradient border */}
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${accentColor}40, ${accentColor}15, transparent, ${accentColor}30)`,
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
        style={{ backgroundColor: `${accentColor}12` }}
      />

      {/* Falling shadow */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-2xl"
        style={{ backgroundColor: `${accentColor}20` }}
      />

      <div className="relative z-10">
        {/* Icon + Status */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="relative w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${accentColor}10`,
              border: `1px solid ${accentColor}15`,
            }}
          >
            {product.id === "edsyft" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/edsyft-dark.png"
                  alt="EdSyft"
                  fill
                  className="object-contain dark:hidden p-2"
                />
                <Image
                  src="/edsyft-white.png"
                  alt="EdSyft"
                  fill
                  className="object-contain hidden dark:block p-2"
                />
              </div>
            )}
            {product.id !== "edsyft" && Icon && (
              <span style={{ color: accentColor }}>
                <Icon size={24} />
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {isLive ? (
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  color: accentColor,
                  backgroundColor: `${accentColor}10`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-surface-hover text-muted">
                Coming Soon
              </span>
            )}
            <ArrowUpRight
              size={16}
              className={`text-muted transition-all duration-300 ${
                isLive ? "opacity-0 group-hover:opacity-100 group-hover:rotate-45" : "opacity-50"
              }`}
            />
          </div>
        </div>

        {/* Content */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-1.5">
          {product.sector}
        </p>
        <h3 className="text-xl font-bold text-heading">{product.name}</h3>
        <p className="mt-1.5 text-sm text-body/90 leading-relaxed">
          {product.tagline}
        </p>

        {/* Highlights */}
        {product.highlights.length > 0 && (
          <div className="mt-5 flex gap-5">
            {product.highlights.slice(0, 3).map((h) => (
              <div key={h.label}>
                <p className="text-lg font-bold" style={{ color: accentColor }}>{h.metric}</p>
                <p className="text-[11px] text-muted mt-0.5">{h.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Products() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const modalOpen = activeProduct !== null;

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape" && modalOpen) {
        setActiveProduct(null);
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  return (
    <section id="products" className="py-section-lg bg-surface">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl leading-tight">
            Built for your sector.
          </h2>
          <p className="mt-6 text-xl text-body leading-relaxed">
            Purpose-built for each industry — powered by a shared
            intelligence layer.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.1}>
              <ProductCard
                product={product}
                onClick={() => setActiveProduct(product)}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {activeProduct && (
          <ProductModal
            product={activeProduct}
            onClose={() => setActiveProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
