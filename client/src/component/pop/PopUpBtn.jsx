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
import { Button } from "@chakra-ui/react";
export default function PopUpRole() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () =>setLawyer(false)+setUser(false)+ setBasicModal(!basicModal);
  const [user, setUser] = useState(false);
  const [lawyer, setLawyer] = useState(false);

  const formUser = () => {
    setUser(!user);
  };
  const formLawyer = () => {
    setLawyer(!lawyer);
  };

  return (
    <>
      <Button className="w-100 fw-bolder " colorScheme={'blue'} onClick={toggleShow} >Sign In</Button>
      <MDBModal className="mt-5 justify-content-center d-flex" show={basicModal} tabIndex="-1">
              <MDBModalBody>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
              {(lawyer||user) === false ? (
                <MDBCard className="h-25" >
                  <h1 className="mt-5">Who Are You ?</h1>
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
              {user === true ? <SignUpFormUser /> : ""}
              {lawyer === true ? <SignUpFormLawyer /> : ""}
                </MDBModalBody>
      </MDBModal>
      </>
  );
}
