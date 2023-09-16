import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react' 
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shoping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }

])

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
      <Header />
      <AddTask onAdd={addTask}/>
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

export default App;