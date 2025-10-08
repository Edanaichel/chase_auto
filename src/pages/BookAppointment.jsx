
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle, MapPin, Phone as PhoneIcon } from "lucide-react";

export default function BookAppointment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = () => {
    window.open("https://calendar.app.google/jH6vTyKnsL4KMzUm9", "_blank");
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.imgur.com/9iIoYyD.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight relative inline-block">
            Book an Appointment
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BEBEBE] to-transparent"></span>
          </h1>
          <p className="text-xl text-gray-300 font-light mt-6">
            Schedule your visit in just a few clicks
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Sidebar - Business Info */}
            <div className="lg:col-span-2 bg-[#1A1A1A] rounded-xl p-8 border border-white/10 h-fit sticky top-24 animate-fade-in-up card-lift">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-white">CHASE</span>
                <span className="text-[#BEBEBE] ml-2">AUTO BODY</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#BEBEBE] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Location</p>
                    <p className="text-gray-400 text-sm">
                      8540 Sepulveda Blvd<br />
                      North Hills, CA 91343
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <PhoneIcon className="w-5 h-5 text-[#BEBEBE] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Phone</p>
                    <a href="tel:+18188132999" className="text-gray-400 text-sm hover:text-[#BEBEBE]">
                      (818) 813-2999
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#BEBEBE] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Hours</p>
                    <div className="text-gray-400 text-sm space-y-1">
                      <p>Monday - Friday</p>
                      <p>7:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-[#BEBEBE] mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 text-[#BEBEBE]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Free Estimates</span>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Call to Action */}
            <div className="lg:col-span-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-[#1A1A1A] rounded-xl p-8 md:p-12 border border-white/10 text-center card-lift shine-effect">
                <Calendar className="w-20 h-20 text-[#BEBEBE] mx-auto mb-6 animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Schedule?
                </h2>
                <p className="text-gray-400 mb-8 text-base md:text-lg">
                  Click the button below to access our online booking calendar.
                  <br />
                  Choose a time that works best for you.
                </p>
                
                <Button
                  onClick={handleBookNow}
                  className="w-full md:w-auto bg-[#BEBEBE] text-black hover:bg-white text-base md:text-lg px-6 md:px-10 py-6 md:py-7 font-semibold glow-button pulse-glow"
                >
                  Book Your Appointment Now
                </Button>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-4">What You Can Book:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all duration-300 card-lift border border-white/5">
                      <p className="text-[#BEBEBE] font-medium text-sm md:text-base">✓ Free Repair Estimates</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all duration-300 card-lift border border-white/5">
                      <p className="text-[#BEBEBE] font-medium text-sm md:text-base">✓ Vehicle Drop-off</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all duration-300 card-lift border border-white/5">
                      <p className="text-[#BEBEBE] font-medium text-sm md:text-base">✓ Insurance Consultation</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all duration-300 card-lift border border-white/5">
                      <p className="text-[#BEBEBE] font-medium text-sm md:text-base">✓ Vehicle Inspection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
