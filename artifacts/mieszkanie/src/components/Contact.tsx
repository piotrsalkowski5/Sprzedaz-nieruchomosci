import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, User, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Wystąpił błąd. Spróbuj ponownie.");
      }

      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-primary text-primary-foreground shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Umów oglądanie
              </h2>
              <p className="text-white/70 mb-12">
                Zainteresowany? Zadzwoń lub napisz, chętnie umówimy termin.
              </p>

              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mr-6 text-accent">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">
                      Osoba kontaktowa
                    </p>
                    <p className="text-xl font-medium">PIOTR SAŁKOWSKI</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mr-6 text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">
                      Telefon
                    </p>
                    <p className="text-xl font-medium">+48 784-350-821</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mr-6 text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-xl font-medium">
                      piotrsalkowski5@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-12 md:p-16 text-primary">
              <h3 className="text-2xl font-sans font-bold mb-8">
                Napisz wiadomość
              </h3>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 text-center"
                  data-testid="contact-success"
                >
                  <CheckCircle className="text-green-600 w-16 h-16 mb-4" />
                  <h4 className="text-xl font-semibold mb-2">
                    Wiadomość wysłana!
                  </h4>
                  <p className="text-muted-foreground">
                    Odezwiemy się najszybciej jak to możliwe.
                  </p>
                  <button
                    className="mt-6 text-sm underline text-muted-foreground"
                    onClick={() => setStatus("idle")}
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Imię i nazwisko
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Jan Kowalski"
                      required
                      disabled={status === "sending"}
                      className="bg-white border-transparent rounded-none h-12"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Numer telefonu
                    </label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+48 000 000 000"
                      required
                      disabled={status === "sending"}
                      className="bg-white border-transparent rounded-none h-12"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Wiadomość
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Dzień dobry, chciałbym umówić się na obejrzenie mieszkania..."
                      required
                      disabled={status === "sending"}
                      className="bg-white border-transparent rounded-none min-h-[120px]"
                      data-testid="input-message"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      className="flex items-center gap-2 text-red-600 text-sm"
                      data-testid="contact-error"
                    >
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-none bg-primary text-white hover:bg-primary/90 text-lg"
                    disabled={status === "sending"}
                    data-testid="button-submit-contact"
                  >
                    {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
