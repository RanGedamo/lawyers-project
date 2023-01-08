import React from "react";
import {
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
export default function SignUpLawyer() {
  return (
    <>
      <MDBCardBody className="p-5">
        <h2 className="fw-bold mb-5">Sign up now</h2>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="First name"
              id="form1"
              type="text"
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Last name"
              id="form2"
              type="text"
            />
          </MDBCol>
        </MDBRow>
        <MDBInput wrapperClass="mb-4" label="Email" id="form3" type="email" />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form4"
          type="password"
        />
        <div className="d-flex justify-content-center mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Subscribe to our newsletter"
          />
        </div>
        <MDBBtn className="w-100 mb-4" size="md">
          sign up
        </MDBBtn>
      </MDBCardBody>
    </>
  );
}
