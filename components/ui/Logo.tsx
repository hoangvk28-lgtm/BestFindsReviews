interface LogoProps {
  className?: string;
  /** Use on dark backgrounds (e.g. footer) — swaps navy for cream/white. */
  inverse?: boolean;
  showWordmark?: boolean;
}

/**
 * WorthRated wordmark: a "W" mark with a small rating-dial arc, paired with
 * "Worth" (navy) + "Rated" (teal) text. Pure SVG so it stays crisp at any
 * size and never needs a raster re-export.
 */
export function Logo({ className, inverse = false, showWordmark = true }: LogoProps) {
  const markColor = inverse ? "#F7F3EA" : "#17324D";
  const dialColor = "#2F7D78";
  const worthColor = inverse ? "#F7F3EA" : "#17324D";
  const ratedColor = inverse ? "#DDEBE5" : "#2F7D78";

  return (
    <svg
      viewBox={showWordmark ? "0 0 168 36" : "0 0 36 36"}
      className={className}
      role="img"
      aria-label="WorthRated"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mark: rating dial ring with a W notch */}
      <g>
        <circle cx="18" cy="18" r="15.5" fill="none" stroke={dialColor} strokeWidth="3" />
        <path
          d="M18 2.5 A15.5 15.5 0 0 1 33.5 18"
          fill="none"
          stroke="#E6A04B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10 14.5 L13.2 23.5 L17.2 17 L19 23.5 L23.6 14.5"
          fill="none"
          stroke={markColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {showWordmark && (
        <text
          x="42"
          y="24"
          fontFamily="Manrope, system-ui, sans-serif"
          fontWeight="800"
          fontSize="19"
          letterSpacing="-0.02em"
        >
          <tspan fill={worthColor}>Worth</tspan>
          <tspan fill={ratedColor}>Rated</tspan>
        </text>
      )}
    </svg>
  );
}
