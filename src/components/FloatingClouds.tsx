import React from 'react';
import { Cloud } from 'lucide-react';

const FloatingClouds = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute text-white/40 animate-cloud-drift"
          style={{
            top: `${10 + i * 15}%`,
            animationDelay: `${i * 3}s`,
            animationDuration: `${15 + i * 5}s`,
            fontSize: `${2 + i * 0.5}rem`,
          }}
        >
          <Cloud className="fill-current" />
        </div>
      ))}
    </div>
  );
};

export default FloatingClouds;
