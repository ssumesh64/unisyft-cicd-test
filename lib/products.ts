import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "edsyft",
    name: "EdSyft",
    sector: "Education",
    tagline: "AI-powered learning for the next generation.",
    description:
      "Transforms education with intelligent adaptive learning paths, real-time analytics, and personalized content delivery.",
    longDescription:
      "EdSyft is UniSyft's flagship product — a comprehensive AI-native education platform built to empower institutions, educators, and learners. From adaptive assessments that meet students where they are, to real-time dashboards that give educators actionable insights, EdSyft redefines what modern education technology looks like.",
    color: "#A855F7",
    href: "/products/edsyft",
    status: "live",
    icon: "GraduationCap",
    highlights: [
      { metric: "50K+", label: "Active Learners" },
      { metric: "40%", label: "Better Completion" },
      { metric: "200+", label: "Institutions" },
      { metric: "3x", label: "Faster Grading" },
    ],
    features: [
      "Adaptive learning paths powered by AI",
      "Real-time student performance analytics",
      "Automated assessment & grading engine",
      "Personalized content recommendations",
      "Collaborative classrooms & live sessions",
      "Institutional dashboard & reporting",
      "LMS & SIS integrations (Canvas, Moodle, Google Classroom)",
      "Mobile-first learning experience",
    ],
  },
  {
    id: "healthsyft",
    name: "HealthSyft",
    sector: "Healthcare",
    tagline: "Smarter care, better outcomes.",
    description:
      "Streamlining clinical workflows and patient data management with AI-driven insights for healthcare providers.",
    longDescription:
      "HealthSyft is designed to reduce administrative burden on healthcare professionals while improving patient outcomes through intelligent automation and predictive analytics. Built with HIPAA compliance at its core.",
    color: "#3B82F6",
    href: "#",
    status: "coming-soon",
    icon: "HeartPulse",
    highlights: [
      { metric: "HIPAA", label: "Compliant" },
      { metric: "60%", label: "Less Admin Time" },
      { metric: "2026", label: "Expected Launch" },
    ],
    features: [
      "AI-powered clinical decision support",
      "Patient data unification across systems",
      "Predictive care pathway analytics",
      "Automated scheduling & billing",
    ],
  },
  {
    id: "finsyft",
    name: "FinSyft",
    sector: "Finance",
    tagline: "Financial intelligence, simplified.",
    description:
      "Automated compliance, real-time analytics, and intelligent reporting for modern financial institutions.",
    longDescription:
      "FinSyft brings intelligent automation to financial operations — from regulatory compliance and fraud detection to portfolio analytics and investor reporting. Enterprise-grade security built in.",
    color: "#10B981",
    href: "#",
    status: "coming-soon",
    icon: "TrendingUp",
    highlights: [
      { metric: "SOC 2", label: "Certified" },
      { metric: "90%", label: "Faster Reporting" },
      { metric: "2026", label: "Expected Launch" },
    ],
    features: [
      "Automated regulatory compliance engine",
      "Real-time portfolio risk analytics",
      "Intelligent fraud detection system",
      "Custom investor reporting dashboards",
    ],
  },
];
