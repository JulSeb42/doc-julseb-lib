import type { Variable } from "types"

interface StyleWithShadows {
    shadow: Variable
    radius?: never
    spacer?: never
}

interface StyleWithRadius {
    shadow?: never
    radius: Variable
    spacer?: never
}

interface StyleWithSpacers {
    shadow?: never
    radius?: never
    spacer: Variable
}

export type IStyleCard = StyleWithShadows | StyleWithRadius | StyleWithSpacers
