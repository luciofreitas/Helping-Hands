import React from "react";

import {HeaderM, Titulo, Nav, H1, Ul, Li, StyledLink } from "./styled";

function Header() {
  return (
    <HeaderM>
      <Titulo>
        <H1>HelpingHands</H1>
      </Titulo>
      <Nav>
        <Ul>
          <Li>
            <StyledLink style ={{textDecoration:'none'}}to="/">Home</StyledLink>
          </Li>

          <Li>
            <StyledLink style ={{textDecoration:'none'}} to="/donors">Doadores</StyledLink>
          </Li>

          <Li>
            <StyledLink style ={{textDecoration:'none'}} to="/orgs">Organizações</StyledLink>
          </Li>
          <Li>
            <StyledLink style ={{textDecoration:'none'}} to="/orgslist">Orgs Listadas</StyledLink>
          </Li>
          <Li>
            <StyledLink style ={{textDecoration:'none'}} to="/about">Sobre</StyledLink>
          </Li>

          <Li>
            <StyledLink style ={{textDecoration:'none'}} to="/contact">Contato</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderM>
  );
}

export default Header;
