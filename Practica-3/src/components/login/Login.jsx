import { useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";

const Login = () => {
    const [user, setUser] = useState("");
    const handlerUser = (event) => {
        if(event.target.value.toLowerCase().includes('o')){
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        } else {
            setUser(event.target.value);
        }
    }

const handleSubmit = () => {
    if(!(user.toLowerCase().includes('o'))){
        alert('Usuario registrado!');
    } else {
        alert('Usuario inválido para registrarse');
    }
}

    return (
        <Card>
            <Card.Body>
                <Form>
                    <FormGroup>
                        <Form.Control 
                        value={user}
                        onChange={handlerUser}
                        type="text"
                        placeholder="Ingrese su usuario"
                        />
                        <p>{user}</p>
                    </FormGroup>
                </Form>
                <Row>
                    <Col md={6} className="d-flex justify-content-end">
                        <Button variant="secondary"
                            onClick={handleSubmit}
                            type="button">
                            Registrarse
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Login;