import React, { useState } from "react";

function ToDo() {
    const [todos, setTodos] = useState(['Rahul', 'Mehul', 'Same'])

    const [task, setTask] = useState('')

    function OnInputChnage(event) {
        setTask(event.target.value)
    }
    function createTodo(event) {
        event.preventDefault()
        setTodos(todos => {
            return [...todos, task]
        })

    }

    return (
        <div className="ml-6 mt-6">
            <h1>My ToDo List</h1>
            <form onSubmit={createTodo}>
                <input type="text" className="border mt-3 " value={task} onInput={OnInputChnage} />
                <button type="submit" className="border ml-4 bg-red-400" >Create Todo</button>
            </form>
            <ul className="mt-4">
                {
                    todos.map(todo => {
                        return (
                            <li>{todo}</li>
                        )
                    })
                }
            </ul>
        </div>

    )
}
export default ToDo