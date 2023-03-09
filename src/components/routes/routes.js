import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../Homepage/HomePage";
import ConditionalRender from "../HomeV2/ConditionalRender";



export const pagesRoute = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/conditionalRender",
        element: <ConditionalRender id={1234} />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/info",
        element: <h1>Im info</h1>,
    },
]