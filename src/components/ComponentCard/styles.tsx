/*=============================================== ComponentCard styles ===============================================*/

import styled from "styled-components"
import { OVERLAYS, RADIUSES, SPACERS, Text } from "@julseb-lib/react"

export const StyledComponentCard = styled.div`
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.M};
    overflow: hidden;
`

export const Title = styled(Text)`
    padding: ${SPACERS.S};
`

export const DemoContainer = styled.div`
    padding: ${SPACERS.S};
    position: relative;
    height: fit-content;
    min-height: 100px;

    background-image: var(--polka-bg-image);
    background-position: var(--polka-bg-position);
    background-size: var(--polka-bg-size);
    background-color: var(--polka-bg-color);
`

export const CodeContainer = styled.div`
    display: none;

    &.Open {
        display: block;
    }
`

export const ShowButton = styled.button`
    background: ${OVERLAYS.BLACK_50};
    color: ${({ theme }) => theme.WHITE};
    border: none;
    border-radius: ${RADIUSES.S} 0 0 0;
    position: absolute;
    bottom: 0;
    right: 0;
`
