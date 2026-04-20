"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-orb hero-orb-1 absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{
            background: "var(--hero-gradient-from)",
            top: "10%",
            left: "15%",
          }}
        />
        <div
          className="hero-orb hero-orb-2 absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "var(--hero-gradient-to)",
            bottom: "10%",
            right: "15%",
          }}
        />
        <div
          className="hero-orb hero-orb-3 absolute w-[350px] h-[350px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: "var(--brand-accent)",
            top: "50%",
            left: "55%",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none hero-grid" />

      <Container className="relative z-10 py-24 sm:py-32 md:py-40 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-8"
        >
          <motion.h1
            variants={item}
            className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]"
          >
            Intelligent software for{" "}
            <span className="bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">
              every sector
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-lg text-lg text-body leading-relaxed sm:text-xl md:text-2xl font-normal"
          >
            AI-powered solutions across education, healthcare, and finance.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-5 mt-4"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full bg-brand-primary text-white transition-all duration-300 hover:bg-brand-primary-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Products
            </a>
            <a
              href="#intelligence"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full border border-border text-heading transition-all duration-300 hover:bg-surface-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              Discover AI
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#store-section"
            className="flex flex-col items-center gap-2 text-muted hover:text-heading transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
