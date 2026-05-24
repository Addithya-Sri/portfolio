export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-page">
        {(eyebrow || title || subtitle) && (
          <header className="mb-10 max-w-3xl">
            {eyebrow && <p className="eyebrow mb-3">{`// ${eyebrow}`}</p>}
            {title && <h2 className="heading">{title}</h2>}
            {subtitle && <p className="mt-3 subheading">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
