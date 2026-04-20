"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { testimonials } from "@/lib/testimonials";

export function Voices() {
  return (
    <section id="voices" className="py-section-lg bg-surface">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl leading-tight">
            Voices from our partners.
          </h2>
          <p className="mt-6 text-lg text-body leading-relaxed">
            Hear from the institutions transforming their operations with UniSyft.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl bg-background p-8 h-full flex flex-col"
                style={{ border: "1px solid var(--border)" }}
              >
                {/* Hover gradient border */}
                <div
                  className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.avatarColor}30, transparent, ${testimonial.avatarColor}15)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                    borderRadius: "1.5rem",
                  }}
                />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className={
                        idx < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-transparent text-border"
                      }
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-body leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: testimonial.avatarColor }}
                  >
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
