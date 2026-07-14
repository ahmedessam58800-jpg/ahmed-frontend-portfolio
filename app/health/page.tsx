import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health",
  description: "Portfolio health check — live GitHub repository status.",
};

export const dynamic = "force-dynamic";

const GITHUB_REPO_URL =
  "https://api.github.com/repos/ahmedessam58800-jpg/ai-task-manager";

type GitHubRepoResponse = {
  name: string;
  private: boolean;
  stargazers_count: number;
  updated_at: string;
};

type RepoHealth = {
  name: string;
  visibility: string;
  stars: number;
  lastUpdated: string;
};

async function fetchRepoHealth(): Promise<RepoHealth | null> {
  try {
    const response = await fetch(GITHUB_REPO_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as GitHubRepoResponse;

    if (
      typeof data.name !== "string" ||
      typeof data.private !== "boolean" ||
      typeof data.stargazers_count !== "number" ||
      typeof data.updated_at !== "string"
    ) {
      return null;
    }

    return {
      name: data.name,
      visibility: data.private ? "Private" : "Public",
      stars: data.stargazers_count,
      lastUpdated: new Date(data.updated_at).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };
  } catch {
    return null;
  }
}

export default async function HealthPage() {
  const repoHealth = await fetchRepoHealth();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Health
        </h1>
        <p className="mt-4 text-lg text-muted">
          Live status check for the AI Task Manager GitHub repository.
        </p>
      </header>

      <section
        aria-labelledby="repo-status-heading"
        className="mt-10 max-w-xl"
      >
        <h2 id="repo-status-heading" className="text-2xl font-semibold">
          Repository status
        </h2>

        {repoHealth ? (
          <dl className="mt-6 space-y-4 rounded-xl border border-border bg-surface p-6">
            <div>
              <dt className="text-sm font-medium text-muted">Repository</dt>
              <dd className="mt-1 font-semibold">{repoHealth.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted">Visibility</dt>
              <dd className="mt-1 font-semibold">{repoHealth.visibility}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted">Stars</dt>
              <dd className="mt-1 font-semibold">{repoHealth.stars}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted">Last updated</dt>
              <dd className="mt-1 font-semibold">{repoHealth.lastUpdated}</dd>
            </div>
          </dl>
        ) : (
          <div
            role="status"
            className="mt-6 rounded-xl border border-border bg-muted-bg p-6"
          >
            <p className="font-medium text-foreground">
              Unable to load repository data right now.
            </p>
            <p className="mt-2 text-sm text-muted">
              The health check could not reach the GitHub API or received an
              unexpected response. Please try again later.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
