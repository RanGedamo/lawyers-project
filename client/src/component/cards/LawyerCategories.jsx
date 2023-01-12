import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function LawyerCategories({ select ,key}) {
  return (
    <MDBRipple
      className="bg-image hover-overlay shadow-1-strong rounded"
      rippleTag="div"
      rippleColor="light"
    >
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{select.filedCategory[key]}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {console.log(select)}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>{" "}
      <a href="#!">
        <div
          className="mask"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.7)" }}
        >
          vsfbsbsbs
        </div>
      </a>
    </MDBRipple>
  );
}
