import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Globe, Target, Lightbulb, Users, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About UniSyft",
  description:
    "UniSyft builds intelligent, sector-specific software across education, healthcare, and finance. Learn about our mission, values, and the team behind the platform.",
  openGraph: {
    title: "About UniSyft",
    description: "Intelligent software for every sector.",
    type: "website",
  },
};

const values = [
  {
    icon: Target,
    title: "Sector-First Thinking",
    description: "Every industry has unique challenges. We build software that understands those differences deeply, not superficially.",
    color: "#4F6EF7",
  },
  {
    icon: Lightbulb,
    title: "AI as Foundation",
    description: "Artificial intelligence isn't a feature we bolt on — it's the foundation every product is built from the ground up on.",
    color: "#A855F7",
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description: "Technology serves people. We design experiences that empower users, not overwhelm them with complexity.",
    color: "#10B981",
  },
  {
    icon: Heart,
    title: "Impact Over Scale",
    description: "We measure success by the real-world outcomes our products create, not just the number of users on the platform.",
    color: "#F59E0B",
  },
];

const stats = [
  { value: "3", suffix: "", label: "Sectors" },
  { value: "500", suffix: "+", label: "Institutions" },
  { value: "50K", suffix: "+", label: "Users" },
  { value: "99.9", suffix: "%", label: "Uptime" },
];

export default function AboutPage() {
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
        <section className="py-20 sm:py-28">
          <Container>
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-6">
                <Globe size={14} className="text-brand-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
                  About Us
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-heading leading-tight">
                One platform.
                <br />
                <span className="text-muted/60">Every sector.</span>
              </h1>
              <p className="mt-8 text-xl text-body leading-relaxed max-w-2xl mx-auto">
                UniSyft is building the future of sector-specific software. We believe that every industry deserves intelligent, adaptive tools — and we&apos;re making that a reality, one sector at a time.
              </p>
            </AnimatedSection>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-section-lg bg-surface">
          <Container>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div className="text-center p-6 rounded-2xl border border-border-subtle">
                    <p className="text-4xl font-bold text-brand-primary">
                      {stat.value}{stat.suffix}
                    </p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-section-lg">
          <Container>
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-heading">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg text-body leading-relaxed">
                  The world&apos;s most important industries — education, healthcare, finance — are being held back by generic software that doesn&apos;t understand their unique challenges. UniSyft exists to change that.
                </p>
                <p className="mt-4 text-lg text-body leading-relaxed">
                  We build intelligent, sector-native platforms that combine deep domain expertise with cutting-edge AI. Every product we ship is designed from first principles for the people who use it — educators, clinicians, financial professionals — not retrofitted from generic SaaS templates.
                </p>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-section-lg bg-surface">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-heading">
                What drives us.
              </h2>
              <p className="mt-4 text-lg text-body">
                The principles behind every product we build.
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <AnimatedSection key={value.title} delay={i * 0.1}>
                    <div className="p-8 rounded-3xl bg-background border border-border h-full">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${value.color}10`, border: `1px solid ${value.color}15` }}
                      >
                        <Icon size={22} style={{ color: value.color }} />
                      </div>
                      <h3 className="text-lg font-semibold text-heading">{value.title}</h3>
                      <p className="mt-3 text-sm text-body/80 leading-relaxed">{value.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-section-lg">
          <Container>
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-heading">
                Want to work with us?
              </h2>
              <p className="mt-4 text-body">
                Whether you&apos;re an institution looking for a better platform or a talent wanting to build the future — we&apos;d love to hear from you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full bg-brand-primary text-white transition-all duration-300 hover:bg-brand-primary-hover hover:scale-[1.02]"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full border border-border text-heading transition-all duration-300 hover:bg-surface-hover"
                >
                  Explore Products
                </Link>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>
    </>
  );
}
