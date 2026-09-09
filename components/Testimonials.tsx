import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thomas Müller",
    location: "Düsseldorf",
    rating: 5,
    text: "AlphaSchutz hat uns bei der Suche nach der richtigen privaten Krankenversicherung hervorragend unterstützt. Die Beratung war ehrlich, transparent und hat uns viel Geld gespart. Absolut empfehlenswert!",
    category: "Krankenversicherung",
    initials: "TM",
  },
  {
    name: "Sabine Schneider",
    location: "Köln",
    rating: 5,
    text: "Ich wurde umfassend und kompetent beraten. Endlich jemand, der nicht einfach irgendwas verkauft, sondern wirklich schaut, was zu meiner Situation passt. Mein Vertrauen wurde nicht enttäuscht.",
    category: "Berufsunfähigkeit",
    initials: "SS",
  },
  {
    name: "Michael Koch",
    location: "Essen",
    rating: 5,
    text: "Seit Jahren bin ich Kunde bei AlphaSchutz. Besonders im Schadensfall war die Unterstützung Gold wert. Das Team kümmert sich wirklich – auch nach Vertragsabschluss. Besser geht's nicht.",
    category: "Kfz-Versicherung",
    initials: "MK",
  },
  {
    name: "Laura Weber",
    location: "Dortmund",
    rating: 5,
    text: "Die Wohngebäudeversicherung hätte ich alleine niemals so günstig gefunden. AlphaSchutz hat innerhalb kürzester Zeit den perfekten Tarif für unser Haus organisiert. Super professionell!",
    category: "Wohngebäude",
    initials: "LW",
  },
  {
    name: "Andreas Braun",
    location: "Düsseldorf",
    rating: 5,
    text: "Als Selbstständiger ist gute Absicherung besonders wichtig. Das Team von AlphaSchutz hat mir ein maßgeschneidertes Paket zusammengestellt, das zu meinem Budget und meinen Risiken passt.",
    category: "Haftpflicht",
    initials: "AB",
  },
  {
    name: "Monika Fischer",
    location: "Mönchengladbach",
    rating: 5,
    text: "Ich habe mich nach dem Tod meines Mannes völlig verloren gefühlt. AlphaSchutz hat mir nicht nur bei den Versicherungen geholfen, sondern sich wirklich Zeit genommen. Einfühlsam und kompetent.",
    category: "Lebensversicherung",
    initials: "MF",
  },
];

const avatarColors = [
  "from-[#0f2044] to-[#2563a8]",
  "from-[#143f7a] to-[#2f6fa8]",
  "from-[#c9a84c] to-[#e1bf65]",
  "from-[#2d5a8e] to-[#37a0a2]",
  "from-[#0f2044] to-[#5a4b9f]",
  "from-[#16406b] to-[#c9a84c]",
];

const categoryColors = [
  "bg-[#eaf2ff] text-[#143f7a]",
  "bg-[#edf7f6] text-[#126164]",
  "bg-[#fff3d2] text-[#765414]",
  "bg-[#eef4ff] text-[#2d5a8e]",
  "bg-[#f0edff] text-[#4b3b86]",
  "bg-[#fff0e4] text-[#8a4a16]",
];

export default function Testimonials() {
  return (
    <section id="bewertungen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="luxury-eyebrow text-sm font-semibold uppercase block mb-3">
            Kundenstimmen
          </span>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mb-6" />
          <h2
            className="text-[#0f2044] font-bold text-4xl md:text-5xl mb-5"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}
          >
            Das sagen unsere
            <br />
            <span className="text-[#c9a84c]">zufriedenen Kunden</span>
          </h2>
          {/* Aggregate Rating */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 mt-4 bg-white/85 px-5 py-3 rounded-full shadow-lg shadow-[#0f2044]/8 border border-[#c9a84c]/20">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#c9a84c] fill-[#c9a84c]" />
              ))}
            </div>
            <span className="text-[#0f2044] font-bold text-lg">4.9 / 5.0</span>
            <span className="text-gray-400 text-sm">aus über 1.200 Bewertungen</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-white/88 rounded-xl p-7 luxury-card hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0f2044]/12 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c9a84c] via-[#e3c875] to-[#0f2044]" />

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[#c9a84c]/35 mb-4 relative" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4 relative">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#d1a73d] fill-[#d1a73d]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#405064] text-sm leading-relaxed mb-6 italic relative">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#dfe7f0] relative">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0f2044]/15`}
                >
                  <span className="text-white text-xs font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="text-[#0f2044] font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
                <span className={`ml-auto text-xs px-2.5 py-1 rounded-full font-semibold ${categoryColors[index]}`}>
                  {testimonial.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
