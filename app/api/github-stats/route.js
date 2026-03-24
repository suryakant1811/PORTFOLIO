export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return new Response(
      JSON.stringify({ error: "Missing GITHUB_USERNAME in environment." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const headers = {
    Accept: "application/vnd.github+json",
  };

  // Optional: increases rate limit for GitHub API.
  if (token) headers.Authorization = `Bearer ${token}`;

  const userRes = await fetch(`https://api.github.com/users/${username}`, {
    headers,
  });

  if (!userRes.ok) {
    const text = await userRes.text().catch(() => "");
    return new Response(
      JSON.stringify({
        error: "GitHub user fetch failed.",
        status: userRes.status,
        details: text,
      }),
      { status: userRes.status, headers: { "Content-Type": "application/json" } }
    );
  }

  const user = await userRes.json();

  // Sum stars across repos (first 100). Good enough for typical personal accounts.
  const reposRes = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`,
    { headers }
  );

  if (!reposRes.ok) {
    const text = await reposRes.text().catch(() => "");
    return new Response(
      JSON.stringify({
        error: "GitHub repos fetch failed.",
        status: reposRes.status,
        details: text,
      }),
      { status: reposRes.status, headers: { "Content-Type": "application/json" } }
    );
  }

  const repos = await reposRes.json();
  const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
  const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);

  // Lifetime commits from account creation date -> now.
  let totalCommits = 0;
  let commitDebug = null;
  try {
    const createdAt = user.created_at || "2008-01-01T00:00:00Z";
    const to = new Date().toISOString();

    const graphHeaders = {
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    };
    if (token) graphHeaders.Authorization = `Bearer ${token}`;

    const query = `
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
          }
        }
      }
    `;

    const graphRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: graphHeaders,
      body: JSON.stringify({
        query,
        variables: {
          login: username,
          from: createdAt,
          to,
        },
      }),
    });

    const graphText = await graphRes.text();
    let graphJson = null;
    try {
      graphJson = graphText ? JSON.parse(graphText) : null;
    } catch {
      graphJson = null;
    }

    if (graphRes.ok && graphJson && !graphJson.errors) {
      totalCommits =
        graphJson?.data?.user?.contributionsCollection?.totalCommitContributions ?? 0;
    } else {
      commitDebug = {
        graphStatus: graphRes.status,
        graphErrors: graphJson?.errors ?? null,
        createdAt,
      };
    }
  } catch {
    // If GraphQL fails, we still return stars + other metrics.
  }

  const data = {
    username,
    followers: user.followers ?? 0,
    following: user.following ?? 0,
    publicRepos: user.public_repos ?? 0,
    publicGists: user.public_gists ?? 0,
    totalStars,
    totalForks,
    totalCommits,
  };

  if (process.env.NODE_ENV !== "production" && commitDebug) {
    data.commitDebug = commitDebug;
  }

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      // Cache briefly to avoid hitting GitHub rate limits.
      "Cache-Control": "public, max-age=60, s-maxage=60",
    },
  });
}

