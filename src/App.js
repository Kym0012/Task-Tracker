import {useState }  from 'react'
import Header from "./Components/Header" 
import Tasks from "./Components/Tasks"
import AddTask from './Components/AddTask'



const App = () => {
  const [showAddTask, setShowAddTask ] = useState(false)



  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'January 12th 2024',
        reminder:true,
    },
    {
        id:2,
        text:'Going for Swimming',
        day:'February 1st 2024',
        reminder:true,
    },
    {
        id:3,
        text:'Visiting Grandma',
        day:'February 29th 2024',
        reminder:true,
    }
]
)

//DELETE TASK

const deleteTask = (id)=>{
   setTasks(tasks.filter((task) =>task.id !==id))
}


//Add Task
const addTask = (task) =>{
   const id = Math.floor(Math.random() *10000) + 1
   console.log(id)

   const newTask = {id, ...task}
   setTasks([...tasks, newTask])
}

//Toggle Reminder
const toggleReminder =(id) =>{
  setTasks(tasks.map((task) => task.id ===id ? {...task , reminder: !task.reminder} : task))
}

  return(
    <div className="container">
      
       <Header onAdd={() =>setShowAddTask(!showAddTask)}showAddTask={showAddTask} />
       {showAddTask && <AddTask  onAdd={addTask} showAdd= {showAddTask}/>}
       {tasks.length> 0 ? <Tasks tasks ={tasks}  onDelete=
       {deleteTask} onToggle={toggleReminder}/> : "No Tasks To Show"}
      
    </div>
     
  )
}

export default App