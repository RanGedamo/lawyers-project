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
import { useState } from "react";
export default function SignUp() {
  const [auth,setAuth] = useState({firstName:"",lastName:"",email:"",image:"",password:""})

  const checkInputUser = (e)=>{
    e.preventDefault()
  
  }

  const formHandel=(e)=>{
    setAuth({...auth,[e.target.name]:e.target.value})

    console.log(auth);
  }



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
              name="firstName"
              onChange={formHandel}
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Last name"
              id="form2"
              type="text"
              name="lastName"
              onChange={formHandel}
            />
          </MDBCol>
        </MDBRow>
        <MDBInput wrapperClass="mb-4" label="Email" id="form3" type="email" name="email" onChange={formHandel}/>
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form4"
          type="password"
          name="password"
          onChange={formHandel}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="ConfirmPassword"
          id="form5"
          type="password"
        />
          <MDBFile label='Profile Picture' id='customFile' />
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
