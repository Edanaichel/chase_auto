import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, ClipboardCheck, CarFront, FileCheck2, ShieldCheck, Wrench } from "lucide-react";
import ServiceHero from "../components/services/ServiceHero";
import FeatureList from "../components/services/FeatureList";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";

const inspectionHighlights = [
  {
    title: "Certified Brake & Lamp Inspections",
    description: "Our team is certified to perform official brake and lights inspections with accuracy, professionalism, and clear documentation.",
  },
  {
    title: "Detailed Safety Evaluation",
    description: "We inspect key brake and lighting components to verify that your vehicle meets required safety and operational standards.",
  },
  {
    title: "Clear Pass or Repair Guidance",
    description: "If anything needs attention, we explain the findings in plain language and outline the next steps before any work begins.",
  },
  {
    title: "Inspection Documentation",
    description: "You receive the proper paperwork and reporting needed when an official brake and lamp inspection is required.",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Initial Check-In",
    description: "We review why the inspection is needed, document the vehicle, and confirm the scope before we begin.",
    accent: "from-sky-500/20 via-cyan-400/10 to-transparent",
    iconAccent: "text-sky-300",
    borderAccent: "hover:border-sky-400/40",
  },
  {
    icon: CarFront,
    title: "Brake System Review",
    description: "Our certified technicians inspect brake function, wear, condition, and overall safety performance.",
    accent: "from-red-500/20 via-rose-400/10 to-transparent",
    iconAccent: "text-red-300",
    borderAccent: "hover:border-red-400/40",
  },
  {
    icon: Wrench,
    title: "Lamp & Electrical Review",
    description: "We verify lighting operation, visibility, aim, and related components to ensure everything performs as required.",
    accent: "from-amber-500/20 via-yellow-400/10 to-transparent",
    iconAccent: "text-amber-300",
    borderAccent: "hover:border-amber-400/40",
  },
  {
    icon: FileCheck2,
    title: "Results & Documentation",
    description: "You get a clear outcome, supporting documentation, and repair recommendations if corrections are needed.",
    accent: "from-emerald-500/20 via-lime-400/10 to-transparent",
    iconAccent: "text-emerald-300",
    borderAccent: "hover:border-emerald-400/40",
  },
];

const reasonsToChooseUs = [
  {
    icon: BadgeCheck,
    title: "Certified Service",
    description: "Customers can feel confident knowing the inspection is handled by a certified team that understands the standards.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Brake and lighting systems are critical to safe driving, so our process is thorough and never rushed.",
  },
  {
    icon: FileCheck2,
    title: "Straightforward Guidance",
    description: "We keep the process simple with honest communication, transparent findings, and practical next steps.",
  },
];

export default function BrakeAndLightsInspection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ServiceHero
        title="Brake and Lights"
        subtitle="Certified brake and lamp inspections with a clean, professional process"
        image="https://i.imgur.com/C9s9bex.jpeg"
        darken={true}
      />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#BEBEBE]/30 bg-[#BEBEBE]/10 px-5 py-2 text-sm font-semibold text-[#BEBEBE] mb-6">
                <BadgeCheck className="w-4 h-4" />
                Certified Brake & Lamp Inspection Service
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                A Refined Inspection Experience Built Around Safety
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  When a brake and lights inspection is required, you want a shop that is
                  experienced, organized, and trusted. Chase Auto Body provides certified
                  brake and lamp inspections with a process designed to feel smooth from
                  drop-off to final paperwork.
                </p>
                <p>
                  We carefully evaluate the systems that matter most for visibility and
                  stopping performance, then walk you through the results clearly. If the
                  vehicle passes, we help you move forward with confidence. If it needs
                  corrections, we explain exactly what is needed and why.
                </p>
                <p>
                  The result is a service page that reflects how we work in person:
                  professional, detail-oriented, and focused on doing things right.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1974&auto=format&fit=crop"
                alt="Brake inspection in progress"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl bg-[#BEBEBE]/10 blur-2xl"></div>
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                What This Service Includes
              </h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Every inspection is handled with precision, documentation, and the level of care
                expected from a certified shop.
              </p>
            </div>
            <FeatureList features={inspectionHighlights} />
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 md:p-12 mb-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Inspection Process
              </h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                We keep the experience efficient and polished while making sure nothing important is missed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-7 transition-all duration-300 ${step.borderAccent}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${step.accent} pointer-events-none`}></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_55%)] pointer-events-none"></div>
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 mb-5 shadow-[0_0_30px_rgba(255,255,255,0.04)]">
                    <step.icon className={`w-7 h-7 ${step.iconAccent}`} />
                  </div>
                  <h4 className="relative text-xl font-semibold text-white mb-3">{step.title}</h4>
                  <p className="relative text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-black p-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Customers Trust Chase Auto Body
              </h3>
              <div className="space-y-6">
                {reasonsToChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BEBEBE]/10 border border-[#BEBEBE]/30 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#BEBEBE]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#BEBEBE]/20 bg-[#BEBEBE]/5 p-10 flex flex-col justify-center">
              <div className="text-[#BEBEBE] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Certified. Clear. Professional.
              </div>
              <h3 className="text-3xl font-bold text-white mb-5">
                Need a Brake and Lights Inspection?
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Reach out to schedule your inspection and get straightforward guidance from a certified team that values presentation, precision, and safety.
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="w-full bg-[#BEBEBE] text-black hover:bg-white text-lg px-10 py-7">
                  Schedule Inspection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
