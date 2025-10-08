import React from "react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              For over a decade, Chase Auto Body has been trusted by drivers in North Hills 
              for exceptional collision repair and auto restoration. We bring every vehicle 
              back to perfection — factory finish, guaranteed.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our certified technicians use OEM-grade equipment and precision techniques 
              to ensure your vehicle receives the highest standard of care. We don't just 
              fix cars. We restore confidence.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://i.imgur.com/DLdUadd.png"
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#BEBEBE] rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}