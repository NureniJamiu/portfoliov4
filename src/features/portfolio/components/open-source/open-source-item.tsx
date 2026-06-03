import {
  ArrowUpRightIcon,
  GitMergeIcon,
  GitPullRequestClosed,
  GitPullRequestIcon,
} from "lucide-react"

import type { PullRequest } from "../../data/open-source"

export function OpenSourceItem({ pr }: { pr: PullRequest }) {
  const isMerged = pr.pull_request?.merged_at != null
  const isClosed = pr.state === "closed" && !isMerged

  const repoName = pr.repository_url.replace(
    "https://api.github.com/repos/",
    ""
  )

  return (
    <a
      href={pr.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-4 transition-colors hover:bg-accent/50"
    >
      <div className="flex shrink-0 pt-0.5">
        {isMerged ? (
          <GitMergeIcon className="size-4 text-[#8250df]" />
        ) : isClosed ? (
          <GitPullRequestClosed className="size-4 text-red-500" />
        ) : (
          <GitPullRequestIcon className="size-4 text-green-500" />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 font-mono text-sm font-medium text-foreground transition-colors group-hover:text-primary">
          <span>{repoName}</span>
          <ArrowUpRightIcon className="size-3.5 text-muted-foreground opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </div>
        <span className="line-clamp-2 font-mono text-sm text-muted-foreground">
          {pr.title}
        </span>
      </div>
    </a>
  )
}
