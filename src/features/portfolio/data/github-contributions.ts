import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const baseUrl = process.env.GITHUB_CONTRIBUTIONS_API_URL

      if (!baseUrl) {
        return []
      }

      const res = await fetch(`${baseUrl}/v4/${GITHUB_USERNAME}?y=last`)

      if (!res.ok) {
        return []
      }

      const contentType = res.headers.get("content-type") ?? ""

      if (!contentType.includes("application/json")) {
        return []
      }

      const data = (await res.json()) as GitHubContributionsResponse

      if (!Array.isArray(data?.contributions)) {
        return []
      }

      return data.contributions
    } catch {
      return []
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
