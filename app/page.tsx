import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import ProductsGrid from "@/components/ProductsGrid";
import SolutionsGrid from "@/components/SolutionsGrid";
import BrandsStrip from "@/components/BrandsStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import GalleryPreview from "@/components/GalleryPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStats />
      <ProductsGrid />
      <SolutionsGrid />
      <BrandsStrip />
      <WhyChooseUs />
      <GalleryPreview />
      <ContactSection />
      <Footer />
    </main>
  );
}