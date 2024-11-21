/*=============================================== GettingStarted ===============================================*/

import { Text, Section, CodeContainer } from "@julseb-lib/react"
import { Page } from "../components"
import { SITE_DATA } from "../data"

export const GettingStarted = () => {
    return (
        <Page title="Getting Started">
            <Text tag="h1">Getting started</Text>

            <Section gap="s">
                <Text tag="h2">Install in your project</Text>
                <Text>Open your app in a terminal and run:</Text>
                <CodeContainer highlighterProps={{ language: "shell" }}>
                    {`$ npm i ${SITE_DATA.NPM_REACT}\nor\n$ yarn add ${SITE_DATA.NPM_REACT}`}
                </CodeContainer>
            </Section>

            <Section gap="s">
                <Text>
                    Then, open your <code>index.js</code> file and add this
                    line:
                </Text>
                <CodeContainer highlighterProps={{ language: "typescript" }}>
                    {SITE_DATA.CSS}
                </CodeContainer>
                <Text>
                    For every component we are using{" "}
                    <a
                        href="https://styled-components.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Styled Components
                    </a>
                    .
                </Text>
            </Section>

            <Section gap="s" id="overrides">
                <Text tag="h2">Overrides</Text>

                <Text>
                    To override all variables, create a <code>.css</code> file,
                    and import it in your <code>index.js</code> file after the
                    library CSS file:
                </Text>

                <CodeContainer highlighterProps={{ language: "typescript" }}>
                    {`${SITE_DATA.CSS}\nimport "./styles/name-of-file.css"`}
                </CodeContainer>

                <Text>
                    Then, in your new <code>css</code> file, create a{" "}
                    <code>:root</code> element and change the variables:
                </Text>

                <CodeContainer highlighterProps={{ language: "css" }}>
                    {`:root {\n\t--color-light-primary-500: #445BE4;\n}`}
                </CodeContainer>
            </Section>

            <Section gap="s">
                <Text tag="h2">Components development</Text>

                <Text>
                    Because of the way Styled Components is built, we need to
                    use for the development of components{" "}
                    <code>classNames</code> and <code>CSS variables</code>{" "}
                    instead of <code>props</code> when changing state. If we use
                    Styled Components <code>props</code>, it generates a new
                    class with the same code but the one changed by the prop.
                    For example:
                </Text>

                <CodeContainer highlighterProps={{ language: "typescript" }}>
                    {
                        'const Modal = styled.div<{ $isOpen: boolean }>`\n\topacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};\n\tvisibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};\n`\n\nconst [isOpen, setIsOpen] = useState(false)\n\nreturn (\n\t<>\n\t\t<Button onClick={() => setIsOpen(!isOpen)}>Open modal</Button>\n\t\t<Modal $isOpen={isOpen}>\n\t\t\t...\n\t\t</Modal>\n\t</>\n)'
                    }
                </CodeContainer>

                <Text>would generate:</Text>

                <CodeContainer highlighterProps={{ language: "scss" }}>
                    {`// Closed\n.fbIiVr {\n\topacity: 0;\n\tvisibility: hidden;\n}\n\n// Open\n.cSzGHK {\n\topacity: 1;\n\tvisibility: visible;\n}`}
                </CodeContainer>

                <Text>
                    To handle this issue, we need to build components like this:
                </Text>

                <CodeContainer highlighterProps={{ language: "typescript" }}>
                    {
                        "const Modal = styled.div`\n\topacity: 0;\n\tvisibility: hidden;\n\n\t&.Open {\n\t\topacity: 0;\n\t\tvisibility: visible;\n\t}\n`\n\nconst [isOpen, setIsOpen] = useState(false)\n\nreturn (\n\t<>\n\t\t<Button onClick={() => setIsOpen(!isOpen)}>Open modal</Button>\n\t\t<Modal className={classNames({ Open: isOpen })}>\n\t\t\t...\n\t\t</Modal>\n\t</>\n)"
                    }
                </CodeContainer>

                <Text>
                    Here, we are using{" "}
                    <a
                        href="https://www.npmjs.com/package/classnames"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        this package
                    </a>{" "}
                    to handle conditionnal classNames.
                </Text>
            </Section>

            <Section gap="s">
                <Text tag="h2">TypeScript</Text>
                <Text>
                    For TypeScript users, you can import types in needed
                    components like this:
                </Text>
                <CodeContainer highlighterProps={{ language: "typescript" }}>
                    {`import type { Type } from "${SITE_DATA.NPM_REACT_TYPES}"`}
                </CodeContainer>

                <Text>
                    Or, if you want to extend types from the library's
                    components, you can import types like this:
                </Text>

                <CodeContainer highlighterProps={{ language: "typescript" }}>
                    {`import type { ILibComponent } from "${SITE_DATA.NPM_REACT_COMPONENT}"`}
                </CodeContainer>
            </Section>
        </Page>
    )
}
