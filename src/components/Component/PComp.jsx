import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextData } from '../../App'
import Comp1 from './Comp1'
import Comp2 from './Comp2'

export default function PComp() {
    const [globalData, setGlobalData] = useContext(ContextData)

    const handleAddOne = () => {
        let newCount = globalData.count + 1
        console.log("🧑‍💻Im from parent", newCount)
        setGlobalData({ ...globalData, count: newCount })

        sessionStorage.setItem("sessionGlobalData", newCount)
        localStorage.setItem("localGlobalData", newCount)

    }
    return (
        <div>

            <Link to="/c1" >Component 1</Link>
            <br />
            <Link to="/c2" >Component 2</Link>
            <br />
            <Link to="/c3" >Component 3</Link>

            <div>
                <div className='bg-primary p-5 text-center'>
                    <h1>This is parent component</h1>
                    <button onClick={() => handleAddOne()} className='btn btn-danger'>
                        Add One
                    </button>
                    <h5>
                        {globalData.count}
                    </h5>
                </div>

                <div className='d-flex justify-content-center w-100'>
                    <div className='w-50 bg-info p-3'>
                        <Comp1 />
                    </div>
                    <div className='w-50 bg-secondary p-3'>
                        <Comp2 />
                    </div>
                </div>

            </div>

        </div>
    )
}
