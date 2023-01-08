import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import SignUpFormUser from "../../pages/signUpFormUser/SignUpFormUser";
import SignUpFormLawyer from "../../pages/signUpFormLawyer/SignUpFormLawyer";

export default function PopUpRole() {
  const [basicModal, setBasicModal] = useState(true);
  const [user, setUser] = useState(false);
  const [lawyer, setLawyer] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const formUser = () => {
    setUser(true);
  };
  const formLawyer = () => {
    setLawyer(true);
  };
  return (
    <>
      <MDBModal show={basicModal} tabIndex="-1">
        <MDBBtn className=" mt-5 mb-3" color="secondary" onClick={toggleShow}>
          Close
        </MDBBtn>
        <MDBModalBody className="pt-0">
          {(user+lawyer) === false ? (
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

          {user === true ? <SignUpFormUser /> : ""}

          {lawyer === true ? <SignUpFormLawyer /> : ""}
        </MDBModalBody>
      </MDBModal>
    </>
  );
}
