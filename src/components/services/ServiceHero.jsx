import React from "react";

export default function ServiceHero({ title, subtitle, image, darken = false }) {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${image}')`,
          filter: darken ? 'brightness(0.85)' : 'none'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
}