import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { useState, useEffect } from "react";


function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return 
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])
  
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>

  );
}

export default App;
