import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
  
import Routes from "./routes";

import { MasterContainer, PageMainContainer } from "./styledApp";




function App() {

  const [orgs, setOrgs] = useState ([]);

    const createNewOrg = (newOrg) => {
      const updatedOrgsList = [...orgs, newOrg]
      setOrgs(updatedOrgsList)
    }

    const [donors, setDonors] = useState ([]);
    const createNewDonor = (newDonor)=>{
      const updatedDonorsList = [...donors, newDonor]
      setDonors(updatedDonorsList)
      const newDonorWithNearOrgs = addNearOrgsToNewDonor(newDonor);
      setDonors ([...donors, newDonorWithNearOrgs]);
    }

    const addNearOrgsToNewDonor = (newDonor) => {
      const nearOrgs = orgs.filter((org) => org.cidade === newDonor.cidade);
  
      return {
        ...newDonor,
        nearOrgs
      };
    };

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
