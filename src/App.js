import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
  
import Routes from "./routes";


function NewOrgList (){

  const handleFormSubmit =e =>{
    e.preventDefault();
  }

  const [addNewOrg, setAddNewOrg] = useState ([
    {
      id: 1,
      denominacao: 'Ong',
      contato: '21991870404'
    },
    {
      id: 2,
      denominacao: 'Org2',
      contato: '0000000000'
    }
  ]);

  return (
    <div>
      {
        addNewOrg.map(i=>(
        <div key={i.id}>{i.denominacao}</div>
      ))
      }

    </div>
  );
}

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default {App, NewOrgList};
