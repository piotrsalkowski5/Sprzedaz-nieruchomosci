import { motion } from "framer-motion";
import { Sun, Car, MapPin, Wind, Zap, ShieldCheck } from "lucide-react";

const features = [
  { icon: <Sun className="w-8 h-8" />, title: "Dobrze doświetlone", desc: "Mieszkanie z oknami na [PLACEHOLDER: południe/wschód], dużo naturalnego światła." },
  { icon: <Car className="w-8 h-8" />, title: "Garaż w cenie", desc: "W cenie sprzedaży garaż — nie trzeba szukać miejsca parkingowego." },
  { icon: <MapPin className="w-8 h-8" />, title: "Dobra lokalizacja", desc: "[PLACEHOLDER: opis okolicy — co jest w pobliżu, dostęp do komunikacji]" },
  { icon: <Wind className="w-8 h-8" />, title: "Balkon", desc: "Balkon od [PLACEHOLDER: strony] — można wstawić meble ogrodowe." },
  { icon: <Zap className="w-8 h-8" />, title: "Sprawna instalacja", desc: "[PLACEHOLDER: opis stanu instalacji — elektryka, hydraulika, ogrzewanie]" },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Spokojna okolica", desc: "[PLACEHOLDER: opis otoczenia — cicha ulica / blok / osiedle]" },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-primary mb-4">Co oferuje mieszkanie</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 border border-border bg-card hover:border-accent/50 transition-colors group"
            >
              <div className="text-accent mb-6 bg-secondary w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
