import React, { useContext } from 'react'
import { ContextData } from '../../App'

export default function Comp2() {
    const [globalData, setGlobalData] = useContext(ContextData)
    const MultiValue = () => {
        console.log("🧑‍💻Im from comp 1 : ", globalData.count)
        setGlobalData({ ...globalData, count: globalData.count * 2 })
    }
    console.log("Render Comp 2")
    return (
        <div>
            <h1>Comp2 Count : {globalData.count}</h1>
            <button onClick={() => MultiValue()} className='btn btn-danger'>
                Multiply One
            </button>
        </div>
    )
}
