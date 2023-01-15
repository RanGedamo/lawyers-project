import { LawyerFake } from "../sidder";
import react,{ useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBInput label='Example label' id='form1' type='text' />
  );
}