import './add_todo.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../app/todoListSlice'

function AddTodo() {
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()
  const theme = useSelector((state) => {
    return state.theme
  })

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      task: newTask
    }))
    setNewTask("")
  }

  return (
    <form className={`add-todo ${theme}`} onSubmit={onSubmit}>
      <div className='circle'></div>
      <input type="text" name="new_todo" id="new_todo" className={theme}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Create a new todo...' value={newTask} required />
    </form>
  );
}

export default AddTodo;