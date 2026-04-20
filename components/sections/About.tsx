"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: 3, suffix: "", label: "Sectors", format: "integer" as const },
  { value: 500, suffix: "+", label: "Institutions", format: "integer" as const },
  { value: 99.9, suffix: "%", label: "Uptime", format: "decimal" as const },
  { value: 24, suffix: "/7", label: "Support", format: "integer" as const },
];

function AnimatedCounter({
  target,
  suffix,
  format,
}: {
  target: number;
  suffix: string;
  format: "integer" | "decimal";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = eased * target;
      start = current;

      if (format === "decimal") {
        setCount(parseFloat(current.toFixed(1)));
      } else {
        setCount(Math.round(current));
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [inView, target, format]);

  const display =
    format === "decimal" ? count.toFixed(1) : Math.round(count).toString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-section-lg">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl leading-tight">
            One platform.
            <br />
            Every sector.
          </h2>
          <p className="mt-8 text-xl text-body leading-relaxed">
            UniSyft is building the future of sector-specific software. We
            believe that every industry deserves intelligent, adaptive tools —
            and we&apos;re making that a reality, one sector at a time.
          </p>
        </AnimatedSection>

        <div className="mt-20 grid grid-cols-2 gap-0 divide-x divide-border sm:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="text-center py-8 cursor-default"
              >
                <p className="text-5xl font-bold text-heading lg:text-6xl">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    format={stat.format}
                  />
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
