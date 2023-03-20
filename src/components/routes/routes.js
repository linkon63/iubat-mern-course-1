import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../Homepage/HomePage";
import ConditionalRender from "../HomeV2/ConditionalRender";
import Comp1 from '../Component/Comp1'
import Comp2 from "../Component/Comp2";
import PComp from "../Component/PComp";
import Comp3 from "../Component/Comp3";


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
        path: "/p1",
        element: <PComp />,
    },
    {
        path: "/c1",
        element: <Comp1 />,
    },
    {
        path: "/c2",
        element: <Comp2 />,
    },
    {
        path: "/c3",
        element: <Comp3 />,
    },
    {
        path: "/info",
        element: <h1>Im info</h1>,
    },
]