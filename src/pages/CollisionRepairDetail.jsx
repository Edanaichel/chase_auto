import React, { useEffect } from "react";
import ServiceHero from "../components/services/ServiceHero";
import FeatureList from "../components/services/FeatureList";
import BeforeAfterSlider from "../components/services/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const capabilities = [
  {
    title: "Dent & Ding Removal",
    description: "Paintless dent repair and traditional bodywork for all sizes of damage.",
  },
  {
    title: "Bumper Repair & Replacement",
    description: "Expert repair or replacement of damaged bumpers with perfect color matching.",
  },
  {
    title: "Panel Replacement",
    description: "Precise removal and installation of damaged body panels using OEM parts.",
  },
  {
    title: "Structural Damage Repair",
    description: "Advanced techniques for repairing major collision damage to vehicle structure.",
  },
  {
    title: "Glass Replacement",
    description: "Professional windshield and window replacement with proper sealing.",
  },
];

export default function CollisionRepairDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ServiceHero
        title="Collision Repair"
        subtitle="From minor dents to major damage - we restore it all"
        image="https://i.imgur.com/8U7cU6s.png"
      />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Collision Repair Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether it's a minor fender bender or major collision damage, our certified 
              technicians have the expertise and equipment to restore your vehicle to 
              pre-accident condition.
            </p>
          </div>

          <div className="mb-24">
            <BeforeAfterSlider 
              beforeImage="https://i.imgur.com/i20HFHh.png"
              afterImage="https://i.imgur.com/pr8BYXB.png" 
            />
            <p className="text-center text-gray-400 mt-6 italic">
              Slide to see the transformation
            </p>
          </div>

          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Our Repair Capabilities
            </h3>
            <FeatureList features={capabilities} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://i.imgur.com/xwUt3xB.png"
                alt="Collision repair work"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose Chase for Collision Repair
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">Certified Excellence:</strong> Our I-CAR Gold Class 
                  certified technicians undergo continuous training to stay current with the latest 
                  repair techniques and vehicle technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">OEM Standards:</strong> We use only manufacturer-approved 
                  parts and follow factory repair procedures to ensure your vehicle's safety and warranty.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">Advanced Equipment:</strong> Our shop is equipped with 
                  state-of-the-art diagnostic tools, welding equipment, and computerized measuring systems.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">Quality Guarantee:</strong> Every repair comes with our 
                  lifetime warranty on workmanship and paint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Your Free Repair Estimate
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contact us today for a detailed assessment and transparent pricing.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-[#BEBEBE] text-black hover:bg-white text-lg px-10 py-7">
              Request Estimate
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}