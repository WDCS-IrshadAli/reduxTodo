import React from 'react'
import AddTodos from './AddTodos'
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
    <>
        <AddTodos />
        <h1 className="text-xl my-5">TODOS</h1>
        <table>
            <tr>
                <th>id</th>
                <th>text</th>
                <th>action</th>
            </tr>
        {
            todos.map((curElem, index) => {
                return (
                    <tr key={index}>
                        <td>{curElem.id}</td>
                        <td>{curElem.text}</td>
                        <td>
                            <button onClick={() => dispatch(removeTodo(curElem.id))} type="button">delete</button>
                        </td>
                    </tr>
                )
            })
        }
        </table>

    </>
  )
}

export default Todos
