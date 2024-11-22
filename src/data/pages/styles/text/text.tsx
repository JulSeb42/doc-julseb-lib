/*=============================================== Text ===============================================*/

import { Text } from "@julseb-lib/react"
import { typeValues } from "@julseb-lib/react/types"
import { COMMON_PROPS } from "data/common-props"
import {
    TitlesDisplay,
    Titles,
    Paragraphs,
    Small,
    BlockQuote,
    UnorderedList,
    OrderedList,
    DescriptionList,
} from "./previews"
import type { ILibText } from "@julseb-lib/react/component-props"
import type { IPage } from "types"

export const text: IPage<ILibText> = {
    name: "Text",
    component: Text,
    category: "styles",
    description: "",
    imports: ["Text"],
    importTypes: ["ILibText"],
    extends: ["HTMLElement"],
    props: [
        {
            name: "tag",
            type: "string",
            possibleValues: Object.keys(typeValues.allTextTags),
            defaultValue: "p",
            isRequired: false,
        },
        {
            name: "textAlign",
            type: "string",
            possibleValues: [
                "left",
                "center",
                "right",
                "justify",
                "inherit",
                "initial",
                "revert",
                "revert-layer",
                "unset",
            ],
            defaultValue: "left",
            isRequired: false,
        },
        {
            name: "color",
            type: "string",
            possibleValues: COMMON_PROPS.ALL_COLORS,
            defaultValue: "currentColor",
        },
        {
            name: "linkColor",
            type: "string",
            possibleValues: Object.values(typeValues.colorsHover),
            defaultValue: "primary",
        },
        {
            name: "display",
            type: "boolean",
            description: (
                <>
                    Only when <code>tag</code> is set from <code>h1</code> to{" "}
                    <code>h5</code>
                </>
            ),
        },
    ],
    previews: [
        <TitlesDisplay key={0} />,
        <Titles key={1} />,
        <Paragraphs key={2} />,
        <Small key={3} />,
        <BlockQuote key={4} />,
        <UnorderedList key={5} />,
        <OrderedList key={6} />,
        <DescriptionList key={7} />,
    ],
}
