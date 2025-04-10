import { Section, Text } from "@julseb-lib/react"
import { ComponentCard } from "components"

export const Preview = () => {
    return (
        <ComponentCard
            displayName="Section"
            code={`<Section gap="l">\n\t<Text tag="h4">Section title</Text>\n\t<Text>Section body</Text>\n</Section>`}
        >
            <Section gap="l">
                <Text tag="h4">Section title</Text>
                <Text>Section body</Text>
            </Section>
        </ComponentCard>
    )
}
