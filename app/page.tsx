import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import AboutTeaser from "@/components/AboutTeaser";
import ProductsGrid from "@/components/ProductsGrid";
import SolutionsGrid from "@/components/SolutionsGrid";
import ProcessSteps from "@/components/ProcessSteps";
import BrandsStrip from "@/components/BrandsStrip";
import Warehouse from "@/components/Warehouse";
import WhyChooseUs from "@/components/WhyChooseUs";
import Capabilities from "@/components/Capabilities";
import GalleryPreview from "@/components/GalleryPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStats />
      <AboutTeaser />
      <ProductsGrid />
      <SolutionsGrid />
      <ProcessSteps />
      <BrandsStrip />
      <Warehouse />
      <WhyChooseUs />
      <Capabilities />
      <GalleryPreview />
      <ContactSection />
    </main>
  );
}
