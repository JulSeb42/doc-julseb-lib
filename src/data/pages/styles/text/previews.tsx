import { Link } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { ComponentCard } from "components"

export const TitlesDisplay = () => {
    return (
        <ComponentCard
            title="Titles display"
            displayName="Text"
            code={`<Text tag="h1" display>\n\tTitle 1 display\n</Text>\n<Text tag="h2" display>\n\tTitle 2 display\n</Text>\n<Text tag="h3" display>\n\tTitle 3 display\n</Text>\n<Text tag="h4" display>\n\tTitle 4 display\n</Text>\n<Text tag="h5" display>\n\tTitle 5 display\n</Text>`}
        >
            <Text tag="h1" display>
                Title 1 display
            </Text>
            <Text tag="h2" display>
                Title 2 display
            </Text>
            <Text tag="h3" display>
                Title 3 display
            </Text>
            <Text tag="h4" display>
                Title 4 display
            </Text>
            <Text tag="h5" display>
                Title 5 display
            </Text>
        </ComponentCard>
    )
}

export const Titles = () => {
    return (
        <ComponentCard
            title="Titles"
            displayName="Text"
            code={`<Text tag="h1">Title 1</Text>\n<Text tag="h2">Title 2</Text>\n<Text tag="h3">Title 3</Text>\n<Text tag="h4">Title 4</Text>\n<Text tag="h5">Title 5</Text>\n<Text tag="h6">Title 6</Text>`}
        >
            <Text tag="h1">Title 1</Text>
            <Text tag="h2">Title 2</Text>
            <Text tag="h3">Title 3</Text>
            <Text tag="h4">Title 4</Text>
            <Text tag="h5">Title 5</Text>
            <Text tag="h6">Title 6</Text>
        </ComponentCard>
    )
}

export const Paragraphs = () => {
    return (
        <ComponentCard
            title="Paragraphs"
            displayName="Text"
            code={`<Text>Paragraph</Text>\n<Text tag="p">\n\tParagraph <Text tag="strong">strong</Text>\n</Text>\n<Text tag="p">\n\tParagraph <Text tag="em">italic</Text>\n</Text>\n<Text tag="p">\n\tParagraph with <Link to="#">link</Link>\n</Text>\n<Text tag="p">\n\tParagraph <code>code</code>\n</Text>`}
        >
            <Text>Paragraph</Text>
            <Text tag="p">
                Paragraph <Text tag="strong">strong</Text>
            </Text>
            <Text tag="p">
                Paragraph <Text tag="em">italic</Text>
            </Text>
            <Text tag="p">
                Paragraph with <Link to="#">link</Link>
            </Text>
            <Text tag="p">
                Paragraph <code>code</code>
            </Text>
        </ComponentCard>
    )
}

export const Small = () => {
    return (
        <ComponentCard
            title="Small"
            displayName="Text"
            code={`<Text tag="small">Small</Text>`}
        >
            <Text tag="small">Small</Text>
        </ComponentCard>
    )
}

export const BlockQuote = () => {
    return (
        <ComponentCard
            title="Blockquote"
            displayName="Text"
            code={`<Text tag="blockquote">Blockquote</Text>`}
        >
            <Text tag="blockquote">Blockquote</Text>
        </ComponentCard>
    )
}

export const UnorderedList = () => {
    return (
        <ComponentCard
            title="Unordered list"
            displayName="Text"
            code={`<Text tag="ul">\n\t<li>Unordered list</li>\n\t<li>Unordered list</li>\n\t<li>Unordered list</li>\n</Text>`}
        >
            <Text tag="ul">
                <li>Unordered list</li>
                <li>Unordered list</li>
                <li>Unordered list</li>
            </Text>
        </ComponentCard>
    )
}

export const OrderedList = () => {
    return (
        <ComponentCard
            title="Ordered list"
            displayName="Text"
            code={`<Text tag="ol">\n\t<li>Ordered list</li>\n\t<li>Ordered list</li>\n\t<li>Ordered list</li>\n</Text>`}
        >
            <Text tag="ol">
                <li>Ordered list</li>
                <li>Ordered list</li>
                <li>Ordered list</li>
            </Text>
        </ComponentCard>
    )
}

export const DescriptionList = () => {
    return (
        <ComponentCard
            title="Ordered list"
            displayName="Text"
            code={`<Text tag="dl">\n\t<dt>Description list title</dt>\n\t<dd>Description list content</dd>\n\n\t<dt>Description list title</dt>\n\t<dd>Description list content</dd>\n\n\t<dt>Description list title</dt>\n\t<dd>Description list content</dd>\n</Text>`}
        >
            <Text tag="dl">
                <dt>Description list title</dt>
                <dd>Description list content</dd>

                <dt>Description list title</dt>
                <dd>Description list content</dd>

                <dt>Description list title</dt>
                <dd>Description list content</dd>
            </Text>
        </ComponentCard>
    )
}
