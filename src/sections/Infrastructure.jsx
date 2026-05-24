import Card from '../components/Card.jsx';
import Section from '../components/Section.jsx';
import StatBlock from '../components/StatBlock.jsx';
import { capabilities, stats } from '../data/portfolio.js';

export default function Infrastructure() {
  return (
    <Section
      id="overview"
      eyebrow="Infrastructure overview"
      title="CI/CD, containers, cloud, automation"
      subtitle="I run the systems that ship software safely and predictably — from commit to production, with the guardrails and observability needed to operate them at scale."
    >
      <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatBlock key={s.label} label={s.label} value={s.value} />
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {capabilities.map((c) => (
          <Card key={c.title} hover className="p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {c.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {c.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
