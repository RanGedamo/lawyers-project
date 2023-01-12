import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import {
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
export default function AgreementCard() {
  return (
    <MDBCard className="">
      <MDBCardImage
        style={{ height: 250 }}
        src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle className="">Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. Some quick
          example text to build on the card title and make up the bulk of the
          card's content.
        </MDBCardText>
        <MDBCardBody>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput id="form6Example1" label="First name" />
            </MDBCol>
            <MDBCol>
              <MDBInput id="form6Example2" label="Last name" />
            </MDBCol>
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            type="email"
            id="form6Example5"
            label="Email"
          />
          <MDBInput wrapperClass="mb-4" type="date" label="BirthDay" />
          <div className="text-start">
            sex
            <div className="d-flex">
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Male"
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Female"
                defaultChecked
              />
            </div>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label="Phone"
          />
          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Additional information"
          />
        </MDBCardBody>
        <MDBBtn className="float-start mt-4" href="#">
          Button
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
