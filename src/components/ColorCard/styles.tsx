import styled from "styled-components"
import { Mixins, RADIUSES, SPACERS } from "@julseb-lib/react"

export const StyledColorCard = styled.div`
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.M};
    overflow: hidden;
    ${Mixins.Flexbox({ $gap: "s", $alignItems: "center" })};

    &.Color:not(:last-child) {
        margin-bottom: ${SPACERS.L};
    }
`

export const Square = styled.div`
    width: 150px;
    aspect-ratio: 1;
`

export const Content = styled.div``
