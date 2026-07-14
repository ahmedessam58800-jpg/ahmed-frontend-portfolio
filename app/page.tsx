import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <section
        aria-labelledby="hero-heading"
        className="rounded-xl border border-border bg-surface p-6 sm:p-10"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">
          Frontend Developer Portfolio
        </p>
        <h1
          id="hero-heading"
          className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
        >
          I build responsive and accessible React interfaces using tested
          AI-assisted workflows.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Contact me for a frontend internship or junior developer opportunity.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-hover"
          >
            Contact me
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted-bg"
          >
            View projects
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="intro-heading"
        className="mt-12 max-w-3xl"
      >
        <h2 id="intro-heading" className="text-2xl font-semibold">
          Introduction
        </h2>
        <p className="mt-4 text-muted leading-relaxed">
          I am Ahmed Essam, an Information Systems student focused on frontend
          development. I work with HTML, CSS, JavaScript, React, and Next.js to
          create clear, user-friendly interfaces. This portfolio highlights
          projects where I practice responsive layout, accessibility, and
          structured AI-assisted development workflows.
        </p>
      </section>

      <section
        aria-labelledby="featured-heading"
        className="mt-12"
      >
        <h2 id="featured-heading" className="text-2xl font-semibold">
          Featured projects
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "AI Task Manager",
              description:
                "A task management interface built with React and tested AI-assisted workflows.",
            },
            {
              name: "FlyRank Settings Form",
              description:
                "A settings form focused on accessible inputs and responsive layout.",
            },
            {
              name: "FlyRank Frontend Capstone",
              description:
                "A frontend capstone project demonstrating component structure and UI polish.",
            },
          ].map((project) => (
            <li
              key={project.name}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link
            href="/projects"
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            See all projects &rarr;
          </Link>
        </p>
      </section>
    </main>
  );
}
