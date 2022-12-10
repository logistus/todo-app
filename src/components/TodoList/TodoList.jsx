import './todo_list.css'
import TodoItem from '../TodoItem/TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { clearCompleted } from '../../app/todoListSlice'
import { useState } from 'react'

function TodoList() {
  const todos = useSelector((state) => {
    return state.todoList
  })
  const theme = useSelector((state) => {
    return state.theme
  })

  const dispatch = useDispatch()
  const [filter, setFilter] = useState('all')
  const uncompleted = todos.filter(todo => todo.isCompleted === false)
  const completed = todos.filter(todo => todo.isCompleted === true)


  return (
    <>
      <div className={`todo-list ${theme}`}>
        {filter === "all" && todos.map(todo => <TodoItem key={todo.id} data={todo} />)}
        {filter === "completed" && completed.map(todo => <TodoItem key={todo.id} data={todo} />)}
        {filter === "active" && uncompleted.map(todo => <TodoItem key={todo.id} data={todo} />)}
        <div className={`todo-list-footer ${theme}`}>
          <div className="items-left">{filter !== "completed" ? uncompleted.length : "0"} item{`${uncompleted.length > 1 ? "s" : ""}`} left</div>
          <ul className="filters">
            <li><a href="#" onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}> All</a></li>
            <li><a href="#" onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Active</a></li>
            <li><a href="#" onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</a></li>
          </ul>
          <a href="#" onClick={() => dispatch(clearCompleted())}>Clear Completed</a>
        </div>
      </div>
      <div className={`filters-mobile-wrapper ${theme}`}>
        <ul className="filters-mobile">
          <li><a href="#" onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}> All</a></li>
          <li><a href="#" onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Active</a></li>
          <li><a href="#" onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</a></li>
        </ul>
      </div>
    </>
  );
}

export default TodoList;