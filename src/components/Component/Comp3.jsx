import React, { useContext } from 'react'
import { ContextData } from '../../App'

export default function Comp3() {
    const [globalData, setGlobalData] = useContext(ContextData)
    console.log("Render com  3")
    return (
        <div>
            Comp3 Count: {globalData.count}
            <h2>Session Data : {sessionStorage.getItem("sessionGlobalData")}</h2>
            <h2>Local Data : {localStorage.getItem("localGlobalData")}</h2>
        </div>
    )
}
