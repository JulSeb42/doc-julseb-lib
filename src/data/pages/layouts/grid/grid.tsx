import { Grid } from "@julseb-lib/react"
import { Preview } from "./previews"
import { SITE_TYPE_VALUES } from "data/site-type-values"
import type { ILibGrid } from "@julseb-lib/react/component-props"
import type { IPage } from "types"
import { typeValues } from "@julseb-lib/react/types"

export const grid: IPage<ILibGrid> = {
    name: "Grid",
    component: Grid,
    category: "layouts",
    description: "",
    imports: ["Grid"],
    importTypes: ["ILibGrid"],
    extends: [],
    props: [
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
        // col?: number | string
        {
            name: "col",
            type: "number | string",
            possibleValues: "",
            defaultValue: "",
            description: "",
            isRequired: false,
        },
        // gap?: LibSpacers
        {
            name: "gap",
            type: "number | string",
            possibleValues: SITE_TYPE_VALUES.SPACERS,
            defaultValue: "",
            description: "",
            isRequired: false,
        },
        // columnGap?: LibSpacers
        {},
        {},
        {},
        // rowGap?: LibSpacers
        {},
        // justifyItems?: CssJustifyItems
        {},
        // alignItems?: CssAlignItems
        {},
        // justifyContent?: CssJustifyContent
        {},
        // alignContent?: CssAlignContent
        {},
        // padding?: ILibPadding
        {},
    ],
    previews: [<Preview key={0} />],
}
