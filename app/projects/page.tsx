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
      "A React task manager for creating, completing, deleting, and filtering tasks with browser persistence.",
    technologies: ["React", "JavaScript", "CSS", "Git"],
    repositoryUrl: "https://github.com/ahmedessam58800-jpg/ai-task-manager",
    availabilityNote:
      "Public repository available. A standalone live demo is not claimed because this project has not been deployed.",
    responsiveEvidence:
      "The interface uses flexible layout patterns and spacing intended to remain readable from small screens through desktop widths.",
    accessibilityEvidence:
      "Accessibility was considered during implementation, but a formal keyboard and screen-reader audit is not claimed.",
    aiWorkflowEvidence:
      "An AI-assisted review identified a malformed localStorage failure case; the stored-data validation was then tightened and the main flows were rechecked.",
  },
  {
    name: "FlyRank Settings Form",
    description:
      "A controlled prompt-comparison exercise that builds the same settings form from a vague prompt and a detailed prompt.",
    technologies: ["HTML", "CSS", "JavaScript"],
    availabilityNote:
      "The comparison was built on independent development branches and is not presented here as a deployed public demo.",
    responsiveEvidence:
      "The detailed prompt explicitly defined responsive behavior so the form could stack cleanly on smaller screens.",
    accessibilityEvidence:
      "Labels and accessibility requirements were included in the implementation brief; formal assistive-technology verification is still pending.",
    aiWorkflowEvidence:
      "The exercise demonstrates how clearer constraints reduced unrequested scope and made the output easier to review against acceptance criteria.",
  },
  {
    name: "FlyRank Frontend Capstone",
    description:
      "A frontend capstone repository documenting the final FlyRank project and its implementation evidence.",
    technologies: ["Frontend", "Git", "AI-assisted workflow"],
    repositoryUrl: "https://github.com/ahmedessam58800-jpg/flyrank-capstone",
    availabilityNote:
      "Public repository available. No separate live preview is shown unless a deployed demo exists.",
    responsiveEvidence:
      "The portfolio presents the capstone inside a single-column card layout that avoids horizontal overflow on narrow screens.",
    accessibilityEvidence:
      "The portfolio uses semantic headings, visible focus states, and descriptive link labels for this project entry.",
    aiWorkflowEvidence:
      "The capstone records a structured AI-assisted development process with human review checkpoints.",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Selected frontend work demonstrating responsive layout, accessibility
          awareness, and structured development workflows. Public links are
          shown only where a real repository or deployment exists.
        </p>
      </header>

      <div className="mt-10 grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
}
