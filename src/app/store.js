import { configureStore } from "@reduxjs/toolkit"
import todoReducer from '../feature/createSlice'
const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export default store