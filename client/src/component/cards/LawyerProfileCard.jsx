import React, { useEffect, useRef, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard,MDBBadge, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import ContactLawyer from '../contactLawyer/ContactLawyer';
import cookie from "js-cookie"
export default function LawyerProfile({lawyer}) {
  const [popUp,setPopUp] = useState(false)
  const [selectedOption, setSelectedOption] = useState();
  const [sub,setSub]=useState()
  const PopUpContact = ()=>{
    return setPopUp(!popUp)
  }
  const subcategory=lawyer?.category

  setTimeout(()=>{
    setSub(subcategory[0])
  },1)

  // function handleChange(event) {
  //   setSelectedOption(event.target.value);
  //   console.log(selectedOption);

  // }
  console.log(sub);
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }} >
      < >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url(${lawyer?.selectedCover})`,backgroundSize:'cover', height: '200px' }}>
                <div className="ms-4 mt-2 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={lawyer?.imageString}
                    alt="Generic placeholder image" className="rounded-circle mt-4 mb-2 overflow-hidden" fluid style={{ zIndex: '1' }} />
                      {lawyer?.available ? (
                            <MDBBadge className='mt-3' pill light color="success">
                            Available
                          </MDBBadge>
                        ) : (
                          <MDBBadge className='mt-3' pill light color="warning">
                            Not Available
                          </MDBBadge>)}
                </div>
                <div className="ms-5 mt-5" >
                  <MDBTypography tag="h5" className=' display-6 text-dark'>{lawyer?.firstName} {lawyer?.lastName}</MDBTypography>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-start text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">{lawyer?.rate}/5</MDBCardText>
                    <MDBCardText className="small text-muted mb-0"><MDBIcon fas icon="star text-warning me-2" /> </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{lawyer?.experience} Years</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">experience</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">{lawyer?.workDueTime} Days</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Work due time</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className=' text-start mb-4'>
                <p><MDBIcon icon='long-arrow-alt-right' className='me-2 ms-1 text-info' />
                 <b>Title: </b>{lawyer?.title}</p> <br></br> 
                 <p><MDBIcon icon='long-arrow-alt-right' className='me-2 ms-1 text-info' />
                 <b>Description: </b>{lawyer?.description}</p> <br></br> 
                 <p><MDBIcon icon='long-arrow-alt-right' className='me-2 ms-1 text-info' />
                 <b>Estimated response time: </b>{lawyer?.avgReplayTime} days</p> <br></br> 
                 <p><MDBIcon icon='long-arrow-alt-right' className='me-2 ms-1 text-info' />
                 <b>service cost: </b>{lawyer?.price} $</p> <br></br> 
                </div>
                <div className="mb-5 text-start">
                  <MDBCardBody className="p-0">
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-envelope-open"></i>                    
                <MDBCardText>{lawyer?.email}</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-phone-square"></i>                   
                <MDBCardText>{lawyer?.phone}</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroup  className="rounded-3 text-start">
                
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-briefcase"></i>
                    <MDBCardText>{lawyer?.experience} Years</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                  <i className="fas fa-university"></i>                  
                  <MDBCardText>{lawyer?.title}</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            
                </div>
                <div className='m-5'>
        <select value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}  id="select" className="browser-default custom-select border-4"> 
        <option >Choose your option</option>
    
         {sub?.subCategory.map((item=>{
          return <option  value={item?.name}>{item?.name}</option>
         }))}
     
        </select>
      </div>
                  
                    <MDBBtn disabled={selectedOption?false:true} onClick={cookie.set("categoryName",selectedOption,{ expires: 7 })&&cookie.set("emailPayment",lawyer?.email,{ expires: 7 })} className=' me-2'><Link to={`/payment/${sub?._id}`}>Hire me </Link></MDBBtn>
                    
                    <MDBBtn className=' ms-2' onClick={PopUpContact}>Contact me {popUp?<ContactLawyer lawyer={lawyer} />:""}</MDBBtn>
                  
             
                  
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </>
    </div>
  );
}