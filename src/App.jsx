import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import TaskAddBlock from './Components/TaskAddBlock/TaskAddBlock'
import TaskFilter from './Components/TaskFliter/TaskFilter'

function App() {
  const [tasks, setTasks] = useState([
        {id:1, title: "JavaScript 1", description: "This is the best programming language"},
        {id:2, title: "JavaScript 2", description: "This is the best programming language"},
        {id:3, title: "JavaScript 3", description: "This is the best programming language"},
        {id:4, title: "JavaScript 3", description: "This is the best programming language"},
        {id:5, title: "JavaScript 3", description: "This is the best programming language"},
    ]);

    

  return (
    <>
      <Header/>
      <TaskAddBlock tasks={tasks} setTasks={setTasks}/>
      <TaskFilter tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
