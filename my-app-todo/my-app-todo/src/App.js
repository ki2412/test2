import "./App.css"
import { useState } from "react"


function App() {
  const [todoList, setTodoList] = useState ([])
  const [newTask, setNewTask] = useState ("")

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    setTodoList([...todoList, newTask])
  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task)=> task !== taskName)
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick ={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick ={deleteTask}>x</button>
            </div>
          )

        })}
      </div>

    </div>
  )
}

export default App
