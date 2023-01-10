import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBBadge,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import RateReview from "../RateReview/RateReview";

export default function Reviews() {
    const [start,setStars]=useState(0)

  return (
    <MDBCard>
    <MDBCardBody>
      <div className='d-flex justify-content-between align-items-start text-start'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />

          <div className='ms-5'>
            <p className='fw-bold mb-1'>John Doe</p>
            <p className='text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam laudantium sapiente dicta iusto explicabo, debitis fuga consequuntur? Laborum, a.</p>
          </div>
        </div>
        <MDBBadge pill color='light' light>
          <RateReview setStars={setStars} start={start}/>
        </MDBBadge>
      </div>
    </MDBCardBody>
  </MDBCard>
  );
}
