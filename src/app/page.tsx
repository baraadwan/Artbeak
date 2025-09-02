import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import HeroSection from "@/components/sections/HeroSection";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <FeaturedWork />
      <Services />
      <Pricing />
      <FAQ />
      <Newsletter />
      <HeroSection />
    </MainLayout>
  );
}

//
