"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+39 392 525 1663",
    href: "https://wa.me/393925251663",
    note: "Fastest response",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alexforce@yahoo.it",
    href: "mailto:alexforce@yahoo.it",
    note: "For detailed inquiries",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@alesh_forc",
    href: "https://instagram.com/alesh_forc",
    note: "Follow my work",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F7F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              Contact
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8">
              Let&apos;s Create
              <br />
              <span className="text-[#C4856A]">Together</span>
            </h1>
            <p className="text-[#4A4543] text-lg leading-relaxed">
              Whether you&apos;re planning a brand activation, private celebration,
              or exclusive event, I&apos;d love to hear your vision. Every great
              event starts with a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 md:pb-32 bg-[#F7F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl mb-8">Send an Inquiry</h2>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-serif text-3xl mb-8">Get in Touch</h2>

              {/* Location */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#C4856A]" />
                  <span className="text-xs tracking-[0.2em] uppercase text-[#4A4543]">
                    Based In
                  </span>
                </div>
                <p className="font-serif text-2xl">Dubai, UAE</p>
                <p className="text-[#4A4543] text-sm mt-2">
                  Available for events worldwide
                </p>
              </div>

              {/* Contact Methods */}
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
                    className="group block p-6 bg-[#EDE8E1] hover:bg-[#2C2825] transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <method.icon className="w-5 h-5 text-[#C4856A] mt-1" />
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-[#4A4543] group-hover:text-[#F7F4F0]/60 mb-1 transition-colors">
                          {method.label}
                        </p>
                        <p className="font-serif text-xl group-hover:text-[#F7F4F0] transition-colors">
                          {method.value}
                        </p>
                        <p className="text-sm text-[#C4856A] mt-1">
                          {method.note}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response Time */}
              <div className="mt-10 p-6 border border-[#2C2825]/10">
                <p className="text-sm text-[#4A4543]">
                  <strong className="text-[#2C2825]">Response time:</strong> I
                  typically respond within 24 hours. For urgent inquiries,
                  WhatsApp is the fastest way to reach me.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Image Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/venues/18_dubai_luxury.jpg"
          alt="Dubai"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2C2825]/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center text-[#F7F4F0]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-4">
              Currently Based In
            </p>
            <h3 className="font-serif text-5xl md:text-6xl">Dubai</h3>
            <p className="mt-4 text-[#F7F4F0]/70">
              United Arab Emirates
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-[#EDE8E1]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4856A] mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                q: "How far in advance should I book?",
                a: "For large events and brand activations, I recommend reaching out 3-6 months in advance. For smaller private events, 4-8 weeks is usually sufficient.",
              },
              {
                q: "Do you work outside Dubai?",
                a: "Absolutely. I frequently work across the UAE and GCC, and I'm available for destination events in Europe, particularly in Italy, Greece, and the Mediterranean.",
              },
              {
                q: "What's included in your services?",
                a: "My services range from full event design and production to consultation and coordination. We'll discuss your needs and I'll provide a customized proposal.",
              },
              {
                q: "Can you work with my existing vendors?",
                a: "Yes. I'm happy to work with your preferred vendors or recommend trusted partners from my network across Dubai and internationally.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#F7F4F0] p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-serif text-xl mb-3">{faq.q}</h3>
                <p className="text-[#4A4543] leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
