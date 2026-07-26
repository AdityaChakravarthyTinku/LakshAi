/**
 * Original Laksh AI logo mark: an "L" formed from a connected node path,
 * suggesting directed AI signal flow. Rendered as inline SVG so no external
 * asset is required. `variant="mark"` renders the symbol only; the default
 * renders the full horizontal lockup with the wordmark.
 */
export default function Logo({ variant = "full", className = "" }) {
  const mark = (
    <svg
      viewBox="0 0 40 40"
      width="36"
      height="36"
      role="img"
      aria-labelledby="laksh-logo-title"
      className="shrink-0"
    >
      <title id="laksh-logo-title">Laksh AI logo</title>
      <defs>
        <linearGradient id="lakshMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D28D9" />
          <stop offset="55%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#C026D3" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="#171126" />
      <path
        d="M13 10 L13 26 L27 26"
        stroke="url(#lakshMarkGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="29" cy="12.5" r="3" fill="#A78BFA" />
      <circle cx="29" cy="26" r="2" fill="#C026D3" />
      <line
        x1="27.3"
        y1="14.3"
        x2="28.3"
        y2="24"
        stroke="#A78BFA"
        strokeWidth="1.4"
        opacity="0.55"
      />
    </svg>
  );

  if (variant === "mark") {
    return <span className={className}>{mark}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark}
      <span className="text-[1.15rem] font-extrabold tracking-tight text-[#171126]">
        Laksh <span className="text-[#7C3AED]">AI</span>
      </span>
    </span>
  );
}
