/*=============================================== Homepage ===============================================*/

import { Text, CodeContainer, Section } from "@julseb-lib/react"
import { Page } from "components"
import { SITE_DATA } from "data"

export const Homepage = () => {
    return (
        <Page title="Homepage">
            <Text tag="h1">{SITE_DATA.NAME}</Text>

            <Section gap="s">
                <Text tag="h2">Install</Text>
                <CodeContainer highlighterProps={{ language: "shell" }}>
                    {`$ npm i ${SITE_DATA.NPM_REACT}`}
                </CodeContainer>
            </Section>

            <Section gap="s">
                <Text tag="h2">Import CSS file</Text>
                <Text>
                    Open your <code>index.js</code> file, and import this file
                    on top of the page:
                </Text>

                <CodeContainer highlighterProps={{ language: "typescript" }}>
                    {SITE_DATA.CSS}
                </CodeContainer>
            </Section>
        </Page>
    )
}
