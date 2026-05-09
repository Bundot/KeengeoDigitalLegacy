import React from 'react';

export default function ChronosLogo({ size = 48 }) {
  const r = size / 2;
  const cx = r;
  const cy = r;
  const strokeW = size * 0.04;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="flex-shrink-0">
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r - strokeW} fill="none" stroke="hsl(43, 56%, 52%)" strokeWidth={strokeW * 1.5} />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={r * 0.78} fill="none" stroke="hsl(43, 56%, 52%)" strokeWidth={strokeW * 0.5} opacity="0.4" />
      {/* Hour markers */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 - 90) * Math.PI / 180;
        const x1 = cx + Math.cos(angle) * (r * 0.68);
        const y1 = cy + Math.sin(angle) * (r * 0.68);
        const x2 = cx + Math.cos(angle) * (r * 0.78);
        const y2 = cy + Math.sin(angle) * (r * 0.78);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(43, 56%, 52%)" strokeWidth={i % 3 === 0 ? strokeW : strokeW * 0.5} strokeLinecap="round" />;
      })}
      {/* "L" shape from clock hands - vertical (12 o'clock) */}
      <line x1={cx} y1={cy} x2={cx} y2={cy - r * 0.52} stroke="hsl(var(--foreground))" strokeWidth={strokeW * 2} strokeLinecap="round" />
      {/* "L" shape - horizontal (3 o'clock) */}
      <line x1={cx} y1={cy} x2={cx + r * 0.38} y2={cy} stroke="hsl(var(--foreground))" strokeWidth={strokeW * 2} strokeLinecap="round" />
      {/* Center dot */}
      <circle cx={cx} cy={cy} r={size * 0.05} fill="hsl(43, 56%, 52%)" />
    </svg>
  );
}