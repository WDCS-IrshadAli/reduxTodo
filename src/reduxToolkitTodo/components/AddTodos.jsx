import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

const AddTodos = () => {

    const [input, setInput] = useState("");
    
    const dispatch = useDispatch();

    const addTodos = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

  return (
    <>
        <h1 className="text-2xl mb-5">ADD TODOS</h1>

        <form className="mb-5" onSubmit={addTodos}>
            <input className="mb-3" onChange={(e) => setInput(e.target.value)} type="text" name="text" placeholder="name" />
            <button className="bg-black text-white p-4 rounded" type="submit">Add Todos</button>
        </form>
    </>
  )
}

export default AddTodos
