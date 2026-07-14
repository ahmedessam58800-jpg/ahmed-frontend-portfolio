import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ahmed Essam — Information Systems student and frontend developer.",
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
] as const;

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About
        </h1>
        <p className="mt-4 text-lg text-muted">
          A brief overview of my background and frontend focus.
        </p>
      </header>

      <section aria-labelledby="background-heading" className="mt-10 max-w-3xl">
        <h2 id="background-heading" className="text-2xl font-semibold">
          Background
        </h2>
        <p className="mt-4 text-muted leading-relaxed">
          I am Ahmed Essam, an Information Systems student with a focus on
          frontend development. I enjoy turning requirements into clear,
          maintainable interfaces and learning modern web tools through
          hands-on projects.
        </p>
      </section>

      <section aria-labelledby="role-heading" className="mt-10 max-w-3xl">
        <h2 id="role-heading" className="text-2xl font-semibold">
          What I do
        </h2>
        <p className="mt-4 text-muted leading-relaxed">
          As a frontend developer, I work on layout, component structure,
          accessibility, and responsive design. I use React and Next.js for
          application interfaces and follow version control practices with Git.
        </p>
      </section>

      <section aria-labelledby="skills-heading" className="mt-10 max-w-3xl">
        <h2 id="skills-heading" className="text-2xl font-semibold">
          Skills
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
