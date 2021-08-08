import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
  
import Routes from "./routes";




function App() {

  const [orgs, setOrgs] = useState ([
    {
      denominacao: 'Ong 1',
      cnpj: '22222222222',
      cep: '24020125',
      estado: 'RJ',
      cidade: 'Niterói',
      contato: '21991870404',
      email: 'luciodfp@gmail.com',
      end: 'rua quinze de novembro'
    },
    {
      denominacao: 'Ong 2',
      cnpj: '44444444444444',
      cep: '24020125',
      estado: 'RJ',
      cidade: 'Niterói',
      contato: '21991870404',
      email: 'lucio-freitas@hotmail.com',
      end: 'rua quinze de novembro'
    }
  ]);

    const createNewOrg = (newOrg) => {
      const updatedOrgsList = [...orgs, newOrg]
      setOrgs(updatedOrgsList)
    }
  return (
    <BrowserRouter>
      <Header />
      <Routes orgs ={orgs} createNewOrg={createNewOrg} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
