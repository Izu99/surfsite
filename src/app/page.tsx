import type { Metadata } from "next";
import HeroSlideshow from "@/components/HeroSlideshow";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import EquipmentSection from "@/components/EquipmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "WaveX — Kite School California | Learn to Kitesurf",
  description:
    "California's premier kitesurfing school on Malibu Beach. IKO-certified instructors, world-class equipment and programs for all skill levels.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <EquipmentSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
