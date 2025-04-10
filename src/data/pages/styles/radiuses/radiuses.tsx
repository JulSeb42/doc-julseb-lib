import { RADIUSES } from "@julseb-lib/react"
import { Preview } from "./previews"
import type { LibRadiuses } from "@julseb-lib/react/types"
import type { IPage } from "types"

export const radiuses: IPage<LibRadiuses> = {
    name: "Radiuses",
    component: RADIUSES as any,
    category: "styles",
    description: null,
    imports: ["RADIUSES"],
    importTypes: null,
    extends: null,
    props: null,
    previews: [<Preview key={0} />],
}
