/*=============================================== BoilerplatesAndCli ===============================================*/

import { Text, Section, CodeContainer } from "@julseb-lib/react"
import { Page } from "components"
import { SITE_DATA } from "data"

export const BoilerplatesAndCli = () => {
    return (
        <Page title="CLI & Boilerplates">
            <Text tag="h1">CLI & Boilerplates</Text>

            <Section gap="s">
                <Text tag="h2">Boilerplates</Text>
                <Text>
                    To generate website boilerplates including this library
                    automatically, you can use our CLI:
                </Text>

                <CodeContainer highlighterProps={{ language: "shell" }}>
                    {`$ npx ${SITE_DATA.NPM_CLI} <your-project-name>`}
                </CodeContainer>

                <Text>
                    Or, if you prefer to install it globally on your machine:
                </Text>

                <CodeContainer highlighterProps={{ language: "shell" }}>
                    {`$ npm i -g ${SITE_DATA.NPM_CLI}`}
                </CodeContainer>

                <Text>And use it like this:</Text>
                <CodeContainer highlighterProps={{ language: "shell" }}>
                    {`$ ${SITE_DATA.LOCAL_COMMAND} <your-project-name>`}
                </CodeContainer>

                <Text>
                    With those commands, you can either generate a{" "}
                    <a
                        href={SITE_DATA.GITHUB_FULL_STACK}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        MERN stack app
                    </a>{" "}
                    or a{" "}
                    <a
                        href={SITE_DATA.GITHUB_CLIENT}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        React client app
                    </a>
                    , both of them using TypeScript and with basic pages and
                    functions implemented.
                </Text>
            </Section>

            <Section gap="s">
                <Text tag="h2">Plop</Text>
                <Text>
                    Each boilerplate include{" "}
                    <a
                        href="https://plopjs.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Plop.js
                    </a>{" "}
                    files used to generate components, pages, routes, etc., to
                    keep consistency with the existing pages and others. You can
                    find the list of all functions and what they do in each
                    boilerplate's READMEs.
                </Text>

                <Text tag="h3">Edit Plop files</Text>

                <Text>
                    The reason why Plop files are included is to let developers
                    suit those files to their own needs. Thanks to{" "}
                    <a
                        href="https://github.com/privatenumber/tsx"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        tsx package
                    </a>{" "}
                    package no need to compile your Plop files to JavaScript.
                </Text>

                <Text tag="h3">Edit Plop templates</Text>

                <Text>
                    You can edit the templates located inside the{" "}
                    <code>plop</code> folder.
                </Text>

                <Text tag="h3">How to use Plop</Text>

                <Text>
                    For example, to create a new component, you can run:
                </Text>

                <CodeContainer highlighterProps={{ language: "shell" }}>
                    {`$ npm run plop:c <your-component-name>`}
                </CodeContainer>

                <Text>
                    Here the component's name is not required, as there will be
                    a prompt asking it. On each functions there are a few
                    prompts to answer to generate the best component / page /
                    other to suit your needs.
                </Text>

                <Text>
                    You can find all <code>plop</code> commands in the{" "}
                    <code>READMEs</code> of each repo.
                </Text>
            </Section>
        </Page>
    )
}
