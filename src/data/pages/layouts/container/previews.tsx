/*=============================================== Previews ===============================================*/

import { Text, LIB_TOKENS, Section, FullBleed, Image } from "@julseb-lib/react"
import { StyledMain, StyledAside } from "./styles"

export interface Preview {
    title: string
    name: string
    code: string
    demo: JSX.Element
}

export const containerPreviews: Array<Preview> = [
    {
        name: "main",
        code: `<Wrapper>\n\t<Main>\n\t\t<Text>Default Wrapper & Main</Text>\n\t</Main>\n</Wrapper>`,
        title: "Main default",
        demo: (
            <StyledMain
                style={{
                    ["--main-max" as any]: LIB_TOKENS.layouts["main-default"],
                }}
            >
                <Text tag="h2">Main default</Text>
            </StyledMain>
        ),
    },
    {
        name: "main-form",
        code: `<Wrapper>\n\t<Main size="form">\n\t\t<Text>Default Wrapper & Main</Text>\n\t</Main>\n</Wrapper>`,
        title: "Main form",
        demo: (
            <StyledMain
                style={{
                    ["--main-max" as any]: LIB_TOKENS.layouts["main-form"],
                }}
            >
                <Text tag="h2">Main form</Text>
            </StyledMain>
        ),
    },
    {
        name: "main-large",
        code: `<Wrapper>\n\t<Main size="large">\n\t\t<Text>Default Wrapper & Main</Text>\n\t</Main>\n</Wrapper>`,
        title: "Main large",
        demo: (
            <StyledMain
                style={{
                    ["--main-max" as any]: LIB_TOKENS.layouts["main-large"],
                }}
            >
                <Text tag="h2">Main large</Text>
            </StyledMain>
        ),
    },
    {
        name: "aside",
        code: `<Wrapper>\n\t<Aside>\n\t\t<Text>Aside</Text>\n\t</Aside>\n\n\t<Main>\n\t\t<Text>Wrapper and Main</Text>\n\t</Main>\n</Wrapper>`,
        title: "Main & Aside",
        demo: (
            <>
                <StyledAside>
                    <Text tag="h2">Aside</Text>
                </StyledAside>

                <StyledMain
                    style={{
                        ["--main-max" as any]:
                            LIB_TOKENS.layouts["main-default"],
                    }}
                >
                    <Text
                        tag="h2"
                        style={{
                            ["--aside-max" as any]:
                                LIB_TOKENS.layouts["aside-default"],
                        }}
                    >
                        Main default
                    </Text>
                </StyledMain>
            </>
        ),
    },
    {
        name: "full",
        code: `<StyledMain\n\tsize="full"\n\tdata-testid="testid"\n\tclassName="className"\n>\n\t<Text tag="h2">Main</Text>\n\n\t...section\n\n\t<FullBleed\n\t\tpadding={{ leftRight: "xxl" }}\n\t\theight={400}\n\t\tas="section"\n\t>\n\t\t<Image\n\t\t\tsrc="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n\t\t\talt="Full bleed"\n\t\t\tfit="cover"\n\t\t/>\n\t</FullBleed>\n\n\t...section\n</StyledMain>\n`,
        title: "Full size",
        demo: (
            <>
                <StyledMain
                    size="full"
                    data-testid="testid"
                    className="className"
                >
                    <Text tag="h2">Main</Text>

                    <Section gap="xs">
                        <Text tag="h4">Title</Text>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat ut possimus doloremque doloribus
                            tempore ducimus ad fuga. Tempore doloribus sunt
                            perferendis porro corporis, ex deserunt incidunt
                            architecto libero temporibus! Rerum. Lorem, ipsum
                            dolor sit amet consectetur adipisicing elit. Fugiat
                            ut possimus doloremque doloribus tempore ducimus ad
                            fuga. Tempore doloribus sunt perferendis porro
                            corporis, ex deserunt incidunt architecto libero
                            temporibus! Rerum. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Fugiat ut possimus
                            doloremque doloribus tempore ducimus ad fuga.
                            Tempore doloribus sunt perferendis porro corporis,
                            ex deserunt incidunt architecto libero temporibus!
                            Rerum.
                        </Text>
                    </Section>

                    <Section gap="xs">
                        <Text tag="h4">Title</Text>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat ut possimus doloremque doloribus
                            tempore ducimus ad fuga. Tempore doloribus sunt
                            perferendis porro corporis, ex deserunt incidunt
                            architecto libero temporibus! Rerum. Lorem, ipsum
                            dolor sit amet consectetur adipisicing elit. Fugiat
                            ut possimus doloremque doloribus tempore ducimus ad
                            fuga. Tempore doloribus sunt perferendis porro
                            corporis, ex deserunt incidunt architecto libero
                            temporibus! Rerum. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Fugiat ut possimus
                            doloremque doloribus tempore ducimus ad fuga.
                            Tempore doloribus sunt perferendis porro corporis,
                            ex deserunt incidunt architecto libero temporibus!
                            Rerum.
                        </Text>
                    </Section>

                    <FullBleed
                        padding={{ leftRight: "xxl" }}
                        height={400}
                        as="section"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                            alt="Full bleed"
                            fit="cover"
                        />
                    </FullBleed>

                    <Section gap="xs">
                        <Text tag="h4">Title</Text>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat ut possimus doloremque doloribus
                            tempore ducimus ad fuga. Tempore doloribus sunt
                            perferendis porro corporis, ex deserunt incidunt
                            architecto libero temporibus! Rerum. Lorem, ipsum
                            dolor sit amet consectetur adipisicing elit. Fugiat
                            ut possimus doloremque doloribus tempore ducimus ad
                            fuga. Tempore doloribus sunt perferendis porro
                            corporis, ex deserunt incidunt architecto libero
                            temporibus! Rerum. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Fugiat ut possimus
                            doloremque doloribus tempore ducimus ad fuga.
                            Tempore doloribus sunt perferendis porro corporis,
                            ex deserunt incidunt architecto libero temporibus!
                            Rerum.
                        </Text>
                    </Section>

                    <Section gap="xs">
                        <Text tag="h4">Title</Text>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat ut possimus doloremque doloribus
                            tempore ducimus ad fuga. Tempore doloribus sunt
                            perferendis porro corporis, ex deserunt incidunt
                            architecto libero temporibus! Rerum. Lorem, ipsum
                            dolor sit amet consectetur adipisicing elit. Fugiat
                            ut possimus doloremque doloribus tempore ducimus ad
                            fuga. Tempore doloribus sunt perferendis porro
                            corporis, ex deserunt incidunt architecto libero
                            temporibus! Rerum. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Fugiat ut possimus
                            doloremque doloribus tempore ducimus ad fuga.
                            Tempore doloribus sunt perferendis porro corporis,
                            ex deserunt incidunt architecto libero temporibus!
                            Rerum.
                        </Text>
                    </Section>

                    <Section gap="xs">
                        <Text tag="h4">Title</Text>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat ut possimus doloremque doloribus
                            tempore ducimus ad fuga. Tempore doloribus sunt
                            perferendis porro corporis, ex deserunt incidunt
                            architecto libero temporibus! Rerum. Lorem, ipsum
                            dolor sit amet consectetur adipisicing elit. Fugiat
                            ut possimus doloremque doloribus tempore ducimus ad
                            fuga. Tempore doloribus sunt perferendis porro
                            corporis, ex deserunt incidunt architecto libero
                            temporibus! Rerum. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Fugiat ut possimus
                            doloremque doloribus tempore ducimus ad fuga.
                            Tempore doloribus sunt perferendis porro corporis,
                            ex deserunt incidunt architecto libero temporibus!
                            Rerum.
                        </Text>
                    </Section>
                </StyledMain>
            </>
        ),
    },
]
