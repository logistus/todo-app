import { configureStore } from "@reduxjs/toolkit"
import todoListReducer from './todoListSlice'
import themeReducer from './themeSlice'

export default configureStore({
  reducer: {
    todoList: todoListReducer,
    theme: themeReducer,
  }
})