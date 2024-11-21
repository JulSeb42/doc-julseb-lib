/*=============================================== Shadows previews ===============================================*/

import { Grid } from "@julseb-lib/react"
import { StyleCard } from "../../../../components"
import { allShadows } from "../../../tokens/all-shadows"

export const Preview = () => {
    return (
        <Grid col={3} gap="xl">
            {allShadows.map((shadow, i) => (
                <StyleCard shadow={shadow} key={i} />
            ))}
        </Grid>
    )
}
