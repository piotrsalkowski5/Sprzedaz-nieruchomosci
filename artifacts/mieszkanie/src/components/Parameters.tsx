import { motion } from "framer-motion";

export function Parameters() {
  return (
    <section
      id="parametry"
      className="py-24 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              Parametry Nieruchomości
            </h2>
            <p className="text-white/60 text-lg">
              Szczegółowe dane dotyczące mieszkania i przynależności.
            </p>
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
                { label: "Cena", value: "350 000 PLN" },
                { label: "Metraż", value: "72 m²" },
                { label: "Liczba pokoi", value: "2" },
                { label: "Piętro", value: "3 z 4 bez windy" },
                {
                  label: "Adres / Dzielnica",
                  value: "ul. Mikołaja Kopernika 5 Płońsk",
                },
                { label: "Czynsz", value: "ok. 900 PLN" },
                { label: "Rok budowy", value: "1987" },
                { label: "Rodzaj", value: "Niski blok/rozkładowe" },
                {
                  label: "Typ mieszkania",
                  value: "Wielopoziomowe/dwupoziomowe",
                },
                { label: "Stan mieszkania", value: "Używane / do remontu" },
                { label: "Stan prawny", value: "Własność" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b border-white/10 pb-4"
                >
                  <dt className="text-white/60">{item.label}</dt>
                  <dd className="font-medium text-right text-white">
                    {item.value}
                  </dd>
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
                { label: "Cena", value: "75 000 PLN" },
                { label: "Wliczony w cenę", value: "Nie" },
                { label: "Powierzchnia", value: "16 m²" },
                { label: "Rodzaj", value: "Murowany, część bloku" },
                { label: "Dostęp", value: "Prywatny" },
                { label: "Czynsz", value: "ok. 45 PLN" },
                {
                  label: "Opis",
                  value:
                    "Garaż ustytuowany jako część bloku, osobny wjazd, możliwosć podniesienia blokady na wjeździe, ocieplony (przechodzą przez niego rury grzewcze), oświetlony, oddzielna księga wieczysta",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b border-white/10 pb-4"
                >
                  <dt className="text-white/60">{item.label}</dt>
                  <dd className="font-medium text-right text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <h3 className="text-2xl font-serif text-accent mt-4 mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-accent mr-4"></span> Piwnica
            </h3>
            <dl className="space-y-4">
              {[
                { label: "Wliczona w cenę", value: "Tak" },
                { label: "Powierzchnia", value: "3.12 m²" },
                {
                  label: "Opis",
                  value:
                    "Do dyspozycji właściciela piwnica, w lokalu są wszystkie media miejskie.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b border-white/10 pb-4"
                >
                  <dt className="text-white/60">{item.label}</dt>
                  <dd className="font-medium text-right text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
