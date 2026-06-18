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
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-primary mb-6">
              Lokalizacja
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mieszkanie przy ul. Mikołaja Kopernika w Płośnku, blisko centrum.
              Spokojna okolica, szkoła, kościół i sklepy w pobliżu.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary">
                    Sklepy i usługi
                  </h4>
                  <p className="text-muted-foreground">
                    2 minuty pieszo do lokalnych delikatesów, blisko Biedronka,
                    5 minut pieszo do miejskiego centrum sportu i rekreacji, 8
                    min pieszo do kina, obok fryzjer oraz siłownia
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary">
                    Gastronomia
                  </h4>
                  <p className="text-muted-foreground">
                    Blisko kebab oraz żabka
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent mr-4">
                  <Train size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary">Parking</h4>
                  <p className="text-muted-foreground">
                    Duży parking osiedlowy, bezpłatny obok bloku, zawsze wolne
                    miejsca
                  </p>
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
              <div
                className="mapouter"
                style={{
                  position: "relative",
                  textAlign: "right",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  className="gmap_canvas"
                  style={{
                    overflow: "hidden",
                    background: "none !important",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?q=P%C5%82o%C5%84sk%20Miko%C5%82aja%20Kopernika%205&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  ></iframe>
                </div>
                <a
                  href="https://norsumediagroup.com/embed-google-map-website-free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gme-generated-link"
                >
                  Embed Map on Website for Free
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
