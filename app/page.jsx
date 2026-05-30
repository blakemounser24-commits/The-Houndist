import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import Pricing from "@/components/Pricing";
import MultiDog from "@/components/MultiDog";
import Packages from "@/components/Packages";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <WhatWeOffer />
      <Pricing />
      <MultiDog />
      <Packages />
      <Reviews />
      <WhyChooseUs />
      <ServiceArea />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
