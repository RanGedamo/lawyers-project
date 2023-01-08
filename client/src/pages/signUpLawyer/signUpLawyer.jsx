import React from "react";
import {
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBFile
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
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form4"
              type="password"
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Phone"
              id="form5"
              type="text"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Title"
              id="form1"
              type="text"
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Category"
              id="form2"
              type="text"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Average Replay"
              id="form1"
              type="number"
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Available"
              id="form2"
              type="text"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Price"
              id="form1"
              type="number"
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Experience"
              id="form2"
              type="text"
            />
          </MDBCol>
        </MDBRow>
        <MDBInput wrapperClass="mb-4" label="Location" id="form2" type="text" />
        <MDBInput
          wrapperClass="mb-4"
          label="Description"
          id="form2"
          type="text"
        />
        <MDBRow>
          <MDBCol col="6">
            <MDBFile label="Profile Picture" id="customFile" />
          </MDBCol>
          <MDBCol col="6">
            <MDBFile label="Cover Picture" id="customFile" />
          </MDBCol>
        </MDBRow>
        <div className="d-flex justify-content-center mb-4 mt-4">
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
