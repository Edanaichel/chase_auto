
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Shield, Wrench, Ruler, Paintbrush, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Insurance Claim Assistance",
    description: "We handle all paperwork and coordinate with insurers to save you time and stress.",
    url: createPageUrl("InsuranceClaimAssistance"),
    gradient: "from-blue-500/20 via-blue-600/20 to-cyan-500/20",
    image: "https://i.imgur.com/K9pqfFy.png",
    features: ["Direct billing", "All major insurers", "Fast processing"],
  },
  {
    icon: Wrench,
    title: "Collision Repair",
    description: "Complete collision repair services from minor dents to major structural damage.",
    url: createPageUrl("CollisionRepairDetail"),
    gradient: "from-red-500/20 via-red-600/20 to-orange-500/20",
    image: "https://i.imgur.com/DLdUadd.png", // Updated image URL
    features: ["OEM parts", "Factory specs", "Certified techs"],
  },
  {
    icon: Ruler,
    title: "Frame Straightening",
    description: "State-of-the-art frame alignment technology for precision structural repairs.",
    url: createPageUrl("AutoFrameStraightening"),
    gradient: "from-purple-500/20 via-purple-600/20 to-pink-500/20",
    image: "https://i.imgur.com/uEVd7xh.png",
    features: ["Laser accuracy", "Safety certified", "All vehicle types"],
  },
  {
    icon: Paintbrush,
    title: "Paint Repair",
    description: "Factory-quality color matching and flawless finish in our climate-controlled booth.",
    url: createPageUrl("AutoPaintRepair"),
    gradient: "from-green-500/20 via-green-600/20 to-emerald-500/20",
    image: "https://i.imgur.com/2RJ3ZSa.png",
    features: ["Perfect color match", "Lifetime warranty", "5+ clear coats"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#BEBEBE] to-transparent"></span>
          </h2>
          <p className="text-xl text-gray-400 mt-6">
            Comprehensive collision care for all makes and models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.url}
              className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 hover:border-[#BEBEBE]/50 transition-all duration-500 card-lift shine-effect"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110 transform">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#BEBEBE]/10 group-hover:bg-[#BEBEBE]/20 border-2 border-[#BEBEBE]/30 group-hover:border-[#BEBEBE] flex items-center justify-center transition-all duration-300 icon-rotate">
                    <service.icon className="w-8 h-8 text-[#BEBEBE] group-hover:text-white transition-colors" />
                  </div>
                  <Sparkles className="w-6 h-6 text-[#BEBEBE]/40 group-hover:text-[#BEBEBE] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:rotate-12" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 group-hover:text-gray-200 transition-colors leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[#BEBEBE]/10 text-[#BEBEBE] border border-[#BEBEBE]/20 group-hover:bg-[#BEBEBE]/20 group-hover:border-[#BEBEBE]/40 transition-all duration-300 hover:scale-110"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-[#BEBEBE] group-hover:text-white transition-colors">
                  <span className="text-sm font-semibold mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#BEBEBE]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
