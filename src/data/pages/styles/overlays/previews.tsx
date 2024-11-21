/*=============================================== Preview ===============================================*/

import { Flexbox } from "@julseb-lib/react"
import { ColorCard } from "components"
import { allOverlays } from "data"

export const Preview = () => {
    return (
        <Flexbox gap="l" flexDirection="column">
            {allOverlays.map(overlay => (
                <ColorCard overlay={overlay} key={overlay.name} />
            ))}
        </Flexbox>
    )
}
