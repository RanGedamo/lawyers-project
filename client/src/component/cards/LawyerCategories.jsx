import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBRipple,
  MDBBtn,
  MDBIcon
} from "mdb-react-ui-kit";

export default function LawyerCategories({ item }) {
  return (
      <MDBRipple className='bg-image col-sm-12 ' rippleTag='div' rippleColor='light'>
      <img src={item.img} className="ms-3"  style={{maxHeight:"20vh" ,width:"100%"}} />
        <div className='mask' >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <p className=' text-white'><b>{item.name}</b></p>
          </div>
        </div>
        <div className='hover-overlay'>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.9)' }}>
            <p className="mt-3 ">{item.description}</p>
          
          </div>
        </div>
    </MDBRipple>
  );
}
