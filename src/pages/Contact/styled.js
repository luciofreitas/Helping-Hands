import styled from 'styled-components';
import {Button} from 'reactstrap';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 500px;
    height: auto;
    border: 1px solid black;
    margin: 5% auto;
    border-radius: 30px;
    background-color: #FFF5EE
    `;

export const Titulo = styled.h3`
    text-align: center;
    margin-top: 10px;
`;
export const SubTitulo = styled.h5`
    text-align: center;
    margin-top: 0px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px;

`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    margin-top: 10px;
`;

export const InputName = styled.input`
    width: 250px;
    outline: none;
    border:none;
    background-color: #FFF5EE;
    border-bottom: solid 1px black; 
`;
export const InputTel = styled.input`
    width: 175px;
    outline: none;
    border:none;
    background-color: #FFF5EE;
    border-bottom: solid 1px black; 
`;
export const InputEmail = styled.input`
    width: 250px;
    outline: none;
    border:none;
    background-color: #FFF5EE;
    border-bottom: solid 1px black; 
`;
export const InputBox = styled.textarea`
    width: 400px;
    outline: none;
    border-radius: 15px;

`;

export const FormButton = styled(Button)` 
  margin: 30px 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  outline: none;

`;


