import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './newTask.css'

const NewTask = ({ addTaskHandler, lastId }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault(),
        addTaskHandler({
            id: lastId + 1,
            title,
            description
        });
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-3 text">Agregar nueva tarea</h2>
                <Form onSubmit={addTask} id="form">
                    <div>
                        <Form.Control id="input-title" onChange={titleHandler} className="mt-2" value={title} placeholder="Agregue un título"/>
                    </div>
                    <div>
                        <Form.Control onChange={descriptionHandler} className="mt-2" value={description} as="textarea" placeholder="Agregue una descripción"/>
                    </div>
                    <Button type="submit" className="mt-2">Añadir tarea</Button>
                </Form>
        </div>
    )
}

export default NewTask;