import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../Homepage/HomePage";

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
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/info",
        element: <h1>Im info</h1>,
    },
]