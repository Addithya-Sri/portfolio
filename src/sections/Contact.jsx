import Card from '../components/Card.jsx';
import Section from '../components/Section.jsx';
import SocialIcon from '../components/SocialIcon.jsx';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  const items = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: 'mail',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sri-adithya-sridhar',
      href: profile.linkedin,
      icon: 'linkedin',
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      subtitle="Open to senior DevOps / SRE / Platform roles in Germany — and to interesting freelance infrastructure work."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.label} hover className="p-6">
            <a
              href={item.href}
              target={item.icon === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
              className="group flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <p className="mono-label">{item.label}</p>
                <p className="mt-2 truncate font-mono text-sm text-slate-200 group-hover:text-accent">
                  {item.value}
                </p>
              </div>
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-slate-800 text-slate-500 group-hover:border-accent/60 group-hover:text-accent">
                <SocialIcon name={item.icon} />
              </span>
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
