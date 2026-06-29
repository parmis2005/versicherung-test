import { MessageSquare, Search, FileCheck, HandshakeIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Kostenloses Erstgespräch",
    description:
      "In einem unverbindlichen Gespräch lernen wir Sie kennen, verstehen Ihre Lebenssituation und klären Ihren Beratungsbedarf – telefonisch, per Video oder persönlich.",
  },
  {
    number: "02",
    icon: Search,
    title: "Individuelle Bedarfsanalyse",
    description:
      "Wir analysieren Ihre aktuelle Absicherung, identifizieren Lücken und Optimierungspotenziale. Dabei berücksichtigen wir alle relevanten Lebensbereiche.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Maßgeschneidertes Angebot",
    description:
      "Basierend auf der Analyse vergleichen wir über 50 Versicherungsanbieter und präsentieren Ihnen die besten Optionen – klar, verständlich und ohne Fachjargon.",
  },
  {
    number: "04",
    icon: HandshakeIcon,
    title: "Abschluss & Langzeitbetreuung",
    description:
      "Nach Ihrem Abschluss bleiben wir Ihr Partner. Wir betreuen Sie bei Vertragsänderungen, Schadenfällen und passen Ihren Schutz an neue Lebenssituationen an.",
  },
];

export default function Process() {
  return (
    <section id="prozess" className="py-24 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest block mb-3">
            Unser Prozess
          </span>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
          <h2
            className="text-[#0f2044] font-bold text-4xl md:text-5xl mb-5"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            So einfach funktioniert
            <br />
            <span className="text-[#c9a84c]">Ihre Beratung</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            In vier klaren Schritten zu Ihrer optimalen Versicherungslösung.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-[#c9a84c]/25 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative z-10 flex flex-col">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0f2044] flex items-center justify-center shadow-xl mb-3 relative">
                    <Icon className="w-7 h-7 text-[#c9a84c]" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#c9a84c] text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
                  <div className="text-[#c9a84c]/40 font-bold text-4xl mb-3"
                       style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {step.number}
                  </div>
                  <h3
                    className="text-[#0f2044] font-bold text-lg mb-3"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
