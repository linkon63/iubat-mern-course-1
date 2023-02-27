import React, { useState } from 'react'
import Functions from '../Functions/Functions'
import HomeCardTodo from './HomeCardTodo'

import './homeStyle.css'

export default function HomeBody() {
    // refactoring component based better performance
    const { onChangeTodo, todos, recentlyDeleted, todoOnChange, addTodo, deleteTodo, restoreTodo } = Functions();

    // Not better performance
    // const { todos, deleteTodo, recentlyDeleted, restoreTodo, onChangeTodo, todoOnChange, addTodo } = Functions();



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
                    todos.map(td =>
                        <HomeCardTodo td={td} key={td.id} handleFunction={deleteTodo} btnText="Delete" />
                    )
                }
            </div>
            {/* recently deleted */}
            <div className="container">
                <h1>Recently Deleted Todos</h1>
                {
                    recentlyDeleted &&
                    recentlyDeleted.map(td =>
                        <HomeCardTodo td={td} key={td.id} handleFunction={restoreTodo} btnText="Restore" />
                    )
                }
            </div>


        </div >
    )
}
