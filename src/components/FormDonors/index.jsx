import React, {useState} from "react";

import { Container, FormButton, Form, Title, InputName, InputLastName, InputEnd, InputCity, InputState, InputNumber, InputAge, LabelSex, InputCEP} from "./styled";

import "./styleCSS.css";

function FormDonors() {

  const [formData, setFormData] = useState ({

    nome: '',
    sobreNome: '',
    nasc: '',
    cep: '',
    end: '',
    estado: '',
    cidade: '',
    contato: ''
})

  const handleInputChange = (e)=>{
setFormData ({

  ...formData,
  [e.target.name]: e.target.value
});

  }
  const handleClean = (e)=>{

    setFormData({
      nome: '',
      sobrenome: '',
      nasc: '',
      cep: '',
      end: '',
      estado: '',
      cidade: '',
      contato: ''
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(" Formulário enviado com sucesso")
    setFormData({
      nome: '',
      sobrenome: '',
      nasc: '',
      cep: '',
      end: '',
      estado: '',
      cidade: '',
      contato: ''
    })
  }
  return (
    <Container>
      <Title>Formulário de Doadores</Title>

      <Form>
        <label>Nome: <InputName type="text" name="nome" value={formData.nome} onChange={handleInputChange} pattern="[A-Za-z]" required/></label>
        
        <label>Sobrenome: <InputLastName type="text" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} pattern="[A-Za-z]" required/></label>
        
        <label>Data de Nascimento: <InputAge type="date" name="nasc" value={formData.nasc} onChange={handleInputChange} /></label>
        
        <label>Contato: <InputNumber type="tel"  minLength="10" maxLength="11" name="contato" value={formData.contato} onChange={handleInputChange} pattern="[0-9]" required/> </label>
        
        <label>CEP: <InputCEP type="tel" minLength="8" maxLength="8"  name="cep" value={formData.cep} onChange={handleInputChange} pattern="[0-9]" required/></label>

        <label>Endereço: <InputEnd type="text"  name="end" value={formData.end} onChange={handleInputChange} pattern="[A-Za-z]" required/></label>
      <div>
        <label>UF: <InputState type="text" maxLength="2" name="estado" value={formData.estado} onChange={handleInputChange} pattern="[A-Z]" required/></label>
        <label>Cidade: <InputCity type="text" name="cidade" value={formData.cidade} onChange={handleInputChange} pattern="[A-Za-z]" required/></label>
      </div>
        
        
        
        
        <LabelSex>Sexo:</LabelSex>
        <label><input type="radio" id="masc" name="opcao"  /> Masculino</label>
        <label><input type="radio" id="fem" name="opcao"   /> Feminino</label>
        <label><input type="radio" id="outro" name="opcao" /> Outros</label>
        
        
        
      </Form>
      <div>
        <FormButton type="submit" color="primary"onClick={handleSubmit}>Confirmar</FormButton>
        <FormButton type="reset" color="primary" onClick={handleClean} >Limpar Campos</FormButton>
      </div>
        
        
    </Container>
  );
}

export default FormDonors;
