import React from "react";
import { useState } from "react";

import { Container, Titulo, SubTitulo, Form, InputName, InputTel, InputEmail, InputBox, FormButton, Label } from "./styled"


function Contact() {

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    textarea: ''
  })

  const handleInputChange = (e)=>{
    setFormData ({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleClean = (e)=>{
    setFormData ({
      nome: '',
      telefone: '',
      email: '',
      textarea: ''
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert("Email recebido, por favor aguarde o retorno")
    setFormData ({
      nome: '',
      telefone: '',
      email: '',
      textarea: ''
    })
  }

  return (
    <Container>

      <Titulo>Precisou de ajuda? </Titulo>
      <SubTitulo>Entre em contato agora mesmo</SubTitulo>

      <Form>
        <Label>Nome: </Label>
        <InputName type="text" name="nome" value={formData.nome} onChange={handleInputChange}  pattern ="[A-Za-z]" required/>
        <Label>Telefone/Celular: </Label>
        <InputTel type="tel" name="telefone" value={formData.telefone} onChange={handleInputChange} pattern ="[A-Za-z]" required/>
        <Label>Email: </Label>
        <InputEmail type="email" name="email" value={formData.email} onChange={handleInputChange} pattern ="[A-Za-z]" required/>   
        <Label>Informe aqui o seu problema: </Label>
        <InputBox type="hidden" name="textarea" value={formData.textarea} onChange={handleInputChange} pattern="[A-Za-z]" required/>
      </Form>
      <div>
        <FormButton type="submit" color="primary" onClick={handleSubmit} >Confirmar</FormButton>

        <FormButton type="reset" color="primary" onClick={handleClean} >Cancelar</FormButton>
      </div>
    </Container>
  );
}

export default Contact;
