/**
 * Tag an outbound AdaL link so PostHog can attribute the visit.
 *
 * adalagent.ai reads utm_source/utm_medium/utm_campaign from the ENTRY URL and
 * registers them on every subsequent event in the session, so an untagged link
 * lands as direct traffic and this site gets no credit for the signup. The
 * `campaign` argument is the placement — which page or component the reader
 * clicked — because knowing that codingagents.md sent someone is much less
 * useful than knowing the Pi page did.
 */
export function adalUrl(campaign: string, path = "/"): string {
  const url = new URL(path, "https://adalagent.ai");
  url.searchParams.set("utm_source", "codingagents.md");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}

export const URLS = {
  SITE: "https://codingagents.md",
  // SylphAI's company site is adalagent.ai. sylph.ai is the old domain and
  // still resolves, so a stale link looks fine in review while quietly sending
  // traffic and link equity to the wrong host.
  SYLPH_AI: "https://adalagent.ai",
  GITHUB_REPO: "https://github.com/SylphAI-Inc/codingagents.md",
  GITHUB_EDIT_BASE: "https://github.com/SylphAI-Inc/codingagents.md/edit/main/",
  ADALFLOW_GITHUB: "https://github.com/SylphAI-Inc/AdalFlow",
  SUBSCRIBE_API: "https://backend-beige-six-80.vercel.app",
} as const;
