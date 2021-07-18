import React from "react";

import { Titulo, Nav, H1, Ul, Li, StyledLink } from "./styled";

function Header() {
  return (
    <main>
      <Titulo>
        <H1>HelpingHands</H1>
      </Titulo>
      <Nav>
        <Ul>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>

          <Li>
            <StyledLink to="/donors">Doadores</StyledLink>
          </Li>

          <Li>
            <StyledLink to="/orgs">Organizações</StyledLink>
          </Li>

          <Li>
            <StyledLink to="/about">Sobre</StyledLink>
          </Li>

          <Li>
            <StyledLink to="/contact">Contato</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </main>
  );
}

export default Header;
