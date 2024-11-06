/*=============================================== Category ===============================================*/

import { useParams, useNavigate, useLocation } from "react-router-dom"
import { slugify } from "@julseb-lib/react"
import { allPages } from "../data"
import { NotFound } from "./NotFound"

export const Category = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { category } = useParams<{ category: string }>()

    const firstPage = allPages.filter(
        page => slugify(page.category!) === slugify(category!)
    )[0]

    if (pathname === `/${category}`) {
        return navigate(`/${category}/${slugify(firstPage.name)}`)
    }

    return <NotFound />
}
