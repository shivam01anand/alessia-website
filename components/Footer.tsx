import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2825] text-[#F7F4F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-4xl mb-6">
              Alessia Forcellati
              <span className="text-[#C4856A]">.</span>
            </h3>
            <p className="text-[#EDE8E1]/70 max-w-md leading-relaxed">
              Project Event Manager at Digital Minds. Luxury events,
              real estate, and global marketing.
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-[#EDE8E1]/50">
              <MapPin className="w-4 h-4" />
              <span>Dubai · Milan · New York · China</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-6">
              Navigate
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#EDE8E1]/70 hover:text-[#C4856A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#C4856A] mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/393925251663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#EDE8E1]/70 hover:text-[#C4856A] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+39 392 525 1663</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:alexforce@yahoo.it"
                  className="flex items-center gap-3 text-[#EDE8E1]/70 hover:text-[#C4856A] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>alexforce@yahoo.it</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/alesh_forc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#EDE8E1]/70 hover:text-[#C4856A] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@alesh_forc</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alessia-forcellati-592567208/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#EDE8E1]/70 hover:text-[#C4856A] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#EDE8E1]/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#EDE8E1]/40">
            © {new Date().getFullYear()} Alessia Forcellati. All rights reserved.
          </p>
          <p className="text-sm text-[#EDE8E1]/40">
            Dubai, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
