"use client";

import { useState, useEffect } from "react";
import { Shield, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#prozess", label: "Wie wir arbeiten" },
    { href: "#bewertungen", label: "Bewertungen" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#0f2044] shadow-2xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#c9a84c] flex items-center justify-center group-hover:bg-[#b8943a] transition-colors">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Alpha<span className="text-[#c9a84c]">Schutz</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/85 hover:text-[#c9a84c] transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+492116123456"
            className="flex items-center gap-2 text-white/75 hover:text-white text-sm transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +49 211 612 34 56
          </a>
          <a
            href="#kontakt"
            className="bg-[#c9a84c] hover:bg-[#b8943a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/30"
          >
            Jetzt beraten lassen
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0f2044] border-t border-white/10 px-6 py-5">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/85 hover:text-[#c9a84c] py-3 text-base border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+492116123456"
              className="flex items-center gap-2 text-white/75 py-3 text-sm"
            >
              <Phone className="w-4 h-4" />
              +49 211 612 34 56
            </a>
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="bg-[#c9a84c] text-white px-5 py-3.5 rounded-lg text-sm font-semibold text-center mt-2"
            >
              Jetzt beraten lassen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
