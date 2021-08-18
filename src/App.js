import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
  
import Routes from "./routes";

import { MasterContainer, PageMainContainer } from "./styledApp";




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

    const [donors, setDonors] = useState ([
      {
        nome: 'Lucio',
        sobrenome: 'de Freitas Pereira',
        contato: '21991870404',
        email: 'luciodfp@gmail.com'
      }
    ]);
    const createNewDonor = (newDonor)=>{
      const updatedDonorsList = [...donors, newDonor]
      setDonors(updatedDonorsList)
    }
  return (
    <MasterContainer>
      <BrowserRouter>
      <Header />
        <PageMainContainer>
          <Routes orgs ={orgs} createNewOrg={createNewOrg}
                  donors={donors} createNewDonor={createNewDonor} />
        </PageMainContainer>
      <Footer />
    </BrowserRouter>
    </MasterContainer>

  );
}

export default App;
