import React, {useState} from "react";

import { Container, FormButton, Form, Titulo, InputText, InputNumber, InputAge, LabelSexo, InputCEP} from "./styled";

import "./styleCSS.css";


function FormDonors() {

  const [nome, setNome] = useState ("");

  const [sobreNome, setSobreNome] = useState ("");

  const [nasc, setNasc] = useState ("");
 
  const [cep, setCep] = useState ("");

  const [end, setEnd] = useState ("");

  const [estado, setEstado] = useState ("");

  const [cidade, setCidade] = useState ("");

  const [contato, setContato] = useState ("");

  const handleNome = (e)=>{
    setNome(e.target.value);
  }

  const handleSobreNome =(e) =>{
    setSobreNome(e.target.value);
  }
  const handleNasc =(e) =>{
    setNasc(e.target.value);
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
  
  const handleCancel = (e) =>{
    setNome('');
    setSobreNome('');
    setNasc('');
    setCep('');
    setEnd('');
    setEstado('');
    setCidade('');
    setContato('');

  }
  const [next, setNext] = useState("");
  const handleNext = (e)=>{

    setNext(alert("formulario enviado com sucesso"))
  }


  return (
    <Container>
      <Titulo>Formulário de Doadores</Titulo>

      <Form>
        <label>Nome: <InputText type="text" value={nome} onChange={handleNome} pattern="[A-Za-z]" required/></label>
        
        <label>Sobrenome: <InputText type="text" value={sobreNome} onChange={handleSobreNome} pattern="[A-Za-z]" required/></label>
        
        <label>Data de Nascimento: <InputAge type="date" value={nasc} onChange={handleNasc} /></label>
        
        <label>CEP: <InputCEP type="tel" minLength="8" maxLength="8" value={cep}  onChange={handleCep} pattern="[0-9]" required/></label>

        <label>Endereço: <InputText type="text" value={end} onChange={handleEnd} pattern="[A-Za-z]" required/></label>
  
        <label>Estado: <InputText type="text" value={estado} onChange={handleEstado} pattern="[A-Za-z]" required/></label>

        <label>Cidade: <InputText type="text" value={cidade} onChange={handleCidade} pattern="[A-Za-z]" required/></label>
        
        <label>Contato: <InputNumber type="tel"  minLength="10" maxLength="11" value={contato} onChange={handleContato} pattern="[0-9]" required/> </label>
        
        <LabelSexo>Sexo:</LabelSexo>
        <label><input type="radio" id="masc" name="opcao"  /> Masculino</label>
        <label><input type="radio" id="fem" name="opcao"   /> Feminino</label>
        <label><input type="radio" id="outro" name="opcao" /> Outros</label>
        
        
        
      </Form>
      <div>
        <FormButton type="submit" color="primary" value={next} onClick={handleNext}>Confirmar</FormButton>
        <FormButton type="reset" color="primary" onClick={handleCancel} >Cancelar</FormButton>
      </div>
        
        
    </Container>
  );
}

export default FormDonors;
