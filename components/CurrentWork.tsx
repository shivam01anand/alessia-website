"use client";

import { motion } from "framer-motion";
import { Briefcase, Home, Sparkles } from "lucide-react";

const roles = [
  {
    icon: Briefcase,
    title: "Digital Minds",
    subtitle: "MC Holding Group",
    description:
      "Project Event Manager at a global luxury tech and marketing group with offices in Dubai, Milan, New York, and China.",
  },
  {
    icon: Home,
    title: "Real Estate",
    subtitle: "Freelance",
    description:
      "Helping clients find Dubai's most coveted addresses. Partnered with an Italian agency specializing in premium properties.",
  },
  {
    icon: Sparkles,
    title: "Private Events",
    subtitle: "Select Clients",
    description:
      "Luxury events for discerning clients. Fashion-house standards, personal attention, unforgettable execution.",
  },
];

export default function CurrentWork() {
  return (
    <section className="py-24 md:py-32 bg-[#EDE8E1]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
            Now
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            What I Do Today
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              className="bg-[#F7F4F0] p-8 lg:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <role.icon className="w-6 h-6 text-[#C4856A] mb-6" />
              <h3 className="font-serif text-2xl mb-1">{role.title}</h3>
              <p className="text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-4">
                {role.subtitle}
              </p>
              <p className="text-[#4A4543] leading-relaxed text-sm">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
