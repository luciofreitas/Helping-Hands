import React from "react";

import {Container, Titulo, Div, DivText, InputImg} from './styled'


function About() {
  return (
    <Container>
      <Titulo>
        Sobre
      </Titulo>
      <Div>
          <InputImg type="image" name="image" src="https://i.etsystatic.com/18338096/r/il/9815df/1929948552/il_794xN.1929948552_fjyw.jpg"/>
          <DivText>
            <br/>
            <p>Ola, nós somos uma empresa com o ideal de viver em um mundo justo.</p>
            <p>Facilitando o trâmite entre os doadores e as ongs.</p>
            <p>Nos ajude a ajudar mais pessoas compartilhando sobre nós</p> 
          </DivText>
          
          
      </Div>
    </Container>
  );
}

export default About;
