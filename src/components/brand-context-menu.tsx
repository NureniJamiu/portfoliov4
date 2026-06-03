"use client"

import { DownloadIcon, TypeIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { toast } from "sonner"

import { copyText } from "@/utils/copy"

import { getWordmarkSVG } from "./chanhdai-wordmark"
import { getMarkSVG, JamiuNureniMark } from "./jamiu-nureni-mark"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(resolvedTheme === "light" ? "#000" : "#fff")
            copyText(svg)
            toast.success("Mark as SVG copied")
          }}
        >
          <JamiuNureniMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(
              resolvedTheme === "light" ? "#000" : "#fff"
            )
            copyText(svg)
            toast.success("Logotype as SVG copied")
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <a href="https://assets.chanhdai.com/chanhdai-brand.zip" download>
            <DownloadIcon />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
