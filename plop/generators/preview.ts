/*=============================================== Preview pages ===============================================*/

import type { NodePlopAPI } from "plop"

export default (plop: NodePlopAPI) => {
    const { setGenerator } = plop

    setGenerator("preview", {
        description: "Generate a preview",
        prompts: [],
        actions: [],
    })
}
