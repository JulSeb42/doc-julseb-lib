import { SPACERS } from "@julseb-lib/react"
import { Preview } from "./previews"
import type { LibSpacers } from "@julseb-lib/react/types"
import type { IPage } from "types"

export const spacers: IPage<LibSpacers> = {
    name: "Spacers",
    component: SPACERS as any,
    category: "styles",
    description: "",
    imports: ["SPACERS"],
    importTypes: [],
    extends: [],
    props: [],
    previews: [<Preview key={0} />],
}
