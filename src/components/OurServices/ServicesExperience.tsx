// components/ServicesCarousel.tsx
"use client";

import { useState } from "react";
import { services } from "./services";

export default function ServicesExperience() {
  const [current, setCurrent] = useState(0);
  const total = services.length;

  const prevSlide = () => setCurrent(current === 0 ? total - 1 : current - 1);
  const nextSlide = () => setCurrent(current === total - 1 ? 0 : current + 1);

  return (
    <section className="bg-zinc-50 py-12 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12 flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
