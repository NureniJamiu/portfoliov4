import {
  ArrowUpRightIcon,
  GitMergeIcon,
  GitPullRequestClosed,
  GitPullRequestIcon,
} from "lucide-react"
import { format } from "date-fns"

import type { PullRequest } from "../../data/open-source"

export function OpenSourceItem({ pr }: { pr: PullRequest }) {
  const isMerged = pr.pull_request?.merged_at != null
  const isClosed = pr.state === "closed" && !isMerged

  const repoName = pr.repository_url.replace(
    "https://api.github.com/repos/",
    ""
  )

  let dateText = ""
  if (isMerged && pr.pull_request?.merged_at) {
    dateText = `Merged ${format(new Date(pr.pull_request.merged_at), "MMM d, yyyy")}`
  } else if (isClosed && pr.closed_at) {
    dateText = `Closed ${format(new Date(pr.closed_at), "MMM d, yyyy")}`
  } else {
    dateText = `Opened ${format(new Date(pr.created_at), "MMM d, yyyy")}`
  }

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
        <span className="font-mono text-xs text-muted-foreground/70">
          {dateText}
        </span>
      </div>
    </a>
  )
}
