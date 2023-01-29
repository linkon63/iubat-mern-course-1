import React, { useId, useState } from 'react'
import Navbar from '../Navber/Navbar'

export default function HomePage() {

    // components
    // state
    // props handel
    // useEffect
    // Conditional rendering 
    // use context api
    // redux

    const [inputBoxValue, changeInputBoxValue] = useState("")
    const [todoArray, updateTodoArray] = useState([]);
    // const id = useId();
    // handleChange
    const handleChange = (e) => {
        // console.log("⌨️⌨️⌨️⌨️", e.target.value);
        changeInputBoxValue(e.target.value)
    }

    // add to do in array
    const handleAdd = () => {
        const todoObject = { id: Math.random(), value: inputBoxValue }
        console.log("💕💕Called handle Add💕💕", todoObject)
        let prevArray = [...todoArray]
        prevArray.push(todoObject)
        updateTodoArray(prevArray)
        changeInputBoxValue("")
        // console.log("📲📲📲😂😂", todoArray);
    }

    return (
        <div className="container">
            <Navbar />
            <h1 className='bg-secondary'>Home Page</h1>
            <div className='bg-danger p-5 '>
                <input
                    type="text"
                    className='p-2'
                    value={inputBoxValue}
                    onChange={handleChange}
                />
                <button onClick={handleAdd} className='btn btn-success'>ADD +</button>
            </div>

            {
                todoArray &&
                todoArray.map((tArray) => {
                    return <div className="bg-primary p-3 border border-3 border-info m-1 ">
                        <p>{tArray.value}</p>
                    </div>
                })
            }

        </div>
    )
}
