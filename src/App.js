import React, { useState } from 'react'
import './App.css'

function Todo({ todo, index, completeTodo,removeTodo }) {
  return (
    <div
      className={'todo'}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div>
        <button className={'button'} onClick={() => completeTodo(index)}>Completed</button>
        <button className={'button'} onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>

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
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }
  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }
  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  return (
    <div className={'app'}>
      <div className={'add-todo'}>
        <h1>Add Todos</h1>
        <TodoForm addTodo={addTodo} />
      </div>
      <div className={'todo-list'}>
        <h1 style={{textDecoration:'underline'}}>Todos</h1>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />))}
      </div>
    </div>
  )
}

export default App
