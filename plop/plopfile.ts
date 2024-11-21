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
    generatePreviewPage,
} from "./generators"
import { addClosingBrackets, addOpenBrackets, surroundBrackets } from "./utils"
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

    /*====================== Generators ======================*/
    generateComponent(plop)
    generatePage(plop)
    generateSingleComponent(plop)
    generateType(plop)
    generateComponentPage(plop)
    generateGenerator(plop)
    generatePreviewPage(plop)
}
