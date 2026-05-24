export default function Badge({ children, tone = 'default', className = '' }) {
  const tones = {
    default:
      'border-slate-700 bg-slate-900 text-slate-300',
    accent:
      'border-accent/40 bg-accent/10 text-accent',
    success:
      'border-emerald-700/60 bg-emerald-500/10 text-emerald-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
