// single source of truth


// how to use redux
/* 1. install redux-react and rtk
2.create store configureStore()
2. createReducer() // create slices ans export the slice and reducers and 
  define it in store using configurestore
3.
*/

import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice" // default import

export const store = configureStore({
    reducer : todoReducer
})
