/*=============================================== NavFooter component ===============================================*/

import { useLocation, useNavigate } from "react-router-dom"
import { slugify } from "@julseb-lib/react"
import { allPages } from "../../../data"
import { PATHS } from "../../../routes"
import { StyledNavFooter } from "./styles"

export const NavFooter = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const currentPage = allPages.filter(page => {
        return pathname === "/"
            ? page.name === "Homepage"
            : slugify(pathname.replace("/", "")) ===
                  slugify(page.name.toLowerCase())
    })

    console.log({ pathname, currentPage })

    // const pageIndex = currentPage ? allPages.indexOf(currentPage) : 0

    // const componentName = pathname.split("/")[2]

    // const pageComponent =
    //     pathname.split("/").length === 3
    //         ? allPages.find(
    //               component =>
    //                   slugify(component.title) === slugify(componentName)
    //           )
    //         : undefined
    // const pageIndex = pageComponent ? allPages.indexOf(pageComponent) : 0

    // const prevPage = allPages[pageIndex - 1]
    // const nextPage =
    //     pathname !== "/helpers/hooks" ? allPages[pageIndex + 1] : allPages[0]

    return <StyledNavFooter></StyledNavFooter>
}
