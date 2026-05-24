const ICONS = {
  aws: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17c4 2 14 2 18 0" />
      <path d="M5 14c.5-3 2.5-6 7-6s6.5 3 7 6" />
      <circle cx="12" cy="11" r="1" />
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 19 12 4l3 5-6 10z" />
      <path d="M9 19h12L15 9" />
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="3" height="3" />
      <rect x="7" y="11" width="3" height="3" />
      <rect x="11" y="11" width="3" height="3" />
      <rect x="7" y="7" width="3" height="3" />
      <rect x="11" y="7" width="3" height="3" />
      <rect x="11" y="3" width="3" height="3" />
      <path d="M2 14c3 5 11 5 16 1 .5-.4 1-1 1.5-1.5 1.5.3 3 0 3.5-1-1-.5-2-.5-3 0" />
    </svg>
  ),
  k8s: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 3 20 7 20 17 12 21 4 17 4 7" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5V5M14.5 12H19M12 14.5V19M9.5 12H5" />
    </svg>
  ),
  terraform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="7" height="6" />
      <rect x="13" y="3" width="7" height="6" />
      <rect x="4" y="11" width="7" height="6" />
      <rect x="13" y="11" width="7" height="6" />
      <rect x="9" y="19" width="6" height="2" />
    </svg>
  ),
};

export default function CloudBadge({ icon, label }) {
  return (
    <div className="group inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 transition-colors hover:border-slate-700">
      <span className="flex h-5 w-5 items-center justify-center text-slate-400 group-hover:text-accent">
        {ICONS[icon] || ICONS.aws}
      </span>
      <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
        {label}
      </span>
    </div>
  );
}
