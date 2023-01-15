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
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCard,
  MDBCol,
  MDBRow,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function ContactLawyer({lawyer}) {
  const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
                    <MDBRow className="justify-content-center">
                    <MDBCol >
                        <MDBCard style={{ borderRadius: '15px' }}>
                        <MDBCardBody className="p-4">
                            <div className="d-flex text-black">
                            <div className="flex-shrink-0">
                                <MDBCardImage
                                style={{ width: '180px', borderRadius: '10px' }}
                                src={lawyer.image}
                                alt='Generic placeholder image'
                                fluid />
                            </div>
                            <div className="">
                                <MDBCardTitle>{lawyer.firstName} {lawyer.lastName}</MDBCardTitle>
                                <MDBCardText>{lawyer.title}</MDBCardText>

                                <div className="d-flex justify-content-start rounded-3 p-4 mb-2"
                                style={{ backgroundColor: '#efefef' }}>
                                <div>
                                    <p className="small text-muted mb-1">Phone</p>
                                    <p className="mb-0">{lawyer.phone}</p>
                                </div>
                                <div className="px-3">
                                    <p className="small text-muted mb-1">Email</p>
                                    <p className="mb-0">{lawyer.email}</p>
                                </div>
                                </div>
                                <div className="d-flex pt-1">
                                </div>
                            </div>
                            </div>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    </MDBRow>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}