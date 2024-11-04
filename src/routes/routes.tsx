/*=============================================== Routes ===============================================*/

// import { Navigate } from "react-router-dom"
import { PATHS } from "./paths"
import { Homepage } from "../pages/Homepage"
import { NotFound } from "../pages/NotFound"
import { GettingStarted } from "../pages/GettingStarted"
import { BoilerplatesAndCli } from "../pages/BoilerplatesAndCli"
/* prepend import - do not remove */

type Route = {
    path: string
    element: JSX.Element
}

const redirects: Array<Route> = [
    // {
    //     path: "",
    //     element: <Navigate to="" />,
    // },
]

export const routes: Array<Route> = [
    { path: PATHS.ROOT, element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    {
        path: PATHS.GETTING_STARTED,
        element: <GettingStarted />,
    },
    {
        path: PATHS.CLI_AND_BOILERPLATES,
        element: <BoilerplatesAndCli />,
    },
    /* prepend route - do not remove */

    ...redirects,
]
