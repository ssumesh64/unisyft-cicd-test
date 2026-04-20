"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email.trim())) errs.email = "Please enter a valid email.";
    if (!formData.message.trim() || formData.message.trim().length < 10) errs.message = "Please enter a message (at least 10 characters).";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          message: formData.message,
          job_title: "General Inquiry",
          company: "N/A",
          product_interest: "all",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  }

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
          <div className="mx-auto max-w-content px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-heading">
              Get in touch.
            </h1>
            <p className="mt-6 text-xl text-body leading-relaxed max-w-xl mx-auto">
              Have a question, want a demo, or just want to say hello? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-section-lg">
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-heading mb-6">Contact Information</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-heading">Email</p>
                        <p className="text-sm text-muted">hello@unisyft.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-brand-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-heading">Location</p>
                        <p className="text-sm text-muted">Remote-first, global team</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-border-subtle bg-surface">
                  <h3 className="text-sm font-semibold text-heading mb-2">Product Inquiries</h3>
                  <p className="text-sm text-body leading-relaxed">
                    Interested in a specific product? Visit the product page or check out our multi-step form on the homepage to tell us exactly what you need.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <Link href="/products/edsyft" className="text-sm text-brand-primary hover:underline">EdSyft →</Link>
                    <Link href="/#products" className="text-sm text-brand-primary hover:underline">All Products →</Link>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="rounded-3xl bg-surface border border-border p-6 sm:p-8 lg:p-10">
                  {status === "success" ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: "rgba(16,185,129,0.1)", border: "2px solid #10B981" }}>
                        <CheckCircle className="text-brand-accent" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-heading">Message sent!</h3>
                      <p className="mt-2 text-body">We&apos;ll get back to you within 24 hours.</p>
                      <button
                        onClick={() => { setStatus("idle"); setFormData({ name: "", email: "", message: "" }); }}
                        className="mt-6 text-sm text-brand-primary hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {status === "error" && (
                        <div className="flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                          <AlertCircle className="text-red-400 mt-0.5 shrink-0" size={18} />
                          <div>
                            <p className="text-sm text-red-400">{errorMsg}</p>
                            <button type="button" onClick={() => { setStatus("idle"); setErrorMsg(""); }} className="mt-1 text-xs text-red-400/80 underline hover:text-red-400">
                              Try again
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">Name <span className="text-red-400">*</span></label>
                          <input
                            id="name" name="name" type="text" required
                            placeholder="Your name"
                            value={formData.name} onChange={handleChange}
                            disabled={status === "submitting"}
                            className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-heading placeholder:text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 ${errors.name ? "border-red-400 focus:ring-red-400/20" : "border-border focus:border-brand-primary focus:ring-brand-primary/20"}`}
                            autoComplete="name"
                          />
                          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">Email <span className="text-red-400">*</span></label>
                          <input
                            id="email" name="email" type="email" required
                            placeholder="you@company.com"
                            value={formData.email} onChange={handleChange}
                            disabled={status === "submitting"}
                            className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-heading placeholder:text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 ${errors.email ? "border-red-400 focus:ring-red-400/20" : "border-border focus:border-brand-primary focus:ring-brand-primary/20"}`}
                            autoComplete="email"
                          />
                          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">Message <span className="text-red-400">*</span></label>
                        <textarea
                          id="message" name="message" rows={6}
                          placeholder="Tell us about your needs..."
                          value={formData.message} onChange={handleChange}
                          disabled={status === "submitting"}
                          className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-heading placeholder:text-muted/60 transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${errors.message ? "border-red-400 focus:ring-red-400/20" : "border-border focus:border-brand-primary focus:ring-brand-primary/20"}`}
                        />
                        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                      </div>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="inline-flex items-center gap-2 h-12 px-8 text-base font-medium rounded-full text-white transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ background: "linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))", boxShadow: "0 4px 20px var(--brand-primary)40" }}
                      >
                        {status === "submitting" ? (
                          <><Loader2 className="animate-spin" size={18} /> Sending...</>
                        ) : (
                          <><Send size={18} /> Send Message</>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
