import TaskItem from "../taskItem/TaskItem";
import './TaskList.css'

const TaskList = ({list, deleteTaskHandler}) => {
    const deleteHandler = (id) => {
        deleteTaskHandler(id);
    }

    const mappedList = list.map((element) => (
        <TaskItem key={element.id} id={element.id} title={element.title} description={element.description} onDelete={deleteHandler}/>
    ));

    return <div className="tasklist-container mt-5">{mappedList}</div>;
}

export default TaskList;