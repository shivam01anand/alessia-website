"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F7F4F0]/95 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="font-serif text-2xl md:text-3xl tracking-tight">
              Alessia
              <span className="text-[#C4856A]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm tracking-widest uppercase hover-underline transition-all duration-[400ms] hover:text-[#C4856A] hover:tracking-[0.15em]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F7F4F0]"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-6">
                <span className="font-serif text-2xl tracking-tight">
                  Alessia
                  <span className="text-[#C4856A]">.</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-6">
                <ul className="space-y-8">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-serif text-4xl hover:text-[#C4856A] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="px-6 py-8 border-t border-[#EDE8E1]">
                <p className="text-sm text-[#4A4543]">Dubai, UAE</p>
                <a
                  href="mailto:alexforce@yahoo.it"
                  className="text-sm text-[#C4856A] hover-underline"
                >
                  alexforce@yahoo.it
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
