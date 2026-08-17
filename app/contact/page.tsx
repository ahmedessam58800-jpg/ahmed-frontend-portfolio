import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ahmed Essam for frontend internship or junior developer opportunities.",
};

const contactLinks = [
  {
    label: "Email",
    value: "ahmedessam58800@gmail.com",
    href: "mailto:ahmedessam58800@gmail.com",
    description: "Email Ahmed Essam about internship or junior developer roles",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/ahmedessam58800-jpg",
    href: "https://github.com/ahmedessam58800-jpg",
    description: "Open Ahmed Essam's GitHub profile",
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          I am actively seeking a frontend internship or junior developer
          opportunity. If you have a role, project, or mentorship opportunity,
          I would welcome a conversation.
        </p>
      </header>

      <section
        aria-labelledby="contact-methods-heading"
        className="mt-10 max-w-xl"
      >
        <h2 id="contact-methods-heading" className="text-2xl font-semibold">
          Get in touch
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Use either verified contact method below.
        </p>

        <ul className="mt-6 space-y-4">
          {contactLinks.map(({ label, value, href, description, external }) => (
            <li
              key={label}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {label}
              </h3>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="mt-2 inline-flex min-h-11 max-w-full items-center break-all font-medium text-accent hover:text-accent-hover"
                aria-label={description}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
