import React from 'react';

export default function DiamondPattern({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <pattern id="diamonds" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect x="20" y="0" width="20" height="20" fill="none" stroke="hsl(43, 56%, 52%)" strokeWidth="0.5" transform="rotate(45 30 10)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#diamonds)" />
      </svg>
    </div>
  );
}