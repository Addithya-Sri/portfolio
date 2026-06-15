import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Download } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  CONTENT — replace everything in this block with your own details   */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: 'Sri Adithya',
  role: 'Cloud & DevOps Engineer',
  tagline:
    "Infrastructure that doesn't page anyone at 3am. AWS, Kubernetes and Terraform, wired together with CI/CD and a healthy fear of manual steps.",
  location: 'Berlin, Germany (UTC+1)',
  email: 'hello@alexrivera.dev',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  resume: '#',
};

const BOOT_LINES = [
  '[ OK ] Mounting /home/alex...',
  '[ OK ] Starting network-online.target',
  '[ OK ] Starting docker.service',
  '[ OK ] Starting kubelet.service',
  '[ OK ] Reached target cloud-infrastructure.target',
  '[ OK ] Starting portfolio.service',
  '',
  'alex-rivera login: visitor',
  'Last login: Mon Jun 15 09:14:02 from 10.0.0.4',
];

const NAV_ITEMS = [
  { id: 'hero', label: '~', num: 0 },
  { id: 'about', label: 'about', num: 1 },
  { id: 'skills', label: 'skills', num: 2 },
  { id: 'projects', label: 'projects', num: 3 },
  { id: 'experience', label: 'experience', num: 4 },
  { id: 'certs', label: 'certs', num: 5 },
  { id: 'contact', label: 'contact', num: 6 },
];

const ENDPOINTS = [
  { method: 'GET', path: '/github', label: 'view source', href: PROFILE.github, icon: Github },
  { method: 'GET', path: '/linkedin', label: 'connect', href: PROFILE.linkedin, icon: Linkedin },
  { method: 'GET', path: '/resume', label: 'download cv', href: PROFILE.resume, icon: Download },
  { method: 'POST', path: '/contact', label: 'say hello', href: `mailto:${PROFILE.email}`, icon: Mail },
];

const SKILL_GROUPS = [
  {
    title: 'cloud_platforms',
    skills: [
      { name: 'AWS', level: 95 },
      { name: 'Azure', level: 75 },
      { name: 'Google Cloud', level: 65 },
    ],
  },
  {
    title: 'infrastructure_as_code',
    skills: [
      { name: 'Terraform', level: 90 },
      { name: 'Ansible', level: 80 },
      { name: 'Pulumi', level: 60 },
    ],
  },
  {
    title: 'containers_orchestration',
    skills: [
      { name: 'Docker', level: 95 },
      { name: 'Kubernetes', level: 88 },
      { name: 'Helm', level: 78 },
    ],
  },
  {
    title: 'ci_cd',
    skills: [
      { name: 'GitHub Actions', level: 92 },
      { name: 'ArgoCD', level: 80 },
      { name: 'Jenkins', level: 70 },
    ],
  },
  {
    title: 'observability',
    skills: [
      { name: 'Prometheus', level: 85 },
      { name: 'Grafana', level: 85 },
      { name: 'ELK Stack', level: 68 },
    ],
  },
  {
    title: 'languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Bash', level: 90 },
      { name: 'Go', level: 58 },
    ],
  },
];

const PROJECTS = [
  {
    name: 'eks-platform',
    status: 'production',
    stack: ['Terraform', 'EKS', 'ArgoCD', 'Helm'],
    description:
      'Multi-account EKS platform provisioned entirely through Terraform, with GitOps application delivery via ArgoCD and zero-downtime blue/green rollouts.',
    metrics: '12 clusters · 99.97% uptime · ~140 deploys/week',
    href: '#',
  },
  {
    name: 'pipeline-toolkit',
    status: 'active',
    stack: ['GitHub Actions', 'Docker', 'Python'],
    description:
      'A library of reusable GitHub Actions workflows — build, test, scan, deploy — shared across 20+ repositories.',
    metrics: '20+ repos · build time ↓ 35%',
    href: '#',
  },
  {
    name: 'observability-stack',
    status: 'production',
    stack: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager'],
    description:
      'Self-hosted monitoring stack for internal services, with custom dashboards and alert routing by severity to Slack and PagerDuty.',
    metrics: '60+ dashboards · MTTA ↓ 50%',
    href: '#',
  },
  {
    name: 'cost-guard',
    status: 'active',
    stack: ['AWS Lambda', 'Python', 'EventBridge'],
    description:
      'Scheduled functions that find and clean up unused volumes, idle load balancers and orphaned snapshots across every AWS account.',
    metrics: '~$3,200/mo saved',
    href: '#',
  },
];

const EXPERIENCE = [
  {
    hash: 'a3f9c12',
    branch: 'HEAD -> main',
    role: 'Senior Cloud & DevOps Engineer',
    company: 'Nimbus Systems',
    period: '2023 — present',
    add: 1204,
    del: 389,
    bullets: [
      'Led migration of 30+ services from EC2 to Kubernetes (EKS)',
      'Designed a multi-account AWS landing zone with reusable Terraform modules',
      'Cut deployment lead time from ~2 hours to under 10 minutes',
    ],
  },
  {
    hash: '7b2e44d',
    branch: null,
    role: 'DevOps Engineer',
    company: 'Brightline Cloud',
    period: '2021 — 2023',
    add: 860,
    del: 210,
    bullets: [
      'Built CI/CD pipelines for 15 microservices using GitHub Actions',
      'Introduced Prometheus and Grafana monitoring, cutting incident detection time',
      'Automated infrastructure provisioning, removing manual server setup',
    ],
  },
  {
    hash: '4d0c8a1',
    branch: null,
    role: 'Systems Administrator',
    company: 'Tessera Hosting',
    period: '2019 — 2021',
    add: 430,
    del: 95,
    bullets: [
      'Managed on-prem and hybrid-cloud infrastructure for 50+ clients',
      'Wrote Bash and Python automation for backups and patching',
      'Introduced Docker to the team’s workflow for the first time',
    ],
  },
];

const CERTS = [
  { name: 'AWS Certified Solutions Architect — Professional', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'CNCF', year: '2023' },
  { name: 'Terraform Associate', issuer: 'HashiCorp', year: '2022' },
  { name: 'Azure Administrator Associate', issuer: 'Microsoft', year: '2023' },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                           */
/* ------------------------------------------------------------------ */

function SectionHeader({ num, path, cmd }) {
  return (
    <div
      className="flex items-center gap-2 sm:gap-3 mb-8 pb-3 font-term text-xs sm:text-sm flex-wrap"
      style={{ borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
    >
      <span className="px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--accent-cyan)' }}>
        {num}
      </span>
      <span style={{ color: 'var(--accent-cyan)' }}>alex@portfolio</span>
      <span>:</span>
      <span style={{ color: 'var(--accent-amber)' }}>{path}</span>
      <span>$</span>
      <span style={{ color: 'var(--text-primary)' }}>{cmd}</span>
      <span className="cursor-blink">_</span>
    </div>
  );
}

function StatusBadge({ status }) {
  const isProd = status === 'production';
  return (
    <span
      className="px-2 py-0.5 rounded text-xs font-term border shrink-0"
      style={{
        color: isProd ? 'var(--accent-cyan)' : 'var(--accent-amber)',
        borderColor: isProd ? 'var(--accent-cyan)' : 'var(--accent-amber)',
      }}
    >
      {status}
    </span>
  );
}

export default function Portfolio() {
  const [showBoot, setShowBoot] = useState(true);
  const [bootStep, setBootStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [active, setActive] = useState('hero');
  const [clock, setClock] = useState('');
  const [uptime, setUptime] = useState(0);
  const sectionRefs = useRef({});

  // Detect reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReducedMotion(true);
      setShowBoot(false);
    }
  }, []);

  // Step through the boot sequence
  useEffect(() => {
    if (reducedMotion || !showBoot) return;
    if (bootStep < BOOT_LINES.length) {
      const t = setTimeout(() => setBootStep((s) => s + 1), 150);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowBoot(false), 650);
    return () => clearTimeout(t);
  }, [bootStep, showBoot, reducedMotion]);

  // Live clock
  useEffect(() => {
    const update = () => setClock(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  // Session uptime
  useEffect(() => {
    const i = setInterval(() => setUptime((u) => u + 1), 1000);
    return () => clearInterval(i);
  }, []);

  const formatUptime = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, '0');
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const sec = String(s % 60).padStart(2, '0');
    return `${h}:${m}:${sec}`;
  };

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="portfolio-root pb-12">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

        .portfolio-root {
          --bg-base: #0a0e14;
          --bg-surface: #131a26;
          --bg-elevated: #1b2330;
          --border-subtle: #2a3344;
          --text-primary: #dce4f0;
          --text-muted: #7c8aa0;
          --accent-cyan: #5fd9cb;
          --accent-amber: #e8a96a;
          --accent-red: #e8716c;

          position: relative;
          overflow-x: hidden;
          background-color: var(--bg-base);
          color: var(--text-primary);
          font-family: 'IBM Plex Sans', sans-serif;
          min-height: 100vh;
        }

        .font-term { font-family: 'JetBrains Mono', monospace; }

        .bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(95, 217, 203, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(95, 217, 203, 0.045) 1px, transparent 1px);
          background-size: 44px 44px;
          pointer-events: none;
          z-index: 0;
        }

        .bg-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(95, 217, 203, 0.10), transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; color: var(--accent-cyan); }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(95, 217, 203, 0.55); }
          50% { box-shadow: 0 0 0 6px rgba(95, 217, 203, 0); }
        }
        .status-dot { animation: pulse-dot 2s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .cursor-blink, .status-dot { animation: none; }
        }

        .skill-bar-track { background-color: var(--bg-elevated); }
        .skill-bar-fill { background-color: var(--accent-cyan); }

        .endpoint-row:hover { background-color: var(--bg-elevated); }

        .tmux-bar { background-color: #0d1117; border-top: 1px solid var(--border-subtle); }
        .tmux-window-active { background-color: var(--accent-cyan); color: #0a0e14; }
        .tmux-window:hover:not(.tmux-window-active) { color: var(--text-primary); }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }

        ::selection { background-color: var(--accent-cyan); color: #0a0e14; }

        a:focus-visible, button:focus-visible {
          outline: 2px solid var(--accent-cyan);
          outline-offset: 2px;
          border-radius: 2px;
        }

        .fade-in { transition: opacity 0.7s ease; }
      `}</style>

      <div className="bg-grid" />

      {/* Boot sequence overlay */}
      {showBoot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" style={{ backgroundColor: 'var(--bg-base)' }}>
          <div className="font-term text-xs sm:text-sm max-w-lg w-full leading-relaxed">
            {BOOT_LINES.slice(0, bootStep).map((line, i) => (
              <div key={i} style={{ minHeight: '1.4em' }}>
                {line.startsWith('[ OK ]') ? (
                  <span>
                    <span style={{ color: 'var(--accent-cyan)' }}>[ OK ]</span>
                    <span style={{ color: 'var(--text-muted)' }}>{line.slice(6)}</span>
                  </span>
                ) : (
                  <span style={{ color: 'var(--text-primary)' }}>{line || ' '}</span>
                )}
              </div>
            ))}
            {bootStep >= BOOT_LINES.length && <span className="cursor-blink">_</span>}
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={`fade-in relative z-10 ${showBoot ? 'opacity-0' : 'opacity-100'}`}>

        {/* Hero */}
        <section
          id="hero"
          ref={setRef('hero')}
          className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 py-24 max-w-5xl mx-auto"
        >
          <div className="bg-glow" aria-hidden="true" />
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 w-full">
          <div className="flex-1 min-w-0">
          <div className="font-term text-xs sm:text-sm mb-6 flex items-center gap-2 flex-wrap" style={{ color: 'var(--accent-cyan)' }}>
            <span className="inline-block w-2 h-2 rounded-full status-dot" style={{ backgroundColor: 'var(--accent-cyan)' }} />
            <span>SYSTEM OPERATIONAL</span>
            <span style={{ color: 'var(--text-muted)' }}>· session uptime {formatUptime(uptime)}</span>
          </div>

          <p className="font-term text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            visitor@portfolio:~$ whoami
          </p>

          <h1 className="font-term text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3">
            {PROFILE.name}
          </h1>

          <p className="text-lg sm:text-2xl mb-4 font-term" style={{ color: 'var(--accent-amber)' }}>
            {PROFILE.role}
          </p>

          <p className="text-base sm:text-lg max-w-xl mb-10" style={{ color: 'var(--text-muted)' }}>
            {PROFILE.tagline}
          </p>

          <div className="border rounded-lg overflow-hidden max-w-md font-term text-sm" style={{ borderColor: 'var(--border-subtle)' }}>
            {ENDPOINTS.map((ep, i) => {
              const Icon = ep.icon;
              return (
                <a
                  key={ep.path}
                  href={ep.href}
                  target={ep.href.startsWith('http') ? '_blank' : undefined}
                  rel={ep.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="endpoint-row flex items-center justify-between px-4 py-3 transition-colors"
                  style={{ borderBottom: i !== ENDPOINTS.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="px-1.5 py-0.5 rounded text-xs font-bold w-12 text-center"
                      style={{
                        backgroundColor: ep.method === 'GET' ? 'rgba(95,217,203,0.15)' : 'rgba(232,169,106,0.15)',
                        color: ep.method === 'GET' ? 'var(--accent-cyan)' : 'var(--accent-amber)',
                      }}
                    >
                      {ep.method}
                    </span>
                    <span style={{ color: 'var(--text-primary)' }}>{ep.path}</span>
                  </span>
                  <span className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                    {ep.label}
                    <Icon size={14} />
                  </span>
                </a>
              );
            })}
          </div>
          </div>

          {/* Profile image */}
          <div className="shrink-0 mx-auto lg:mx-0">
            <div
              className="relative rounded-lg overflow-hidden border w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <img
                src="/profile.jpg"
                alt={PROFILE.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-1.5 font-term text-xs flex items-center gap-2"
                style={{ backgroundColor: 'rgba(13,17,23,0.78)', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)' }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-cyan)' }} />
                <span style={{ color: 'var(--accent-cyan)' }}>~/</span>profile.jpg
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* About */}
        <section id="about" ref={setRef('about')} className="px-6 sm:px-12 py-20 max-w-5xl mx-auto">
          <SectionHeader num="01" path="~/about" cmd="cat README.md" />
          <div className="font-term text-sm sm:text-base leading-relaxed space-y-5 max-w-2xl">
            <h2 className="text-lg sm:text-xl font-semibold" style={{ color: 'var(--accent-cyan)' }}># whoami</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Cloud and DevOps engineer who likes systems that fail loudly in staging and quietly — or not at all —
              in production. Over the last 5 years I've worked across AWS and Kubernetes, building the pipelines
              and platforms that let teams ship without holding their breath.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold pt-2" style={{ color: 'var(--accent-cyan)' }}># currently</h2>
            <ul className="space-y-1.5" style={{ color: 'var(--text-muted)' }}>
              <li className="flex gap-2"><span style={{ color: 'var(--accent-amber)' }}>-</span>Migrating a fleet of services from EC2 to EKS</li>
              <li className="flex gap-2"><span style={{ color: 'var(--accent-amber)' }}>-</span>Building reusable GitHub Actions workflows for the team</li>
              <li className="flex gap-2"><span style={{ color: 'var(--accent-amber)' }}>-</span>Turning manual runbook steps into code, one at a time</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-semibold pt-2" style={{ color: 'var(--accent-cyan)' }}># based_in</h2>
            <p style={{ color: 'var(--text-muted)' }}>{PROFILE.location} — open to remote work</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" ref={setRef('skills')} className="px-6 sm:px-12 py-20 max-w-5xl mx-auto">
          <SectionHeader num="02" path="~/skills" cmd="htop --filter=stack" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="rounded-lg p-5 border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                <p className="font-term text-xs mb-4" style={{ color: 'var(--text-muted)' }}># {group.title}</p>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5 font-term">
                        <span>{skill.name}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full skill-bar-track">
                        <div className="h-1.5 rounded-full skill-bar-fill" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" ref={setRef('projects')} className="px-6 sm:px-12 py-20 max-w-5xl mx-auto">
          <SectionHeader num="03" path="~/projects" cmd="ls -la --status" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROJECTS.map((p) => (
              <div key={p.name} className="rounded-lg p-5 border flex flex-col gap-3" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-term font-semibold text-base">{p.name}</h3>
                  <StatusBadge status={p.status} />
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs font-term border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-term text-xs" style={{ color: 'var(--accent-cyan)' }}>{p.metrics}</p>
                <a href={p.href} className="inline-flex items-center gap-1.5 text-xs font-term mt-auto pt-1" style={{ color: 'var(--accent-amber)' }}>
                  <Github size={14} /> source <ArrowUpRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" ref={setRef('experience')} className="px-6 sm:px-12 py-20 max-w-5xl mx-auto">
          <SectionHeader num="04" path="~/experience" cmd="git log --stat" />
          <div className="relative pl-7">
            <div className="absolute left-1 top-2 bottom-2 w-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
            {EXPERIENCE.map((job, i) => (
              <div key={job.hash} className="relative mb-10 last:mb-0">
                <div
                  className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: i === 0 ? 'var(--accent-cyan)' : 'var(--bg-base)',
                    border: '2px solid ' + (i === 0 ? 'var(--accent-cyan)' : 'var(--border-subtle)'),
                  }}
                />
                <p className="font-term text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                  commit {job.hash}
                  {job.branch && <span style={{ color: 'var(--accent-cyan)' }}> ({job.branch})</span>}
                </p>
                <h3 className="font-semibold text-base sm:text-lg">{job.role}</h3>
                <p className="text-sm mb-2 font-term" style={{ color: 'var(--accent-amber)' }}>{job.company} · {job.period}</p>
                <p className="font-term text-xs mb-3">
                  <span style={{ color: 'var(--accent-cyan)' }}>+{job.add}</span>{' '}
                  <span style={{ color: 'var(--accent-red)' }}>−{job.del}</span>
                </p>
                <ul className="space-y-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span style={{ color: 'var(--accent-cyan)' }}>›</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certs" ref={setRef('certs')} className="px-6 sm:px-12 py-20 max-w-5xl mx-auto">
          <SectionHeader num="05" path="~/certs" cmd="ls badges/" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTS.map((c) => (
              <div key={c.name} className="rounded-lg p-4 border text-center" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
                <p className="font-term text-xs mb-2" style={{ color: 'var(--accent-amber)' }}>{c.year}</p>
                <p className="font-semibold text-sm mb-1 leading-snug">{c.name}</p>
                <p className="text-xs font-term" style={{ color: 'var(--text-muted)' }}>{c.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" ref={setRef('contact')} className="px-6 sm:px-12 py-20 max-w-5xl mx-auto">
          <SectionHeader num="06" path="~/contact" cmd="cat config.yaml" />
          <div className="font-term text-sm sm:text-base rounded-lg p-6 border max-w-xl space-y-1" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <p><span style={{ color: 'var(--accent-cyan)' }}>contact</span>:</p>
            <p className="pl-4"><span style={{ color: 'var(--accent-amber)' }}>email</span>: <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
            <p className="pl-4"><span style={{ color: 'var(--accent-amber)' }}>github</span>: <a className="underline" href={PROFILE.github} target="_blank" rel="noreferrer">{PROFILE.github.replace('https://', '')}</a></p>
            <p className="pl-4"><span style={{ color: 'var(--accent-amber)' }}>linkedin</span>: <a className="underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer">{PROFILE.linkedin.replace('https://', '')}</a></p>
            <p className="pl-4"><span style={{ color: 'var(--accent-amber)' }}>location</span>: {PROFILE.location}</p>
            <p className="pl-4"><span style={{ color: 'var(--accent-amber)' }}>status</span>: <span style={{ color: 'var(--accent-cyan)' }}>open_to_work</span></p>
          </div>

          <p className="font-term text-xs mt-8" style={{ color: 'var(--text-muted)' }}>
            build: passing · last deploy: just now · © 2026 {PROFILE.name}
          </p>
        </section>
      </div>

      {/* tmux-style status bar / navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-20 tmux-bar font-term text-xs sm:text-sm">
        <div className="flex items-center justify-between gap-3 px-3 sm:px-6 h-10 max-w-6xl mx-auto">
          <span className="hidden sm:inline shrink-0" style={{ color: 'var(--accent-cyan)' }}>[alex@portfolio]</span>
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                aria-label={`Go to ${item.label} section`}
                className={`tmux-window px-2 py-1 rounded whitespace-nowrap transition-colors ${active === item.id ? 'tmux-window-active font-semibold' : ''}`}
                style={active === item.id ? {} : { color: 'var(--text-muted)' }}
              >
                {item.num}:{item.label}
              </button>
            ))}
          </div>
          <span className="shrink-0" style={{ color: 'var(--text-muted)' }}>{clock}</span>
        </div>
      </div>
    </div>
  );
}
