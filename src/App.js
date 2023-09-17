import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react' 
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}


//Delete Task (nesto ne radi)
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !==id))
}

//Toggle Reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder : !task.reminder } : task))
}


  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

export default App;