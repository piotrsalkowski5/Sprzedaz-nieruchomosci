import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/living_room.png", alt: "Przestronny salon" },
  { src: "/bedroom.png", alt: "Sypialnia" },
  { src: "/kitchen.png", alt: "Nowoczesna kuchnia" },
  { src: "/bathroom.png", alt: "Elegancka łazienka" },
  { src: "/view.png", alt: "Widok z okna" },
  { src: "/garage.png", alt: "Garaż" },
];

export function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Galeria Wnętrz</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              onClick={() => setSelectedIdx(idx)}
              data-testid={`gallery-image-${idx}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedIdx(null)}
            >
              <X size={32} />
            </button>
            
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx(selectedIdx === 0 ? images.length - 1 : selectedIdx - 1);
              }}
            >
              <ChevronLeft size={48} />
            </button>

            <img
              src={images[selectedIdx].src}
              alt={images[selectedIdx].alt}
              className="max-w-full max-h-[85vh] object-contain"
            />

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx(selectedIdx === images.length - 1 ? 0 : selectedIdx + 1);
              }}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
