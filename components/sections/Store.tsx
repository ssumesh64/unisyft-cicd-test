"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Building2,
  Landmark,
  Stethoscope,
  BookOpen,
  Briefcase,
} from "lucide-react";

const trustItems = [
  { name: "Pacific University", icon: GraduationCap, type: "Education" },
  { name: "MedCore Health", icon: Stethoscope, type: "Healthcare" },
  { name: "FinEdge Capital", icon: TrendingUp, type: "Finance" },
  { name: "Horizon College", icon: BookOpen, type: "Education" },
  { name: "HealthBridge", icon: HeartPulse, type: "Healthcare" },
  { name: "NextGen Academy", icon: GraduationCap, type: "Education" },
  { name: "Apex Financial", icon: Landmark, type: "Finance" },
  { name: "CareFirst Systems", icon: Building2, type: "Healthcare" },
  { name: "VistaBank", icon: Briefcase, type: "Finance" },
  { name: "GlobalEd Institute", icon: BookOpen, type: "Education" },
];

export function Store() {
  const doubleItems = [...trustItems, ...trustItems];

  return (
    <section id="store-section" className="py-10 sm:py-14 overflow-hidden border-y border-border-subtle">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium text-muted uppercase tracking-[0.2em] mb-10"
        >
          Trusted by 500+ institutions across industries
        </motion.p>
      </Container>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubleItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${i}`}
                className="mx-4 sm:mx-6 flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface border border-border-subtle"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-primary/8 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-muted" />
                </div>
                <div>
                  <p className="text-sm font-medium text-heading whitespace-nowrap">
                    {item.name}
                  </p>
                  <p className="text-[10px] font-medium text-muted uppercase tracking-wider">
                    {item.type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
