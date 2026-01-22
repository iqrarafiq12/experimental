"use client";

import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { FaBehance, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Instagram } from "@deemlol/next-icons";

export default function Footer() {
  return (
    <footer className="relative text-foreground overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* ===================== SOCIAL LINKS ===================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-foreground/10 rounded-xl overflow-hidden">
          <Link
            href="https://www.behance.net/edaqaicreative"
            target="_blank"
            className="group flex items-center justify-between px-6 py-5 border-r border-foreground/10 last:border-r-0 hover:bg-white/5 transition"
          >
            <div className="flex items-center gap-3">
              <FaBehance className="h-5 w-5 text-foreground/80" />
              <span className="text-sm font-medium">Behance</span>
            </div>
            <LuArrowUpRight className="h-4 w-4 text-foreground/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
          </Link>

          <Link
            href="https://linkedin.com/company/edaqaicreatives"
            target="_blank"
            className="group flex items-center justify-between px-6 py-5 border-r border-foreground/10 last:border-r-0 hover:bg-white/5 transition"
          >
            <div className="flex items-center gap-3">
              <FaLinkedin className="h-5 w-5 text-foreground/80" />
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
            <LuArrowUpRight className="h-4 w-4 text-foreground/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
          </Link>

          <Link
            href="https://instagram.com/edaqai.creatives"
            target="_blank"
            className="group flex items-center justify-between px-6 py-5 border-r border-foreground/10 last:border-r-0 hover:bg-white/5 transition"
          >
            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-foreground/80" />
              <span className="text-sm font-medium">Instagram</span>
            </div>
            <LuArrowUpRight className="h-4 w-4 text-foreground/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
          </Link>

          <Link
            href="https://www.tiktok.com/@edaqai.creatives"
            target="_blank"
            className="group flex items-center justify-between px-6 py-5 border-r border-foreground/10 last:border-r-0 hover:bg-white/5 transition"
          >
            <div className="flex items-center gap-3">
              <FaTiktok className="h-5 w-5 text-foreground/80" />
              <span className="text-sm font-medium">Tiktok</span>
            </div>
            <LuArrowUpRight className="h-4 w-4 text-foreground/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>

        {/* ===================== FOOTER NAV ===================== */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* SERVICES */}
          <div>
            <h4 className="mb-4 text-xs tracking-widest text-foreground/50">SERVICES</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/branding" className="text-sm text-foreground/80 hover:text-foreground transition">Brand Identity Design</Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="text-sm text-foreground/80 hover:text-foreground transition">UI/UX & Product Design</Link>
              </li>
              <li>
                <Link href="/services/web" className="text-sm text-foreground/80 hover:text-foreground transition">Website Design & Development</Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-sm text-foreground/80 hover:text-foreground transition">Marketing & Social Media Design</Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-sm text-foreground/80 hover:text-foreground transition">SEO & Performance Optimization</Link>
              </li>
            </ul>
          </div>

          {/* WORK */}
          <div>
            <h4 className="mb-4 text-xs tracking-widest text-foreground/50">WORK</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/work" className="text-sm text-foreground/80 hover:text-foreground transition">Selected Projects</Link>
              </li>
              <li>
                <Link href="/work/collaborations" className="text-sm text-foreground/80 hover:text-foreground transition">Client Collaborations</Link>
              </li>
              <li>
                <Link href="/work/experiments" className="text-sm text-foreground/80 hover:text-foreground transition">Studio Experiments</Link>
              </li>
            </ul>
          </div>

          {/* STUDIO */}
          <div>
            <h4 className="mb-4 text-xs tracking-widest text-foreground/50">STUDIO</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-foreground/80 hover:text-foreground transition">About EDAQAI</Link>
              </li>
              <li>
                <Link href="/work" className="text-sm text-foreground/80 hover:text-foreground transition">How We Work</Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/80 hover:text-foreground transition">What We Offer</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-foreground/80 hover:text-foreground transition">Our Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/80 hover:text-foreground transition">Contact Here</Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="mb-4 text-xs tracking-widest text-foreground/50">LEGAL</h4>
            <ul className="space-y-3">
              <li>
<Link href="/privacypolicy" className="text-sm text-foreground/80 hover:text-foreground transition">Privacy Policy</Link>

              </li>
              <li>
                <Link href="/terms-&-condition" className="text-sm text-foreground/80 hover:text-foreground transition">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ===================== CTA SECTION ===================== */}
      <section className="relative border-t border-white/10">
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

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

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-8 py-4 text-sm font-medium text-foreground hover:bg-primary/60 transition"
              >
                Start a Project
              </Link>

              <Link
                href="/work"
                className="rounded-md border border-white/20 px-8 py-4 text-sm font-medium hover:bg-foreground hover:text-primary transition"
              >
                View Work
              </Link>
            </div>

          </div>
        </div>

        <div className="p-4 text-center text-xs text-gray-500 border-t border-white/10">
          © 2026 EDAQAI Creatives, All rights reserved{" "}
          <a
            href="https://www.linkedin.com/in/iqrarafiqkhann/"
            className="underline"
          >
            Built by Iqra Rafiq Khan
          </a>
        </div>
      </section>
    </footer>
  );
}
