import { Wrapper, Main, Aside } from "@julseb-lib/react"
import type {
    ILibWrapper,
    ILibMain,
    ILibAside,
} from "@julseb-lib/react/component-props"
import { containerPreviews } from "./previews"
import { PreviewLink } from "./LinkPreview"
import type { IPage } from "types"

export const container: IPage<ILibWrapper & ILibMain & ILibAside> = {
    name: "Container",
    component: Wrapper || Main || Aside,
    category: "layouts",
    description: "",
    imports: ["Wrapper", "Main", "Aside"],
    importTypes: ["ILibWrapper", "ILibMain", "ILibAside"],
    extends: [],
    props: [],
    previews: [
        ...containerPreviews.map((p, i) => <PreviewLink key={i} {...p} />),
    ],
}
