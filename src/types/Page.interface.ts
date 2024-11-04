/*=============================================== Page type ===============================================*/

export const allCategories = {
    styles: "styles",
    layouts: "layouts",
    comoponents: "comoponents",
    helpers: "helpers",
} as const

export type PageCategory = keyof typeof allCategories

interface PreviewDemo {
    demo: FC | JSX.Element
}

export interface IPage {
    name: string
    category: PageCategory | null
    import: string | null // import Component (ex: Card)
    additionalImports: Array<string> | null // import OtherComponent (ex: SkeletonCard)
    optionalImports: Array<string> | null // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    extends: Array<string> | Array<{ name: string; from: string }> | null // interface extends HTMLDivElement
    previews: Array<{ previewTitle: string; demo: PreviewDemo }>
    noAs?: boolean
}
