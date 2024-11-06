/*=============================================== Types ===============================================*/

export type Variable = {
    name: string
    variable: string
    css: string
    value: string | number
}

export type Color = Omit<Variable, "value"> & {
    css: string
    hex: string
    rgb: string
}
