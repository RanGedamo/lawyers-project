import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function LawyerProfile() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0 flex-column">
                <MDBCol
                  className=" bg-dark text-center text-white d-flex  justify-content-center align-items-center"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                    borderBottomRightRadius: ".5rem",
                  }}
                >
                  <MDBRow className=" d-flex justify-content-center">
                    <MDBCol size={12} className="d-flex justify-content-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="Avatar"
                        className="my-2 "
                        style={{ width: "17vh" }}
                      />
                    </MDBCol>
                    <MDBCol size={12}>
                      <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                      <MDBCardText>Web Designer</MDBCardText>
                      <MDBIcon far icon="edit mb-5" />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                <MDBCol>
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-3">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          info@example.com
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">
                          123 456 789
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-3">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          info@example.com
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">
                          123 456 789
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
              <MDBBtn>Hire Me !</MDBBtn>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
