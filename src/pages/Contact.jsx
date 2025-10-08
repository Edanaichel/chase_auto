import React, { useState, useEffect } from "react";
import { sendContactEmail } from "@/api/emailService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    inquiry_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  // Validation states
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailDebounce, setEmailDebounce] = useState(null);
  const [phoneDebounce, setPhoneDebounce] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Email validation with debouncing - stricter validation
  const validateEmail = (email) => {
    if (!email) {
      setEmailError("");
      return;
    }
    
    // Check basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    // Extract domain and TLD
    const parts = email.split('@');
    if (parts.length !== 2) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    const domain = parts[1];
    const domainParts = domain.split('.');
    
    // Must have at least domain.tld (2 parts after @)
    if (domainParts.length < 2) {
      setEmailError("Please enter a valid email address with a proper domain (e.g., @gmail.com)");
      return;
    }
    
    // Check if TLD (last part) is 2-3 characters
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2 || tld.length > 3) {
      setEmailError("Please enter a valid email address with a proper domain extension");
      return;
    }
    
    // Check if domain part before TLD is at least 2 characters
    const domainName = domainParts[domainParts.length - 2];
    if (domainName.length < 2) {
      setEmailError("Please enter a valid email address with a proper domain");
      return;
    }
    
    setEmailError("");
  };

  // Phone validation with toll-free detection
  const validatePhone = (phone) => {
    if (!phone) {
      setPhoneError("");
      return;
    }
    
    // Remove all non-numeric characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check for toll-free area codes
    const tollFreeAreaCodes = ['800', '888', '877', '866', '855', '844', '833'];
    const areaCode = cleanPhone.substring(0, 3);
    
    if (tollFreeAreaCodes.includes(areaCode)) {
      setPhoneError("Toll-free numbers (800, 888, 877, 866, 855, 844, 833) are not accepted. Please provide a direct phone number.");
      return;
    }
    
    // Check length
    if (cleanPhone.length < 10) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }
    
    if (cleanPhone.length > 11) {
      setPhoneError("Phone number is too long");
      return;
    }
    
    setPhoneError("");
  };

  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure immediate validation on submit if not already validated
    validateEmail(formData.email);
    validatePhone(formData.phone);
    
    // Final validation check before submission
    if (emailError || phoneError || !formData.email || !formData.phone || !formData.name || !formData.inquiry_type || !formData.message) {
      setError("Please fix all errors and fill in all required fields before submitting");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await sendContactEmail(formData);
      
      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          vehicle: "",
          inquiry_type: "",
          message: "",
        });
        setEmailError("");
        setPhoneError("");
        
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(response.data.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("There was an error submitting your request. Please call us at (818) 813-2999.");
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (field, value) => {
    if (field === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, phone: formatted }));
      
      if (phoneDebounce) clearTimeout(phoneDebounce);
      setPhoneDebounce(setTimeout(() => validatePhone(formatted), 500));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
      
      // Debounced email validation
      if (field === "email") {
        if (emailDebounce) clearTimeout(emailDebounce);
        setEmailDebounce(setTimeout(() => validateEmail(value), 500));
      }
    }
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BEBEBE] to-transparent"></span>
          </h1>
          <p className="text-xl text-gray-300 font-light mt-6">
            Schedule your free estimate today
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Chase Auto Body
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-[#BEBEBE] flex-shrink-0 mt-1 icon-rotate" />
                    <div>
                      <p className="text-white font-semibold mb-1">Location</p>
                      <p className="text-gray-400">
                        8540 Sepulveda Blvd<br />
                        North Hills, CA 91343
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[#BEBEBE] flex-shrink-0 mt-1 icon-rotate" />
                    <div>
                      <p className="text-white font-semibold mb-1">Phone</p>
                      <a href="tel:+18188132999" className="text-gray-400 hover:text-[#BEBEBE] transition-colors duration-300">
                        (818) 813-2999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-[#BEBEBE] flex-shrink-0 mt-1 icon-rotate" />
                    <div>
                      <p className="text-white font-semibold mb-1">Email</p>
                      <a href="mailto:chaseautonh@gmail.com" className="text-gray-400 hover:text-[#BEBEBE] transition-colors duration-300">
                        chaseautonh@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-[#BEBEBE] flex-shrink-0 mt-1 icon-rotate" />
                    <div>
                      <p className="text-white font-semibold mb-1">Hours</p>
                      <div className="text-gray-400 space-y-1">
                        <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-2xl h-64 card-lift border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.234!2d-118.4749!3d34.2394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29a0c6f5f5f5f%3A0x1234567890abcdef!2s8540%20Sepulveda%20Blvd%2C%20North%20Hills%2C%20CA%2091343!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Chase Auto Body Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-[#1A1A1A] rounded-xl p-8 border border-white/10 card-lift shine-effect">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Request a Free Estimate
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12 animate-fade-in-up">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6 animate-pulse" />
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Thank You!
                    </h4>
                    <p className="text-gray-400 text-lg mb-4">
                      We've received your message and will contact you within 24 hours.
                    </p>
                    <p className="text-gray-500 text-sm">
                      For immediate assistance, please call us at (818) 813-2999
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="bg-black border-white/20 text-white mt-2"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">Phone *</Label>
                        <Input
                          id="phone"
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className={`bg-black border-white/20 text-white mt-2 ${phoneError ? 'border-red-500' : ''}`}
                          placeholder="(555) 123-4567"
                          maxLength="14"
                        />
                        {phoneError && (
                          <div className="flex items-start gap-2 text-red-400 text-sm mt-2">
                            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{phoneError}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`bg-black border-white/20 text-white mt-2 ${emailError ? 'border-red-500' : ''}`}
                        placeholder="your@email.com"
                      />
                      {emailError && (
                        <div className="flex items-start gap-2 text-red-400 text-sm mt-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{emailError}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="vehicle" className="text-white">Vehicle Make & Model</Label>
                      <Input
                        id="vehicle"
                        value={formData.vehicle}
                        onChange={(e) => handleChange("vehicle", e.target.value)}
                        className="bg-black border-white/20 text-white mt-2"
                        placeholder="e.g., 2020 BMW 3 Series"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiry_type" className="text-white">Service Needed *</Label>
                      <Select
                        required
                        value={formData.inquiry_type}
                        onValueChange={(value) => handleChange("inquiry_type", value)}
                      >
                        <SelectTrigger className="bg-black border-white/20 text-white mt-2">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A2A2A] border-white/30">
                          <SelectItem value="insurance_claim" className="text-white hover:bg-[#3A3A3A] focus:bg-[#3A3A3A] cursor-pointer">
                            Insurance Claim
                          </SelectItem>
                          <SelectItem value="repair_quote" className="text-white hover:bg-[#3A3A3A] focus:bg-[#3A3A3A] cursor-pointer">
                            Repair Quote
                          </SelectItem>
                          <SelectItem value="paint_service" className="text-white hover:bg-[#3A3A3A] focus:bg-[#3A3A3A] cursor-pointer">
                            Paint Service
                          </SelectItem>
                          <SelectItem value="frame_repair" className="text-white hover:bg-[#3A3A3A] focus:bg-[#3A3A3A] cursor-pointer">
                            Frame Repair
                          </SelectItem>
                          <SelectItem value="general_inquiry" className="text-white hover:bg-[#3A3A3A] focus:bg-[#3A3A3A] cursor-pointer">
                            General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="bg-black border-white/20 text-white mt-2 h-32"
                        placeholder="Tell us about your vehicle and what service you need..."
                      />
                    </div>

                    {error && (
                      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting || !!emailError || !!phoneError}
                      className="w-full bg-[#BEBEBE] text-black hover:bg-white text-lg py-6 glow-button disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}