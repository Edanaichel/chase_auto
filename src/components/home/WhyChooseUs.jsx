
import React from "react";
import { Award, Wrench, Shield, Users, CheckCircle, Star } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Technicians",
    description: "I-CAR Gold Class certified professionals",
    stat: "20+ Years",
    detail: "Average experience",
  },
  {
    icon: Wrench,
    title: "OEM-Grade Equipment",
    description: "Latest technology and factory specifications",
    stat: "$500K+",
    detail: "Equipment investment",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "On all paint and repair work",
    stat: "100%",
    detail: "Quality guarantee",
  },
  {
    icon: Users,
    title: "Insurance Partners",
    description: "Work with all major insurance providers",
    stat: "15+",
    detail: "Insurance partners",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BEBEBE]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BEBEBE]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-[#BEBEBE] fill-[#BEBEBE] animate-pulse" />
            <span className="text-[#BEBEBE] font-semibold tracking-wider uppercase text-sm">
              Excellence Guaranteed
            </span>
            <Star className="w-6 h-6 text-[#BEBEBE] fill-[#BEBEBE] animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Why Choose Chase Auto Body
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BEBEBE] to-transparent"></span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
            Premium service backed by expertise and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black rounded-xl p-8 border border-white/10 hover:border-[#BEBEBE]/50 transition-all duration-500 card-lift shine-effect"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BEBEBE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#BEBEBE]/10 group-hover:bg-[#BEBEBE]/20 border-2 border-[#BEBEBE]/30 group-hover:border-[#BEBEBE] mb-6 transition-all duration-300 icon-rotate">
                  <feature.icon className="w-10 h-10 text-[#BEBEBE] group-hover:text-white transition-colors" />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#BEBEBE] group-hover:text-white transition-colors mb-1">
                    {feature.stat}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {feature.detail}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>

                {/* Check Mark */}
                <div className="mt-6 flex items-center text-[#BEBEBE] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Verified</span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#BEBEBE]/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Badge - Responsive */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 bg-black border border-white/10 rounded-full px-6 md:px-8 py-4 hover:border-[#BEBEBE]/30 transition-all duration-300 hover:scale-105 max-w-full">
            <div className="flex items-center gap-2">
              <Shield className="w-4 md:w-5 h-4 md:h-5 text-[#BEBEBE] flex-shrink-0" />
              <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">BBB Accredited</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Award className="w-4 md:w-5 h-4 md:h-5 text-[#BEBEBE] flex-shrink-0" />
              <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">I-CAR Gold Class</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 md:w-5 h-4 md:h-5 text-[#BEBEBE] fill-[#BEBEBE] flex-shrink-0" />
              <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
