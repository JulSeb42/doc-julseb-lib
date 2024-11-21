/*=============================================== NotFoundContent component ===============================================*/

import { Link } from "react-router-dom"
import { Text } from "@julseb-lib/react"
import { PATHS } from "routes"

export const NotFoundContent = () => {
    return (
        <>
            <Text tag="h1">Page not found</Text>

            <Text>
                <Link to={PATHS.ROOT}>Back to homepage.</Link>
            </Text>
        </>
    )
}
