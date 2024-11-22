/*=============================================== PropCard component ===============================================*/

import { Fragment } from "react/jsx-runtime"
import { Text } from "@julseb-lib/react"
import { Title } from "./Title"
import { StyledPropCard } from "./styles"
import type { IPropCard } from "./types"

export const PropCard: FC<IPropCard> = ({ prop }) => {
    const { type, possibleValues, defaultValue, description } = prop

    return (
        <StyledPropCard>
            <Title prop={prop} />

            {description && <Text>{description}</Text>}

            <Text>
                <Text tag="strong">Type: </Text>
                {type as string}
            </Text>

            {possibleValues && (
                <Text>
                    <Text tag="strong">Possible values</Text>:{" "}
                    {typeof possibleValues === "string"
                        ? possibleValues
                        : Array.isArray(possibleValues) &&
                          possibleValues?.map((value, i) => {
                              const isLast = i === possibleValues.length - 1

                              return (
                                  <Fragment key={i}>
                                      <Text as="span">
                                          <code>{value}</code>
                                      </Text>

                                      {!isLast && " | "}
                                  </Fragment>
                              )
                          })}
                </Text>
            )}

            {defaultValue ? (
                <Text>
                    <Text as="strong">Default value: </Text>

                    <Text as="span">
                        <code>{defaultValue}</code>
                    </Text>
                </Text>
            ) : null}
        </StyledPropCard>
    )
}
