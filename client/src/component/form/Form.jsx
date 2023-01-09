import React from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBRadio,
    MDBTextArea,
    MDBCard,
    MDBCardImage,
    MDBContainer
  } from 'mdb-react-ui-kit';
 function Form() {
  return (
    <form>
      <MDBContainer>

        <MDBCard  className='mb-4' >
        <MDBCardImage className='mb-4' src='/suit-card-img.jpg' fluid alt='suit-card-image' />
        <a href='http/:'>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
    <div className='d-grid justify-content-center'> 
      <MDBInput className='mb-2' type='text' id='form1Example1' label='First Name' />
      <br/>
      <MDBInput className='mb-2' type='text' id='form1Example2' label='Last Name' />
      <br/>
      <MDBInput className='mb-2' type='email' id='form1Example3' label='Email address' />
      <br/>
      <MDBInput className='mb-2' type='date' id='form1Example4' label='Birth data' />
      <br/>
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Female' />
      <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Male' defaultChecked />
      <br/>
      <MDBRow className='mb-2'>
       
        <br/>
        <MDBTextArea className='mb-4' label='Message' id='textAreaExample'/>
        <MDBCol>
        <br/>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
        <br />
      </MDBRow>

      <MDBBtn type='submit' block className=" d-flex justify-content-center" >
        Sign in
      </MDBBtn>
    </div>
    <br>
    </br>
    <br />
    </MDBCard>
      </MDBContainer>
    </form>
  );
}
export default Form;