import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import SignUpSignInForm from '../../pages/signUpSignInForm/signUpSignInForm';

export default function PopUpBtn() {
  const [basicModal, setBasicModal] = useState(true);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal show={basicModal}  tabIndex='-1'>
            <MDBBtn color='secondary' onClick={toggleShow}>Close</MDBBtn>
            <MDBModalBody className='pt-0'><SignUpSignInForm/></MDBModalBody>
      </MDBModal>
      
    </>
  );
}