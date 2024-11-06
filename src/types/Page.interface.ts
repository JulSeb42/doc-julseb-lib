/*=============================================== Page type ===============================================*/

import type { Category } from "./Category.type"

interface PreviewDemo {
    demo: FC | JSX.Element
}

export interface IPage {
    name: string
    category: Category | null
    description?: Children
    import: string | null // import Component (ex: Card)
    additionalImports: Array<string> | null // import OtherComponent (ex: SkeletonCard)
    optionalImports: Array<string> | null // import ComponentItem (ex: AccordionItem) => to build with children instead of prop on component
    extends: Array<string> | Array<{ name: string; from: string }> | null // interface extends HTMLDivElement
    previews: Array<{ previewTitle: string; demo: PreviewDemo }> | null
    noAs?: boolean
}
