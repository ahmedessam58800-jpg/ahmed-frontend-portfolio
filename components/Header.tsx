import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-lg font-semibold text-foreground hover:text-accent"
        >
          Ahmed Essam
        </Link>
        <nav aria-label="Main navigation" className="w-full sm:w-auto">
          <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium text-muted hover:bg-muted-bg hover:text-foreground sm:w-auto"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
