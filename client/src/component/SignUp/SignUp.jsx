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
import { registerUser } from "../../services/userService";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
export default function SignUp() {
  const [auth,setAuth] = useState()

  const [userError, setUserError] = useState({
    error:false,
    msg:""
  });
  const [userSuccess, setUserSuccess] = useState(false);

  const formHandel=(e)=>{
    setAuth({...auth,[e.target.name]:e.target.value})
    console.log(auth);
  }
  
  const checkInputUser = async()=>{
    return await registerUser(auth)
    .then(res=>console.log(res))
    .catch(err=>{
      if(err.response.data.message){
       return setUserError({msg:err.response.data.message,error:true});
      }
    })
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
          {/* <MDBFile label='Profile Picture' id='customFile' /> */}
        <div className="d-flex justify-content-center mb-4 mt-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Subscribe to our newsletter"
          />
        </div>

        {userError.error?
          <Alert status='error' className="mb-3">
          <AlertIcon />
          <AlertTitle>Error :</AlertTitle>
          <AlertDescription>{userError.msg}</AlertDescription>
        </Alert>:
        ""
        }
        {userSuccess?
          <Alert status='success' className="mb-3">
          <AlertIcon />
          <AlertTitle>Successfully :</AlertTitle>
          <AlertDescription>Welcome to law market</AlertDescription>
        </Alert>:
        ""
        }

        <MDBBtn className="w-100 mb-4" size="md" onClick={()=>checkInputUser()}>
          sign up
        </MDBBtn>
      </MDBCardBody>
    </>
  );
}
