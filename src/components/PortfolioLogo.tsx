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
        viewBox="0 0 56 56"
        className={`brand-mark ${compact ? "h-7 w-7" : "h-10 w-10"}`}
        role="img"
        aria-label="AS Systems monogram"
      >
        <title>AS Systems monogram</title>
        <rect x="1" y="1" width="54" height="54" rx="13" fill="#071827" stroke="#164b67" strokeWidth="2" />
        <path d="M8 17V10h8M48 39v7h-8" fill="none" stroke="#67e8f9" strokeWidth="1.5" />
        <path d="M9 42 22 13l12 29M14 32h16" fill="none" stroke="#e0f7ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.4" />
        <path
          d="M45 16c-3-3-11-3-11 3 0 8 14 5 11 14-2 6-11 6-15 2"
          fill="none"
          stroke="#a5b4fc"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
        <path d="M22 13V8h14M34 42h7v-8" fill="none" stroke="#22d3ee" strokeLinecap="round" strokeWidth="1.5" />
        <circle className="brand-node brand-node-cyan" cx="22" cy="8" r="2.6" fill="#67e8f9" />
        <circle className="brand-node brand-node-indigo" cx="45" cy="16" r="2.6" fill="#a5b4fc" />
        <circle className="brand-node brand-node-emerald" cx="41" cy="34" r="2.4" fill="#6ee7b7" />
      </svg>
      {!compact && (
        <span className="font-mono text-sm font-bold tracking-[0.06em]">
          <span className="brand-as">AS</span>
          <span className="brand-divider">//</span>
          <span className="brand-systems">SYSTEMS</span>
        </span>
      )}
    </div>
  );
}
