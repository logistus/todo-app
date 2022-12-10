import './App.css'
import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className='container'>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
