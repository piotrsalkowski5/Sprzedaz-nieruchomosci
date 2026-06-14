import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Galeria", href: "#galeria" },
    { name: "Parametry", href: "#parametry" },
    { name: "Lokalizacja", href: "#lokalizacja" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-sans text-xl font-semibold text-primary">
          Mieszkanie na sprzedaż
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isScrolled ? "text-primary hover:text-accent" : "text-primary hover:text-accent"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 font-medium tracking-wide rounded-none px-6"
            data-testid="button-nav-contact"
          >
            <a href="#kontakt">Umów oglądanie</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-6 shadow-lg flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-primary py-2 border-b border-border/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full mt-4 bg-primary text-white rounded-none">
            <a href="#kontakt" onClick={() => setMobileMenuOpen(false)}>
              Umów oglądanie
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
