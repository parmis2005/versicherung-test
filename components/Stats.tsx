import { Award, Users2, Building2, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "25+",
    label: "Jahre Erfahrung",
    description: "Seit 1999 Ihr verlässlicher Versicherungspartner",
  },
  {
    icon: Users2,
    value: "10.000+",
    label: "Zufriedene Kunden",
    description: "Privat- und Gewerbekunden, die uns vertrauen",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Versicherungspartner",
    description: "Zugang zu den besten Tarifen am Markt",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Weiterempfehlungsrate",
    description: "Unsere Kunden empfehlen uns weiter",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#0f2044] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c9a84c] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#c9a84c] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest block mb-3">
            Zahlen & Fakten
          </span>
          <h2
            className="text-white font-bold text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            Vertrauen, das sich in Zahlen zeigt
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#c9a84c]/25 transition-colors">
                  <Icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <p
                  className="text-[#c9a84c] font-bold text-4xl mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-white font-semibold text-base mb-2">{stat.label}</p>
                <p className="text-white/50 text-sm leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
