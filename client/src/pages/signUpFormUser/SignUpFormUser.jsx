import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardImage,
} from "mdb-react-ui-kit";
import SignInSignUpTab from "../../component/SignInTabUser/SignInTabUser";

const SignUpFormUser = () => {

  return (
        <MDBContainer>
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://images.unsplash.com/photo-1590099543482-3b3d3083a474?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhdyUyMGNvdXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="login form"
                  className="rounded-start w-100 h-100"
                />
              </MDBCol>
              <MDBCol md="6">
                <SignInSignUpTab />
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>

  );
};

export default SignUpFormUser;
