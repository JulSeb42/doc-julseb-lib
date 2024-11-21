/*=============================================== Category ===============================================*/

import { useParams, useLocation, Navigate } from "react-router-dom"
import { slugify } from "@julseb-lib/react"
import { allPages } from "data"
import { NotFoundContent, Page } from "components"
import { categories } from "types"
import { NotFound } from "./NotFound"

export const Category = () => {
    const { pathname } = useLocation()
    const { category } = useParams<{ category: string }>()

    if (
        !Object.keys(categories).find(
            cat =>
                slugify(cat.replaceAll("/", "")) ===
                slugify(category?.replaceAll("/", "") ?? "")
        )
    )
        return <NotFound />

    const firstPage = allPages.filter(page => page.category! === category)[0]

    if (pathname === `/${category}`) {
        return <Navigate to={`/${category}/${slugify(firstPage.name)}`} />
    }

    return (
        <Page title="404">
            <NotFoundContent />
        </Page>
    )
}
