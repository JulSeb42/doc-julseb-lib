/*=============================================== Component page ===============================================*/

import { BASE_PATH } from "../utils/index.js"
import type { NodePlopAPI } from "plop"
import { categoriesArr } from "../utils/constants.js"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("component-page", {
        description: "Demo component pages",
        prompts: [
            { type: "input", message: "Enter component's name", name: "name" },
            {
                type: "list",
                message: "Which category?",
                name: "category",
                choices: categoriesArr,
                default: categoriesArr[1],
            },
        ],
        actions: [
            {
                type: "addMany",
                destination: `${BASE_PATH}/data/pages/{{ category }}/{{ camelCase name }}`,
                templateFiles: "./templates/component-page/*.hbs",
                base: "./templates/component-page",
                verbose: false,
            },
            {
                type: "modify",
                path: `${BASE_PATH}/data/all-pages.ts`,
                template: `import { {{ camelCase name }} } from "./pages/{{ category }}/{{ camelCase name }}"\n$1`,
                pattern: /(\/\* Prepend import - DO NOT REMOVE \*\/)/g,
            },
            {
                type: "modify",
                path: "../src/data/all-pages.ts",
                template: `{{ camelCase name }},\n \t$1`,
                pattern: /(\/\* Prepend array - DO NOT REMOVE \*\/)/g,
            },
        ],
    })
}
