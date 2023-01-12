import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard,MDBBadge, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdb-react-ui-kit';

export default function LawyerProfile({select}) {
  
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }} key={select._id}>
      < >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url(${select.selectedCover})`,backgroundSize:'cover', height: '200px' }}>
                <div className="ms-4 mt-2 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={select.img}
                    alt="Generic placeholder image" className="rounded-circle mt-4 mb-2" fluid style={{ width: '150px', zIndex: '1' }} />
                      {select.available ? (
                            <MDBBadge className='mt-3' pill light color="success">
                            {" "}
                            Available{" "}
                          </MDBBadge>
                        ) : (
                          <MDBBadge className='mt-3' pill light color="warning">
                            {" "}
                            Not Available{" "}
                          </MDBBadge>)}
                </div>
                <div className="ms-5 mt-5" >
                  <MDBTypography tag="h5" className=' display-6'>{select.firstName} {select.lastName}</MDBTypography>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-start text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">{select.rate}/5</MDBCardText>
                    <MDBCardText className="small text-muted mb-0"><i className="far fa-star"></i> </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{select.experience} Years</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">experience</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">{select.workDueTime} Days</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Work due time</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className=' text-start mb-4'>
                {select.filedCategory.map((item,i)=>
                {return(               
                <div key={i}>
                
                  <MDBIcon icon='long-arrow-alt-right' className='me-2 ms-1 text-info' />
                  <b>Title:</b> <br></br>{select.title}
                  </div> )}
                  )}
                  <div>
                
                  <MDBIcon icon='long-arrow-alt-right' className='me-2 ms-1 text-info' />
                  <b>Description:</b> 
                  <br></br>
                  {select.description}
                  </div>
                </div>
                <div className="mb-5 text-start">
                  <MDBCardBody className="p-0">
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-envelope-open"></i>                    
                <MDBCardText>{select.email}</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-phone-square"></i>                   
                <MDBCardText>{select.phone}</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroup  className="rounded-3 text-start">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <i className="fas fa-map-marker-alt"></i>                   
                 <MDBCardText className=' text-start'>{select.location}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-briefcase"></i>
                    <MDBCardText>{select.experience} Years</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <i className="fas fa-university"></i>                  
                  <MDBCardText>{select.title}</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
                </div>
                  <MDBBtn className=' me-2'>Hire me</MDBBtn>
                  <MDBBtn className=' ms-2'>Contact me</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </>
    </div>
  );
}