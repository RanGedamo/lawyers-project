import React from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
  } from "mdb-react-ui-kit";

function CardSuit() {
    return (
        <MDBContainer className="my-3 square border border-2 rounded-5 ">
            {/* <MDBCarouselInner> */}
                <br />
              <MDBCarouselItem className="active text-center">
                <div className="d-flex justify-content-evenly">
              <MDBCol lg="4">
                <br />
                <br />
                    <h5 className="text-end">Lawyer Name</h5>
                    <p className="text-end" >Crime Lawyer</p>
                  </MDBCol>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  alt="avatar"
                  className="rounded-circle shadow-1-strong mb-4 d-flex justify-content-center"
                  style={{ width: "150px" }}
                />
                </div>
                 <p className="text-start">Lawyer for criminals</p>
                 <hr className="hr" />
                <MDBRow className="d-flex justify-content-center text-end">
                  <div className="text-start mi-1" >
                    <span><li>money</li></span>
                    <span><li>Family</li></span>  
                    </div>
                </MDBRow>
              </MDBCarouselItem>
            {/* </MDBCarouselInner> */}
            <br />
        </MDBContainer>
      );
    
}
export default CardSuit;
