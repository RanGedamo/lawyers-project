import React, { useState } from "react";
import { MDBCardBody, MDBIcon, MDBInput, MDBBtn, MDBContainer, MDBCollapse } from "mdb-react-ui-kit";
import { FacebookLoginButton, GoogleLoginButton, } from "react-social-login-buttons";
import { useSelector } from "react-redux";
import { FireBaseConfig } from "../../FireBaseConfig/FireBaseConfig";
import { loginUser } from "../../services/userService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function SignIn() {
  const [inputs, setInputs] = useState();
  const [userError, setUserError] = useState(false);
  const [userSuccess, setUserSuccess] = useState(false);
  const navigate = useNavigate()
  const changeInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    console.log(inputs);
  }

  const submitUserLogin = async () => {
    return await loginUser(inputs)
      .then(res => {
        if (res.token) {
          Cookies.set('authorization', res.token)
          Cookies.set('user', res.user.email)
          setUserError(false)
          setUserSuccess(true)
          setTimeout(()=>{
            navigate('/')
          },2000)
        }
      }).catch(err => {
        if(err){
          setUserSuccess(false)
          return setUserError(true)
        }
      })
  }
console.log( Cookies.get('user'));
  FireBaseConfig()
  const user = useSelector((state) => state.userData)
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

        {userError?
          <Alert status='error' className="mb-3">
          <AlertIcon />
          <AlertTitle>Error :</AlertTitle>
          <AlertDescription>Something went wrong... Check again.</AlertDescription>
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
        
        <div className="d-flex">
          <MDBContainer className="justify-content-center align-items-center d-grid">

            <GoogleLoginButton style={{ width: "250px" }} onClick={handleGoogleSignIn} />

            <FacebookLoginButton className="mt-3 mb-5 " style={{ width: "250px" }} onClick={signInWithFacebook} />
          </MDBContainer>
        </div>

        <MDBBtn className="w-100 mb-4" size="md" onClick={() => submitUserLogin()}>
          sign in
        </MDBBtn>
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
