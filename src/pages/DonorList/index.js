import React from 'react';

import {Container, Titulo, Li, Div1, Div2, Div3, Div4} from './styled';

function DonorList({donors}) {
    return (
      <Container>
        <Titulo>
              Doadores Cadastrados
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
              </Div2>
              <Div3>
                <p>Email: {donor.email}</p>
              </Div3>
              <Div4>
                  {donor.nearOrgs && donor.nearOrgs.map((nearOrg)=> (
                      <p>Organizações Próximas: {nearOrg.denominacao} </p>
                  ))}
              </Div4>
            </Li>
          ))}
        </ul>
      </div>
      </Container>
    );
  }
  
  export default DonorList;