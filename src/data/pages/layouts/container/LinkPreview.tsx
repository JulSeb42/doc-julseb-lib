/*=============================================== Container previews ===============================================*/

import { Link, useLocation } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { ComponentCard } from "../../../../components"
import { COMMON_TEXTS } from "../../../../data"
import type { Preview } from "./previews"

export const PreviewLink = ({ name, code, title }: Preview) => {
    const { pathname } = useLocation()

    return (
        <ComponentCard title={title} displayName="Wrapper" code={code}>
            <Text>
                <Link
                    to={`${pathname}/demo/${name}`}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    {COMMON_TEXTS.DEMO_TEXT}
                </Link>
            </Text>
        </ComponentCard>
    )
}
