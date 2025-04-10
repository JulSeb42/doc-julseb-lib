import { Fragment, useState, useEffect } from "react"
import classNames from "classnames"
import { Text } from "@julseb-lib/react"
import { StyledColorCard, Square, Content } from "./styles"
import type { IVariable } from "./types"

export interface Values {
    title: string
    content: string
}

export const ColorCard: FC<IVariable> = ({ color, overlay }) => {
    const [values, setValues] = useState<undefined | Array<Values>>(undefined)

    useEffect(() => {
        if (color) {
            setValues([
                { title: "Variable", content: color.variable },
                { title: "CSS", content: color.css },
                { title: "Hex", content: color.hex },
                { title: "RGB", content: color.rgb },
            ])
        }
        if (overlay) {
            setValues([
                { title: "Variable", content: overlay.variable },
                { title: "CSS", content: overlay.css },
                { title: "Value", content: overlay.value as any },
            ])
        }
    }, [color, overlay])

    return (
        <StyledColorCard className={classNames({ Color: !!color })}>
            <Square style={{ background: color?.hex || overlay?.css }} />

            <Content>
                <Text tag="h5">{(color || overlay)?.name}</Text>

                {values?.map(value => (
                    <Fragment key={value.title}>
                        <Text>
                            <Text tag="strong">{value.title}:</Text>{" "}
                            {value.content}
                        </Text>
                    </Fragment>
                ))}
            </Content>
        </StyledColorCard>
    )
}
