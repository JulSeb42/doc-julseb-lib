/*=============================================== Page ===============================================*/

import { ResetScroll, Helmet } from "@julseb-lib/react"
import type { LibMainSize } from "@julseb-lib/react/types"
import type { ILibPageLayout } from "@julseb-lib/react/component-props"
import { SITE_DATA } from "data"

export const BaseLayout: FC<IBaseLayout> = ({
    children,
    title,
    description,
}) => {
    return (
        <>
            <Helmet
                title={`${title} | ${SITE_DATA.NAME}`}
                description={description ?? SITE_DATA.DESCRIPTION}
                keywords={[...SITE_DATA.KEYWORDS, title]}
                favicon={SITE_DATA.FAVICON}
                author={SITE_DATA.AUTHOR}
                type={SITE_DATA.TYPE}
                cover={SITE_DATA.COVER} // TODO
                siteName={SITE_DATA.NAME}
                language={SITE_DATA.LANGUAGE}
            />

            {children}

            <ResetScroll />
        </>
    )
}

export type IBaseLayout = ILibPageLayout & {
    title: string
    description?: string
    keywords?: string | Array<string>
    cover?: string
    mainWidth?: LibMainSize
}
