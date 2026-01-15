"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin,Email } from "@deemlol/next-icons";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FullScreenMenu({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black text-white overflow-y-auto overscroll-contain">
      <div className="max-w-screen-xl mx-auto min-h-full px-6 pt-28 pb-10 flex flex-col lg:grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE (Logo, Paragraph, Image) */}
        <div className="flex flex-col lg:justify-between">
          <div>
            {/* LOGO */}
            <Image
              src="/logo1.svg"
              alt="Edaqai"
              width={120}
              height={40}
              priority
            />

            {/* Paragraph */}
            <p className="mt-6 text-sm text-gray-400 max-w-sm">
              Designing meaningful digital experiences through strategy,
              design, and technology.
            </p>

            {/* IMAGE */}
            <div className="mt-6 w-full max-w-sm">
              <Image
                src="/FullMenuImage.png" // Replace with your image
                alt="Edaqai visual"
                width={500}
                height={300}
                className="rounded-lg object-cover opacity-90"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Menu Items */}
        <div className="flex flex-col justify-start lg:justify-center w-full mt-6 lg:mt-0">
          <ul className="space-y-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            <MenuItem href="/work" label="WORK" onClick={onClose} />
            <MenuItem href="/services" label="SERVICES" onClick={onClose} />
            <MenuItem href="/pricing" label="PRICING" onClick={onClose} />
            <MenuItem href="/about" label="ABOUT" onClick={onClose} />
            <MenuItem href="/contact" label="CONTACT" onClick={onClose} />
          </ul>
        </div>

             {/* SOCIAL + FOOTER (mobile at bottom) */}
          <div className=" lg:mt-0 flex flex-col space-y-4 justify-start">
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-400">
              <SocialLink href="https://www.instagram.com/edaqai.creatives/" icon={<Instagram size={25} />} />
              <SocialLink href="https://www.linkedin.com/company/edaqaicreatives" icon={<FaLinkedin size={25} />} />
              <SocialLink href="https://www.behance.net/edaqaicreatives" icon={<FaBehance size={25} />} />
              <SocialLink href="mailto:workwithedaqai@gmail.com" icon={<Email size={25} />} />
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-500">
  © {new Date().getFullYear()} Edaqai Creatives. All rights reserved. Built by Iqra Rafiq Khan.
</p>

          </div>

      </div>
    </div>
  );
}

/* Menu Item */
function MenuItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="group relative block w-full py-2 overflow-hidden"
      >
        {/* BACKGROUND BAR (desktop only) */}
        <span
          className="
            absolute inset-y-1 left-0
            w-0 bg-primary
            transition-all duration-300 ease-out
            lg:group-hover:w-full
          "
        />

        {/* TEXT */}
        <span
          className="
            relative z-10 block px-4
            transition-colors duration-300
            lg:group-hover:text-black
          "
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

/* Social Icon */
function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:text-white transition"
    >
      {icon}
    </Link>
  );
}
