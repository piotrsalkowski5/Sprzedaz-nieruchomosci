import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Features } from "@/components/Features";
import { Parameters } from "@/components/Parameters";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <Gallery />
      <Features />
      <Parameters />
      <Location />
      <Contact />
    </main>
  );
}
