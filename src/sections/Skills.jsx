import Card from '../components/Card.jsx';
import Section from '../components/Section.jsx';
import { skillsMatrix } from '../data/portfolio.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills matrix"
      title="Tooling I operate in production"
      subtitle="Grouped by surface area — what I reach for when designing, deploying, and operating systems."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {skillsMatrix.map((g) => (
          <Card key={g.group} hover className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {g.group}
              </h3>
              <span className="mono-label">
                {String(g.items.length).padStart(2, '0')} items
              </span>
            </div>
            <ul className="mt-4 divide-y divide-slate-800">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 py-2.5 text-sm text-slate-300"
                >
                  <span className="font-mono text-xs text-slate-600">
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
