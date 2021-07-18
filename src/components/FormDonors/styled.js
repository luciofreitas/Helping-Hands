import styled from "styled-components";
import { Button } from "reactstrap";

export const Container = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 5% 33% 0 33%;
  border-radius: 30px;
  background-color: #FFF5EE
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
  font-weight: bold;
`;

export const Titulo = styled.h3`
  margin-top: 10px;
`;

export const InputText = styled.input`
  width: 300px;
  height: 20px;
  background-color: #FFF5EE;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black
  
`;
export const InputAge = styled.input`
  width: 150px;
  height: 30px;
  background-color: #FFF5EE;
  margin-bottom: 3px;
  outline:none;
  border:none;
  border-bottom: solid 1px black

`;

export const InputNumber = styled.input`
   width: 120px;
   height: 30px;
   background-color: #FFF5EE;
   outline: none;
   border:none;
   border-bottom: solid 1px black

`;

export const LabelSexo = styled.label `
  margin-top: 3px;
`;

export const InputCEP = styled.input `
width: 80px;
height: 20px;
background-color: #FFF5EE;
margin: 0 0 3px 0;
outline: none;
border:none;
border-bottom: solid 1px black
`;
