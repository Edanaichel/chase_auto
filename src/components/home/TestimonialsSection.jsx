import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const vehicleImages = {
  "2021 Mercedes-Benz E-Class": "https://i.imgur.com/Zg7OyoJ.png",
  "2022 Tesla Model 3": "https://i.imgur.com/XsyqjjY.png",
  "2020 BMW X5": "https://i.imgur.com/x990GF6.png",
  "2019 Lexus RX 350": "https://i.imgur.com/Ia3ajtq.png",
};

// Static testimonials data
const staticTestimonials = [
  {
    id: 1,
    customer_name: "Sarah Johnson",
    vehicle: "2021 Mercedes-Benz E-Class",
    rating: 5,
    review_text: "Chase Auto Body exceeded my expectations. They repaired my Mercedes after a collision and it looks better than before. Professional, honest, and great communication throughout the process.",
    is_featured: true
  },
  {
    id: 2,
    customer_name: "Michael Chen",
    vehicle: "2022 Tesla Model 3",
    rating: 5,
    review_text: "Amazing work on my Tesla! They handled everything with my insurance company and the repair was flawless. The team is knowledgeable about electric vehicles and used proper procedures.",
    is_featured: true
  },
  {
    id: 3,
    customer_name: "Jennifer Martinez",
    vehicle: "2020 BMW X5",
    rating: 5,
    review_text: "Outstanding service from start to finish. They provided a detailed estimate, kept me updated throughout the repair process, and delivered my BMW ahead of schedule. Highly recommend!",
    is_featured: true
  },
  {
    id: 4,
    customer_name: "David Thompson",
    vehicle: "2019 Lexus RX 350",
    rating: 5,
    review_text: "Professional, reliable, and honest. Chase Auto Body fixed my Lexus after a hit-and-run and the quality of work is exceptional. Fair pricing and excellent customer service.",
    is_featured: true
  }
];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(staticTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('next');

  // Auto-play testimonials every 5 seconds
  useEffect(() => {
    if (testimonials.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const nextTestimonial = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevTestimonial = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  if (testimonials.length === 0) {
    return null;
  }

  const current = testimonials[currentIndex];
  const backgroundImage = vehicleImages[current.vehicle] || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80";

  return (
    <section 
      className="py-24 bg-black relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Image with Smooth Transition */}
      <div 
        key={currentIndex}
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black transition-opacity duration-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#BEBEBE] fill-[#BEBEBE] animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            What Our Clients Say
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BEBEBE] to-transparent"></span>
          </h2>
          <p className="text-xl text-gray-400 mb-4 mt-6">
            Real experiences from real customers
          </p>
          <a 
            href="https://www.yelp.com/biz/chase-auto-body-north-hills-2?override_cta=Get+pricing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#BEBEBE] hover:text-white transition-all duration-300 text-lg font-medium group"
          >
            See What Our Other Clients Say On Our Yelp
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="relative">
          {/* Testimonial Card with Slide Transition */}
          <div 
            key={`testimonial-${currentIndex}`}
            className="bg-gradient-to-br from-[#1A1A1A]/90 to-black/90 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-2xl hover:border-[#BEBEBE]/30 card-lift"
            style={{
              animation: direction === 'next' ? 'slideInRight 0.6s ease-out' : 'slideInLeft 0.6s ease-out'
            }}
          >
            <Quote className="w-16 h-16 text-[#BEBEBE] opacity-30 mb-6 animate-pulse" />
            
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 transition-all duration-300 ${
                    i < current.rating ? "text-[#BEBEBE] fill-[#BEBEBE] scale-110" : "text-gray-600"
                  }`}
                  style={{animationDelay: `${i * 0.1}s`}}
                />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-light italic">
              "{current.review_text}"
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#BEBEBE]/20 border-2 border-[#BEBEBE] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <span className="text-[#BEBEBE] font-bold text-xl">
                    {current.customer_name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{current.customer_name}</p>
                  {current.vehicle && (
                    <p className="text-[#BEBEBE] text-sm font-medium">{current.vehicle}</p>
                  )}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-[#BEBEBE] text-[#BEBEBE] hover:bg-[#BEBEBE] hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-[#BEBEBE] text-[#BEBEBE] hover:bg-[#BEBEBE] hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Pagination Dots with Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className="relative group"
              >
                <div className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex ? "bg-[#BEBEBE] w-8" : "bg-gray-600 w-2 hover:bg-gray-500"
                }`}>
                  {/* Progress bar for current slide */}
                  {index === currentIndex && !isPaused && (
                    <div 
                      className="absolute top-0 left-0 h-full bg-white rounded-full"
                      style={{
                        animation: 'progress 5s linear',
                        width: '0%',
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              {isPaused ? "Paused" : "Auto-playing"} • Hover to pause
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}