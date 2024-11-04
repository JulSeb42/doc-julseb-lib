/*=============================================== NavFooter component ===============================================*/

import { useLocation } from "react-router-dom"
import { allComponents } from "../../../data"
import { StyledNavFooter } from "./styles"

export const NavFooter = () => {
    // const { pathname } = useLocation()
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
