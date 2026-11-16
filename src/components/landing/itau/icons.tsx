/** Ícones de traço usados na página do Itaú (decorativos: aria-hidden). */

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const CardIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="M3 10h18M7 15h3" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="7" y="2.5" width="10" height="19" rx="2" />
    <path d="M11 18.5h2" />
  </svg>
);

export const CheckCircleIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.3 2.6 2.6L16.2 9" />
  </svg>
);

export const HeartIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.6 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
  </svg>
);

/** Brilho de quatro pontas (preenchido). */
export const SparkleIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 1.5c.5 5.4 3.6 9.4 10.5 10.5-6.9 1.1-10 5.1-10.5 10.5-.5-5.4-3.6-9.4-10.5-10.5C8.4 10.9 11.5 6.9 12 1.5Z" />
  </svg>
);
