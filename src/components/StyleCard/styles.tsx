/*=============================================== StyleCard styles ===============================================*/

import styled from "styled-components"
import { Mixins, RADIUSES, SPACERS } from "@julseb-lib/react"

export const StyledStyleCard = styled.div`
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.M};
    padding: ${SPACERS.M};
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $gap: "m",
        $justifyContent: "flex-end"
    })}
`

export const Square = styled.span`
    width: var(--card-size, 120px);
    height: var(--card-size, 120px);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background-color: ${({ theme }) => theme.BACKGROUND};
    margin: 0 auto;

    &.Red {
        background-color: ${({ theme }) => theme.DANGER_100};
    }

    &.Round {
        width: 100%;
    }
`
