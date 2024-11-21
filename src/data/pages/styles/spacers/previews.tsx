/*=============================================== Spacers previews ===============================================*/

import { Grid } from "@julseb-lib/react"
import { StyleCard } from "components"
import { allSpacers } from "data"

export const Preview = () => {
    return (
        <Grid col={3} gap="xl">
            {allSpacers.map((spacer, i) => (
                <StyleCard spacer={spacer} key={i} />
            ))}
        </Grid>
    )
}
