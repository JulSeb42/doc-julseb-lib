/*=============================================== Text ===============================================*/

import { Section } from "@julseb-lib/react"
import { Preview } from "./previews"
import type { ILibSection } from "@julseb-lib/react/component-props"
import type { IPage } from "types"

export const section: IPage<ILibSection> = {
    name: "Section",
    component: Section,
    category: "layouts",
    description: "",
    imports: ["Section"],
    importTypes: ["ILibSection"],
    extends: [],
    props: [],
    previews: [<Preview key={0} />],
}
