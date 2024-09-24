import { useState } from "react";
import './TaskItem.css';
import { Button, Card } from "react-bootstrap";

const TaskItem = ({title, description, onDelete, id}) => {
    const [isDone, setDone] = useState(false);

    const doneHandle = () => {
        if(!isDone) {
            setDone(true);
    } else {
        alert("La tarea ya ha sido completada");
    }};

    const deleteHandle = () => onDelete(id);

    return (
        <Card style={{ width: '15rem', backgroundColor: isDone ? '#347928' : 'white', color: isDone ? 'white' : 'black' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div class="d-flex justify-content-between">
                    <Button variant="primary" onClick={doneHandle}>Completar</Button>
                    <Button variant="danger" onClick={deleteHandle}>Eliminar</Button>
                </div>
            </Card.Body>
        </Card>
    )
}


export default TaskItem;