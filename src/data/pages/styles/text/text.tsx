/*=============================================== Text ===============================================*/

import { Text } from "@julseb-lib/react"
import { typeValues } from "@julseb-lib/react/types"
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
import type { IPage } from "../../../../types"

export const text: IPage<ILibText> = {
    name: "Text",
    component: Text,
    category: "styles",
    description: "",
    imports: ["Text"],
    importTypes: ["ILibText"],
    extends: [],
    props: [
        {
            name: "tag",
            type: "string",
            possibleValues: Object.keys(typeValues.allTextTags).join(" | "),
            default: "p",
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
