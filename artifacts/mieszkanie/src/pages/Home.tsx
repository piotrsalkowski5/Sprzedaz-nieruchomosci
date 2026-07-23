import React, { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Features } from "@/components/Features";
import { FloorPlan } from "@/components/FloorPlan";
import { Parameters } from "@/components/Parameters";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";

export default function Home() {
  const [galleryTab, setGalleryTab] = useState<number>(0);

  const handleRoomClick = (tabIndex: number) => {
    setGalleryTab(tabIndex);
    const el = document.getElementById("galeria");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    fetch("https://server-api-n.vercel.app/api/get-person", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: null,
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <Gallery externalTab={galleryTab} onTabChange={setGalleryTab} />
      <Features />
      <FloorPlan onRoomClick={handleRoomClick} activeTab={galleryTab} />
      <Parameters />
      <Location />
      <Contact />
    </main>
  );
}
