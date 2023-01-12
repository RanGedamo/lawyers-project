import React from "react";
import { MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBCardImage,MDBTypography,MDBIcon,MDBBtn, MDBBadge, MDBListGroup, MDBListGroupItem, } from "mdb-react-ui-kit";

export default function LawyerProfile({ select }) {
  // {
  //   _id: "1",
  //   selectedCover:
  //     "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?cs=srgb&dl=pexels-pixabay-268941.jpg&fm=jpg",
  //   img: "data:image/jpeg;base64,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",
  //   fullName: "Yosefa Gabay",
  //   filedCategory: "finnance",
  //   reviwes: [
  //     {
  //       user: "David",
  //       comment: "helped me alot",
  //       title: "Great",
  //     },
  //     {
  //       user: "Mason",
  //       comment: "helped me alot",
  //       title: "Bad",
  //     },
  //     {
  //       user: "Sun",
  //       comment: "helped me alot",
  //       title: "Excelent",
  //     },
  //     {
  //       user: "Sofia",
  //       comment: "helped me alot",
  //       title: "o.k",
  //     },
  //   ],
  //   rate: 5,
  //   location: "Rehovot",
  //   price: 500,
  //   experience: 5,
  //   available: true,
  //   avgTime: 5,
  //   workDueTime: 4,
  // },

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
                        {select.fullName}
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
                        specialice in {select.filedCategory}
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