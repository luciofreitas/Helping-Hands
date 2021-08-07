import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
  
import Routes from "./routes";




function App() {

  const [orgs, setOrgs] = useState ([]);

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
