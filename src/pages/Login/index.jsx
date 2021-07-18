import React, { useState } from "react";
import { Container } from "./styled";
import { Button, ButtonGroup } from "reactstrap";
import { Form } from "react-bootstrap";

const initialFormData = {
  email: "",
  password: "",
};

function LoginScreen() {
  const [formData, setFormData] = useState(initialFormData);
  const [next, setNext] = useState(false); // fazer com que depois de apertar o botão seguir o input da senha apareça

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`O email digitado: ${formData.email}`);
    console.log(`A senha digitada: ${formData.password}`);
  };

  const handleNext = () => {
    const { email } = formData;
    // validação de email aqui
    const isEmailValid = email.length > 0 && email.includes("@");

    if (isEmailValid) {
      setNext(true);
    } else {
      alert("email invalido!");
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setNext(false);
  };

  return (
    <Container>
      <Form>
        <Form.Group onSubmit={handleSubmit} controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Form.Text className="text-muted">
            Nós nunca iremos compartilhar seu email com alguem
          </Form.Text>
        </Form.Group>
        {next && (
          <div>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                value="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </div>
        )}

        <ButtonGroup>
          <Button
            color="primary"
            type={next ? "submit" : "button"}
            onClick={next ? handleSubmit : handleNext}
          >
            Seguir
          </Button>
          {next && (
            <Button color="secondary" type="button" onClick={handleCancel}>
              Cancelar
            </Button>
          )}
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default LoginScreen;
