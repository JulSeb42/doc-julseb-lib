/*=============================================== Header styles ===============================================*/

import styled, { css } from "styled-components"
import {
    Mixins,
    SHADOWS,
    INPUT_HEIGHT,
    SPACERS,
    Burger,
    MEDIA,
    COLORS_LIGHT,
    COLORS_DARK,
    Dropdown,
    RADIUSES,
    TRANSITIONS,
} from "@julseb-lib/react"
import type { LibThemeNames } from "@julseb-lib/react/types"

const LinkColors = ({
    $selectedTheme,
    $notLink,
}: {
    $selectedTheme: LibThemeNames
    $notLink?: boolean
}) => css`
    transition: ${TRANSITIONS.SHORT};
    text-decoration: none;

    ${() => {
        switch ($selectedTheme) {
            case "light":
                return css`
                    color: ${COLORS_LIGHT.WHITE};

                    ${!$notLink &&
                    css`
                        @media ${MEDIA.HOVER} {
                            &:hover {
                                color: ${COLORS_LIGHT.GRAY_300};
                            }

                            &:active {
                                color: ${COLORS_LIGHT.GRAY_100};
                            }
                        }
                    `}
                `
            case "dark":
                return css`
                    color: ${COLORS_DARK.PRIMARY_500};

                    ${!$notLink &&
                    css`
                        @media ${MEDIA.HOVER} {
                            &:hover {
                                color: ${COLORS_DARK.PRIMARY_300};
                            }

                            &:active {
                                color: ${COLORS_DARK.PRIMARY_600};
                            }
                        }
                    `}
                `
            default:
                return null
        }
    }}
`

export const StyledHeader = styled.header<{
    $selectedTheme: LibThemeNames
}>`
    width: 100%;
    padding: ${SPACERS.S} 5vw;
    box-shadow: ${SHADOWS.M};
    position: fixed;
    z-index: 999;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
        $gap: "xs",
    })}

    ${({ $selectedTheme }) => {
        switch ($selectedTheme) {
            case "light":
                return css`
                    background-color: ${COLORS_LIGHT.PRIMARY_800};
                `
            case "dark":
                return css`
                    background-color: ${COLORS_DARK.PRIMARY_100};
                `
            default:
                return null
        }
    }}

    .Logo, .SwitchButton, .SelectLangButton {
        ${({ $selectedTheme }) => LinkColors({ $selectedTheme })}
    }

    .LibVersion {
        ${({ $selectedTheme }) =>
            LinkColors({ $selectedTheme, $notLink: true })}
    }
`

export const StyledBurger = styled(Burger)`
    display: none;
`

export const InputContainer = styled.button`
    width: 250px;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.GRAY_100};
    border-radius: ${RADIUSES.S};
    padding: ${SPACERS.XXS};
    height: ${INPUT_HEIGHT}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })}

    & > p {
        flex-grow: 1;
    }

    &.Dark {
        background-color: ${COLORS_DARK.BACKGROUND};
    }
`

export const StyledDropdown = styled(Dropdown)`
    width: 48px;
    min-width: unset;
`

export const ModalContainer = styled.form`
    background-color: ${({ theme }) => Mixins.AllColors("background", theme)};
    padding: ${SPACERS.L};
    border-radius: ${RADIUSES.M};
    min-width: 400px;
    box-shadow: ${SHADOWS.M};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $gap: "xs",
    })}
`
