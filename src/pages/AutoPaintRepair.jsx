
import React, { useEffect } from "react";
import ServiceHero from "../components/services/ServiceHero";
import FeatureList from "../components/services/FeatureList";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Paintbrush, Droplets, Sparkles, Award } from "lucide-react";

const features = [
  {
    title: "Computerized Color Matching",
    description: "Advanced spectrophotometer technology ensures perfect color match every time.",
  },
  {
    title: "Climate-Controlled Booth",
    description: "State-of-the-art spray booth maintains optimal temperature and humidity for flawless finish.",
  },
  {
    title: "Premium Paint Products",
    description: "We use only top-tier automotive paint systems with UV protection and durability.",
  },
  {
    title: "Multi-Stage Process",
    description: "Professional prep, prime, base coat, and clear coat application for factory quality.",
  },
  {
    title: "Lifetime Warranty",
    description: "Every paint job is backed by our lifetime warranty on workmanship and materials.",
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Water-based paint systems and proper disposal practices protect the environment.",
  },
];

const paintServices = [
  {
    icon: Paintbrush,
    title: "Complete Paint Jobs",
    description: "Full vehicle repaints with precision masking and multiple coats.",
  },
  {
    icon: Droplets,
    title: "Spot Repairs",
    description: "Blend and match small areas for seamless repairs.",
  },
  {
    icon: Sparkles,
    title: "Clear Coat Restoration",
    description: "Fix peeling, fading, or damaged clear coat layers.",
  },
  {
    icon: Award,
    title: "Custom Finishes",
    description: "Specialty colors and finishes for unique vehicles.",
  },
];

export default function AutoPaintRepair() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ServiceHero
        title="Auto Paint Repair"
        subtitle="Factory-quality finish with lifetime warranty"
        image="https://i.imgur.com/vqDzWIn.png"
      />

      {/* Section 1: Flawless Paint, Every Time - with background image and overlay */}
      <section 
        className="py-24 relative overflow-hidden" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1582218497645-f0ae910b8e62?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
        <div className="relative z-10"> {/* Content wrapper */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Flawless Paint, Every Time
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our climate-controlled paint booth and computerized color-matching technology 
                ensure your vehicle receives a finish that's indistinguishable from the factory.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-white mb-6">
                  The Science of Perfect Paint
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    Paint repair is both an art and a science. Our technicians use advanced 
                    spectrophotometer technology to analyze your vehicle's exact color, 
                    accounting for age, sun exposure, and manufacturer variations.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Every paint job takes place in our state-of-the-art spray booth, which 
                    maintains precise temperature and humidity levels while filtering out 
                    contaminants. This controlled environment is crucial for achieving a 
                    smooth, glossy finish that lasts.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We follow a meticulous multi-stage process: surface preparation, primer 
                    application, base coat, and multiple clear coat layers. Each stage is 
                    carefully inspected before proceeding to the next.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <img
                  src="https://i.imgur.com/1t5qBDA.png"
                  alt="Paint booth"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>

            <div className="mb-24">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                Our Paint Repair Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {paintServices.map((service, index) => (
                  <div key={index} className="bg-[#1A1A1A] rounded-xl p-8 border border-white/10 text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#BEBEBE]/20 border-2 border-[#BEBEBE] mb-6 mx-auto">
                      <service.icon className="w-8 h-8 text-[#BEBEBE]" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                ))}
              </div>
              <FeatureList features={features} />
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-12 border border-white/10">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Why Our Paint Jobs Stand Out
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <div className="text-5xl font-bold text-[#BEBEBE] mb-4">100%</div>
                    <p className="text-white font-semibold mb-2">Perfect Color Match</p>
                    <p className="text-gray-400 text-sm">
                      Our computerized system guarantees exact color matching
                    </p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-[#BEBEBE] mb-4">5+</div>
                    <p className="text-white font-semibold mb-2">Layers of Protection</p>
                    <p className="text-gray-400 text-sm">
                      Multiple clear coats for durability and shine
                    </p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-[#BEBEBE] mb-4">∞</div>
                    <p className="text-white font-semibold mb-2">Lifetime Warranty</p>
                    <p className="text-gray-400 text-sm">
                      We stand behind every paint job we complete
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Call to Action - with background image and overlay */}
      <section 
        className="py-24 relative overflow-hidden" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1590396497258-0ce41a7b1d9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div> {/* Dark overlay */}
        <div className="relative z-10"> {/* Content wrapper */}
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for a Flawless Finish?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Schedule your paint repair consultation today and see the difference quality makes.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-[#BEBEBE] text-black hover:bg-white text-lg px-10 py-7">
                Schedule Paint Repair
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
