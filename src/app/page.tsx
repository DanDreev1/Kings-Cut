import HeroSection from "@/components/Home/HeroSection"
import ServicesSection from "@/components/Home/ServicesSection"
import GallerySection from "@/components/Home/GallerySection"
import TestimonialSection from "@/components/Home/TestimonialSection"
import TestimonialSlider from "@/components/Home/TestimonialSlider"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialSection />
      <TestimonialSlider />
    </main>
  )
}
