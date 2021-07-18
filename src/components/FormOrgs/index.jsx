import React from "react";
import { Link } from "react-router-dom";

import { Container, FormButton, Form, Titulo } from "./styled";

function FormOrgs() {
  return (
    <Container>
      <Titulo>Formulário de Orgs</Titulo>

      <Form>
        <label>name</label>
        <input type="text" />
      </Form>

      <Link to="/donors">
        <FormButton color="primary">Doadores</FormButton>
      </Link>
    </Container>
  );
}

export default FormOrgs;
