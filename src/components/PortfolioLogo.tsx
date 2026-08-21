interface PortfolioLogoProps {
  compact?: boolean;
  className?: string;
}

export default function PortfolioLogo({
  compact = false,
  className = "",
}: PortfolioLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className={compact ? "h-7 w-7" : "h-9 w-9"}
        role="img"
        aria-label="Anubhav Snehi monogram"
      >
        <title>Anubhav Snehi monogram</title>
        <path
          d="M7 39 20 8l12 31M12 28h16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="3"
        />
        <path
          d="M39 12c-3-3-10-3-10 2 0 7 13 5 10 13-2 5-10 5-14 1"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeWidth="3"
        />
        <circle cx="20" cy="8" r="2.4" fill="#67e8f9" />
        <circle cx="39" cy="12" r="2.4" fill="#818cf8" />
        <circle cx="25" cy="39" r="2.4" fill="#34d399" />
      </svg>
      {!compact && (
        <span className="font-mono text-sm font-bold tracking-[0.08em]">
          <span className="text-cyan">ANUBHAV</span>
          <span className="text-slate-500">.DEV</span>
        </span>
      )}
    </div>
  );
}
