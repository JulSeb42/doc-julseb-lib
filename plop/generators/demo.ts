/*=============================================== Demo ===============================================*/

import type { NodePlopAPI } from "plop"
import { slugify } from "@julseb-lib/react"
import { BASE_PATH } from "../utils"
import { allPages } from "../../src/data"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("demo", {
        description: "Generates a demo page",
        prompts: [
            { type: "input", name: "name", message: "Enter demo's name" },
            {
                type: "input",
                name: "demo-name",
                message: "Enter demo's path",
                default: "demo",
            },
        ],
        actions: data => {
            const page = allPages.find(
                page => slugify(page.name) === slugify(data?.name)
            )

            const demoUrl = `/${page?.category}/${slugify(
                page?.name ?? ""
            )}/{{ kebabCase demo-name }}`

            const actions = [
                {
                    type: "add",
                    path: `${BASE_PATH}/pages/demos/{{>pascalName}}.tsx`,
                    templateFile: "./templates/demo.hbs",
                },
                {
                    type: "modify",
                    path: `${BASE_PATH}/routes/paths.ts`,
                    template: `{{ constantCase name }}: "${demoUrl}",`,
                    pattern:
                        /(\/\* prepend demos import - do not remove \*\/)/g,
                },

                /*====================== Routes ======================*/
                {
                    type: "modify",
                    path: `${BASE_PATH}/routes/routes.tsx`,
                    template: `import { {{>pascalName}} } from "${demoUrl}"`,
                    pattern:
                        /(\/\* prepend demos import - do not remove \*\/)/g,
                },
                {
                    type: "modify",
                    path: `${BASE_PATH}/routes/routes.tsx`,
                    template: `{ path: {{ constantCase name }}, element: <{{>pascalName}} /> },`,
                    pattern: /(\/\* prepend route - do not remove \*\/)/g,
                },
            ]

            return actions
        },
    })
}
