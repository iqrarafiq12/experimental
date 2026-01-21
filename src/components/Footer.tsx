"use client";

import Link from "next/link";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { Instagram } from "@deemlol/next-icons";
import { FaTiktok } from "react-icons/fa";

/* ===================== SOCIAL LINKS ===================== */
const socialLinks = [
  {
    name: "Behance",
    icon: FaBehance,
    href: "https://www.behance.net/edaqaicreative",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/company/edaqaicreatives",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/edaqai.creatives",
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@edaqai.creatives",
  },
];

/* ===================== FOOTER LINKS ===================== */
const footerLinks = [
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

export default function Footer() {
  return (
    <footer className="relative text-foreground overflow-hidden">


      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* ===================== SOCIAL LINKS ===================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-foreground/10 rounded-xl overflow-hidden">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              className="group flex items-center justify-between px-6 py-5 border-r border-foreground/10 last:border-r-0 hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-foreground/80" />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <LuArrowUpRight className="h-4 w-4 text-foreground/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </Link>
          ))}
        </div>

        {/* ===================== FOOTER NAV ===================== */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-xs tracking-widest text-foreground/50">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 hover:text-foreground transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== CTA SECTION ===================== */}
      <section className="relative border-t border-white/10">


        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            {/* LEFT */}
            <div className="max-w-md">
              <h2 className="text-3xl font-semibold tracking-tight mb-6">
                EDAQAI creatives<span className="text-white/60">.</span>
              </h2>

              <p className="text-sm text-white/70 leading-relaxed">
                We solve creative problems today, so we can build creative
                products tomorrow. EDAQAI helps brands and startups grow
                through thoughtful design, marketing visuals, and digital
                experiences.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-8 py-4 text-sm font-medium text-forground hover:bg-primary/60 transition"
              >
                Start a Project
              </Link>

              <Link
                href="/work"
                className="rounded-md border border-white/20 px-8 py-4 text-sm font-medium hover:bg-forground hover:text-primary transition"
              >
                View Work
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 text-center text-xs text-gray-500 border-t border-white/10">
          © 2026 EDAQAI Creatives, All rights reserved 
          <a href="https://www.linkedin.com/in/iqrarafiqkhann/">Built by Iqra Rafiq Khan.</a>
        </div>
      </section>



    </footer>
  );
}
