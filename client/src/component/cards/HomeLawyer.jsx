import React from "react";
import { MDBCol, MDBRipple, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function HomeLawyer({lawyers}) {

  return (
    <MDBRow>
          {lawyers ? 
          (
        lawyers.map(lawyer => 
          
          <MDBCol size={4} key={lawyer._id}>
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src={lawyer.img}
              className="h-25"
            />
            <Link to={`/lawyer/profile/${lawyer._id}`}>
              <div
                className="mask "
                style={{ backgroundImage: `${lawyer.selectedCover}` }}
              >
                <MDBRow className="text-center flex-column mt-5 pt-5">
                  <MDBCol>
                    <MDBTypography  className="mb-0 mt-5 pt-5 fw-bold">
                      My name is `${lawyer.fullName}`
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
    
        )):(
<MDBCol>no data found</MDBCol>
        )}
    </MDBRow>
  );
}