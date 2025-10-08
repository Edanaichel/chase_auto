import React from "react";
import { CheckCircle } from "lucide-react";

export default function FeatureList({ features }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-4">
          <CheckCircle className="w-6 h-6 text-[#BEBEBE] flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}