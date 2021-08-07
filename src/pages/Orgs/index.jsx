import React from "react";

import FormOrgs from "../../components/FormOrgs";

import { Titulo } from "./styled";

function Orgs({createNewOrg}) {
  return (
    <main>
      <Titulo></Titulo>

      <FormOrgs  createNewOrg={createNewOrg}/>
    </main>
  );
}

export default Orgs;
