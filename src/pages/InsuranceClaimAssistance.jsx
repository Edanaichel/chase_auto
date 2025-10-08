import React, { useEffect } from "react";
import ServiceHero from "../components/services/ServiceHero";
import FeatureList from "../components/services/FeatureList";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { FileText, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    title: "Complete Paperwork Handling",
    description: "We manage all documentation and communication with your insurance company from start to finish.",
  },
  {
    title: "Direct Insurance Billing",
    description: "Work directly with all major insurance providers for seamless claim processing.",
  },
  {
    title: "Faster Claim Processing",
    description: "Our experienced team ensures your claim is processed quickly and efficiently.",
  },
  {
    title: "Maximize Your Coverage",
    description: "We help ensure you receive the full benefits entitled under your policy.",
  },
];

const process = [
  {
    icon: FileText,
    title: "Report Your Claim",
    description: "Contact your insurance and bring your vehicle to our shop.",
  },
  {
    icon: Users,
    title: "We Handle Communication",
    description: "Our team coordinates directly with your insurance adjuster.",
  },
  {
    icon: Shield,
    title: "Approval & Repair",
    description: "Once approved, we begin precision repairs using OEM parts.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "We complete repairs efficiently while maintaining quality standards.",
  },
];

export default function InsuranceClaimAssistance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ServiceHero
        title="Insurance Claim Assistance"
        subtitle="Let us navigate the insurance process for you"
        image="https://i.imgur.com/MXGpp7G.png"
      />

      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-block mb-6">
                <span className="text-[#BEBEBE] font-semibold tracking-wider uppercase text-sm border border-[#BEBEBE]/30 px-4 py-2 rounded-full">
                  Hassle-Free Process
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Stress-Free Insurance Claims
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Dealing with insurance companies after an accident can be overwhelming. 
                At Chase Auto Body, we remove that burden entirely. Our experienced team 
                has established relationships with all major insurance providers and knows 
                exactly how to navigate the claims process efficiently.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We handle everything from initial documentation to final approval, keeping 
                you informed every step of the way. Our goal is to maximize your coverage 
                and get your vehicle repaired as quickly as possible.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80"
                  alt="Insurance assistance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#BEBEBE] rounded-lg opacity-10"></div>
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              What We Handle For You
            </h3>
            <FeatureList features={features} />
          </div>

          <div className="relative">
            {/* Background for Process Section */}
            <div 
              className="absolute inset-0 opacity-5 rounded-2xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            
            <div className="relative z-10 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                Our Claims Process
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full hover:border-[#BEBEBE]/50 transition-all duration-300">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#BEBEBE]/20 border-2 border-[#BEBEBE] mb-6">
                        <step.icon className="w-8 h-8 text-[#BEBEBE]" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#BEBEBE] flex items-center justify-center font-bold text-black text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
        {/* Background Pattern with Lower Opacity */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://i.imgur.com/K9pqfFy.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Claim Today
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contact us to begin your insurance claim. We'll guide you through every step.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-[#BEBEBE] text-black hover:bg-white text-lg px-10 py-7">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}