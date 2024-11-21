/*=============================================== Routes ===============================================*/

// import { Navigate } from "react-router-dom"
import { PATHS } from "./paths"
import { Homepage } from "../pages/Homepage"
import { NotFound } from "../pages/NotFound"
import { GettingStarted } from "../pages/GettingStarted"
import { BoilerplatesAndCli } from "../pages/BoilerplatesAndCli"
import { Category } from "../pages/Category"
import { Component } from "../pages/Component"
import { DemoMain } from "../pages/demos/DemoMain"
/* Prepend import - DO NOT REMOVE */

/*====================== Demos ======================*/

/* Prepend demos import - DO NOT REMOVE */

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

const demos: Array<Route> = [
    { path: PATHS.COMPONENT_DEMO(), element: <DemoMain /> },
    /* Prepend demo - DO NOT REMOVE */
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

    { path: PATHS.CATEGORY(), element: <Category /> },
    { path: PATHS.COMPONENT(), element: <Component /> },

    /* Prepend route - DO NOT REMOVE */

    ...demos,
    ...redirects,
]
