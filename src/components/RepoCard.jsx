import Card from './Card.jsx';

export default function RepoCard({ repo }) {
  return (
    <Card hover className="p-5">
      <a
        href={repo.href}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 flex-none text-slate-500"
              aria-hidden="true"
            >
              <path d="M5 4h11l3 3v13H5z" />
              <path d="M9 4v4h7" />
            </svg>
            <span className="truncate font-mono text-sm text-slate-200 group-hover:text-accent">
              {repo.name}
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 flex-none text-slate-600 transition-colors group-hover:text-accent"
            aria-hidden="true"
          >
            <path d="M7 17 17 7" />
            <path d="M9 7h8v8" />
          </svg>
        </div>

        <p className="mt-2 text-sm text-slate-400">{repo.description}</p>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-xs text-slate-500">{repo.language}</span>
        </div>
      </a>
    </Card>
  );
}
