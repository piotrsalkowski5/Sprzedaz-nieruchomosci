import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    label: "Salon",
    images: [
      { src: "/salon1.jpg", alt: "Salon" },
      { src: "/salon2.jpg", alt: "Salon" },
      { src: "/salon3.jpg", alt: "Salon" },
      { src: "/salon4.jpg", alt: "Salon" },
    ],
  },
  {
    label: "Sypialnia",
    images: [
      { src: "/sypialnia1.jpg", alt: "Sypialnia" },
      { src: "/sypialnia2.jpg", alt: "Sypialnia" },
      { src: "/sypialnia3.jpg", alt: "Sypialnia" },
      { src: "/sypialnia4.jpg", alt: "Sypialnia" },
      { src: "/sypialnia5.jpg", alt: "Sypialnia" },
    ],
  },
  {
    label: "Łazienka",
    images: [
      { src: "/lazienka1.jpg", alt: "Łazienka" },
      { src: "/lazienka2.jpg", alt: "Łazienka" },
      { src: "/lazienka3.jpg", alt: "Łazienka" },
    ],
  },
  {
    label: "Kuchnia",
    images: [
      { src: "/kuchnia1.jpg", alt: "Kuchnia" },
      { src: "/kuchnia2.jpg", alt: "Kuchnia" },
    ],
  },
  {
    label: "Przedpokój",
    images: [
      { src: "/przedpokoj1.jpg", alt: "Przedpokój" },
      { src: "/przedpokoj2.jpg", alt: "Przedpokój" },
      { src: "/schody1.jpg", alt: "Przedpokój" },
      { src: "/schody2.jpg", alt: "Przedpokój" },
    ],
  },
  {
    label: "Garaż",
    images: [{ src: "/garage.png", alt: "Garaż" }],
  },
  {
    label: "Piwnica",
    images: [{ src: "/garage.png", alt: "Piwnica" }],
  },
  {
    label: "Balkon",
    images: [
      { src: "/balkon1.jpg", alt: "Balkon" },
      { src: "/balkon2.jpg", alt: "Balkon" },
    ],
  },
];

type LightboxState = { catIdx: number; imgIdx: number } | null;

interface GalleryProps {
  externalTab?: number;
  onTabChange?: (idx: number) => void;
}

export function Gallery({ externalTab, onTabChange }: GalleryProps = {}) {
  const [internalTab, setInternalTab] = useState(0);
  const activeTab = externalTab !== undefined ? externalTab : internalTab;
  const setActiveTab = (idx: number) => {
    setInternalTab(idx);
    onTabChange?.(idx);
  };
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const currentImages = categories[activeTab].images;

  const openLightbox = (imgIdx: number) => setLightbox({ catIdx: activeTab, imgIdx });

  const closeLightbox = () => setLightbox(null);

  const lightboxImages = lightbox !== null ? categories[lightbox.catIdx].images : [];

  const prev = () => {
    if (!lightbox) return;
    const total = lightboxImages.length;
    setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx - 1 + total) % total });
  };

  const next = () => {
    if (!lightbox) return;
    const total = lightboxImages.length;
    setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx + 1) % total });
  };

  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-primary mb-4">Galeria</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(idx)}
              data-testid={`tab-gallery-${idx}`}
              className={`px-4 py-2 text-sm font-medium border transition-colors rounded-sm ${
                activeTab === idx
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-white text-primary border-border hover:border-primary/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer bg-muted"
                onClick={() => openLightbox(idx)}
                data-testid={`gallery-image-${activeTab}-${idx}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </span>
              </motion.div>
            ))}

            {/* Placeholder tiles if no real images yet */}
            {currentImages.length === 0 && (
              <div className="col-span-full flex items-center justify-center h-48 border-2 border-dashed border-border rounded-sm text-muted-foreground text-sm">
                Brak zdjęć — dodaj zdjęcia dla: {categories[activeTab].label}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Upload hint */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Kliknij zakładkę, aby zobaczyć zdjęcia danego pomieszczenia. Każda zakładka to osobna kategoria.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
              data-testid="button-lightbox-close"
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4 z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft size={48} />
            </button>

            <img
              src={lightboxImages[lightbox.imgIdx].src}
              alt={lightboxImages[lightbox.imgIdx].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4 z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              data-testid="button-lightbox-next"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {categories[lightbox.catIdx].label} — {lightbox.imgIdx + 1} / {lightboxImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
