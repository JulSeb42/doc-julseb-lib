/*=============================================== Page type ===============================================*/

import type { ForwardRefExoticComponent, RefAttributes } from "react"
import type { Category } from "./Category.type"

export interface Preview {
    title: string
    name: string
    code: string
    demo: JSX.Element
}

export interface IPage<T> {
    name: string
    component: FC | ForwardRefExoticComponent<T & RefAttributes<any>> | null
    category: Category | null
    description?: Children
    imports: Array<string> | null
    importTypes: Array<string> | null
    extends: Array<string> | Array<{ name: string; from: string }> | null // interface extends HTMLDivElement
    previews: Array<JSX.Element | Preview | string> | null
    props: Array<{
        name: string
        desc: string
        possibleValues: string | Array<string>
        default: string
    }> | null
    noAs?: boolean
    noRef?: boolean
}
