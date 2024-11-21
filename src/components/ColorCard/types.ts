/*=============================================== ColorCard types ===============================================*/

import type { Color, Variable } from "../../types"

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
