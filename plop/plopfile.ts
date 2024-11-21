/*=============================================== Generate component ===============================================*/

import chalk from "chalk"
import figlet from "figlet"
import { runCommand } from "./actions"
import {
    generateComponent,
    generatePage,
    generateSingleComponent,
    generateType,
    generateComponentPage,
    generateGenerator,
    /* Prepend import generator - DO NOT REMOVE */
} from "./generators"
import { addClosingBrackets, addOpenBrackets, surroundBrackets } from "./utils"
import { pascalName, kebabName } from "./partials"
import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    console.log(
        chalk.blueBright(
            figlet.textSync("JulSeb CLI", { horizontalLayout: "full" })
        )
    )

    /*====================== Actions ======================*/
    runCommand(plop)

    /*====================== Utils ======================*/
    addOpenBrackets(plop)
    addClosingBrackets(plop)
    surroundBrackets(plop)

    /*====================== Partials ======================*/

    pascalName(plop)
    kebabName(plop)

    /*====================== Generators ======================*/
    generateComponent(plop)
    generatePage(plop)
    generateSingleComponent(plop)
    generateType(plop)

    generateComponentPage(plop) // TODO: finish => page to render components

    generateGenerator(plop)

    /* Prepend plop functions - DO NOT REMOVE */
}
