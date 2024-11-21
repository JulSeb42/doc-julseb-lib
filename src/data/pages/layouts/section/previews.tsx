/*=============================================== Colors previews ===============================================*/

import { Section, Text } from "@julseb-lib/react"
import { ComponentCard } from "components"

export const Preview = () => {
    return (
        <ComponentCard displayName="Section">
            <Section gap="l">
                <Text tag="h4">Section title</Text>
                <Text>Section body</Text>
            </Section>
        </ComponentCard>
    )
}
