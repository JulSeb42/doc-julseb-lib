/*=============================================== ComponentCard component ===============================================*/

import { useState } from "react"
import classNames from "classnames"
import reactElementToJSXString from "react-element-to-jsx-string"
import { Hr, CodeContainer as Code } from "@julseb-lib/react"
import {
    StyledComponentCard,
    CodeContainer,
    ShowButton,
    DemoContainer,
    Title,
} from "./styles"
import type { IComponentCard } from "./types"

/**
 * @prop displayName: string
 * @prop title?: string
 * @prop children?: Children
 * @prop code?: string
 */
export const ComponentCard: FC<IComponentCard> = ({
    children,
    title,
    displayName,
    code,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <StyledComponentCard>
            {title && (
                <>
                    <Title tag="h4">{title}</Title>
                    <Hr height={4} />
                </>
            )}

            <DemoContainer className="GridBackground">
                {children}

                <ShowButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Hide" : "Show"} code
                </ShowButton>
            </DemoContainer>

            <CodeContainer className={classNames({ Open: isOpen })}>
                <Code highlighterProps={{ language: "typescript" }}>
                    {code ??
                        reactElementToJSXString(children, {
                            displayName: () => displayName,
                            useFragmentShortSyntax: true,
                            showDefaultProps: true,
                            tabStop: 4,
                            maxInlineAttributesLineLength: 200,
                            sortProps: false,
                        })}
                </Code>
            </CodeContainer>
        </StyledComponentCard>
    )
}
