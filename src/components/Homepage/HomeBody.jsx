import React, { useState } from 'react'
import HomeCardTodo from './HomeCardTodo'

import './homeStyle.css'

export default function HomeBody() {
    const [onChangeTodo, setOnChangeTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [recentlyDeleted, setRecentlyDeleted] = useState([]);
    //handle todo value change function
    const todoOnChange = (e) => {
        const { value } = e.target; // destructuring 
        setOnChangeTodo(value)
        // setOnChangeTodo(e.target)
        // console.log("💀", name, " : ", value)
        // console.log("💀", 'linkon', " : ", linkon)
        // console.log("💀", e.target)
    }
    // handle add todo function
    const addTodo = () => {
        if (onChangeTodo === "") { // corner case
            console.log("There is no value")
            return;
        }

        const todoObject = { id: Math.random(), text: onChangeTodo }
        console.log("todoObj:", todoObject)
        setTodos([...todos, todoObject]) // efficient way
        setOnChangeTodo("")
    }

    // handle delete todo function
    const deleteTodo = (id) => {
        console.log("id", id)
        setTodos(todos.filter(td => td.id != id)); // one line state management -> Not recommended
        setRecentlyDeleted([...recentlyDeleted, todos.filter(td => td.id == id)[0]]) // one line state management -> Not recommended
    }
    console.log("Recently dlt", recentlyDeleted)
    return (
        <div className='container homeBody'>
            {/* heading section */}
            <div className='text-center p-3 '>
                <h3>ADD TO DO APP</h3>
            </div>
            {/* input section */}
            <div className="container d-flex justify-content-center">
                <div class="input-group mb-3 w-50">
                    <input type="text"
                        name="todo"
                        class="form-control w-50"
                        placeholder="Your todo"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"

                        value={onChangeTodo}
                        onChange={(e) => todoOnChange(e)}
                        onKeyDown={(e => {
                            if (e.keyCode == 13) {
                                addTodo()
                            }
                        })}
                    />
                    <button
                        class="btn btn-success w-25"
                        type="button" id="button-addon2"
                        onClick={(e) => addTodo()}
                    > + Add</button>
                </div>
            </div >
            {/* show todo cards */}
            <div className="container">
                {
                    todos &&
                    todos.map(td => <HomeCardTodo td={td} key={td.id} deleteTodo={deleteTodo} btnText="Delete" />)
                }
            </div>
            {/* recently deleted */}
            <div className="container">
                <h1>Recently Deleted Todos</h1>
                {
                    recentlyDeleted &&
                    recentlyDeleted.map(td => <HomeCardTodo td={td} key={td.id} deleteTodo={deleteTodo} btnText="Restore" />)
                }
            </div>


        </div >
    )
}
