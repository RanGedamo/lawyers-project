import React from "react";
import {
  MDBTextArea,
  MDBBtn,
  MDBCard,
  MDBRadio,
  MDBBtnGroup,
  MDBIcon,
} from "mdb-react-ui-kit";
import RateReview from "../RateReview/RateReview";
import { useState } from "react";

export default function ReviewsInput() {
    const [start,setStars]=useState(0)
  return (
    <MDBCard>

      <MDBTextArea label="Review" id="textAreaExample" rows={4} />
      <div className="mt-4 float-center d-flex justify-content-center align-content-center">
        <RateReview setStars={setStars} start={start} />

        </div>
      <div>
        
        <MDBBtn style={{ width: 100 }} color="light" rounded className="mt-3 float-center">
            
          {" "}
          Send{" "}
        </MDBBtn>
      

      </div>
    </MDBCard>
  );
}
