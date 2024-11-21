/*=============================================== Colors previews ===============================================*/

import { Tabs } from "@julseb-lib/react"
import { ColorCard } from "../../../../components"
import { colorsLight, colorsDark } from "../../../tokens/all-colors"
import type { LibTabItem } from "@julseb-lib/react/types"

export const Preview = () => {
    const tabItems: Array<LibTabItem> = [
        {
            title: "Light",
            content: colorsLight.map((c, i) => <ColorCard key={i} color={c} />),
        },
        {
            title: "Dark",
            content: colorsDark.map((c, i) => <ColorCard key={i} color={c} />),
        },
    ]

    return (
        <Tabs
            tabsItems={tabItems}
            variant="rounded"
            justify="stretch"
            showInUrl
        />
    )
}
