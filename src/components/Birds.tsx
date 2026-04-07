interface BirdsProps {
  className?: string;
}

const Birds = ({ className = "" }: BirdsProps) => (
  <svg
    width="100"
    height="60"
    viewBox="0 0 100 60"
    fill="none"
    className={className}
  >
    {/* Formation of simple birds (V shape) */}
    <g stroke="black" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
      {/* Bird 1 */}
      <path d="M10 20 C15 15, 20 20, 25 15 C20 20, 15 25, 10 20" />
      {/* Bird 2 */}
      <path d="M30 35 C35 30, 40 35, 45 30 C40 35, 35 40, 30 35" />
      {/* Bird 3 */}
      <path d="M50 20 C55 15, 60 20, 65 15 C60 20, 55 25, 50 20" />
      {/* Bird 4 */}
      <path d="M70 45 C75 40, 80 45, 85 40 C80 45, 75 50, 70 45" />
    </g>
  </svg>
);

export default Birds;
