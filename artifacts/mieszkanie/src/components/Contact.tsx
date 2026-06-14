import { motion } from "framer-motion";
import { Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-primary text-primary-foreground shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Umów Oglądanie</h2>
              <p className="text-white/70 mb-12">
                Jesteś zainteresowany? Zadzwoń lub napisz, aby umówić się na prezentację tego wyjątkowego apartamentu.
              </p>

              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mr-6 text-accent">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Osoba Kontaktowa</p>
                    <p className="text-xl font-medium">[IMIĘ NAZWISKO]</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mr-6 text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Telefon</p>
                    <p className="text-xl font-medium">[TELEFON]</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mr-6 text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-xl font-medium">[EMAIL]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-12 md:p-16 text-primary">
              <h3 className="text-2xl font-serif mb-8">Napisz Wiadomość</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Imię i nazwisko</label>
                  <Input id="name" placeholder="Jan Kowalski" className="bg-white border-transparent rounded-none h-12" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Numer telefonu</label>
                  <Input id="phone" placeholder="+48 000 000 000" className="bg-white border-transparent rounded-none h-12" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Wiadomość</label>
                  <Textarea id="message" placeholder="Dzień dobry, chciałbym umówić się na obejrzenie mieszkania..." className="bg-white border-transparent rounded-none min-h-[120px]" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 rounded-none bg-primary text-white hover:bg-primary/90 text-lg"
                  data-testid="button-submit-contact"
                >
                  Wyślij Wiadomość
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
