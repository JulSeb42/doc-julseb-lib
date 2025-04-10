import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Wrapper, Main, Aside, toTitleCase, SPACERS } from "@julseb-lib/react"
import { BaseLayout, Header } from "components"
import { containerPreviews } from "../../data/pages/layouts/container/previews"

export const DemoMain = () => {
    const { category, component, demo } = useParams<{
        category: string
        component: string
        demo: string
    }>()

    const element = containerPreviews.find(c => c.name === demo)?.demo

    return (
        <BaseLayout
            title={toTitleCase(`${component} ${category} ${demo}`) ?? ""}
        >
            <Header />

            <StyledWrapper>{element}</StyledWrapper>
        </BaseLayout>
    )
}

export const StyledWrapper = styled(Wrapper)`
    background-color: ${({ theme }) => theme.PRIMARY_100};
`

export const StyledMain = styled(Main)`
    background-color: ${({ theme }) => theme.DANGER_100};
    padding-top: calc(${SPACERS.XXL} + 56px);
`

export const StyledAside = styled(Aside)`
    background-color: ${({ theme }) => theme.DANGER_100};
    padding-top: calc(${SPACERS.XXL} + 56px);
`
