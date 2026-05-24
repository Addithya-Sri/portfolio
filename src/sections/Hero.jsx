import Badge from '../components/Badge.jsx';
import CloudBadge from '../components/CloudBadge.jsx';
import { heroBadges, profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-24"
    >
      {/* faint grid backdrop — like a console/dashboard */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <Badge tone="success">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available · Germany
            </Badge>
            <span className="mono-label hidden sm:inline">
              region: eu-central-1
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-base text-accent sm:text-lg">
            {profile.role}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10">
            <p className="mono-label mb-3">Core stack</p>
            <div className="flex flex-wrap gap-2">
              {heroBadges.map((b) => (
                <CloudBadge key={b.short} icon={b.short} label={b.label} />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-accent/60 bg-accent/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-accent transition-colors hover:bg-accent/20"
            >
              View projects
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 font-mono text-xs uppercase tracking-wider text-slate-300 transition-colors hover:border-slate-600 hover:text-slate-100"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
