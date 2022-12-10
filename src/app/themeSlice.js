import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setTheme: (state, action) => {
      if (action.payload.theme === 'light' || action.payload.theme === 'dark') {
        return action.payload.theme
      }
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer