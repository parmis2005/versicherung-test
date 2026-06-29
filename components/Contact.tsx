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
    <section id="kontakt" className="py-24 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest block mb-3">
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
            <div className="bg-[#0f2044] rounded-3xl p-10 text-white mb-6 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#c9a84c]/10" />
              <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-[#c9a84c]/8" />

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
              <a href="tel:+492116123456" className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-medium text-[#0f2044] shadow-sm border border-gray-100 hover:border-[#c9a84c]/30 transition-all">
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                Direkt anrufen
              </a>
              <a href="mailto:beratung@alphaschutz.de" className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 text-sm font-medium text-[#0f2044] shadow-sm border border-gray-100 hover:border-[#c9a84c]/30 transition-all">
                <Mail className="w-4 h-4 text-[#c9a84c]" />
                E-Mail schreiben
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
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
