import React, { createContext, useContext, useState } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { pagesRoute } from './components/routes/routes';


export const ContextData = createContext()

export default function App() {
    
    const router = createBrowserRouter(pagesRoute);
    const [globalData, setGlobalData] = useState({ userId: 1, name: "contextAPI", count: 0 })

    return (
        <ContextData.Provider value={[globalData, setGlobalData]} >
            <RouterProvider router={router} />
        </ContextData.Provider>
    )
}
