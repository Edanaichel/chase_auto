import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  // Use provided images or fallback to defaults
  const beforeImg = beforeImage || "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&q=80";
  const afterImg = afterImage || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80";

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
      {/* Before Image */}
      <div className="absolute inset-0">
        <img
          src={beforeImg}
          alt="Before repair"
          className="w-full h-full object-cover"
        />
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImg}
          alt="After repair"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-semibold">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg font-semibold">
        AFTER
      </div>

      {/* Slider */}
      <div className="absolute inset-0 flex items-center">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute w-full h-full opacity-0 cursor-ew-resize z-10"
        />
        
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-black absolute left-1" />
            <ChevronRight className="w-5 h-5 text-black absolute right-1" />
          </div>
        </div>
      </div>
    </div>
  );
}