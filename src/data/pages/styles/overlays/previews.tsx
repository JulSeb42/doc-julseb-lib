/*=============================================== Preview ===============================================*/

import { Flexbox } from "@julseb-lib/react"
import { ColorCard } from "../../../../components"
import { allOverlays } from "../../../tokens/all-overlays"

export const Preview = () => {
    return (
        <Flexbox gap="l" flexDirection="column">
            {allOverlays.map(overlay => (
                <ColorCard overlay={overlay} key={overlay.name} />
            ))}
        </Flexbox>
    )
}