/*=============================================== Title ===============================================*/

import { Text } from "@julseb-lib/react"
import type { IPropCard } from "./types"

type PropType = Pick<IPropCard, "prop">

export const Title = ({ prop }: PropType) => {
    const { isRequired, name } = prop

    if (isRequired)
        return (
            <Text tag="h4">
                {name}{" "}
                {isRequired && (
                    <Text tag="p" as="span" color="gray">
                        - required*
                    </Text>
                )}
            </Text>
        )

    return <Text tag="h4">{name}</Text>
}
