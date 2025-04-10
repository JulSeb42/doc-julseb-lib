import type { IPage } from "./Page.interface"

export type INavLink = {
    text: string
    to: string
    end?: boolean
}

export type IComponentLink = IPage & {
    to: string
}
