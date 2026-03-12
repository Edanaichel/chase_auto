

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = currentPageName === "Home";

  const navLinks = [
    { name: "Home", url: createPageUrl("Home") },
    {
      name: "Services",
      dropdown: [
        { name: "Insurance Claim Assistance", url: createPageUrl("InsuranceClaimAssistance") },
        { name: "Collision Repair", url: createPageUrl("CollisionRepairDetail") },
        { name: "Frame Straightening", url: createPageUrl("AutoFrameStraightening") },
        { name: "Paint Repair", url: createPageUrl("AutoPaintRepair") },
      ],
    },
    { name: "Book Appointment", url: createPageUrl("BookAppointment") },
    { name: "Contact", url: createPageUrl("Contact") },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        :root {
          --chrome-silver: #BEBEBE;
          --jet-black: #000000;
          --deep-charcoal: #1A1A1A;
        }
        
        /* Subtle background texture */
        body {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Enhanced navigation link animations */
        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--chrome-silver), transparent);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link:hover {
          color: var(--chrome-silver);
          text-shadow: 0 0 20px rgba(190, 190, 190, 0.5);
          transform: translateY(-2px);
        }
        
        /* Glass effect with enhanced backdrop */
        .glass-effect {
          backdrop-filter: blur(12px) saturate(180%);
          background: rgba(0, 0, 0, 0.85);
          border-bottom: 1px solid rgba(190, 190, 190, 0.1);
        }
        
        /* Enhanced button glow effect */
        .glow-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .glow-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(190, 190, 190, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .glow-button:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .glow-button:hover {
          box-shadow: 0 0 30px rgba(190, 190, 190, 0.4);
          transform: translateY(-2px);
        }
        
        /* Smooth scroll reveal animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Card hover lift effect */
        .card-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(190, 190, 190, 0.15);
        }
        
        /* Subtle shine effect on hover */
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 0.6s;
        }
        
        .shine-effect:hover::after {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }
        
        /* Icon rotation animation */
        .icon-rotate {
          transition: transform 0.3s ease;
        }
        
        .icon-rotate:hover {
          transform: rotate(15deg) scale(1.1);
        }
        
        /* Decorative gradient line */
        .gradient-line {
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--chrome-silver),
            transparent
          );
          opacity: 0.3;
        }
        
        /* Pulsing glow for important elements */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(190, 190, 190, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(190, 190, 190, 0.5);
          }
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        /* Enhanced input focus */
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--chrome-silver) !important;
          box-shadow: 0 0 0 3px rgba(190, 190, 190, 0.1), 0 0 20px rgba(190, 190, 190, 0.2);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        /* Smooth section transitions */
        section {
          position: relative;
        }
        
        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(190, 190, 190, 0.2), transparent);
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage ? "glass-effect shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Text */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-4 group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e182b7fcc9a9d6bd8828e2/5a720749e_chaseauto__2_-removebg-preview.png" 
                alt="Chase Auto Body" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="hidden md:block">
                <div className="text-xl font-bold leading-tight">
                  <span className="text-white">CHASE</span>
                  <span className="text-[var(--chrome-silver)] ml-2">AUTO BODY</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="nav-link flex items-center space-x-1 text-sm font-medium tracking-wide uppercase cursor-pointer">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[var(--deep-charcoal)] border-[var(--chrome-silver)] border-opacity-20 backdrop-blur-lg">
                      {link.dropdown.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link
                            to={item.url}
                            className="text-white hover:text-[var(--chrome-silver)] cursor-pointer transition-all duration-300 hover:pl-4"
                          >
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={link.name}
                    to={link.url}
                    className="nav-link text-sm font-medium tracking-wide uppercase"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <a href="tel:+18188132999" className="flex items-center space-x-2 text-[var(--chrome-silver)] hover:text-white transition-colors duration-300 group">
                <Phone className="w-4 h-4 icon-rotate" />
                <span className="text-sm font-medium">(818) 813-2999</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-effect border-t border-white border-opacity-10 animate-fade-in-up">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="space-y-2">
                    <div className="text-sm font-medium tracking-wide uppercase text-[var(--chrome-silver)]">
                      {link.name}
                    </div>
                    <div className="pl-4 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.url}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-white hover:text-[var(--chrome-silver)] transition-all duration-300 hover:pl-2"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium tracking-wide uppercase hover:text-[var(--chrome-silver)] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <a
                href="tel:+18188132999"
                className="flex items-center space-x-2 text-[var(--chrome-silver)] pt-4 border-t border-white border-opacity-10 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(818) 813-2999</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[var(--deep-charcoal)] border-t border-white border-opacity-10 py-12 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(190, 190, 190, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4 group">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e182b7fcc9a9d6bd8828e2/5a720749e_chaseauto__2_-removebg-preview.png" 
                  alt="Chase Auto Body" 
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="text-lg font-bold leading-tight">
                  <span className="text-white block">CHASE</span>
                  <span className="text-[var(--chrome-silver)] block">AUTO BODY</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                North Hills' premier collision repair center. Family-Owned. Community-Trusted.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="hover:text-[var(--chrome-silver)] transition-colors duration-300">8540 Sepulveda Blvd, North Hills, CA 91343</p>
                <p>Phone: <a href="tel:+18188132999" className="hover:text-[var(--chrome-silver)] transition-colors duration-300">(818) 813-2999</a></p>
                <p>Email: <a href="mailto:chaseautonh@gmail.com" className="hover:text-[var(--chrome-silver)] transition-colors duration-300">chaseautonh@gmail.com</a></p>
                <p>Review us on <a href="https://www.yelp.com/biz/chase-auto-body-north-hills-2?override_cta=Get+pricing" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--chrome-silver)] transition-colors duration-300">Yelp</a></p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="gradient-line my-8"></div>
          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>&copy; 2024 Chase Auto Body - North Hills. All rights reserved.</p>
            <p><a href="https://sites.google.com/view/chaseautobodynorthhillsprivacy/home" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--chrome-silver)] transition-colors duration-300">Privacy Policy</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

