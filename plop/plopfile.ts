/*=============================================== Plopfile ===============================================*/

import type { NodePlopAPI } from "plop"
import { runCommand } from "./actions/index.js"
import {
    generateComponent,
    generatePage,
    generateSingleComponent,
    generateType,
    generateComponentPage,
    generateGenerator,
    generateDemo,
    generatePreviewPage,
    /* Prepend import - do not remove */
} from "./generators/index.js"
import {
    surroundBrackets,
    addOpenBrackets,
    addClosingBrackets,
} from "./utils/index.js"
import { pascalName, kebabName } from "./partials/index.js"

export default (plop: NodePlopAPI) => {
    /*====================== Actions ======================*/

    runCommand(plop) // With this helper you can run commands in a terminal => { type: "runCommand", command: "console.log("hello world")" }

    /*====================== Partials ======================*/

    pascalName(plop) // Shortcut for {{ pascalCase name }}, use: {{>pascalName }}
    kebabName(plop) // Shortcut for {{ kebabCase name }}, use: {{>kebabName }}

    /*====================== Documentation ======================*/

    generateComponentPage(plop) // yarn plop:cp
    generatePreviewPage(plop) // yarn plop:pr

    /*====================== Generators ======================*/

    generateComponent(plop) // yarn plop:c
    generateSingleComponent(plop) // yarn plop:sc
    generatePage(plop) // yarn plop:p
    generateType(plop) // yarn plop:ty
    generateGenerator(plop) // yarn plop:g
    generateDemo(plop) // yarn plop:d
    /* Prepend plop - do not remove */

    /*====================== Helpers ======================*/

    addOpenBrackets(plop) // Use in template files => title={{addOpenBracket}}
    addClosingBrackets(plop) // Use in template files => "hello" {{addClosingBrackets}}
    surroundBrackets(plop) // Use in template files => size={{surroundBrackets 'size: "l"' }}
}
