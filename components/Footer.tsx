import { Shield, Phone, Mail, MapPin, Globe, MessageCircle, Link2 } from "lucide-react";

const services = [
  "Krankenversicherung",
  "Kfz-Versicherung",
  "Private Haftpflicht",
  "Lebensversicherung",
  "Hausrat & Wohngebäude",
  "Berufsunfähigkeit",
];

const company = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Wie wir arbeiten", href: "#prozess" },
  { label: "Kundenstimmen", href: "#bewertungen" },
  { label: "Kontakt", href: "#kontakt" },
];

const legal = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
  { label: "AGB", href: "#" },
  { label: "Cookie-Einstellungen", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#091428] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#c9a84c] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                Alpha<span className="text-[#c9a84c]">Schutz</span>
              </span>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-4 sm:mb-6">
              Ihr unabhängiger Versicherungsberater seit 1999. Wir schützen, was Ihnen wichtig ist
              – mit Transparenz, Kompetenz und Leidenschaft.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Globe, label: "Website" },
                { Icon: MessageCircle, label: "Kontakt" },
                { Icon: Link2, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#c9a84c] flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-3 sm:mb-5">
              Leistungen
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#leistungen"
                    className="text-white/55 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-3 sm:mb-5">
              Unternehmen
            </h4>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/55 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-3 sm:mb-5">
              Kontakt
            </h4>
            <div className="space-y-2.5 sm:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <p className="text-white/55 text-sm leading-relaxed">
                  Königsallee 92<br />
                  40212 Düsseldorf
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                <a href="tel:+492116123456" className="text-white/55 hover:text-white text-sm transition-colors">
                  +49 211 612 34 56
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                <a href="mailto:beratung@alphaschutz.de" className="text-white/55 hover:text-white text-sm transition-colors">
                  beratung@alphaschutz.de
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-block mt-4 sm:mt-6 bg-[#c9a84c] hover:bg-[#b8943a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Jetzt beraten lassen
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} AlphaSchutz Versicherungsberatung GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/35 hover:text-white/70 text-xs transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
