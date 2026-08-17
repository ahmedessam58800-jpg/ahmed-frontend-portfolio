type ProjectCardProps = {
  name: string;
  description: string;
  technologies: readonly string[];
  repositoryUrl?: string;
  livePreviewUrl?: string;
  availabilityNote?: string;
  responsiveEvidence: string;
  accessibilityEvidence: string;
  aiWorkflowEvidence: string;
};

export function ProjectCard({
  name,
  description,
  technologies,
  repositoryUrl,
  livePreviewUrl,
  availabilityNote,
  responsiveEvidence,
  accessibilityEvidence,
  aiWorkflowEvidence,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>

      <div className="mt-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Technologies
        </h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-muted-bg px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {(repositoryUrl || livePreviewUrl) && (
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {repositoryUrl && (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-semibold text-accent hover:bg-muted-bg hover:text-accent-hover"
              aria-label={`Open ${name} GitHub repository`}
            >
              Repository
            </a>
          )}
          {livePreviewUrl && (
            <a
              href={livePreviewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-hover"
              aria-label={`Open ${name} live preview`}
            >
              Live preview
            </a>
          )}
        </div>
      )}

      {availabilityNote && (
        <p className="mt-4 rounded-lg bg-muted-bg p-3 text-sm leading-relaxed text-muted">
          {availabilityNote}
        </p>
      )}

      <div className="mt-6 space-y-4 border-t border-border pt-5">
        <div>
          <h3 className="text-sm font-semibold">Responsive design</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{responsiveEvidence}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Accessibility</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{accessibilityEvidence}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">AI-assisted workflow</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{aiWorkflowEvidence}</p>
        </div>
      </div>
    </article>
  );
}
