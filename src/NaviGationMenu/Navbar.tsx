"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignCenter, X } from "@deemlol/next-icons";
import FullScreenMenu from "./FullScreenMenu";
import { AlignRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 mt-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">

          {/* LOGO (hidden visually only) */}
          <Link
            href="/"
            className={`flex items-center gap-3 transition-opacity duration-200 ${
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          {/* TOGGLE BUTTON (position unchanged) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-base hover:bg-neutral-tertiary z-50 cursor-pointer transition"
          >
            {!isOpen ? <AlignRight size={28} /> : <X size={28} />}
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}
      <FullScreenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
