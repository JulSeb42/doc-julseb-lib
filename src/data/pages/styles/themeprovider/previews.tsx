import {
    Text,
    useLibTheme,
    CodeContainer,
    Button,
    Flexbox,
} from "@julseb-lib/react"
import { ComponentCard } from "components"
import { useLangContext } from "context"

export const Preview = () => {
    const { selectedLang } = useLangContext()
    const { toggleTheme, selectedTheme } = useLibTheme()

    return (
        <>
            <Text tag="h4">How to use</Text>
            <Text>
                First, open your <code>index.{selectedLang}</code> or{" "}
                <code>main.{selectedLang}</code> file, and add these lines:
            </Text>

            <CodeContainer highlighterProps={{ language: "typescript" }}>
                {`import { ThemeProviderWrapper } from "@julseb-lib/react"\n\nReactDOM.createRoot(document.getElementById("root")${
                    selectedLang === "ts" ? "!" : ""
                }).render(\n\t<ThemeProviderWrapper>\n\t\t<App />\n\t</ThemeProviderWrapper>\n)`}
            </CodeContainer>

            <Text>
                Then, open your <code>App.{selectedLang}</code> and add:
            </Text>

            <CodeContainer highlighterProps={{ language: "typescript" }}>
                {`import { ThemeProvider, useLibTheme } from "@julseb-lib/react"\n\nexport const App = () => {\n\tconst { theme, toggleTheme } = useLibTheme()\n\n\treturn (\n\t\t<ThemeProvider theme={theme}>\n\t\t\t<Button onClick={toggleTheme}>Toggle theme</Button>\n\t\t\t...your app\n\t\t</ThemeProvider>\n\t)\n}`}
            </CodeContainer>

            <ComponentCard
                title="Demo"
                displayName="Button"
                code={`<Button onClick={toggleTheme}>Toggle theme</Button>\n<Text>Selected theme: {selectedTheme}</Text>`}
            >
                <Flexbox
                    flexDirection="column"
                    gap="xs"
                    alignItems="flex-start"
                >
                    <Button onClick={toggleTheme}>Toggle theme</Button>
                    <Text tag="strong">Selected theme: {selectedTheme}</Text>
                </Flexbox>
            </ComponentCard>
        </>
    )
}
