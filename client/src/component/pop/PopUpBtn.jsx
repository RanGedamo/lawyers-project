import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCard,
} from "mdb-react-ui-kit";
import SignUpFormUser from '../SignUp/SignUpFormUser'
import SignUpFormLawyer from '../SignUp/SignUpFormLawyer'
export default function PopUpRole() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () =>setLawyer(false)+setUser(false)+ setBasicModal(!basicModal);
  const [user, setUser] = useState(false);
  const [lawyer, setLawyer] = useState(false);

  const formUser = () => {
    setUser(!false);
  };
  const formLawyer = () => {
    setLawyer(!lawyer);
  };

  return (
    <>
      <MDBBtn onClick={toggleShow}>Sign In</MDBBtn>
      <MDBModal show={basicModal} tabIndex="-1">
        <MDBModalDialog className=" w-100">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle></MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>

              {(lawyer||user) === false ? (
                <MDBCard>
                  <h1>Who Are You ?</h1>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol>
                        <MDBBtn onClick={formLawyer}>Lawyer</MDBBtn>
                      </MDBCol>
                      <MDBCol>
                        <MDBBtn onClick={formUser}>User</MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ) : (
                ""
              )}
              {console.log(lawyer)}
              {user === true ? <SignUpFormUser /> : ""}
              {lawyer === true ? <SignUpFormLawyer /> : ""}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}