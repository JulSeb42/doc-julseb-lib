/*=============================================== Overlays ===============================================*/

import { Preview } from "./previews"
import type { IPage } from "types"

export const overlays: IPage<null> = {
    name: "Overlays",
    component: null,
    category: "styles",
    description: null,
    imports: ["OVERLAYS"],
    importTypes: null,
    extends: null,
    props: null,
    previews: [<Preview key={0} />],
}
