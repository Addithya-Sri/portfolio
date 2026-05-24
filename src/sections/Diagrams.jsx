import DiagramPlaceholder from '../components/DiagramPlaceholder.jsx';
import Section from '../components/Section.jsx';
import { diagrams } from '../data/portfolio.js';

export default function Diagrams() {
  return (
    <Section
      id="architecture"
      eyebrow="Architecture diagrams"
      title="Reference architectures"
      subtitle="Schematic placeholders for the systems above. Drop in the rendered diagrams (SVG / PNG) when publishing."
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {diagrams.map((d) => (
          <DiagramPlaceholder
            key={d.title}
            title={d.title}
            caption={d.caption}
            legend={d.legend}
          />
        ))}
      </div>
    </Section>
  );
}
