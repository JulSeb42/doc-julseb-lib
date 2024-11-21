/*=============================================== NavFooter styles ===============================================*/

import styled from "styled-components"
import { Link } from "react-router-dom"
import { Mixins, LAYOUTS, MEDIA, TRANSITIONS } from "@julseb-lib/react"

export const StyledNavFooter = styled.nav`
    width: ${LAYOUTS.MAIN_LARGE};
    ${Mixins.Flexbox({
        $justifyContent: "space-between",
        $alignItems: "center",
    })}
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => Mixins.ColorsHoverDefault("primary", theme)};
    text-decoration: none;
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "center",
    })}

    @media ${MEDIA.HOVER} {
        &:hover {
            color: ${({ theme }) => Mixins.ColorsHoverHover("primary", theme)};
        }

        &:active {
            color: ${({ theme }) => Mixins.ColorsHoverActive("primary", theme)};
        }
    }
`
