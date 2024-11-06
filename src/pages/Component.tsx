/*=============================================== Component ===============================================*/

import { useParams } from "react-router-dom"
import { Page } from "../components"

export const Component = () => {
    const { category, component } = useParams<{
        category: string
        component: string
    }>()

    return <Page title="Component"></Page>
}
