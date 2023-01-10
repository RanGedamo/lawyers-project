import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import LawyerProfileCard from '../../component/cards/LawyerProfileCard';

export default function LawyerProfile() {
  return (
        <MDBRow>
            <MDBCol md='4'>
            <LawyerProfileCard/>
           </MDBCol>
           <MDBCol md='8'>
        <div className='pb-3'>about me</div>
        <MDBRow>
          <MDBCol md='6'>
            chart
          </MDBCol>
          <MDBCol md='6'>
            chart
          </MDBCol>
        </MDBRow>
      </MDBCol>
      </MDBRow>
  );
}