/*=============================================== Radiuses previews ===============================================*/

import { Grid } from "@julseb-lib/react"
import { StyleCard } from "../../../../components"
import { allRadiuses } from "../../../tokens/all-radiuses"

export const Preview = () => {
    return (
        <Grid col={3} gap="l">
            {allRadiuses.map((radius, i) => (
                <StyleCard radius={radius} key={i} />
            ))}
        </Grid>
    )
}