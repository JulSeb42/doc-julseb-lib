/*=============================================== Colors ===============================================*/

import type { IPage } from "../../../../types"
import { Preview } from "./previews"

export const colors: IPage<null> = {
    name: "Colors",
    component: null,
    category: "styles",
    description: (
        <>
            Here, we are using Styled Components{" "}
            <a
                href="https://styled-components.com/docs/advanced"
                target="_blank"
                rel="noreferrer noopener"
            >
                ThemeProvider
            </a>
            . All colors have been set in the <code>:root</code> selector of{" "}
            <code>index.css</code>. If you want to edit them, see the section
            <code>Overrides</code>{" "}
            <a href="https://documentation-components-react.vercel.app/getting-started#overrides">
                here
            </a>
            . If you do not want to use ThemeProvider (for example if you don't
            want a switch in your project), the default colors are the light
            colors. For each color name, you can write a shorthand version,
            which will return the color with the <code>500</code> value. For
            example, typing
            <code>color="primary"</code> will return <code>Primary500</code>.
        </>
    ),
    imports: ["COLORS_LIGHT", "COLORS_DARK"],
    importTypes: null,
    extends: null,
    props: null,
    previews: [<Preview key={0} />],
}
