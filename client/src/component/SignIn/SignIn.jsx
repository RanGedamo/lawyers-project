import React, { useState } from "react";
import { MDBCardBody, MDBIcon, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import {  FacebookLoginButton,GoogleLoginButton,} from "react-social-login-buttons";
import { useSelector } from "react-redux";
import { FireBaseConfig } from "../../FireBaseConfig/FireBaseConfig";

export default function SignIn() {
  const [inputs, setInputs] = useState();
  const changeInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    console.log(inputs);
  }

FireBaseConfig()
  const user=useSelector((state)=>state.userData)
  console.log(user);
  // const [error] = useState("");
  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    try {
      await user.google();
    } catch (error) {
      console.log(error.message);
    }
  };
  const signInWithFacebook = async (event) => {
    event.preventDefault();
    try {
      await user.facebook();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <MDBCardBody className="d-flex flex-column">
        <div className="d-flex flex-row mt-2">
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "black" }} />
          <span className="h1 fw-bold mb-0">Lawyer & Order</span>
        </div>
        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
          Sign into your account
        </h5>
        {/* {error && <Alert severity="error">{error}</Alert>} */}
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="formControlLgEmail"
          type="email"
          size="lg"
          name="email"
          onChange={(e) => changeInputs(e)}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="formControlLgPassword"
          type="password"
          size="lg"
          name="password"
          onChange={(e) => changeInputs(e)}
        />
        <MDBBtn className="mb-3 px-5" size="lg" onClick={user.logOut}>
          Login
        </MDBBtn>
        <GoogleLoginButton onClick={handleGoogleSignIn} />
        <FacebookLoginButton className="mt-3" onClick={signInWithFacebook} />
        <div className="d-flex justify-content-center text-center align-items-center mt-5">
          <p href="#!" className="small text-muted me-1">
            Terms of use.
          </p>
          <p href="#!" className="small text-muted">
            Privacy policy
          </p>
        </div>
      </MDBCardBody>
    </>
  );
}
