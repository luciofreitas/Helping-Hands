import React from "react";

import { Container, Titulo, Li, Div1, Div2, Div3, Div4, Div5 } from "./styled";

import "./style.css"

function OrgsList({orgs}) {
  return (
    <Container>
      <Titulo>
            Organizações Cadastradas
       </Titulo>
    <div>
      <ul>
        {orgs.map(org=>(
          <Li key={org.id} style={{marginRight:22}}>
            <Div1>
              <p>Denominação: {org.denominacao}</p>
              <p>CNPJ: {org.contato}</p>
            </Div1>
            <Div2>
              <p>Contato: {org.contato}</p>
              <p>Email: {org.email}</p>
            </Div2>
            <Div3>
              <p>CEP: {org.cep}</p>
              <p>UF: {org.estado}</p>
              <p>Cidade: {org.cidade}</p>
            </Div3>
            <Div4>
              <p>Endereço: {org.end}</p>
            </Div4>
          </Li>
        ))}
      </ul>
    </div>
    </Container>
  );
}

export default OrgsList;
