import Badge from './Badge.jsx';
import Card from './Card.jsx';

export default function ProjectCard({ project }) {
  const { id, title, summary, architecture, tools, flow } = project;

  return (
    <Card hover className="flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
          project / {id}
        </h3>
        <Badge tone="success">production</Badge>
      </div>

      <h4 className="mt-3 text-lg font-semibold text-slate-100">{title}</h4>
      <p className="mt-2 text-sm text-slate-400">{summary}</p>

      <div className="mt-5">
        <p className="mono-label">Architecture</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{architecture}</p>
      </div>

      <div className="mt-5">
        <p className="mono-label">Tools</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tools.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="mono-label">Deployment flow</p>
        <ol className="mt-2 space-y-1.5 font-mono text-xs text-slate-400">
          {flow.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="text-accent">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-slate-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </Card>
  );
}
