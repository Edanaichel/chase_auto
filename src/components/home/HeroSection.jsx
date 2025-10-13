import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: "url('https://i.imgur.com/Hqu8por.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>
      
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 block md:hidden"
        style={{
          backgroundImage: "url('https://i.imgur.com/7yHNm12.jpeg')",
          backgroundSize: "120%",
          backgroundPosition: "30% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#BEBEBE] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up">
          <span className="block text-white">Family-Owned. Community-Trusted.</span>
          <span className="block text-[#BEBEBE] relative mt-2">
            Chase Auto Body
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BEBEBE] to-transparent"></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Serving North Hills with Excellence Since Day One
        </p>
        <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Link to={createPageUrl("BookAppointment")}>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-[#BEBEBE] text-lg px-8 py-6 group glow-button pulse-glow relative z-10"
            >
              Request a Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}