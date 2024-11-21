/*=============================================== All pages ===============================================*/

import type { IPage } from "../types"

import { colors } from "./pages/styles/colors"
import { overlays } from "./pages/styles/overlays"
import { text } from "./pages/styles/text"
import { shadows } from "./pages/styles/shadows"
import { radiuses } from "./pages/styles/radiuses"
import { spacers } from "./pages/styles/spacers"
import { themeProvider } from "./pages/styles/themeprovider"

import { container } from "./pages/layouts/container"
/* Prepend import - DO NOT REMOVE */

export const allPages: Array<IPage<any>> = [
    /*====================== Styles ======================*/

    colors,
    overlays,
    text,
    shadows,
    radiuses,
    spacers,
    themeProvider,

    /*====================== Layouts ======================*/

    container,
    /* Prepend array - DO NOT REMOVE */

    /*====================== Components ======================*/

    /*====================== Helpers ======================*/
]

export const pages = allPages.map(p => ({ name: p.name, category: p.category }))
