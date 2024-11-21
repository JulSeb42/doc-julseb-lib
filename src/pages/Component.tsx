/*=============================================== Component ===============================================*/

import { useParams } from "react-router-dom"
import {
    slugify,
    Text,
    toTitleCase,
    Section,
    CodeContainer,
} from "@julseb-lib/react"
import { SITE_DATA, allPages } from "../data"
import { Page, ComponentCard } from "../components"
import { useLangContext } from "../context"
import type { IPage } from "../types"

export const Component = () => {
    const { component: comp } = useParams<{
        category: string
        component: string
    }>()
    const component: IPage<any> | any = allPages.find(
        p => slugify(p.name) === slugify(comp!)
    )
    const { selectedLang } = useLangContext()

    return (
        <Page title={component?.name ?? "Component"}>
            <Text tag="h1">{toTitleCase(component?.name ?? "")}</Text>

            {component?.description && <Text>{component?.description}</Text>}

            {component?.imports && (
                <Section gap="s">
                    <Text tag="h4">
                        File
                        {component.imports.length > 1 ? "s" : ""} to import
                    </Text>
                    <CodeContainer
                        highlighterProps={{ language: "typescript" }}
                    >
                        {`import { ${component?.imports.join(", ")} } from "${
                            SITE_DATA.NPM_REACT
                        }"`}
                    </CodeContainer>
                </Section>
            )}

            {selectedLang === "ts" && component.importTypes?.length ? (
                <Section gap="s">
                    <Text tag="h4">
                        Component type
                        {component.importTypes.length > 1 ? "s" : ""}
                    </Text>

                    <CodeContainer
                        highlighterProps={{ language: "typescript" }}
                    >
                        {`import { ${component.importTypes.join(
                            ", "
                        )} } from "${SITE_DATA.NPM_REACT_COMPONENT}"`}
                    </CodeContainer>
                </Section>
            ) : null}

            {component?.previews?.map((preview: object | string) => preview)}
        </Page>
    )
}
