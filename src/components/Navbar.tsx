"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignCenter } from "@deemlol/next-icons";
import { X } from "@deemlol/next-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-4 left-0 w-full z-50 bg-background">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 relative">

          {/* Logo - HIDE when menu is open */}
          {!isOpen && (
            <Link href="/" className="flex items-center gap-3 cursor-none">
              <Image
                src="./logo.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          )}

          {/* Hamburger / Close Button - STAYS in same position */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-base hover:bg-neutral-tertiary focus:outline-none absolute right-4 top-4"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {/* Hamburger */}
            {!isOpen && (
              <AlignCenter 
              className="cursor-pointer"
                size={28}
                />
            )}

            {/* Close */}
            {isOpen && (
              <X
                 className="cursor-pointer"
                size={28}
                />
            )}
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-secondary-soft flex items-center justify-center">
          <ul className="space-y-8 text-3xl font-semibold text-center">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-heading hover:text-fg-brand"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-heading hover:text-fg-brand"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className="text-heading hover:text-fg-brand"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-heading hover:text-fg-brand"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
