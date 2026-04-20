"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, HeartPulse, TrendingUp, Sparkles, Send, CheckCircle, AlertCircle, Loader2, Lightbulb, ChevronDown, Check } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { products } from "@/lib/products";

type FormStatus = "idle" | "submitting" | "success" | "error";

const INDUSTRY_OPTIONS = ["Education", "Healthcare", "Finance", "Technology", "Government", "Other"];
const JOB_TITLE_OPTIONS = ["CEO / Founder", "CTO / VP Engineering", "Manager / Director", "Developer / Engineer", "Educator / Academic", "Healthcare Professional", "Finance Professional", "Designer / UX", "Operations / Admin", "Student / Intern", "Other"];

const INQUIRY_OPTIONS = ["Request a Demo", "Pricing Inquiry", "Partnership", "General Inquiry", "Technical Support", "Other"];
const REFERRAL_OPTIONS = ["Google Search", "Social Media", "Colleague Referral", "Conference / Event", "Blog / Article", "Other"];

const productCards = products.map((p) => ({
  id: p.id,
  name: p.name,
  sector: p.sector,
  color: p.color,
  icon: p.icon,
}));

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  GraduationCap,
  HeartPulse,
  TrendingUp,
};

function getInputClasses(hasError: boolean) {
  return `w-full rounded-xl border bg-background dark:bg-zinc-900/90 px-4 py-3 text-sm text-heading placeholder:text-muted/70 transition-all duration-200 focus:outline-none focus:ring-2 ${
    hasError
      ? "border-red-400 dark:border-red-500 focus:border-red-400 focus:ring-red-400/20"
      : "border-border dark:border-zinc-700/50 focus:border-brand-primary focus:ring-brand-primary/20"
  }`;
}

function SelectField({ id, label, required, value, onChange, disabled, hasError, error, options, placeholder }: {
  id: string; label: string; required?: boolean; value: string;
  onChange: (value: string) => void; disabled?: boolean;
  hasError?: boolean; error?: string; options: string[]; placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectOption(opt: string) {
    onChange(opt);
    setOpen(false);
    setHoveredIdx(-1);
  }

  const selectedLabel = value || "";

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-heading mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(!open)}
        className={`w-full rounded-xl border text-left px-4 py-3 text-sm transition-all duration-200 flex items-center justify-between gap-2 ${
          hasError
            ? "border-red-400 dark:border-red-500 ring-2 ring-red-400/20 bg-red-400/[0.02]"
            : open
              ? "border-brand-primary ring-2 ring-brand-primary/20 bg-brand-primary/[0.02]"
              : "border-border dark:border-zinc-700/50 bg-background dark:bg-zinc-900/90 hover:border-muted/60 dark:hover:border-zinc-600"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span className={selectedLabel ? "text-heading" : "text-muted/70"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-brand-primary" : "text-muted"
          }`}
        />
      </button>
      <AnimatePresence>
        {open && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-50 mt-1.5 w-full rounded-xl border border-border dark:border-zinc-700/60 bg-surface dark:bg-zinc-900 shadow-lg shadow-black/[0.08] dark:shadow-black/[0.3] overflow-hidden"
          >
            <div className="py-1 max-h-60 overflow-y-auto select-scroll">
              {options.map((opt, idx) => {
                const isSelected = value === opt;
                const isHovered = hoveredIdx === idx;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => selectOption(opt)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(-1)}
                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between gap-2 transition-colors duration-100 ${
                      isSelected
                        ? "bg-brand-primary/10 text-brand-primary font-medium"
                        : isHovered
                          ? "bg-surface-hover text-heading"
                          : "text-body"
                    }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <Check size={14} className="shrink-0 text-brand-primary" strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-16"
    >
      <div className="relative inline-flex items-center justify-center mb-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="absolute w-24 h-24 rounded-full blur-xl"
          style={{ backgroundColor: "rgba(16, 185, 129, 0.15)" }}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", border: "2px solid #10B981" }}
        >
          <CheckCircle className="text-brand-accent" size={40} strokeWidth={1.5} />
        </motion.div>
      </div>
      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl font-semibold text-heading">
        Thank you for reaching out!
      </motion.h3>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-3 text-body">
        We&apos;ve received your inquiry. Our team will respond within 24 hours.
      </motion.p>
      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} onClick={onReset} className="mt-8 text-sm text-brand-primary hover:underline">
        Submit another inquiry
      </motion.button>
    </motion.div>
  );
}

export function GetStarted() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [customProduct, setCustomProduct] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    job_title: "",
    inquiry_type: "",
    referral: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!formData.full_name.trim() || formData.full_name.trim().length < 2) errs.full_name = "Please enter your full name.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = "Please enter a valid email.";
    if (formData.phone.trim() && !/^\+?\d[\d\s\-]{6,14}$/.test(formData.phone.trim())) errs.phone = "Enter a valid phone number (e.g. +91 98765 43210).";
    if (!formData.company.trim()) errs.company = "Please enter your organization name.";
    if (!formData.industry) errs.industry = "Please select an industry.";
    if (!formData.job_title) errs.job_title = "Please select your job title.";
    if (!formData.inquiry_type) errs.inquiry_type = "Please select an inquiry type.";
    if (selectedProduct === "custom" && !customProduct.trim()) errs.customProduct = "Please describe your custom product idea.";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const productId = selectedProduct === "custom" ? "all" : (selectedProduct || "all");
    const payload = {
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone.trim() || undefined,
      job_title: formData.job_title,
      company: formData.company,
      product_interest: productId,
      message: selectedProduct === "custom" ? customProduct : formData.message || undefined,
    };

    // Append extra context to message
    const extras: string[] = [];
    if (formData.industry) extras.push(`Industry: ${formData.industry}`);
    if (formData.inquiry_type) extras.push(`Inquiry: ${formData.inquiry_type}`);
    if (formData.referral) extras.push(`Referral: ${formData.referral}`);
    if (extras.length > 0) {
      payload.message = extras.join(" | ") + (payload.message ? `\n${payload.message}` : "");
    }

    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  }

  function handleReset() {
    setStatus("idle");
    setErrorMessage("");
    setFieldErrors({});
    setSelectedProduct("");
    setCustomProduct("");
    setFormData({ full_name: "", email: "", phone: "", company: "", industry: "", job_title: "", inquiry_type: "", referral: "", message: "" });
  }

  return (
    <section id="get-started" className="py-section-lg relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] blur-[150px] pointer-events-none bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent" />

      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-8">
            <Sparkles size={14} className="text-brand-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">Get Started</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl leading-tight">
            Ready to transform
            <br />
            <span className="text-muted/70">your sector?</span>
          </h2>
          <p className="mt-6 text-lg text-body leading-relaxed max-w-xl mx-auto">
            Tell us about your needs and we&apos;ll show you how UniSyft can help.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-12 max-w-3xl mx-auto">
          <motion.div id="wizard-card" className="group relative rounded-3xl bg-surface dark:bg-zinc-900/80 p-6 sm:p-8 lg:p-10" style={{ border: "1px solid var(--border)" }}>
            {/* Glass shine */}
            <div className="absolute top-0 left-0 right-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

            {status === "success" ? (
              <SuccessState onReset={handleReset} />
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10">
                {/* Error */}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                    <AlertCircle className="flex-shrink-0 text-red-400 mt-0.5" size={18} />
                    <div>
                      <p className="text-sm text-red-400">{errorMessage}</p>
                      <button onClick={() => { setStatus("idle"); setErrorMessage(""); }} className="mt-2 text-xs text-red-400/80 underline hover:text-red-400">Try again</button>
                    </div>
                  </motion.div>
                )}

                {/* Section 1 — Personal */}
                <div className="pb-6 border-b border-border">
                  <h3 className="text-sm font-semibold text-heading mb-5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-brand-primary/10 flex items-center justify-center"><span className="text-brand-primary text-xs font-bold">1</span></div>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-medium text-heading mb-2">Full Name <span className="text-red-400">*</span></label>
                      <input id="full_name" name="full_name" type="text" required placeholder="Jane Smith" value={formData.full_name} onChange={handleChange} disabled={status === "submitting"} className={getInputClasses(!!fieldErrors.full_name)} autoComplete="name" />
                      {fieldErrors.full_name && <p className="mt-1.5 text-xs text-red-400">{fieldErrors.full_name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">Email Address <span className="text-red-400">*</span></label>
                      <input id="email" name="email" type="email" required placeholder="jane@company.com" value={formData.email} onChange={handleChange} disabled={status === "submitting"} className={getInputClasses(!!fieldErrors.email)} autoComplete="email" />
                      {fieldErrors.email && <p className="mt-1.5 text-xs text-red-400">{fieldErrors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-heading mb-2">Phone <span className="text-muted text-xs">(optional)</span></label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} disabled={status === "submitting"} className={getInputClasses(!!fieldErrors.phone)} autoComplete="tel" />
                      {fieldErrors.phone && <p className="mt-1.5 text-xs text-red-400">{fieldErrors.phone}</p>}
                    </div>
                    <SelectField id="job_title" label="Job Title" required value={formData.job_title} onChange={(v) => { setFormData(p => ({ ...p, job_title: v })); if (fieldErrors.job_title) setFieldErrors(p => { const n = { ...p }; delete n.job_title; return n; }); }} disabled={status === "submitting"} hasError={!!fieldErrors.job_title} error={fieldErrors.job_title} options={JOB_TITLE_OPTIONS} placeholder="Select your role" />
                  </div>
                </div>

                {/* Section 2 — Company */}
                <div className="py-6 border-b border-border">
                  <h3 className="text-sm font-semibold text-heading mb-5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-brand-primary/10 flex items-center justify-center"><span className="text-brand-primary text-xs font-bold">2</span></div>
                    Your Organization
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-heading mb-2">Organization <span className="text-red-400">*</span></label>
                      <input id="company" name="company" type="text" required placeholder="Acme Inc." value={formData.company} onChange={handleChange} disabled={status === "submitting"} className={getInputClasses(!!fieldErrors.company)} autoComplete="organization" />
                      {fieldErrors.company && <p className="mt-1.5 text-xs text-red-400">{fieldErrors.company}</p>}
                    </div>
                    <SelectField id="industry" label="Industry" required value={formData.industry} onChange={(v) => { setFormData(p => ({ ...p, industry: v })); if (fieldErrors.industry) setFieldErrors(p => { const n = { ...p }; delete n.industry; return n; }); }} disabled={status === "submitting"} hasError={!!fieldErrors.industry} error={fieldErrors.industry} options={INDUSTRY_OPTIONS} placeholder="Select your industry" />
                  </div>
                </div>

                {/* Section 3 — Product Interest */}
                <div className="py-6 border-b border-border">
                  <h3 className="text-sm font-semibold text-heading mb-5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-brand-primary/10 flex items-center justify-center"><span className="text-brand-primary text-xs font-bold">3</span></div>
                    Which product interests you?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {productCards.map((p) => {
                      const Icon = iconMap[p.icon];
                      const isSelected = selectedProduct === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedProduct(isSelected ? "" : p.id)}
                          className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200 ${
                            isSelected
                              ? "border-brand-primary/40 bg-brand-primary/5 shadow-sm"
                              : "border-border hover:border-muted/50 hover:bg-surface-hover"
                          }`}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                            style={{ backgroundColor: `${p.color}10`, border: `1px solid ${p.color}20` }}
                          >
                            {Icon ? (
                              <span style={{ color: p.color }}><Icon size={20} /></span>
                            ) : null}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-heading truncate">{p.name}</p>
                            <p className="text-[11px] text-muted">{p.sector}</p>
                          </div>
                          {isSelected && (
                            <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-brand-primary">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                          )}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(selectedProduct === "custom" ? "" : "custom")}
                      className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200 ${
                        selectedProduct === "custom"
                          ? "border-brand-primary/40 bg-brand-primary/5 shadow-sm"
                          : "border-dashed border-muted/30 hover:border-muted/60 hover:bg-surface-hover"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-surface-hover flex items-center justify-center shrink-0">
                        <Lightbulb size={18} className="text-muted" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-heading">Custom Product</p>
                        <p className="text-[11px] text-muted">Describe your idea</p>
                      </div>
                    </button>
                  </div>
                  {selectedProduct === "custom" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-3">
                      <textarea name="custom_product" rows={3} placeholder="Tell us about the product you'd like to build..." value={customProduct} onChange={(e) => setCustomProduct(e.target.value)} disabled={status === "submitting"} className="w-full rounded-xl border border-border dark:border-zinc-700/50 bg-background dark:bg-zinc-900/90 px-4 py-3 text-sm text-heading placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:border-brand-primary focus:ring-brand-primary/20 resize-none" />
                      {fieldErrors.customProduct && <p className="mt-1.5 text-xs text-red-400">{fieldErrors.customProduct}</p>}
                    </motion.div>
                  )}
                </div>

                {/* Section 4 — Details */}
                <div className="pt-6">
                  <h3 className="text-sm font-semibold text-heading mb-5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-brand-primary/10 flex items-center justify-center"><span className="text-brand-primary text-xs font-bold">4</span></div>
                    Additional Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <SelectField id="inquiry_type" label="Inquiry Type" required value={formData.inquiry_type} onChange={(v) => { setFormData(p => ({ ...p, inquiry_type: v })); if (fieldErrors.inquiry_type) setFieldErrors(p => { const n = { ...p }; delete n.inquiry_type; return n; }); }} disabled={status === "submitting"} hasError={!!fieldErrors.inquiry_type} error={fieldErrors.inquiry_type} options={INQUIRY_OPTIONS} placeholder="What can we help with?" />
                    <SelectField id="referral" label="How did you hear about us?" value={formData.referral} onChange={(v) => setFormData(p => ({ ...p, referral: v }))} disabled={status === "submitting"} options={REFERRAL_OPTIONS} placeholder="Select an option" />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">Message <span className="text-muted text-xs">(optional)</span></label>
                    <textarea id="message" name="message" rows={4} placeholder="Any additional details..." value={formData.message} onChange={handleChange} disabled={status === "submitting"} className={`${getInputClasses(false)} resize-none`} />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-2 h-12 px-10 text-sm font-medium rounded-full border-2 border-border text-heading transition-all duration-300 hover:bg-surface-hover active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <><Loader2 className="animate-spin" size={16} /> Submitting...</>
                    ) : (
                      <><Send size={16} /> Submit Inquiry</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
