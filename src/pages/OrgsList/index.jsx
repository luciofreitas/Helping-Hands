import React from "react";

import { Container, Titulo, ChildContainer, Li } from "./styled";

function OrgsList({orgs}) {
  return (
    <Container>
      <Titulo>
            Organizações Cadastradas
       </Titulo>
    <div>
      <ul>
        {orgs.map(org=>(
          <Li key={org.id}>
            <p>Denominação: {org.denominacao}</p>
            <p>CNPJ: {org.contato}</p>
            <p>CEP: {org.cep}</p>
            <p>Endereço: {org.end}</p>
            <p>Estado: {org.estado}</p>
            <p>Cidade: {org.cidade}</p>
            <p>Contato: {org.contato}</p>
          </Li>
        ))}
      </ul>
    </div>
    </Container>
  );
}

export default OrgsList;
