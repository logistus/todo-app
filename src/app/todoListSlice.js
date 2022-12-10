import { createSlice } from "@reduxjs/toolkit"

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Math.floor(Math.random() * 9999),
        task: action.payload.task,
        isCompleted: false
      }
      state.unshift(newTask) // we used unshift because we want to add the begining of the array
    },
    removeTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTask: (state, action) => {
      state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo
      })
    },
    clearCompleted: (state) => {
      return state.filter(todo => todo.isCompleted === false)
    }
  }
})

export const { addTask, removeTask, toggleTask, clearCompleted } = todoListSlice.actions

export default todoListSlice.reducer