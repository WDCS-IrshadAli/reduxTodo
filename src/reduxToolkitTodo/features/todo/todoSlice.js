import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World"}],
};

export const todoSlice = createSlice({
    name: "todo", //in reduxDevtools extension it shows this name
    initialState,
    // state = state: (it gives access to initialState) & 
    // action = action: (it gives id from client for exmple)  
    reducers: {
        addTodo: (state, action) => {
          const todo = {
            id: nanoid(),
            text: action.payload,
          }  
        state.todos.push(todo);
        //   state.todos.concat(todo);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(curElem => curElem.id !== id)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            state.todos = state.todos.filter(curElem => curElem.id === id ? curElem.text = text : curElem);
        }
    }
})

// addTodo & removeTodo is functionality of "reducers" called "actions"
export const { addTodo, removeTodo } = todoSlice.actions;

// to maintain store & to awareness
//we export reducer individual 
export default todoSlice.reducer;