const Sun = ({ className = "" }: { className?: string }) => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className={className}>
    {/* Glow */}
    <circle cx="60" cy="60" r="55" fill="hsl(42, 100%, 75%)" opacity="0.3" />
    <circle cx="60" cy="60" r="42" fill="hsl(42, 100%, 75%)" opacity="0.4" />
    {/* Sun body */}
    <circle cx="60" cy="60" r="30" fill="hsl(42, 100%, 60%)" />
    {/* Rays */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
      <line
        key={angle}
        x1="60"
        y1="60"
        x2={60 + 50 * Math.cos((angle * Math.PI) / 180)}
        y2={60 + 50 * Math.sin((angle * Math.PI) / 180)}
        stroke="hsl(42, 100%, 60%)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    ))}
    {/* Face */}
    <circle cx="50" cy="55" r="3" fill="hsl(30, 50%, 35%)" />
    <circle cx="70" cy="55" r="3" fill="hsl(30, 50%, 35%)" />
    <path d="M48 67 Q60 78 72 67" stroke="hsl(30, 50%, 35%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

export default Sun;
