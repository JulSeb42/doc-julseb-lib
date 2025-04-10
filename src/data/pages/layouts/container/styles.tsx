import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { Mixins, Wrapper, Main, Aside, SPACERS } from "@julseb-lib/react"

export const StyledLink = styled(Link)`
    ${Mixins.Flexbox({ $alignItems: "center", $gap: "xxs" })}
`

const paddingTop = css`
    padding-top: calc(${SPACERS.XXL} + 56px);
`

export const StyledWrapper = styled(Wrapper)`
    background-color: ${({ theme }) => theme.PRIMARY_100};
`

export const StyledMain = styled(Main)`
    background-color: ${({ theme }) => theme.DANGER_100};
    max-width: var(--main-max);
    ${paddingTop}
`

export const StyledAside = styled(Aside)`
    background-color: ${({ theme }) => theme.DANGER_100};
    ${paddingTop}
`
