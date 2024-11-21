/*=============================================== ThemeProvider ===============================================*/

import { ThemeProvider } from "@julseb-lib/react"
import { Preview } from "./previews"
import type { IPage } from "types"

export const themeProvider: IPage<null> = {
    name: "ThemeProvider",
    component: ThemeProvider as any,
    category: "styles",
    description: (
        <>
            Here, Styled Components{" "}
            <a
                href="https://styled-components.com/docs/api#themeprovider"
                target="_blank"
                rel="noreferrer noopener"
            >
                ThemeProvider
            </a>{" "}
            and React <code>useLibTheme</code> hook, to switch between light and
            dark mode. If you do not want to use it, all the default colors will
            be the light ones.
        </>
    ),
    imports: ["ThemeProviderWrapper", "ThemeProvider", "useLibTheme"],
    importTypes: null,
    extends: [],
    props: [],
    previews: [<Preview key={0} />],
}
