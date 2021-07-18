import React, {useState} from "react";
import { Link } from "react-router-dom";

import { Container, FormButton, Form, Titulo, InputText, InputCnpj, InputNumber, InputCEP } from "./styled";

import "./styleCSS.css"

function FormOrgs() {

  const [denominacao, setDenominacao] = useState ("");

  const [cnpj, setCnpj] = useState ("");
 
  const [cep, setCep] = useState ("");

  const [end, setEnd] = useState ("");
  
  const [email, setEmail] = useState ("");

  const [estado, setEstado] = useState ("");

  const [cidade, setCidade] = useState ("");

  const [contato, setContato] = useState ("");

  const handleDenominacao = (e)=>{
    setDenominacao(e.target.value);
  }

  const handleCnpj =(e) =>{
    setCnpj(e.target.value);
  }
 
  const handleCep =(e) =>{
    setCep(e.target.value);
  }
  const handleEnd =(e) =>{
    setEnd(e.target.value);
  }
  const handleEstado =(e) =>{
    setEstado(e.target.value);
  }
  const handleCidade =(e) =>{
    setCidade(e.target.value);
  }
  const handleContato =(e) =>{
     setContato(e.target.value);
  }
  const handleEmail =(e) =>{
     setEmail(e.target.value);
  }

  const handleCancel = (e) =>{
    setDenominacao('');
    setCnpj('');
    setCep('');
    setEnd('');
    setEstado('');
    setCidade('');
    setContato('');
    setEmail('');
  }
  const [next, setNext] = useState("");

  const handleNext = (e)=>{

    setNext(alert("formulario enviado com sucesso"))
  }



  return (
    <Container>
      <Titulo>Formulário de Organizações</Titulo>

      <Form>
        <label>Denominação: <InputText type="text" value={denominacao} onChange={handleDenominacao} pattern="[A-Za-z]" required/></label>
        
        <label>CNPJ: <InputCnpj type="tel" minLength="14" maxLength="14" value={cnpj} onChange={handleCnpj} pattern="[0-9]" required/></label>
        
        <label>Contato: <InputNumber type="tel"  minLength="10" maxLength="11" value={contato} onChange={handleContato} pattern="[0-9]" required/> </label>

        <label>Email: <InputText type="text" value={email} onChange={handleEmail} pattern="[A-Za-z]+$+@+_" required/></label>
        
        <label>CEP: <InputCEP type="tel" minLength="8" maxLength="8" value={cep}  onChange={handleCep} pattern="[0-9]" required/></label>

        <label>Endereço: <InputText type="text" value={end} onChange={handleEnd} pattern="[A-Za-z]" required/></label>
        
        <label>Estado: <InputText type="text" value={estado} onChange={handleEstado} pattern="[A-Za-z]" required/></label>

        <label>Cidade: <InputText type="text" value={cidade} onChange={handleCidade} pattern="[A-Za-z]" required/></label>
      </Form>

      <div>
        <Link to="/orgslist">
          <FormButton type="submit" color="primary" value={next} onClick={handleNext}>Confirmar</FormButton>
        </Link>
        <FormButton type="reset" color="primary" onClick={handleCancel} >Cancelar</FormButton>
      </div>

    </Container>
  );
}

export default FormOrgs;
