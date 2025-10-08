
import React, { useEffect } from "react";
import ServiceHero from "../components/services/ServiceHero";
import FeatureList from "../components/services/FeatureList";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Ruler, Shield, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    title: "Computerized Measuring",
    description: "Laser-accurate measurements ensure frame alignment to factory specifications.",
  },
  {
    title: "Hydraulic Straightening",
    description: "State-of-the-art frame machines apply precise force to restore structural integrity.",
  },
  {
    title: "Safety Certification",
    description: "Complete structural inspection and certification after repairs are completed.",
  },
  {
    title: "All Vehicle Types",
    description: "Capable of handling unibody and full-frame vehicles of all makes and models.",
  },
];

const whyImportant = [
  {
    icon: Shield,
    title: "Safety Critical",
    description: "Proper frame alignment is essential for vehicle safety systems to function correctly.",
  },
  {
    icon: Ruler,
    title: "Handling & Performance",
    description: "A straight frame ensures proper wheel alignment and vehicle handling characteristics.",
  },
  {
    icon: Zap,
    title: "Resale Value",
    description: "Professional frame repair maintains your vehicle's structural integrity and value.",
  },
  {
    icon: CheckCircle,
    title: "Insurance Approved",
    description: "Our certified repairs meet all insurance and manufacturer requirements.",
  },
];

export default function AutoFrameStraightening() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ServiceHero
        title="Frame Straightening"
        subtitle="Precision structural repair for complete vehicle safety"
        image="https://i.imgur.com/uEVd7xh.png"
        darken={true}
      />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                State-of-the-Art Frame Repair
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                When your vehicle suffers structural damage from a collision, proper frame 
                straightening is crucial for both safety and performance. Our certified 
                technicians use computerized measuring systems and precision hydraulic 
                equipment to restore your vehicle's frame to factory specifications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Even minor frame damage can affect your vehicle's handling, safety systems, 
                and long-term durability. We take frame repair seriously, using the same 
                techniques and specifications required by vehicle manufacturers.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/2RJ3ZSa.png"
                alt="Frame straightening equipment"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#BEBEBE] rounded-lg opacity-10"></div>
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Our Frame Repair Process
            </h3>
            <FeatureList features={features} />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Why Frame Straightening Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyImportant.map((item, index) => (
                <div key={index} className="bg-[#1A1A1A] rounded-xl p-8 border border-white/10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#BEBEBE]/20 border-2 border-[#BEBEBE] mb-6">
                    <item.icon className="w-8 h-8 text-[#BEBEBE]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-black rounded-2xl p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Advanced Technology Meets Expert Craftsmanship
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Our frame straightening bay is equipped with the latest computerized 
                  measuring systems that can detect misalignment down to millimeters. 
                  Combined with powerful hydraulic pulling equipment, we can correct even 
                  severe structural damage.
                </p>
                <p className="text-lg text-gray-300">
                  Every frame repair is verified multiple times throughout the process to 
                  ensure accuracy. We don't just straighten frames—we restore them to 
                  exact factory specifications.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://i.imgur.com/DEgzANO.png"
                  alt="Precision equipment"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Schedule Your Frame Inspection
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Concerned about frame damage? Get a professional assessment today.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button size="lg" className="bg-[#BEBEBE] text-black hover:bg-white text-lg px-10 py-7">
              Get Your Estimate
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
