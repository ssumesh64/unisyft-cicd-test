import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Careers at UniSyft",
  description:
    "Join UniSyft and help build intelligent, sector-specific software. Explore open roles in engineering, design, product, and more.",
  openGraph: {
    title: "Careers at UniSyft",
    description: "Build the future of sector-specific software with us.",
    type: "website",
  },
};

const openings = [
  {
    title: "Senior Full Stack Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    color: "#4F6EF7",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote",
    type: "Full-time",
    color: "#A855F7",
  },
  {
    title: "AI/ML Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    color: "#4F6EF7",
  },
  {
    title: "DevOps Engineer",
    team: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    color: "#10B981",
  },
  {
    title: "Technical Writer",
    team: "Product",
    location: "Remote",
    type: "Contract",
    color: "#F59E0B",
  },
];

const perks = [
  {
    icon: "🏠",
    title: "Remote-First",
    description: "Work from anywhere. We're a globally distributed team with async-first communication.",
  },
  {
    icon: "📈",
    title: "Growth Opportunities",
    description: "Learning budget, conference sponsorships, and clear paths to senior roles.",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision coverage for you and your dependents.",
  },
  {
    icon: "🏖️",
    title: "Flexible PTO",
    description: "Unlimited paid time off with a minimum of 3 weeks encouraged per year.",
  },
  {
    icon: "💻",
    title: "Top-Notch Gear",
    description: "MacBook Pro, monitors, and whatever tools you need to do your best work.",
  },
  {
    icon: "🎯",
    title: "Equity",
    description: "Stock options for every employee. We succeed when you succeed.",
  },
];

export default function CareersPage() {
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-heading">
                Build the future with us.
              </h1>
              <p className="mt-6 text-xl text-body leading-relaxed">
                We&apos;re a small, ambitious team building software that matters across education, healthcare, and finance. If that excites you — we&apos;d love to talk.
              </p>
            </AnimatedSection>
          </Container>
        </section>

        {/* Perks */}
        <section className="py-section-lg bg-surface">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-heading">
                Why UniSyft?
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {perks.map((perk, i) => (
                <AnimatedSection key={perk.title} delay={i * 0.06}>
                  <div className="p-6 rounded-2xl bg-background border border-border">
                    <span className="text-2xl">{perk.icon}</span>
                    <h3 className="mt-3 text-base font-semibold text-heading">{perk.title}</h3>
                    <p className="mt-2 text-sm text-body leading-relaxed">{perk.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Open Positions */}
        <section className="py-section-lg">
          <Container>
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-heading">
                Open positions
              </h2>
              <p className="mt-4 text-lg text-body">
                {openings.length} roles across {new Set(openings.map((o) => o.team)).size} teams.
              </p>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-4">
              {openings.map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 0.06}>
                  <div className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-surface border border-border transition-all duration-200 hover:border-brand-primary/30 hover:shadow-sm">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-heading group-hover:text-brand-primary transition-colors">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
                        <span className="inline-flex items-center gap-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: job.color }}
                          />
                          {job.team}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={13} />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={13} />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-muted group-hover:text-brand-primary transition-colors shrink-0 ml-4" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection className="text-center mt-12">
              <p className="text-sm text-muted">
                Don&apos;t see your role? We&apos;re always looking for talented people.
              </p>
              <a
                href="mailto:careers@unisyft.com"
                className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-brand-primary hover:underline"
              >
                Send us your resume
                <ArrowUpRight size={14} />
              </a>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-section-lg bg-surface">
          <Container>
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-heading">
                Not ready to apply?
              </h2>
              <p className="mt-4 text-body">
                Stay connected. Follow us for updates on new roles, product launches, and company news.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center h-12 px-8 text-base font-medium rounded-full bg-brand-primary text-white transition-all duration-300 hover:bg-brand-primary-hover hover:scale-[1.02]"
              >
                Get in Touch
              </Link>
            </AnimatedSection>
          </Container>
        </section>
      </main>
    </>
  );
}
