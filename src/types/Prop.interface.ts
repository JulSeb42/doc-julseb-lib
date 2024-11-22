/*=============================================== Prop interface ===============================================*/

interface IPropBase {
    name: string
    description?: Children
    isRequired?: boolean
}

interface PropWithBoolean extends IPropBase {
    type: "boolean"
    possibleValues?: never
    defaultValue?: never
}

interface PropWithOther extends IPropBase {
    type: "string" | "Array<string>" | "LibAllColors" | "number"
    possibleValues: Array<string> | Children
    defaultValue: string
}

export type IProp = PropWithBoolean | PropWithOther
