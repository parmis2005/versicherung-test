import {
  Heart,
  Car,
  Shield,
  Users,
  Home,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Krankenversicherung",
    description:
      "Privat oder gesetzlich – wir finden den optimalen Schutz für Ihre Gesundheit und die Ihrer Familie. Maßgeschneidert für jede Lebenssituation.",
    href: "#kontakt",
  },
  {
    icon: Car,
    title: "Kfz-Versicherung",
    description:
      "Vollkasko, Teilkasko oder Haftpflicht: Wir vergleichen über 50 Anbieter und finden den günstigsten Schutz für Ihr Fahrzeug.",
    href: "#kontakt",
  },
  {
    icon: Shield,
    title: "Private Haftpflicht",
    description:
      "Schützen Sie sich vor finanziellen Risiken durch Missgeschicke im Alltag. Eine der wichtigsten Versicherungen überhaupt – oft unterschätzt.",
    href: "#kontakt",
  },
  {
    icon: Users,
    title: "Lebensversicherung",
    description:
      "Sorgen Sie vor und sichern Sie Ihre Familie ab. Ob Risikolebensversicherung oder kapitalbildende Variante – wir beraten Sie ehrlich.",
    href: "#kontakt",
  },
  {
    icon: Home,
    title: "Hausrat & Wohngebäude",
    description:
      "Ihr Zuhause ist mehr als vier Wände. Wir schützen Ihren Besitz und Ihr Eigentum umfassend gegen Feuer, Einbruch, Wasser und mehr.",
    href: "#kontakt",
  },
  {
    icon: Briefcase,
    title: "Berufsunfähigkeit",
    description:
      "Wenn Arbeit nicht mehr möglich ist: Die Berufsunfähigkeitsversicherung ist eine der wichtigsten Absicherungen für Ihr Einkommen.",
    href: "#kontakt",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 luxury-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="luxury-eyebrow text-sm font-semibold uppercase mb-3 block">
              Unsere Leistungen
            </span>
            <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-4" />
          </div>
          <h2
            className="text-[#0f2044] font-bold text-4xl md:text-5xl mb-5"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            Rundum abgesichert –
            <br />
            <span className="text-[#c9a84c]">in jeder Lebenslage</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Als unabhängige Versicherungsberater vergleichen wir für Sie
            hunderte Tarife und empfehlen nur, was wirklich passt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white/88 rounded-xl p-8 luxury-card hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#0f2044] group-hover:bg-[#c9a84c] flex items-center justify-center mb-6 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#c9a84c] group-hover:text-[#0f2044]" />
                </div>

                {/* Content */}
                <h3
                  className="text-[#0f2044] font-bold text-xl mb-3 group-hover:text-[#0f2044]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#b7953c] text-sm font-semibold hover:gap-3 transition-all"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">
            Ihre Versicherung nicht dabei? Wir beraten Sie zu allen Versicherungsarten.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#0f2044] hover:bg-[#091428] text-white font-semibold px-8 py-4 rounded-xl transition-all group shadow-xl shadow-[#0f2044]/15"
          >
            Alle Leistungen besprechen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
