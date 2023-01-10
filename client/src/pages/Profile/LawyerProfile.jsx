import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import LawyerProfileCard from '../../component/cards/LawyerProfileCard';
import AreaChart from '../../component/chart/Chart';
import ReviewsInput from '../../component/Reviews/Reviews';
import CommentSection from '../../component/commentSection/CommentSection';
export default function LawyerProfile() {
  return (
<div className='container-fluid h-100'>

        <MDBRow className=''>
            <MDBCol md='4'>
            <LawyerProfileCard/>
           </MDBCol>
           <MDBCol md='8'>
        <div className='pb-3 '>about me</div>
        <MDBRow >
          <MDBCol md='12'>
            <AreaChart />
          </MDBCol>
          <MDBCol md='12' className='d-flex row justify-content-center align-align-items-center '>
          <CommentSection/>
          <CommentSection/>

          <ReviewsInput/>

          </MDBCol>
          <MDBCol>
          </MDBCol>
        </MDBRow>
        
      </MDBCol>
      </MDBRow>
      </div>

  );
}








