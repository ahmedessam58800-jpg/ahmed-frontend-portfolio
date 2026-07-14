type ProjectCardProps = {
  name: string;
  description: string;
  technologies: readonly string[];
  repositoryUrl: string;
  livePreviewUrl: string;
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
  responsiveEvidence,
  accessibilityEvidence,
  aiWorkflowEvidence,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="mt-3 text-muted leading-relaxed">{description}</p>

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

      <div className="mt-5 flex flex-wrap gap-4">
        <a
          href={repositoryUrl}
          className="text-sm font-medium text-accent hover:text-accent-hover"
          aria-label={`View ${name} repository (placeholder link)`}
        >
          Repository
        </a>
        <a
          href={livePreviewUrl}
          className="text-sm font-medium text-accent hover:text-accent-hover"
          aria-label={`View ${name} live preview (placeholder link)`}
        >
          Live preview
        </a>
      </div>

      <div className="mt-6 space-y-4 border-t border-border pt-5">
        <div>
          <h3 className="text-sm font-semibold">Responsive design</h3>
          <p className="mt-1 text-sm text-muted">{responsiveEvidence}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Accessibility</h3>
          <p className="mt-1 text-sm text-muted">{accessibilityEvidence}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">AI-assisted workflow</h3>
          <p className="mt-1 text-sm text-muted">{aiWorkflowEvidence}</p>
        </div>
      </div>
    </article>
  );
}
