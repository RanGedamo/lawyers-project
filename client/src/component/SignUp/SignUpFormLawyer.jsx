import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardImage,
} from "mdb-react-ui-kit";
import SignInTabLawyer from "../Tab/SignInTabLawyer";
 
export default function SignUpFormLawyer() {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3eWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="login form"
              className="rounded-start w-100 h-100"
            />
          </MDBCol>
          <MDBCol md="6">
            <SignInTabLawyer />
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}