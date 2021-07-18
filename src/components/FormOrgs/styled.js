import styled from "styled-components";
import { Button } from "reactstrap";

export const Container = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 10% 33% 0 33%;
  border-radius: 30px;
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormButton = styled(Button)`
  margin: 0 5px 10px;
  border-radius: 10px;
`;

export const Titulo = styled.h3`
  margin-top: 10px;
`;
