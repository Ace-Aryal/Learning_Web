import {createSlice , nanoid} from "@reduxjs/toolkit" // nanoid for unique id's

const initialState = {
todos : [{id:1 , text : "Hello Dipesh"}]
} // initial items in store e.g. auth tokens 

export const todoSlice = createSlice({ // like create context in context api
    name : "todo" , // note name is defined property inside redux library for slices
    initialState , // or create initial obj here
    reducers : { // reducers are methods for state manipulation : use them olnly
        addTodo : (state , action) => {
             const todo = {
                id : nanoid(),
                text : action.payload // eqvt : text : action.payload.text
             }

             state.todos.push(todo)
        }, // unlike context where we just add fn we actually define a method here
        // prams - state , action
        //state : currentState , action : values passed
        removeTodo : (state , action) =>{
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },

        updateTodo : (state , action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {
                id : todo.id,
                text : action.payload  
            } : todo ) // eqvt action.payload.text
        }

    }
})

export const {addTodo , updateTodo , removeTodo} = todoSlice.actions // for manipulation in stores

export default todoSlice.reducer // need reducer in both formats
