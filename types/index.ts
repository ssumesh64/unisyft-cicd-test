export type ProductStatus = "live" | "beta" | "coming-soon";

export interface ProductHighlight {
  metric: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  sector: string;
  tagline: string;
  description: string;
  longDescription: string;
  color: string;
  href: string;
  status: ProductStatus;
  icon: string;
  highlights: ProductHighlight[];
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarColor: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MarketInsight {
  stat: string;
  statLabel: string;
  narrative: string;
}

export interface UniSyftResponse {
  headline: string;
  bullets: string[];
}

export interface SectorStep {
  productId: string;
  sector: string;
  marketInsight: MarketInsight;
  trends: string[];
  unisyftResponse: UniSyftResponse;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface Lead {
  id?: number;
  full_name: string;
  email: string;
  job_title: string;
  phone?: string;
  company: string;
  product_interest: string;
  message?: string;
  created_at?: string;
}
