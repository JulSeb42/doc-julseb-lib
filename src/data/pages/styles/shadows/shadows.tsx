/*=============================================== Shadows ===============================================*/

import { SHADOWS } from "@julseb-lib/react"
import { Preview } from "./previews"
import type { LibShadows } from "@julseb-lib/react/types"
import type { IPage } from "../../../../types"

export const shadows: IPage<LibShadows> = {
    name: "Shadows",
    component: SHADOWS as any,
    category: "styles",
    description: null,
    imports: ["SHADOWS"],
    importTypes: null,
    extends: null,
    props: null,
    previews: [
        <Preview key={0} />,
    ],
}
