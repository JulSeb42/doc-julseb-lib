import { Grid } from "@julseb-lib/react"
import { ComponentCard, GridItem } from "components"

export const Preview = () => {
    return (
        <ComponentCard
            displayName="Grid"
            code={`<Grid col={3} columnGap="s" rowGap="xxs">\n\t<GridItem />\n\t<GridItem />\n\t<GridItem />\n\t<GridItem />\n\t<GridItem />\n</Grid>`}
        >
            <Grid col={3} columnGap="s" rowGap="xxs">
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
                <GridItem />
            </Grid>
        </ComponentCard>
    )
}
