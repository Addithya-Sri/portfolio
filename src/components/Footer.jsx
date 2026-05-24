import { profile } from '../data/portfolio.js';
import SocialIcon from './SocialIcon.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-accent"
          >
            <SocialIcon name="github" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-accent"
          >
            <SocialIcon name="linkedin" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-slate-500 hover:text-accent"
          >
            <SocialIcon name="mail" />
          </a>
        </div>
      </div>
    </footer>
  );
}
