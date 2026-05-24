import ProjectCard from '../components/ProjectCard.jsx';
import Section from '../components/Section.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="DevOps work in production"
      subtitle="Representative systems I've designed and operated. Each entry lists the architecture, the tools, and the deployment flow."
    >
      <div className="grid gap-3 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
