import React, { useState } from 'react'
import './App.css'

function Todo({ todo, index }) {
  return (
    <div className={'todo'}>{todo.text}</div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')

  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={'text'}
        className={'input'}
        placeholder={'Add Todo..'}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>

  )
}

function App() {
  const [todos, setTodos] = useState([
    { text: 'hello 1 todo', isCompleted: false },
    { text: 'hello 2 todo', isCompleted: false },
    { text: 'hello 3 todo', isCompleted: false },
  ])
  const addTodo = text => {
    const newTodo = [...todos, { text }]
    setTodos(newTodo)
  }
  return (
    <div className={'app'}>
      <div className={'todo-list'}>
        {todos.map((todo, index) => (<Todo key={index} index={index} todo={todo} />))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
