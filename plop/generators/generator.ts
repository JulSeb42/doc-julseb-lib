/*=============================================== Generate generator ===============================================*/

import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("generator", {
        description: "Generate plop generators",
        prompts: [
            {
                type: "input",
                message: "Enter the name of your new generator",
                name: "name",
            },
        ],
        actions: [
            {
                type: "add",
                path: "./generators/{{>kebabName}}.ts",
                templateFile: "./templates/generator.hbs",
            },
            {
                type: "modify",
                path: "./generators/index.ts",
                template: `export { default as generate{{>pascalName}} } from "./{{ lowerCase name }}.js"`,
                pattern: /(\/\* Prepend import - do not remove \*\/)/g,
            },
            {
                type: "modify",
                path: "./plopfile.ts",
                template: `generate{{>pascalName}},\n\t$1`,
                pattern: /(\/\* Prepend import - do not remove \*\/)/g,
            },
            {
                type: "modify",
                path: "./plopfile.ts",
                template: `generate{{>pascalName}}(plop)\n\t$1`,
                pattern: /(\/\* Prepend plop - do not remove \*\/)/g,
            },
            "Don't forget to add the scripts in package.json :)",
        ],
    })
}
