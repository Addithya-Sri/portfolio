import Card from './Card.jsx';

export default function DiagramPlaceholder({ title, caption, legend = [] }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-44 border-b border-slate-800 bg-slate-950">
        <div className="absolute inset-0 bg-grid-faint bg-grid opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded border border-slate-700 bg-slate-900" />
            <span className="h-px w-10 bg-slate-700" />
            <span className="h-8 w-8 rounded border border-slate-700 bg-slate-900" />
            <span className="h-px w-10 bg-slate-700" />
            <span className="h-8 w-8 rounded border border-accent/60 bg-accent/10" />
          </div>
        </div>
        <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-slate-600">
          diagram.svg
        </span>
        <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-slate-600">
          placeholder
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
        <p className="mt-1 text-xs text-slate-400">{caption}</p>
        {legend.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {legend.map((l) => (
              <span
                key={l}
                className="rounded border border-slate-800 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500"
              >
                {l}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
