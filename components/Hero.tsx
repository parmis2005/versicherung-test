import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f2044] flex flex-col sm:block">
      {/* Video: full, uncropped frame on mobile; full-bleed cover background from sm up */}
      <div className="relative w-full aspect-video shrink-0 mt-14 sm:mt-0 sm:absolute sm:inset-0 sm:aspect-auto">
        <HeroVideo />
        {/* Readability overlay (desktop) / transition fade into content (mobile) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2044] via-transparent to-transparent sm:bg-gradient-to-br sm:from-[#0f2044]/82 sm:via-[#0f2044]/58 sm:to-[#091428]/78" />
        {/* Bottom fade (desktop only) */}
        <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f2044] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 sm:flex-none w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-4 pb-16 sm:min-h-screen sm:pt-32 sm:pb-16 flex flex-col items-center justify-center text-center">
        {/* Kicker */}
        <span className="text-[#c9a84c] text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-6">
          Seit 1998 · Unabhängige Beratung
        </span>

        {/* Headline */}
        <h1
          className="text-white font-semibold uppercase leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-6 max-w-5xl"
          style={{
            fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif",
            fontSize: "clamp(1.4rem, 4.2vw, 4.6rem)",
          }}
        >
          Ihr Schutz ist unser <span className="text-[#c9a84c]">Versprechen</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/75 text-sm sm:text-lg md:text-xl max-w-2xl mb-4 sm:mb-8 leading-relaxed">
          Wir beraten Sie unabhängig, transparent und persönlich –
          für eine Absicherung, die wirklich zu Ihrem Leben passt.
        </p>

        {/* Quick Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 mb-6 sm:mb-10">
          {[
            "Kostenlose Erstberatung",
            "Unabhängig von Versicherern",
            "Persönlicher Ansprechpartner",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#c9a84c] flex-shrink-0" />
              <span className="text-white/70 text-xs sm:text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8943a] text-white text-sm sm:text-base font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all shadow-xl shadow-[#c9a84c]/25 hover:shadow-[#c9a84c]/40 group"
          >
            Kostenlose Beratung anfragen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white text-sm sm:text-base font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all hover:bg-white/8 backdrop-blur-sm"
          >
            Unsere Leistungen entdecken
          </a>
        </div>
      </div>

    </section>
  );
}
