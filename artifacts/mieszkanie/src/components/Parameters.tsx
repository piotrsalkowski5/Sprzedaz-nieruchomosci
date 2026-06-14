import { motion } from "framer-motion";

export function Parameters() {
  return (
    <section id="parametry" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Parametry Nieruchomości</h2>
            <p className="text-white/60 text-lg">Szczegółowe dane dotyczące mieszkania i przynależności.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mieszkanie */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-accent mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-accent mr-4"></span> Mieszkanie
            </h3>
            <dl className="space-y-4">
              {[
                { label: "Cena", value: "[WSTAW CENĘ] PLN" },
                { label: "Metraż", value: "[METRAŻ] m²" },
                { label: "Liczba pokoi", value: "[LICZBA POKOI]" },
                { label: "Piętro", value: "[PIĘTRO]" },
                { label: "Adres / Dzielnica", value: "[ADRES]" },
                { label: "Czynsz", value: "[CZYNSZ] PLN" },
                { label: "Rok budowy", value: "[ROK BUDOWY]" },
                { label: "Stan", value: "[STAN MIESZKANIA]" },
                { label: "Wyposażenie", value: "[WYPOSAŻENIE]" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-white/10 pb-4">
                  <dt className="text-white/60">{item.label}</dt>
                  <dd className="font-medium text-right text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Garaż */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-accent mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-accent mr-4"></span> Garaż
            </h3>
            <dl className="space-y-4">
              {[
                { label: "Wliczony w cenę", value: "Tak" },
                { label: "Powierzchnia", value: "[METRAŻ GARAŻU] m²" },
                { label: "Rodzaj", value: "[RODZAJ GARAŻU]" },
                { label: "Dostęp", value: "[DOSTĘP DO GARAŻU]" },
                { label: "Opis", value: "[DODATKOWY OPIS GARAŻU]" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-white/10 pb-4">
                  <dt className="text-white/60">{item.label}</dt>
                  <dd className="font-medium text-right text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
