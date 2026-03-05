"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Valentino", logo: "/logos/valentino-logo.svg" },
  { name: "Chanel", logo: "/logos/chanel-logo.svg" },
  { name: "Dior", logo: "/logos/dior-logo.svg" },
  { name: "Moncler", logo: "/logos/moncler-logo.svg" },
  { name: "Golden Goose", logo: "/logos/golden-goose-logo.svg" },
  { name: "Formula E", logo: "/logos/formula-e-logo.svg" },
];

export default function LogoBar() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F4F0] border-t border-b border-[#2C2825]/5 overflow-hidden">
      {/* Label */}
      <motion.p
        className="text-center text-[9px] tracking-[0.6em] uppercase text-[#2C2825]/30 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Collaborated With
      </motion.p>

      {/* Scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#F7F4F0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#F7F4F0] to-transparent z-10 pointer-events-none" />

        {/* Scrolling content */}
        <div className="flex items-center gap-16 md:gap-20 lg:gap-24 animate-scroll hover:[animation-play-state:paused]">
          {/* Triple duplicate for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-500"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={20}
                className="h-4 md:h-5 w-auto object-contain"
                style={{ filter: "brightness(0)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
