import './todo_item.css'
import cross from '../../assets/icon-cross.svg'
import check from '../../assets/icon-check.svg'
import { removeTask, toggleTask } from '../../app/todoListSlice'
import { useDispatch, useSelector } from 'react-redux'

function TodoItem({ data }) {
  const theme = useSelector((state) => {
    return state.theme
  })
  const dispatch = useDispatch()

  return (
    <div className={`todo-item ${data.isCompleted ? "completed" : ""} ${theme}`} onClick={() => dispatch(toggleTask({ id: data.id }))}>
      <div className={`todo-circle ${data.isCompleted ? "completed" : ""} ${theme}`}>
        {data.isCompleted && <img src={check} alt='' />}
      </div>
      <span className='todo-task'>{data.task}</span>
      <a href="#" onClick={() => dispatch(removeTask({ id: data.id }))} className='todo-remove'><img src={cross} alt="" /></a>
    </div>
  );
}

export default TodoItem;