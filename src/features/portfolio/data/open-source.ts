import { unstable_cache } from "next/cache"

import { GITHUB_USERNAME } from "@/config/site"

export type PullRequest = {
  id: number
  title: string
  html_url: string
  state: "open" | "closed"
  created_at: string
  pull_request: {
    merged_at: string | null
  }
  repository_url: string
}

type GitHubSearchResponse = {
  total_count: number
  incomplete_results: boolean
  items: PullRequest[]
}

export const getOpenSourcePRs = unstable_cache(
  async () => {
    try {
      const token = process.env.GITHUB_TOKEN
      const headers: HeadersInit = {
        Accept: "application/vnd.github.v3+json",
      }

      if (token) {
        headers.Authorization = `Bearer ${token}`
      }

      // Search for PRs authored by the user, public, excluding their own repos
      const query = `type:pr author:${GITHUB_USERNAME} is:public -user:${GITHUB_USERNAME}`
      const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=created&order=desc&per_page=100`

      const res = await fetch(url, { headers })

      if (!res.ok) {
        console.error("Failed to fetch open source PRs:", res.statusText)
        return []
      }

      const data = (await res.json()) as GitHubSearchResponse

      if (!data || !Array.isArray(data.items)) {
        return []
      }

      return data.items
    } catch (error) {
      console.error("Error fetching open source PRs:", error)
      return []
    }
  },
  ["open-source-prs"],
  { revalidate: 86400 } // Cache for 1 day
)
