import React from 'react'

export default function HomeCardTodo({ td, deleteTodo, btnText }) {
    return (
        <div>
            <div class="card text-bg-info mb-3">
                <div class="card-header">
                    {td.id}
                    <button onClick={() => deleteTodo(td.id)} className='btn btn-danger ms-5'>{btnText}</button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{td.text}</h5>
                </div>
            </div>
        </div>
    )

    // Conditional Props handel
    // Function handle
    // one line state management
    // todo component structure
    // enter press to add todo (onkeydown function)
}
