import styled from "styled-components";
import { Button } from "reactstrap";

export const Container = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin: 5% auto;
  border-radius: 30px;
  background-color: white;
`;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;

export const FormButton = styled(Button)`
  margin: 30px 5px 10px;
  border-radius: 10px;
  font-weight: bold;
`;

export const Titulo = styled.h3`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const InputNome = styled.input`
  width: 245px;
  height: 20px;
  margin: 5px;
  outline: none;
  border:none;
  border-bottom: solid 1px black; 
`;
export const InputEmail = styled.input`
  width: 321px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black; 
`;
export const InputEnd = styled.input`
  width: 300px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black; 
`;
export const InputEnd2 = styled.input`
  width: 370px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black; 
`;

export const InputCity = styled.input`
  width: 250px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black; 
`;
export const InputUf = styled.input`
  width: 30px;
  height: 20px;
  margin: 0 5px 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black;
  text-align:center;
  
`;
export const InputNumber = styled.input`
   width: 120px;
   height: 20px;
   outline: none;
   border:none;
   border-bottom: solid 1px black;

`;
export const InputCEP = styled.input `
  width: 80px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black;

`;

export const InputCnpj = styled.input `
  width: 120px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black;
`;

export const Div1 = styled.div`
  width: auto;
  height: auto;
  display: flex;
  
`;