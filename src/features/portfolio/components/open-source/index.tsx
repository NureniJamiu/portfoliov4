import { CollapsibleList } from "@/components/collapsible-list"

import { getOpenSourcePRs } from "../../data/open-source"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { OpenSourceItem } from "./open-source-item"

export async function OpenSource() {
  const prs = await getOpenSourcePRs()

  if (!prs || prs.length === 0) {
    return null
  }

  return (
    <Panel id="open-source">
      <PanelHeader>
        <PanelTitle>
          Open Source
          <PanelTitleSup>({prs.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={prs}
        max={4}
        keyExtractor={(pr) => String(pr.id)}
        renderItem={(item) => <OpenSourceItem pr={item} />}
      />
    </Panel>
  )
}
