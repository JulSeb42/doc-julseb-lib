/*=============================================== StyleCard component ===============================================*/

import classNames from "classnames"
import { Flexbox, Text } from "@julseb-lib/react"
import { StyledStyleCard, Square } from "./styles"
import type { IStyleCard } from "./types"

export const StyleCard: FC<IStyleCard> = ({ shadow, radius, spacer }) => {
    const { name, variable, css, value } = shadow || radius || spacer

    const values: Array<{ name: string; value: string }> = [
        { name: "Variable", value: variable },
        { name: "CSS", value: css },
        { name: "Value", value: value as string },
    ]

    return (
        <StyledStyleCard>
            <Square
                style={{
                    ["--box-shadow" as any]: shadow ? value : null,
                    ["--card-size" as any]: spacer ? value : null,
                    ["--border-radius" as any]: radius ? value : null,
                }}
                className={classNames(
                    { Red: radius || spacer },
                    { Round: radius?.name === "Radius Round" }
                )}
            />

            <Flexbox gap="xxs" flexDirection="column" alignItems="stretch">
                <Text tag="h5">{name}</Text>

                {values.map((value, i) => (
                    <Text key={i}>
                        <Text tag="strong">{value.name}: </Text>
                        {value.value}
                    </Text>
                ))}
            </Flexbox>
        </StyledStyleCard>
    )
}
