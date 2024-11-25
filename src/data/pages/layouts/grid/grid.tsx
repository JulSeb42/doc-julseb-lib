/*=============================================== Grid ===============================================*/

import { Grid } from "@julseb-lib/react"
import { Preview } from "./previews"
import type { ILibGrid } from "@julseb-lib/react/component-props"
import type { IPage } from "types"

export const grid: IPage<ILibGrid> = {
    name: "Grid",
    component: Grid,
    category: "layouts",
    description: "",
    imports: ["Grid"],
    importTypes: ["ILibGrid"],
    extends: [],
    props: [
        // inline?: boolean
        // col?: number | string
        // gap?: LibSpacers
        // columnGap?: LibSpacers
        // rowGap?: LibSpacers
        // justifyItems?: CssJustifyItems
        // alignItems?: CssAlignItems
        // justifyContent?: CssJustifyContent
        // alignContent?: CssAlignContent
        // padding?: ILibPadding

        {
            name: "inline",
            type: "boolean",
            possibleValues: "",
            defaultValue: "",
            description: (
                <>
                    Set the <code>display</code> to <code>inline-grid</code>
                </>
            ),
            isRequired: false,
        },
    ],
    previews: [<Preview key={0} />],
}
