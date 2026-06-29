import Image from "next/image";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3200&q=90"
          alt="Modernes Bürogebäude"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={95}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2044]/92 via-[#0f2044]/80 to-[#091428]/95" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f2044] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-[#c9a84c]/40 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#c9a84c] text-sm font-medium tracking-wide">
              Über 25 Jahre unabhängige Versicherungsberatung
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            Ihr Schutz ist{" "}
            <br className="hidden sm:block" />
            <span className="text-[#c9a84c]">unser Versprechen.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
            Wir beraten Sie unabhängig, transparent und persönlich –
            für eine Absicherung, die wirklich zu Ihrem Leben passt.
          </p>

          {/* Quick Benefits */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {[
              "Kostenlose Erstberatung",
              "Unabhängig von Versicherern",
              "Persönlicher Ansprechpartner",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8943a] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#c9a84c]/25 hover:shadow-[#c9a84c]/40 group"
            >
              Kostenlose Beratung anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-xl transition-all hover:bg-white/8 backdrop-blur-sm"
            >
              Unsere Leistungen entdecken
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 bg-white/6 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/15">
            {[
              { value: "25+", label: "Jahre Erfahrung" },
              { value: "10.000+", label: "Zufriedene Kunden" },
              { value: "50+", label: "Versicherungspartner" },
              { value: "98%", label: "Weiterempfehlungsrate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:px-8">
                <p className="text-[#c9a84c] font-bold text-2xl md:text-3xl"
                   style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {stat.value}
                </p>
                <p className="text-white/65 text-xs md:text-sm mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#leistungen"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors z-10 animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
