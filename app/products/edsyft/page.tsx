import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Check, ExternalLink, ArrowLeft, Users, BarChart3, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "EdSyft — AI-Powered Education Platform",
  description:
    "EdSyft is UniSyft's flagship AI-native education platform. Adaptive learning, real-time analytics, and personalized content for 50K+ learners across 200+ institutions.",
  openGraph: {
    title: "EdSyft — AI-Powered Education Platform",
    description:
      "Transform education with intelligent adaptive learning paths, real-time analytics, and personalized content delivery.",
    type: "website",
  },
};

const product = products.find((p) => p.id === "edsyft")!;
const accentColor = product.color;

export default function EdSyftPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="mx-auto max-w-content px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="relative h-8 w-36 shrink-0 flex items-center">
            <Image
              src="/unisyft_logo_name_black(1).png"
              alt="UniSyft"
              fill
              className="object-contain dark:hidden"
            />
            <Image
              src="/unisyft_logo_name_white(1).png"
              alt="UniSyft"
              fill
              className="object-contain hidden dark:block"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-heading transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
            style={{ background: accentColor }}
          />
          <Container>
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: `${accentColor}10`, border: `1px solid ${accentColor}20` }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: accentColor }}>
                  Live Product
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden" style={{ backgroundColor: `${accentColor}10`, border: `1px solid ${accentColor}15` }}>
                  <Image src="/edsyft-dark.png" alt="EdSyft" fill className="object-contain dark:hidden p-3" />
                  <Image src="/edsyft-white.png" alt="EdSyft" fill className="object-contain hidden dark:block p-3" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-heading leading-tight">
                {product.name}
              </h1>
              <p className="mt-2 text-lg font-medium" style={{ color: accentColor }}>
                {product.tagline}
              </p>
              <p className="mt-6 text-lg text-body leading-relaxed max-w-2xl mx-auto">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.edsyft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-8 text-base font-medium rounded-full text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`, boxShadow: `0 4px 24px ${accentColor}40` }}
                >
                  Launch EdSyft
                  <ExternalLink size={16} />
                </a>
                <Link
                  href="/#get-started"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full border border-border text-heading transition-all duration-300 hover:bg-surface-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Highlights */}
        <section className="py-section-lg bg-surface">
          <Container>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {product.highlights.map((h, i) => (
                <AnimatedSection key={h.label} delay={i * 0.1}>
                  <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: `${accentColor}06`, border: `1px solid ${accentColor}10` }}>
                    <p className="text-3xl sm:text-4xl font-bold" style={{ color: accentColor }}>{h.metric}</p>
                    <p className="mt-1 text-sm text-muted">{h.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* About */}
        <section className="py-section-lg">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-heading">
                  Redefining education technology.
                </h2>
                <p className="mt-6 text-lg text-body leading-relaxed">
                  {product.longDescription}
                </p>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="py-section-lg bg-surface">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-heading">
                Everything you need, built in.
              </h2>
              <p className="mt-4 text-lg text-body">
                Powerful features designed for modern institutions.
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {product.features.map((feature, i) => (
                <AnimatedSection key={feature} delay={i * 0.06}>
                  <div className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:scale-[1.01]" style={{ backgroundColor: `${accentColor}04`, border: `1px solid ${accentColor}08` }}>
                    <div className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <p className="text-base text-body">{feature}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Trust Badges */}
        <section className="py-section-lg">
          <Container>
            <AnimatedSection className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { icon: Shield, label: "Enterprise Security" },
                { icon: Zap, label: "AI-Powered" },
                { icon: Users, label: `${product.highlights[0]?.metric}+ Users` },
                { icon: BarChart3, label: "Real-Time Analytics" },
              ].map(({ icon: BIcon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted">
                  <BIcon size={16} className="text-brand-primary" />
                  {label}
                </div>
              ))}
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-section-lg bg-surface">
          <Container>
            <div className="text-center max-w-2xl mx-auto p-10 rounded-3xl" style={{ border: `1px solid ${accentColor}15` }}>
              <GraduationCap size={40} className="mx-auto mb-4" style={{ color: accentColor }} />
              <h2 className="text-2xl sm:text-3xl font-semibold text-heading">
                Ready to transform learning?
              </h2>
              <p className="mt-4 text-body">
                Join 200+ institutions already using EdSyft to deliver better outcomes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.edsyft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-8 text-base font-medium rounded-full text-white transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`, boxShadow: `0 4px 24px ${accentColor}40` }}
                >
                  Launch EdSyft
                  <ExternalLink size={16} />
                </a>
                <Link
                  href="/#get-started"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full border border-border text-heading transition-all duration-300 hover:bg-surface-hover"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
