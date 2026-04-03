interface HotAirBalloonProps {
  color: "red" | "yellow" | "green" | "blue" | "orange";
  size?: number;
  className?: string;
}

const colorMap = {
  red: { main: "hsl(354, 70%, 58%)", stripe: "hsl(354, 70%, 68%)" },
  yellow: { main: "hsl(42, 95%, 58%)", stripe: "hsl(42, 95%, 70%)" },
  green: { main: "hsl(142, 55%, 49%)", stripe: "hsl(142, 55%, 62%)" },
  blue: { main: "hsl(199, 80%, 55%)", stripe: "hsl(199, 80%, 68%)" },
  orange: { main: "hsl(25, 90%, 55%)", stripe: "hsl(25, 90%, 68%)" },
};

const HotAirBalloon = ({ color, size = 120, className = "" }: HotAirBalloonProps) => {
  const c = colorMap[color];

  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 120 168"
      fill="none"
      className={className}
    >
      {/* Balloon envelope */}
      <ellipse cx="60" cy="55" rx="48" ry="55" fill={c.main} />
      {/* Stripes */}
      <path d="M30 20 Q60 -5 90 20 Q95 55 85 85 Q60 105 35 85 Q25 55 30 20Z" fill={c.stripe} opacity="0.5" />
      <path d="M45 10 Q60 0 75 10 Q80 55 72 90 Q60 100 48 90 Q40 55 45 10Z" fill={c.main} />
      {/* Highlight */}
      <ellipse cx="48" cy="35" rx="12" ry="20" fill="white" opacity="0.25" />
      {/* Ropes */}
      <line x1="35" y1="95" x2="42" y2="130" stroke="hsl(30, 30%, 45%)" strokeWidth="1.5" />
      <line x1="60" y1="105" x2="60" y2="130" stroke="hsl(30, 30%, 45%)" strokeWidth="1.5" />
      <line x1="85" y1="95" x2="78" y2="130" stroke="hsl(30, 30%, 45%)" strokeWidth="1.5" />
      {/* Basket */}
      <rect x="40" y="130" width="40" height="25" rx="4" fill="hsl(30, 50%, 45%)" />
      <rect x="40" y="130" width="40" height="6" rx="2" fill="hsl(30, 50%, 55%)" />
      <rect x="40" y="148" width="40" height="5" rx="2" fill="hsl(30, 50%, 38%)" />
    </svg>
  );
};

export default HotAirBalloon;
