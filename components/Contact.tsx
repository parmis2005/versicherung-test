"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const insuranceTypes = [
  "Krankenversicherung",
  "Kfz-Versicherung",
  "Private Haftpflicht",
  "Lebensversicherung",
  "Hausrat & Wohngebäude",
  "Berufsunfähigkeit",
  "Sonstiges",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insurance: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="kontakt" className="py-24 luxury-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="luxury-eyebrow text-sm font-semibold uppercase block mb-3">
            Kontakt
          </span>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
          <h2
            className="text-[#0f2044] font-bold text-4xl md:text-5xl mb-5"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            Bereit für Ihre
            <br />
            <span className="text-[#c9a84c]">kostenlose Erstberatung?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Schreiben Sie uns oder rufen Sie uns direkt an. Wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="bg-[#0f2044] rounded-xl p-10 text-white mb-6 relative overflow-hidden shadow-2xl shadow-[#0f2044]/20">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c9a84c] via-[#e3c875] to-transparent" />

              <div className="relative z-10">
                <h3
                  className="font-bold text-2xl mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  AlphaSchutz
                </h3>
                <p className="text-[#c9a84c] font-medium mb-8">Versicherungsberatung GmbH</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Adresse</p>
                      <p className="text-white font-medium">Königsallee 92</p>
                      <p className="text-white/80">40212 Düsseldorf</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Telefon</p>
                      <a href="tel:+492116123456" className="text-white font-medium hover:text-[#c9a84c] transition-colors">
                        +49 211 612 34 56
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wide mb-1">E-Mail</p>
                      <a href="mailto:beratung@alphaschutz.de" className="text-white font-medium hover:text-[#c9a84c] transition-colors">
                        beratung@alphaschutz.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Öffnungszeiten</p>
                      <p className="text-white font-medium">Mo – Fr: 9:00 – 18:00 Uhr</p>
                      <p className="text-white/70 text-sm">Sa: 10:00 – 14:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact chips */}
            <div className="flex flex-wrap gap-3">
              <a href="tel:+492116123456" className="flex items-center gap-2 bg-white/90 rounded-xl px-4 py-3 text-sm font-medium text-[#0f2044] shadow-sm border border-[#c9a84c]/18 hover:border-[#c9a84c]/35 transition-all">
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                Direkt anrufen
              </a>
              <a href="mailto:beratung@alphaschutz.de" className="flex items-center gap-2 bg-white/90 rounded-xl px-4 py-3 text-sm font-medium text-[#0f2044] shadow-sm border border-[#c9a84c]/18 hover:border-[#c9a84c]/35 transition-all">
                <Mail className="w-4 h-4 text-[#c9a84c]" />
                E-Mail schreiben
              </a>
            </div>

            {/* Fake map preview */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=K%C3%B6nigsallee+92%2C+40212+D%C3%BCsseldorf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-6 block h-40 rounded-xl overflow-hidden border border-[#c9a84c]/18 shadow-sm hover:border-[#c9a84c]/40 transition-colors"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "#e9f1e6",
                  backgroundImage:
                    "linear-gradient(120deg, rgba(147,197,253,0.55) 0%, rgba(147,197,253,0.55) 20%, transparent 20%), " +
                    "linear-gradient(0deg, rgba(255,255,255,0.85) 0px, rgba(255,255,255,0.85) 5px, transparent 5px), " +
                    "linear-gradient(90deg, rgba(255,255,255,0.85) 0px, rgba(255,255,255,0.85) 5px, transparent 5px), " +
                    "linear-gradient(45deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 3px, transparent 3px)",
                  backgroundSize: "100% 100%, 44px 44px, 58px 58px, 84px 84px",
                }}
              />
              <div className="absolute bottom-0 right-0 w-24 h-16 bg-[#bfe3b4]/70 rounded-tl-2xl" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center -translate-y-2 transition-transform group-hover:-translate-y-3">
                  <div className="w-9 h-9 rounded-full bg-[#c9a84c] shadow-lg flex items-center justify-center ring-4 ring-white">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-2 h-2 bg-[#c9a84c] rotate-45 -mt-1" />
                </div>
              </div>

              <div className="absolute bottom-2 left-2 right-2 bg-white/95 rounded-lg px-3 py-2 shadow-sm flex items-center justify-between gap-2">
                <p className="text-[#0f2044] text-xs font-medium leading-tight">
                  Königsallee 92, 40212 Düsseldorf
                </p>
                <span className="text-[#c9a84c] text-xs font-semibold whitespace-nowrap group-hover:underline">
                  Route →
                </span>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="bg-white/90 rounded-xl p-8 md:p-10 luxury-card">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3
                  className="text-[#0f2044] font-bold text-2xl mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Vielen Dank!
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb
                  von 24 Stunden bei Ihnen. Bis dahin: Schönen Tag!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3
                    className="text-[#0f2044] font-bold text-2xl mb-1"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Beratungsanfrage senden
                  </h3>
                  <p className="text-gray-400 text-sm">Kostenlos & unverbindlich</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Vollständiger Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 ..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="max@mustermann.de"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#c9a84c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Versicherungsart
                  </label>
                  <select
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 bg-white focus:border-[#c9a84c] transition-colors"
                  >
                    <option value="">Bitte wählen...</option>
                    {insuranceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ihre Nachricht
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie kurz Ihre Situation und Wünsche..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 resize-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 accent-[#c9a84c]"
                  />
                  <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <a href="#" className="text-[#c9a84c] hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a84c] hover:bg-[#b8943a] text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/30"
                >
                  <Send className="w-4 h-4" />
                  Anfrage kostenfrei senden
                </button>

                <p className="text-gray-400 text-xs text-center">
                  * Pflichtfelder. Antwort innerhalb von 24 Stunden garantiert.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
