import React from "react";
import { MDBCol, MDBRipple, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function HomeLawyer() {
  return (
    <MDBCol size={4}>
      <MDBRipple
        className="bg-image hover-overlay shadow-1-strong rounded"
        rippleTag="div"
        rippleColor="light"
      >
        <img
          src="https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="h-25"
        />
        <Link to={"/lawyer/profile"}>
          <div
            className="mask "
            style={{ backgroundColor: "rgba(251, 251, 251, 0.6)" }}
          >
            <MDBRow className="text-center flex-column mt-5 pt-5">
              <MDBCol>
                <MDBTypography  className="mb-0 mt-5 pt-5 fw-bold">
                  My name is Jefff
                </MDBTypography>
              </MDBCol>
              <MDBCol>
                <MDBTypography  className="text-black mt-2">
                  With faded secondary text
                </MDBTypography>
              </MDBCol>
            </MDBRow>
          </div>
        </Link>
      </MDBRipple>
    </MDBCol>
  );
}

export default HomeLawyer;
