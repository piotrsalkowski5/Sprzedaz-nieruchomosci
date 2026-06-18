import { motion } from "framer-motion";
import { Sun, Car, MapPin, Wind, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Dobrze doświetlone",
    desc: "Mieszkanie z oknami na północ, wschód oraz zachód (w zależności od pomieszczenia).",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Garaż",
    desc: "Możliwość dokupienia wraz z mieszkaniem wbudowanego w budynek murowanego garażu — nie trzeba szukać miejsca parkingowego.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Dobra lokalizacja",
    desc: "Mieszkanie prawie w centrum Płońska, szkoła na przeciwko, blisko sklepy, kościół, apteka, park i plac zabaw, 300 m do basenu",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Balkon",
    desc: "Balkon od wschodniej strony — można wstawić meble ogrodowe.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Spokojna okolica",
    desc: "W miarę cicha ulica, życzliwi sąsiedzi.",
  },
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
