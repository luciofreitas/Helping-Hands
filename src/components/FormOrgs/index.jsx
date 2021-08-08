import React, {useState} from "react";
import {useHistory } from "react-router-dom";

import { Container, FormButton, Form, Titulo, InputNome, InputCnpj, InputNumber, InputCEP, InputUf, Div1, InputCity, InputEnd, InputEnd2, InputEmail } from "./styled";

import "./styleCSS.css"

function FormOrgs({createNewOrg}) {

const [formData, setFormData] = useState ({

  denominacao: '',
  cnpj: '',
  cep: '',
  end: '',
  end2: '',
  estado: '',
  cidade: '',
  contato: '',
  email: ''
})

const history = useHistory();

const handleInputChange = (e) =>{

  setFormData ({

    ...formData,

    [e.target.name]: e.target.value

  });
  
}

  const handleClean = (e) =>{

    setFormData({

      denominacao: '',
      cnpj: '',
      cep: '',
      end: '',
      estado: '',
      cidade: '',
      contato: '',
      email: '',
      end2: ''

    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createNewOrg({...formData, id: new Date().getTime()})

    history.push('/orgslist')
  }
 
  return (
    <Container>
      <Titulo>Formulário de Organizações</Titulo>

      <Form onSubmit ={handleSubmit}>
        <label>Denominação: <InputNome type="text" name="denominacao" value={formData.denominacao} onChange={handleInputChange} pattern="[A-Za-z]" required/></label>
        
        <label>CNPJ: <InputCnpj type="tel" minLength="14" maxLength="14" name="cnpj" value={formData.cnpj} onChange={handleInputChange} pattern="[0-9]" required/></label>
        
        <label>Contato: <InputNumber type="tel"  minLength="10" maxLength="11" name="contato" value={formData.contato} onChange={handleInputChange} pattern="[0-9]" required/> </label>

        <label>Email: <InputEmail type="text" name="email" value={formData.email} onChange={handleInputChange} pattern="[A-Za-z]+$+@+_" required/></label>
        
        <label>CEP: <InputCEP type="tel" minLength="8" name="cep" maxLength="8" value={formData.cep}  onChange={handleInputChange} pattern="[0-9]" required/></label>

        <label>Endereço:<InputEnd type="text" name="end" value={formData.end} onChange={handleInputChange} pattern="[A-Za-z]" required/>
                        <InputEnd2 type="text" name="end2" value={formData.end2} onChange={handleInputChange} pattern="[A-Za-z]" required/></label>
        <Div1>
          <label>UF: <InputUf type="text" name ="estado" maxLength="2" value={formData.estado} onChange={handleInputChange} pattern="[A-Za-z]" required/></label>
          <label>Cidade: <InputCity type="text" name ="cidade" value={formData.cidade} onChange={handleInputChange} pattern="[A-Za-z]" required/></label>
        </Div1>
       
      </Form>

      <div>
        <FormButton type="submit" color="primary" onClick={handleSubmit}>Confirmar</FormButton>

        <FormButton type="reset" color="primary" onClick={handleClean} >Cancelar</FormButton>
      </div>

    </Container>
  );
}

export default FormOrgs;
