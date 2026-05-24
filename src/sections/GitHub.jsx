import RepoCard from '../components/RepoCard.jsx';
import Section from '../components/Section.jsx';
import { profile, repos } from '../data/portfolio.js';

export default function GitHub() {
  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title="DevOps repositories"
      subtitle="Selected open-source and reusable infrastructure modules. Replace placeholder URLs with real repo links when publishing."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {repos.map((r) => (
          <RepoCard key={r.name} repo={r} />
        ))}
      </div>

      <div className="mt-6">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:underline"
        >
          See full profile on GitHub →
        </a>
      </div>
    </Section>
  );
}
