interface CloudProps {
  className?: string;
  size?: number;
}

const Cloud = ({ className = "", size = 150 }: CloudProps) => (
  <svg
    width={size}
    height={size * 0.6}
    viewBox="0 0 150 90"
    fill="none"
    className={`${className} transition-opacity duration-1000`}
  >
    <defs>
      <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="#f0f9ff" />
      </linearGradient>
      <filter id="cloud-soften" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
    </defs>
    
    <g filter="url(#cloud-soften)" opacity="0.9">
      {/* Base layer */}
      <ellipse cx="75" cy="60" rx="60" ry="25" fill="url(#cloud-grad)" />
      
      {/* Fluffy layers */}
      <circle cx="45" cy="45" r="30" fill="url(#cloud-grad)" />
      <circle cx="75" cy="35" r="35" fill="url(#cloud-grad)" />
      <circle cx="105" cy="45" r="28" fill="url(#cloud-grad)" />
      
      {/* Highlight highlights */}
      <circle cx="65" cy="30" r="15" fill="white" opacity="0.5" />
      <circle cx="40" cy="40" r="10" fill="white" opacity="0.3" />
    </g>
  </svg>
);

export default Cloud;
