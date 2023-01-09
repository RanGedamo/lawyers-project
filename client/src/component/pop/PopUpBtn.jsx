import React, { useState } from "react";
import { MDBBtn, MDBModal, MDBModalBody, MDBCard,  MDBCardBody,  MDBCol,  MDBRow } from "mdb-react-ui-kit";
import SignUpFormUser from "../SignUp/SignUpFormUser";
import SignUpFormLawyer from "../SignUp/SignUpFormLawyer";

export default function PopUpRole() {
  const [user, setUser] = useState(false);
  const [lawyer, setLawyer] = useState(false);
  const [staticModal, setStaticModal] = useState(true);
  const toggleShow = () => setStaticModal(!staticModal);
  

  const formUser = () => {
    setUser(true);
  };
  const formLawyer = () => {
    setLawyer(true);
  };
  return (
    <>
      <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
        <MDBBtn className=" mt-5 mb-3" color="secondary" onClick={toggleShow}>
          Close
        </MDBBtn>
        <MDBModalBody className="pt-0">
          {user + lawyer == false ? (
            <MDBCard>
              <h1>Who Are You ?</h1>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                      className="img-thumbnail"
                      alt="..."
                    />
                    <MDBBtn onClick={formLawyer}>Lawyer</MDBBtn>
                  </MDBCol>
                  <MDBCol>
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                      className="img-thumbnail"
                      alt="..."
                    />
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