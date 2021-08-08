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
  background-color: white;
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
  font-weight: bold;
`;

export const Title = styled.h3`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const InputName = styled.input`
  width: 315px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black;
`;
export const InputLastName = styled.input`
  width: 280px;
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
export const InputState = styled.input`
  width: 30px;
  height: 20px;
  margin: 0 5px 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black;
  text-align:center;
`;
export const InputCity = styled.input`
  width: 255px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black;
`;
export const InputAge = styled.input`
  width: 150px;
  height: 30px;
  margin-bottom: 3px;
  outline:none;
  border:none;
  border-bottom: solid 1px black;

`;

export const InputNumber = styled.input`
   width: 120px;
   height: 20px;
   outline: none;
   border:none;
   border-bottom: solid 1px black;

`;

export const LabelSex = styled.label `
  margin-top: 3px;
`;

export const InputCEP = styled.input `
  width: 80px;
  height: 20px;
  margin: 0 0 3px 0;
  outline: none;
  border:none;
  border-bottom: solid 1px black;

`;

