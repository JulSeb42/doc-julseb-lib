/*=============================================== Page ===============================================*/

import styled from "styled-components"
import { Main, Wrapper, SPACERS, Footer, ButtonIcon } from "@julseb-lib/react"
import { BaseLayout, Header, Nav } from "../"
import { NavFooter } from "./NavFooter"
import { footerLinks } from "../../data"
import { NAV_WIDTH } from "./Nav/styles"
import type { IBaseLayout } from "./BaseLayout"

export const Page: FC<IPage> = ({ title, children }) => {
    return (
        <BaseLayout title={title}>
            <Header />

            <Nav />

            <StyledWrapper>
                <Main size="large">{children}</Main>
            </StyledWrapper>

            <NavFooter />

            <StyledFooter
                links={footerLinks.map(link => ({
                    ...link,
                    text: (
                        <ButtonIcon
                            icon={(link.text as string).toLowerCase()}
                            size={24}
                            iconSize={24}
                            variant="transparent"
                            tooltip={link.text as string}
                            showTooltip
                        />
                    ),
                }))}
                direction="vertical"
                linksSeparator="none"
                withSeparator
            />
        </BaseLayout>
    )
}

type IPage = IBaseLayout & {}

const StyledWrapper = styled(Wrapper)`
    padding-top: ${SPACERS.XXL};
    position: relative;
    width: calc(100% - ${NAV_WIDTH}px);
    left: ${NAV_WIDTH}px;

    & > main {
        min-height: 85vh;
    }
`

const StyledFooter = styled(Footer)`
    max-width: calc(100% - ${NAV_WIDTH}px);
    position: relative;
    left: ${NAV_WIDTH}px;
`
