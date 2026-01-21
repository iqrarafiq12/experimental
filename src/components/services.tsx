import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Brand Identity Design",
    description:
      "We help brands define who they are before they show up visually. From brand strategy and positioning to logo systems, colors, and identity guidelines.",
    link: "/services/brand-identity-design",
  },
  {
    title: "UI/UX & Product Design",
    description:
      "User-first digital experiences designed for clarity, usability, and scale including UX research, wireframes, and high-fidelity UI design.",
    link: "/services/ui-ux-product-design",
  },
  {
    title: "Website Design & Development",
    description:
      "Fast, modern, and responsive websites built to support real business goals, not just aesthetics.",
    link: "/services/website-design-development",
  },
  {
    title: "Marketing & Social Media Design",
    description:
      "Visual content and campaigns that communicate clearly and consistently across all platforms.",
    link: "/services/marketing-social-media-design",
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Structure, speed, and usability-focused optimization for long-term visibility and growth.",
    link: "/services/seo-performance-optimization",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-28 mt-10">
      {/* Accent Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/25 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 max-w-xl">
          <h2 className="text-[42px] font-semibold tracking-tight text-[var(--foreground)]">
            Our Services
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-[var(--muted-foreground)]">
            Edaqai is a creative design studio helping startups and brands build
            clear identities, usable digital products, and scalable online
            presence.
          </p>
        </div>

        {/* Services List */}
        <div className="border-t border-[var(--border)]">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-6 border-b border-[var(--border)] py-12 md:grid-cols-[420px_1fr_60px]"
            >
              {/* Left Title */}
              <h3 className="text-[28px] font-medium leading-tight text-[var(--foreground)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="max-w-lg text-sm leading-relaxed text-[var(--muted-foreground)]">
                {service.description}
              </p>

              {/* Arrow Glassmorphism Button */}
              <div className="flex items-start justify-end">
                <Link
                  href={service.link}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  <ArrowUpRight className="h-5 w-5 text-[var(--accent)]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
