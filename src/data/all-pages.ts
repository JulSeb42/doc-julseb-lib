/*=============================================== All pages ===============================================*/

import type { IPage } from "../types"

import { homepage } from "./pages/homepage"
import { gettingStarted } from "./pages/getting-started"
import { boilerplateAndCli } from "./pages/boilerplate-and-cli"
/* Prepend import - DO NOT REMOVE */

export const allPages: Array<IPage> = [
    homepage,
    gettingStarted,
    boilerplateAndCli,

    /*====================== Tokens ======================*/

    /* prepend array - DO NOT REMOVE */

    /*====================== Layouts ======================*/

    /*====================== Components ======================*/

    /*====================== Helpers ======================*/
]
