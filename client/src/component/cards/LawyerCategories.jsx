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

export default function LawyerCategories({ select ,index}) {
  return (
      <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
      <img src={select.filedCategory[index].categoryImg} className='w-100' />
        <div className='mask' >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <p className=' display-6 mb-0 text-white'><b>{select.filedCategory[index].categoryName}</b></p>
          </div>
        </div>
        <div className='hover-overlay'>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.9)' }}>
            <p className="mt-3 fw-bold">{select.filedCategory[index].categoryName}</p>
            <p className="mt-3 fw-bold"><MDBIcon far icon="window-minimize" />{select.filedCategory[index].subCategory[index].name}</p>
            <p className=" fw-bold"><MDBIcon far icon="window-minimize" />{select.filedCategory[index].subCategory[index].name}</p>
            <p className=" fw-bold"><MDBIcon far icon="window-minimize" />{select.filedCategory[index].subCategory[index].name}</p>
            <p className=" fw-bold"><MDBIcon far icon="window-minimize" />{select.filedCategory[index].subCategory[index].name}</p>
          </div>
        </div>
    </MDBRipple>
  );
}
