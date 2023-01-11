import React from "react";
import {
  MDBBtn,
  MDBCardImage,
  MDBContainer,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import RateReview from "../RateReview/RateReview";
import { useState } from "react";

export default function ReviewsInput() {
  const [start, setStars] = useState(0);
  return (
      <MDBContainer className="py-5"  >
            <section style={{background:"", height:"35vh"}}>
                   <div className="d-flex " >
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width="40px"
                    height=""
                  />
                  <MDBTypography className="mt-4" tag="h6">Add a comment</MDBTypography>
                </div>

                <div className="container">
                  <RateReview setStars={setStars} start={start} />
                  <MDBTextArea label="What is your view?" rows={4} />
                  <MDBBtn
                    color="light"
                    rounded
                    className="mt-3 float-end"
                  >
                    Send
                  </MDBBtn>
                </div>
                </section>

      </MDBContainer>
  );
}
