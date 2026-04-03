"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+39 392 525 1663",
    href: "https://wa.me/393925251663",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alessiaforcellati@yahoo.com",
    href: "mailto:alessiaforcellati@yahoo.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@alesh_forc",
    href: "https://instagram.com/alesh_forc",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Alessia Forcellati",
    href: "https://www.linkedin.com/in/alessia-forcellati-592567208/",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F7F4F0]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Contact
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">
              Get in Touch
            </h1>
            <p className="text-[#4A4543] text-lg leading-relaxed max-w-lg">
              Events, real estate, or just a conversation. I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="pb-24 md:pb-32 bg-[#F7F4F0]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 p-5 bg-[#EDE8E1] hover:bg-[#2C2825] transition-colors duration-300"
                  >
                    <method.icon className="w-5 h-5 text-[#C4856A] flex-shrink-0" />
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-[#4A4543] group-hover:text-[#F7F4F0]/60 transition-colors">
                        {method.label}
                      </p>
                      <p className="font-serif text-lg group-hover:text-[#F7F4F0] transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-5 border border-[#2C2825]/10">
                <p className="text-sm text-[#4A4543]">
                  <strong className="text-[#2C2825]">Based in Dubai.</strong>{" "}
                  I typically respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
