/*=============================================== GridItem styles ===============================================*/

import styled from "styled-components"
import { RADIUSES, SPACERS } from "@julseb-lib/react"

export const StyledGridItem = styled.div`
    background-color: ${({ theme }) => theme.PRIMARY_500};
    border-radius: ${RADIUSES.M};
    color: ${({ theme }) => theme.BACKGROUND};
    padding: ${SPACERS.S};
`
