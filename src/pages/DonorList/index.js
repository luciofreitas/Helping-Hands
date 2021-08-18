import React from 'react';

import {Container, Titulo, Li, Div1, Div2} from './styled';

function DonorList({donors}) {
    return (
      <Container>
        <Titulo>
              Organizações Cadastradas
         </Titulo>
      <div>
        <ul>
          {donors.map(donor=>(
            <Li key={donor.id} style={{marginRight:22}}>
              <Div1>
                <p>Nome: {donor.nome} {donor.sobrenome}</p>
              </Div1>
              <Div2>
                <p>Contato: {donor.contato}</p>
                <p>Email: {donor.email}</p>
              </Div2>
            </Li>
          ))}
        </ul>
      </div>
      </Container>
    );
  }
  
  export default DonorList;