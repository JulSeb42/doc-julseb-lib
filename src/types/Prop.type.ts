/*=============================================== Props ===============================================*/

export type Prop = Array<{
    name: string
    type: string
    possibleValues: string | Array<string>
    default: string
    isRequired?: boolean
    comment?: string
}> | null
