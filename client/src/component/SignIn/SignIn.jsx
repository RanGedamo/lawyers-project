import React from "react";
import { MDBCardBody, MDBIcon, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { UserAuth } from "../../context/UserContext";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { useState } from "react";
import { Alert } from "@mui/material";

export default function SignIn() {
  const { googleSignIn, facebookSignIn } = UserAuth();
  const [error] = useState("");
  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };
  const signInWithFacebook = async (event) => {
    event.preventDefault();
    try {
      await facebookSignIn();
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
        {error && <Alert severity="error">{error}</Alert>}
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="formControlLgEmail"
          type="email"
          size="lg"
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="formControlLgPassword"
          type="password"
          size="lg"
        />
        <MDBBtn className="mb-3 px-5" size="lg">
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
