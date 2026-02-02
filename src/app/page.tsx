// src/app/page.tsx
import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";

export default function Page() {
  return (
    <MainLayout>
      <Hero />            {/* Removed buttonId */}
      <FeaturedWork />
      <Services />
      <Pricing />
    </MainLayout>
  );
}
