import React, { useState } from 'react'

export default function Functions() {
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

    // handle restore todo function
    const restoreTodo = (id) => {
        console.log("id", id)
        let deleteValue
        // using map functions
        recentlyDeleted.map(rd => {
            if (rd.id == id) {
                deleteValue = rd // exceptional way [] [] []
            }
        });
        // using filter functions
        // const restoreObject = recentlyDeleted.filter(rd => rd.id == id); // Good way
        const filterRecentlyDeteleted = recentlyDeleted.filter(rd => rd.id != id)
        setRecentlyDeleted(filterRecentlyDeteleted)
        setTodos([...todos, deleteValue])
    }


    return (
        {
            onChangeTodo,
            todos,
            recentlyDeleted,    
                  
            todoOnChange,
            addTodo,
            deleteTodo,
            restoreTodo
        }
    )
}


   // const [onChangeTodo, setOnChangeTodo] = useState("")
    // const [todos, setTodos] = useState([])
    // const [recentlyDeleted, setRecentlyDeleted] = useState([]);

    // //handle todo value change function
    // const todoOnChange = (e) => {
    //     const { value } = e.target; // destructuring 
    //     setOnChangeTodo(value)
    //     // setOnChangeTodo(e.target)
    //     // console.log("💀", name, " : ", value)
    //     // console.log("💀", 'linkon', " : ", linkon)
    //     // console.log("💀", e.target)
    // }
    // // handle add todo function
    // const addTodo = () => {
    //     if (onChangeTodo === "") { // corner case
    //         console.log("There is no value")
    //         return;
    //     }

    //     const todoObject = { id: Math.random(), text: onChangeTodo }
    //     console.log("todoObj:", todoObject)
    //     setTodos([...todos, todoObject]) // efficient way
    //     setOnChangeTodo("")
    // }

    // // handle delete todo function
    // const deleteTodo = (id) => {
    //     console.log("id", id)
    //     setTodos(todos.filter(td => td.id != id)); // one line state management -> Not recommended
    //     setRecentlyDeleted([...recentlyDeleted, todos.filter(td => td.id == id)[0]]) // one line state management -> Not recommended
    // }

    // // handle restore todo function
    // const restoreTodo = (id) => {
    //     console.log("id", id)
    //     let deleteValue
    //     // using map functions
    //     recentlyDeleted.map(rd => {
    //         if (rd.id == id) {
    //             deleteValue = rd // exceptional way [] [] []
    //         }
    //     });
    //     // using filter functions
    //     // const restoreObject = recentlyDeleted.filter(rd => rd.id == id); // Good way
    //     const filterRecentlyDeteleted = recentlyDeleted.filter(rd => rd.id != id)
    //     setRecentlyDeleted(filterRecentlyDeteleted)
    //     setTodos([...todos, deleteValue])
    // }