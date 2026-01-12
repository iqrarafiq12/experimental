"use client";

import { useState } from "react";
import Link from "next/link";


export default function Hero() {
    const [active, setActive] = useState<"work" | "services">("work");

    return (
        <section className="relative flex flex-col items-center text-foreground px-4 sm:px-6 lg:px-8 pt-28 pb-24 overflow-hidden">
            {/* Background */}

            {/* Badge with sliding accent */}

            <div className="relative mt-6">
                <div className="relative flex w-[260px] items-center border border-slate-500 rounded-full p-1 text-sm">

                    {/* Sliding background */}
                    <span
                        className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-accent transition-transform duration-300 ease-in-out ${active === "work" ? "translate-x-0" : "translate-x-full"
                            }`}
                    />

                    {/* Link 1 */}
                    <Link
                        href="/contact" // 🔗 change to your route
                        onClick={() => setActive("work")}
                        className={`relative z-10 w-1/2 text-center py-2 text-xs font-semibold transition-colors ${active === "work" ? "text-white" : "text-white"
                            }`}
                    >
                        Work With Us
                    </Link>

                    {/* Link 2 */}
                    <Link
                        href="/services" // 🔗 change to your route
                        onClick={() => setActive("services")}
                        className={`relative z-10 w-1/2 text-center py-2 text-xs font-semibold transition-colors ${active === "services" ? "text-white" : "text-white"
                            }`}
                    >
                        View Our Services
                    </Link>

                </div>
            </div>
            {/* Hero Heading */}
            <h1 className="text-center font-semibold mt-8 max-w-5xl text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-[1.2] lg:text-6xl lg:leading-[1.15]">
                A Creative Studio Building Brands Through Design & Technology
            </h1>

            {/* Sub text */}
            <p className="text-center mt-5 max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
                We solve creative problems today to build creative products tomorrow. EDAQAI CREATIVES helps brands, businesses and startups grow through design, marketing visuals, and digital experiences.
            </p>
        </section>
    );
}
