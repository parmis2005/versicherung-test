import { CheckCircle2, ArrowRight } from "lucide-react";

const advantages = [
  "100% unabhängige Beratung – keine versteckten Provisionsinteressen",
  "Persönlicher Ansprechpartner für alle Versicherungsfragen",
  "Vergleich von über 50 Versicherungsgesellschaften",
  "Schadenabwicklung und Service auch nach Vertragsabschluss",
  "Digitale Verwaltung aller Verträge in einem Kundenportal",
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Column */}
          <div className="relative order-2 lg:order-1">
            {/* Main Video */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/about-meeting-real-poster.jpg"
                aria-hidden="true"
              >
                <source src="/about-meeting-real-loop.mp4" type="video/mp4" />
              </video>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044]/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0f2044] text-sm">TÜV-zertifizierte Beratung</p>
                  <p className="text-gray-400 text-xs mt-0.5">Geprüfte Qualität & Transparenz</p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-4 -left-4 lg:-left-6 bg-[#0f2044] rounded-2xl p-5 shadow-2xl text-center">
              <p
                className="text-[#c9a84c] font-bold text-3xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                25+
              </p>
              <p className="text-white text-xs font-medium mt-1">Jahre<br />Erfahrung</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <span className="luxury-eyebrow text-sm font-semibold uppercase block mb-3">
              Über uns
            </span>
            <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />

            <h2
              className="text-[#0f2044] font-bold text-4xl md:text-5xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
            >
              Ihr unabhängiger
              <br />
              <span className="text-[#c9a84c]">Versicherungsexperte</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Seit über 25 Jahren sind wir Ihr vertrauenswürdiger Partner für alle
              Versicherungsfragen. Als unabhängige Versicherungsberater vertreten wir
              ausschließlich Ihre Interessen – nicht die der Versicherungsgesellschaften.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Unser Team aus erfahrenen Fachleuten analysiert Ihre persönliche Situation,
              vergleicht die besten Angebote am Markt und begleitet Sie vom ersten Gespräch
              bis zur Schadenregulierung. Ihre finanzielle Sicherheit ist unsere Mission.
            </p>

            {/* Advantages List */}
            <div className="space-y-3 mb-10">
              {advantages.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#0f2044] hover:bg-[#1a3a6e] text-white font-semibold px-8 py-4 rounded-xl transition-all group"
            >
              Jetzt kennenlernen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
