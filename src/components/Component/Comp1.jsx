import React, { useContext } from 'react'
import { ContextData } from '../../App'

export default function Comp1() {
    const [globalData, setGlobalData] = useContext(ContextData)
    const DOneButton = () => {
        console.log("🧑‍💻Im from comp 1 : ", globalData.count)
        setGlobalData({ ...globalData, count: globalData.count - 1 })
    }
    console.log("Render Comp 1")
    return (
        <div>
            <h1>Comp1 Count : {globalData.count}</h1>
            <button onClick={() => DOneButton()} className='btn btn-danger'>
                Minus One
            </button>
        </div>
    )
}
