import { motion } from "framer-motion";
import { MapPin, ShoppingBag, Coffee, Train } from "lucide-react";

export function Location() {
  return (
    <section id="lokalizacja" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Doskonała Lokalizacja</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              [PLACEHOLDER OPISU: Mieszkanie znajduje się w sercu jednej z najbardziej pożądanych dzielnic. 
              Idealne połączenie spokoju, zieleni i szybkiego dostępu do centrum miasta. Wszędzie blisko.]
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary">Sklepy i usługi</h4>
                  <p className="text-muted-foreground">[PLACEHOLDER: 3 minuty pieszo do lokalnych delikatesów i centrum handlowego]</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary">Gastronomia</h4>
                  <p className="text-muted-foreground">[PLACEHOLDER: Mnóstwo świetnych kawiarni i restauracji w promieniu kilometra]</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <Train size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary">Komunikacja</h4>
                  <p className="text-muted-foreground">[PLACEHOLDER: Szybki wyjazd na obwodnicę, przystanek 200m stąd]</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] bg-card border border-border shadow-xl flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center flex-col">
              <MapPin className="text-accent w-16 h-16 mb-4 opacity-50" />
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
                [PLACEHOLDER MAPY]
              </p>
              <p className="text-xs text-muted-foreground/60 mt-2">
                Tutaj wstaw osadzony kod iframe z Google Maps
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
