/*=============================================== Category interface ===============================================*/

export const categories = {
    styles: "styles",
    layout: "layout",
    components: "components",
    helpers: "helpers",
} as const

export const categoriesArr = Object.keys(categories)

export type Category = keyof typeof categories
