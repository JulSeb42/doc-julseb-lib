/*=============================================== Paths ===============================================*/

export const PATHS = {
    ROOT: "/",
    GETTING_STARTED: "/getting-started",
    CLI_AND_BOILERPLATES: "/cli-and-boilerplates",

    CATEGORY: (category = ":category") => `/${category}`,
    COMPONENT: (category = ":category", component = ":component") =>
        `/${category}/${component}`,

    COMPONENT_DEMO: (
        category = ":category",
        component = ":component",
        demo = ":demo"
    ) => `${category}/${component}/demo/${demo}`,

    /*====================== Demos ======================*/
    
    
	/* Prepend demos - DO NOT REMOVE */    
}
