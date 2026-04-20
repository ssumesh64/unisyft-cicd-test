import type { SectorStep } from "@/types";

export const sectorSteps: SectorStep[] = [
  {
    productId: "edsyft",
    sector: "EdTech",
    marketInsight: {
      stat: "$350B+",
      statLabel: "Global EdTech market by 2030",
      narrative:
        "Education is shifting from one-size-fits-all instruction to AI-driven personalization at scale. With 1.4 billion students worldwide and a widening skills gap, institutions need intelligent systems that adapt in real time.",
    },
    trends: ["AI Personalization", "Global Skills Gap", "Lifelong Learning"],
    unisyftResponse: {
      headline: "Adaptive intelligence for every learner.",
      bullets: [
        "AI learning paths that adapt in real time",
        "Automated assessment and grading",
        "Institutional analytics and reporting",
      ],
    },
  },
  {
    productId: "healthsyft",
    sector: "HealthTech",
    marketInsight: {
      stat: "$46B+",
      statLabel: "AI diagnostics market by 2028",
      narrative:
        "Healthcare systems are drowning in administrative complexity while patients demand smarter, faster care. Regulatory mandates for interoperability and the explosion of digital health data are creating both pressure and opportunity.",
    },
    trends: ["AI Diagnostics", "Interoperability Mandates", "Digital Health Adoption"],
    unisyftResponse: {
      headline: "Automating what slows care down.",
      bullets: [
        "HIPAA-compliant clinical workflows",
        "Patient data unification across systems",
        "Predictive care pathway analytics",
      ],
    },
  },
  {
    productId: "finsyft",
    sector: "FinTech",
    marketInsight: {
      stat: "$330B+",
      statLabel: "Open banking market by 2030",
      narrative:
        "Financial services are being reshaped by open banking APIs, AI-powered compliance, and embedded finance. Institutions that cannot automate regulatory reporting and real-time risk analysis will fall behind.",
    },
    trends: ["Open Banking", "AI Compliance", "Embedded Finance"],
    unisyftResponse: {
      headline: "Financial intelligence, automatic.",
      bullets: [
        "Automated regulatory compliance",
        "Real-time portfolio risk analytics",
        "Intelligent fraud detection",
      ],
    },
  },
];
