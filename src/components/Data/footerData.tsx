import { FaBehance, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Instagram } from "@deemlol/next-icons";

export interface SocialLink {
  name: string;
  icon: React.ComponentType;
  href: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLinkItem[];
}

/* ===================== SOCIAL LINKS ===================== */
export const socialLinks: SocialLink[] = [
  { name: "Behance", icon: FaBehance, href: "https://www.behance.net/edaqaicreative" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/edaqaicreatives" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/edaqai.creatives" },
  { name: "Tiktok", icon: FaTiktok, href: "https://www.tiktok.com/@edaqai.creatives" },
];

/* ===================== FOOTER LINKS ===================== */
export const footerLinks: FooterSection[] = [
  {
    title: "SERVICES",
    links: [
      { label: "Brand Identity Design", href: "/services/branding" },
      { label: "UI/UX & Product Design", href: "/services/ui-ux" },
      { label: "Website Design & Development", href: "/services/web" },
      { label: "Marketing & Social Media Design", href: "/services/marketing" },
      { label: "SEO & Performance Optimization", href: "/services/seo" },
    ],
  },
  {
    title: "WORK",
    links: [
      { label: "Selected Projects", href: "/work" },
      { label: "Client Collaborations", href: "/work/collaborations" },
      { label: "Studio Experiments", href: "/work/experiments" },
    ],
  },
  {
    title: "STUDIO",
    links: [
      { label: "About EDAQAI", href: "/about" },
      { label: "How We Work", href: "/work" },
      { label: "What We Offer", href: "/services" },
      { label: "Our Pricing", href: "/pricing" },
      { label: "Contact Here", href: "/contact" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
