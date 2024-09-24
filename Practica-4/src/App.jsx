import { useState } from "react"
import TaskList from "./components/taskList/TaskList";
import NewTask from "./components/newTask/NewTask";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css";

const App = () => { 
  const [tasks, setTasks] = useState([]);
  const [lastId, setId] = useState(0);

  const addTaskHandler = (newTask) => {
    setTasks([...tasks, newTask]), setId(lastId + 1);
  }

  const deleteTaskHandler = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vw-100" id="container">
      <NewTask lastId={lastId} addTaskHandler={addTaskHandler}/>
      {(tasks == "") && (<h2 className="mt-3 text">No hay tareas</h2>)}
      {(tasks.length > 0) && (<TaskList list={tasks} deleteTaskHandler={deleteTaskHandler}/>)}
    </div>
  )
}

export default App;