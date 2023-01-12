import React from "react";
import { MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBCardImage,MDBTypography,MDBIcon,MDBBtn, MDBBadge, MDBListGroup, MDBListGroupItem, } from "mdb-react-ui-kit";

export default function LWPCard({ select }) {

  return (
    <section
      className="vh-100"
      style={{ backgroundColor: "#f4f5f7" }}
      key={select._id}
    >
      <MDBContainer className="py-1 h-100">
        <MDBRow className=" h-100">
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
                        src={select.img}
                        alt="lawyer profile image"
                        className="my-2 "
                        style={{ width: "17vh" }}
                      />
                    </MDBCol>
                    <MDBCol size={12}>
                      <MDBTypography tag="h5">
                        {select.firstNane}
                        {select.lastName}
                        {select.available ? (
                          <MDBBadge pill light color="success">
                            {" "}
                            Available{" "}
                          </MDBBadge>
                        ) : (
                          <MDBBadge pill light color="warning">
                            {" "}
                            Not Available{" "}
                          </MDBBadge>
                        )}
                      </MDBTypography>
                      <MDBCardText>
                        {/* specialice in {select.filedCategory} */}
                      </MDBCardText>
                      <MDBIcon far icon="edit mb-5" />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                <MDBCol>
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">
                      <MDBListGroup style={{ minWidth: "22rem" }} light>
                        <MDBListGroupItem noBorders>
                          customers rate: {select.rate}
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders>
                          cost per hour: {select.price}
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders>
                          location: {select.location}
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders>
                          years of experience: {select.experience}
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders>
                          avrege work time on a case: {select.avgTime}
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders>
                          work do time: {select.workDueTime}
                        </MDBListGroupItem>
                      </MDBListGroup>
                      <MDBListGroup style={{ minWidth: "22rem" }} light>
                        <MDBListGroupItem disabled aria-disabled="true">
                          Cras justo odio
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Email</MDBTypography>

                            <MDBCardText className="text-muted">
                              info@example.com
                            </MDBCardText>
                          </MDBCol>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Phone</MDBTypography>
                            <MDBCardText className="text-muted">
                              123 456 789
                            </MDBCardText>
                          </MDBCol>
                        </MDBListGroupItem>
                        <MDBBtn>Hire Me</MDBBtn>
                        <MDBBtn>Contact Me</MDBBtn>
                      </MDBListGroup>
                    </MDBTypography>

                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}