export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted">
          &copy; {year} Ahmed Essam. Frontend developer portfolio.
        </p>
      </div>
    </footer>
  );
}
