import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Cookies() {
  return (
    <MDBCard  style={{color:'#FAFAFA'}} className="rounded-4 shadow-2 float-start m-4 bg-dark w-50 ">
      <MDBCardBody>
        <MDBCardText>
        We use cookies to personalize content and ads, 
              to provide social media features and to analyze our traffic. 
              We also share information about your use of our site with our social media,
               advertising and analytics partners who may combine it with other information that you've 
               provided to them or that they've collected from your use of their services.
        </MDBCardText>
        <div className='d-flex justify-content-center mt-3'>
        <MDBBtn className="me-5 bg-light"style={{color:'#000'}}>Accept</MDBBtn>
        <MDBBtn className="bg-light"style={{color:'#000'}}>Preferences</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}