import React, { useEffect, useState } from "react";
import './PopupBtn.css'
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
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

export default function PopUpRole({text}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
   const [user, setUser] = useState(false);
   const [lawyer, setLawyer] = useState(false);

   const signinHandler = ()=>{
    setLawyer(false)
    setUser(false)
    onOpen()
   }
   const formUser = () => {
     setUser(!user);
   };
   const formLawyer = () => {
     setLawyer(!lawyer);
   };
  return (
    <>
      <Button colorScheme={'blue'} onClick={signinHandler}>{text}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="popUpContainer">
             {(lawyer||user) === false ? (
                <MDBCard className="h-25 text-center" >
                  <h1 className="mt-5 display-5">Who Are You ?</h1>
                  <MDBCardBody >
                    <MDBRow>
                      <MDBCol>
                        <Button className="p-5" colorScheme={'blue'} onClick={formLawyer}>Lawyer</Button>
                      </MDBCol>
                      <MDBCol>
                        <Button className="p-5" colorScheme={'blue'} onClick={formUser}>User</Button>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ) : (
                ""
              )}
              {user === true ? <SignUpFormUser /> : ""}
              {lawyer === true ? <SignUpFormLawyer /> : ""}
        </ModalContent>
      </Modal>
    </>
  )
}