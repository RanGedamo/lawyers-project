import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function CommentSection() {
  return (
    <section className="col-sm-12 mt-2" style={{ backgroundColor: "#f7f6f6" }}>
      <MDBContainer className="py-5 text-dark" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="2">
            <MDBCardImage
              className="rounded-circle shadow-1-strong me-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
              alt="avatar"
              width="40"
              height="40"
            />
          </MDBCol>
          <MDBCol md="8" className="flex-column">
            <MDBTypography
              tag="h6"
              className="text-primary fw-bold mb-0 text-start"
            >
              lara_stewart
            </MDBTypography>
            <MDBTypography tag="h6" className="text-dark  mb-0 text-start">
              Hmm, This poster looks cool{" "}
            </MDBTypography>
          </MDBCol>
          <MDBCol md="2" className="flex-column">
          <MDBTypography tag="h6" className="text-dark  mb-0 text-start">
          2 days ago
            </MDBTypography>
            <MDBTypography tag="h6" className="text-dark  mb-0 text-start">
            <MDBIcon fas icon="star text-warning me-2" />
              3.5            </MDBTypography>
            
          </MDBCol>
          {/* <MDBCard className="mb-3">
              <MDBCardBody>
                <div className="">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                    alt="avatar"
                    width="40"
                    height="40"
                  />

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <MDBTypography
                        tag="h6"
                        className="text-primary fw-bold mb-0"
                      >
                        lara_stewart
                        <span className="text-dark ms-2">
                          Hmm, This poster looks cool
                        </span>
                      </MDBTypography>
                      <p className="mb-0">2 days ago</p>
                    </div>
                    <div className="d-flex flex-row">
                        <MDBIcon fas icon="star text-warning me-2" />
                       3.5
                      </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard> */}
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
