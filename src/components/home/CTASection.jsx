import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#BEBEBE]/20 via-transparent to-[#BEBEBE]/20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative inline-block">
          Ready to Restore Your Vehicle?
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BEBEBE] to-transparent"></span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 mt-8">
          Get a free estimate today and experience the Chase Auto Body difference
        </p>
        <Link to={createPageUrl("BookAppointment")}>
          <Button 
            size="lg" 
            className="bg-[#BEBEBE] text-black hover:bg-white text-lg px-10 py-7 group glow-button pulse-glow"
          >
            Schedule an Appointment
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </section>
  );
}