import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderM = styled.div`
  border-bottom: 0px solid black;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  margin-top: 0%;
  background-color: #deb887;
`;
export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Mate SC", serif;
`;

export const H1 = styled.h1`
  font-weight: bold;
  color: black;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

export const Li = styled.li`
  margin: 1% 15px 1% 15px;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  font-size: 24px; 
  font-weight: normal;
  font-family: "Mate SC", serif;
  color: white;
  &:hover{
    border-radius: 10px;
    Color: rgba(255, 69, 0, 0.5);
    background-color: rgba(211,211,211, 0.5);
  }
`;
