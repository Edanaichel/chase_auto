import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}