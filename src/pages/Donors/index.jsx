import React from "react";

import FormDonors from "../../components/FormDonors";

import { Titulo } from "./styled";

function Donors({createNewDonor}) {
  return (
    <main>
      <FormDonors createNewDonor={createNewDonor} />
    </main>
  );
}

export default Donors;
