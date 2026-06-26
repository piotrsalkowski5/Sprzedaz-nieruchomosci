import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/widok1.jpg)" }}
      />

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-black/30" />

      <div className="container relative z-20 mx-auto px-6 h-full flex flex-col justify-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-8 md:p-12 border border-white/20 shadow-2xl"
        >
          <span className="block text-sm md:text-base font-medium tracking-widest text-muted-foreground uppercase mb-4">
            Na sprzedaż
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-primary leading-tight mb-6">
            Mieszkanie z garażem
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-3">
            Płońsk
            <br />
            ul. Mikołaja Kopernika 5<br />
            09-100 Płońsk
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-3">
            Cena:{" "}
            <span className="font-semibold text-primary">490 000 PLN</span> do
            negocjacji
          </p>

          <p className="text-md md:text-xl text-muted-foreground mb-8">
            Brak pośredników!!! Kupujesz od osoby prywatnej.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-none bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              data-testid="button-hero-contact"
            >
              <a href="#kontakt">
                Umów oglądanie <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-none border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg"
              data-testid="button-hero-email"
            >
              <a href="#kontakt">Napisz do nas</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
