/*=============================================== ColorCard types ===============================================*/

import type { Color, Variable } from "types"

// eslint-disable-next-line
interface IVariableBase {}

interface VariableColors extends IVariableBase {
    color: Color
    overlay?: never
}

interface Variables extends IVariableBase {
    color?: never
    overlay: Variable
}

export type IVariable = VariableColors | Variables
