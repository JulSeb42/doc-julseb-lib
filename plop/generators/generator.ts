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
                template: `export { default as generate{{>pascalName}} } from "./{{>kebabName}}.js"`,
                pattern: /(\/\* Prepend export - DO NOT REMOVE \*\/)/g,
            },
            {
                type: "modify",
                path: "./plopfile.ts",
                template: `generate{{>pascalName}},\n\t$1`,
                pattern: /(\/\* Prepend import generator - DO NOT REMOVE \*\/)/g,
            },
            {
                type: "modify",
                path: "./plopfile.ts",
                template: `generate{{>pascalName}}(plop)\n\t$1`,
                pattern: /(\/\* Prepend plop functions - DO NOT REMOVE \*\/)/g,
            },
            "Don't forget to add the scripts in package.json :)",
        ],
    })
}
