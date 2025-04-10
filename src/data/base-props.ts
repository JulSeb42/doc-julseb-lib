import type { IProp } from "types"

export const dataTestProp: IProp = {
    name: "data-testid",
    type: "string",
    possibleValues: "",
    description: "Selector for Cypress tests",
    isRequired: false,
}

export const asProp: IProp = {
    name: "as",
    type: "string",
    possibleValues: "Any HTML tag",
    defaultValue: "",
    description: "Changes the HTML tag",
    isRequired: false,
}
