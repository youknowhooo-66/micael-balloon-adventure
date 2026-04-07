interface HotAirBalloonProps {
  color: "red" | "yellow" | "green" | "blue" | "orange";
  size?: number;
  className?: string;
}

const colorMap = {
  red: { main: "hsl(354, 70%, 58%)", dark: "hsl(354, 70%, 45%)", light: "hsl(354, 70%, 75%)" },
  yellow: { main: "hsl(42, 95%, 58%)", dark: "hsl(42, 95%, 45%)", light: "hsl(42, 95%, 75%)" },
  green: { main: "hsl(142, 55%, 49%)", dark: "hsl(142, 55%, 35%)", light: "hsl(142, 55%, 65%)" },
  blue: { main: "hsl(199, 80%, 55%)", dark: "hsl(199, 80%, 42%)", light: "hsl(199, 80%, 72%)" },
  orange: { main: "hsl(25, 90%, 55%)", dark: "hsl(25, 90%, 42%)", light: "hsl(25, 90%, 72%)" },
};

const HotAirBalloon = ({ color, size = 120, className = "" }: HotAirBalloonProps) => {
  const c = colorMap[color];
  const gradientId = `balloon-grad-${color}`;

  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 120 168"
      fill="none"
      className={`${className} transition-transform duration-1000`}
    >
      <defs>
        <radialGradient id={gradientId} cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor={c.light} />
          <stop offset="70%" stopColor={c.main} />
          <stop offset="100%" stopColor={c.dark} />
        </radialGradient>
        <filter id="balloon-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#balloon-shadow)">
        {/* Balloon envelope */}
        <ellipse cx="60" cy="55" rx="48" ry="55" fill={`url(#${gradientId})`} />
        
        {/* Stripes */}
        <path d="M60 0 C30 0 12 25 12 55 C12 85 40 105 60 110 C80 105 108 85 108 55 C108 25 90 0 60 0Z" fill="white" opacity="0.1" />
        <path d="M60 0 C45 0 35 25 35 55 C35 85 45 105 60 110 C75 105 85 85 85 55 C85 25 75 0 60 0Z" fill="white" opacity="0.15" />
        
        {/* Highlight sparkle */}
        <circle cx="45" cy="35" r="8" fill="white" opacity="0.3" />
        
        {/* Ropes - more detailed */}
        <g stroke="hsl(30, 30%, 35%)" strokeWidth="1">
          <path d="M25 85 L42 130" />
          <path d="M42 95 L48 130" />
          <path d="M60 105 L60 130" />
          <path d="M78 95 L72 130" />
          <path d="M95 85 L78 130" />
        </g>
        
        {/* Basket - 3D effect */}
        <g>
          <rect x="40" y="130" width="40" height="25" rx="3" fill="hsl(30, 50%, 40%)" />
          <path d="M40 130 H80 V135 H40 Z" fill="hsl(30, 50%, 50%)" />
          <path d="M40 150 H80 V155 H40 Z" fill="hsl(30, 50%, 30%)" />
          {/* Basket texture */}
          <line x1="48" y1="135" x2="48" y2="155" stroke="black" opacity="0.1" />
          <line x1="60" y1="135" x2="60" y2="155" stroke="black" opacity="0.1" />
          <line x1="72" y1="135" x2="72" y2="155" stroke="black" opacity="0.1" />
        </g>
      </g>
    </svg>
  );
};

export default HotAirBalloon;
