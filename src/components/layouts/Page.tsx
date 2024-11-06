/*=============================================== Page ===============================================*/

import styled from "styled-components"
import {
    Main,
    Wrapper,
    SPACERS,
    Footer,
    ButtonIcon,
    filterObject,
} from "@julseb-lib/react"
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
                <Main size="large" minHeight="70vh">
                    {children}
                </Main>

                <NavFooter />
            </StyledWrapper>

            <StyledFooter
                links={
                    footerLinks.map(link => {
                        const filteredObject = filterObject(
                            link,
                            // @ts-ignore
                            ([n]) => n !== "blank"
                        )
                        return {
                            ...filteredObject,
                            text: (
                                <ButtonIcon
                                    icon={(link.text as string).toLowerCase()}
                                    size={24}
                                    iconSize={24}
                                    variant="transparent"
                                    tooltip={link.text as string}
                                    showTooltip
                                    blank={link.blank}
                                />
                            ),
                        }
                    }) as any
                }
                withSeparator
            />
        </BaseLayout>
    )
}

type IPage = IBaseLayout & {}

const StyledWrapper = styled(Wrapper)`
    flex-direction: column;
    width: calc(100% - ${NAV_WIDTH}px);
    position: relative;
    left: ${NAV_WIDTH}px;
    align-items: center;
`

const StyledFooter = styled(Footer)`
    width: calc(100% - ${NAV_WIDTH}px);
    position: relative;
    left: ${NAV_WIDTH}px;
    justify-content: center;
`
