import Hero from "@/components/home/Hero";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import AboutTeaser from "@/components/home/AboutTeaser";
import Process from "@/components/home/Process";
import ContactTeaser from "@/components/home/ContactTeaser";

import OurWork from "@/components/home/OurWork";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesTeaser />
      <OurWork />
      <AboutTeaser />
      <Process />
      <ContactTeaser />
    </div>
  );
}
