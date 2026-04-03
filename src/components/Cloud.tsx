interface CloudProps {
  className?: string;
  size?: number;
}

const Cloud = ({ className = "", size = 150 }: CloudProps) => (
  <svg
    width={size}
    height={size * 0.5}
    viewBox="0 0 150 75"
    fill="none"
    className={className}
  >
    <ellipse cx="75" cy="50" rx="65" ry="25" fill="white" opacity="0.9" />
    <ellipse cx="55" cy="38" rx="35" ry="28" fill="white" opacity="0.95" />
    <ellipse cx="90" cy="40" rx="30" ry="22" fill="white" opacity="0.9" />
    <ellipse cx="70" cy="30" rx="28" ry="22" fill="white" opacity="0.95" />
  </svg>
);

export default Cloud;
