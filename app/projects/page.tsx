import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected frontend projects by Ahmed Essam, including AI Task Manager and FlyRank work.",
};

const projects = [
  {
    name: "AI Task Manager",
    description:
      "A task management application with a React frontend for creating, organizing, and tracking tasks.",
    technologies: ["React", "JavaScript", "CSS", "Git"],
    repositoryUrl: "#ai-task-manager-repo",
    livePreviewUrl: "#ai-task-manager-preview",
    responsiveEvidence:
      "Layout adapts from mobile to desktop with flexible grids and readable spacing at 375px and 1280px.",
    accessibilityEvidence:
      "Semantic HTML, visible focus states, and descriptive labels for interactive controls.",
    aiWorkflowEvidence:
      "Built using a structured AI-assisted workflow with review checkpoints for UI and accessibility.",
  },
  {
    name: "FlyRank Settings Form",
    description:
      "A settings form interface with grouped inputs, validation feedback, and clear section hierarchy.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    repositoryUrl: "#flyrank-settings-repo",
    livePreviewUrl: "#flyrank-settings-preview",
    responsiveEvidence:
      "Form fields stack on small screens and align in columns on wider viewports.",
    accessibilityEvidence:
      "Inputs are associated with labels, errors are announced in text, and keyboard navigation is supported.",
    aiWorkflowEvidence:
      "Component structure and accessibility checks were refined through iterative AI-assisted reviews.",
  },
  {
    name: "FlyRank Frontend Capstone",
    description:
      "A frontend capstone project combining multiple UI patterns into a cohesive, navigable interface.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    repositoryUrl: "#flyrank-capstone-repo",
    livePreviewUrl: "#flyrank-capstone-preview",
    responsiveEvidence:
      "Navigation, cards, and content sections reflow cleanly across common breakpoints.",
    accessibilityEvidence:
      "Landmark regions, heading hierarchy, and link text are written for screen reader clarity.",
    aiWorkflowEvidence:
      "Used AI-assisted planning for component breakdown and manual verification of each UI section.",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted">
          Selected frontend work demonstrating responsive layout, accessibility
          practices, and structured development workflows.
        </p>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
}
