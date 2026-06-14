import { motion } from "framer-motion";
import { Sun, Car, MapPin, Wind, Zap, ShieldCheck } from "lucide-react";

const features = [
  { icon: <Sun className="w-8 h-8" />, title: "Słoneczna ekspozycja", desc: "Znakomite doświetlenie przez cały dzień dzięki południowo-zachodniej wystawie." },
  { icon: <Car className="w-8 h-8" />, title: "Garaż w cenie", desc: "Prywatne, bezpieczne miejsce parkingowe w podziemnej hali garażowej." },
  { icon: <MapPin className="w-8 h-8" />, title: "Prestiżowa dzielnica", desc: "[PLACEHOLDER: krótki opis prestiżowej lokalizacji i sąsiedztwa]" },
  { icon: <Wind className="w-8 h-8" />, title: "Balkon / Taras", desc: "Przestronny taras idealny do porannej kawy i relaksu po pracy." },
  { icon: <Zap className="w-8 h-8" />, title: "Nowa instalacja", desc: "Budynek z nowoczesnymi rozwiązaniami, niska energochłonność." },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Cicha ulica", desc: "Okolica wolna od zgiełku głównych dróg, pełen komfort." },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Główne Atuty</h2>
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
