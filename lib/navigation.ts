import type { NavLink, FooterColumn } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Innovation", href: "#innovation" },
  { label: "Experience", href: "#experience" },
  { label: "Voices", href: "#voices" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "EdSyft", href: "/products/edsyft" },
      { label: "HealthSyft", href: "#" },
      { label: "FinSyft", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];
