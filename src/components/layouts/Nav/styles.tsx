import styled from "styled-components"
import { MEDIA, Mixins, SPACERS } from "@julseb-lib/react"

export const NAV_WIDTH = 200

export const StyledNav = styled.nav`
    width: ${NAV_WIDTH}px;
    ${Mixins.Flexbox({ $flexDirection: "column" })};
    padding: ${SPACERS.S} 0;
    padding-top: calc(56px + ${SPACERS.L});
    position: fixed;
    z-index: 998;
    background-color: ${({ theme }) => theme.PRIMARY_50};
    height: 100vh;
    overflow-y: scroll;

    & > a,
    & > button {
        color: ${({ theme }) => Mixins.ColorsHoverDefault("primary", theme)};
        text-decoration: none;
        padding: ${SPACERS.XXS} ${SPACERS.S};
        border: unset;
        background-color: transparent;

        &.active {
            background-color: ${({ theme }) => theme.PRIMARY_100};
        }

        @media ${MEDIA.HOVER} {
            &:hover {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverHover("primary", theme)};
            }

            &:active {
                color: ${({ theme }) =>
                    Mixins.ColorsHoverActive("primary", theme)};
            }
        }
    }

    .ComponentPage {
        padding-left: ${SPACERS.XL};
    }
`
