import React from "react";
import { MDBCol, MDBRipple, MDBRow, MDBTypography, MDBBadge } from "mdb-react-ui-kit";
import cookie from "js-cookie"
import { Link } from "react-router-dom";
import { withDefaultColorScheme } from "@chakra-ui/react";


export default function HomeLawyer({lawyers,id}) {

  const sendToCoockies=()=>{
    cookie.set("categoryId",id)
  }
  return (
    <MDBRow  onClick={sendToCoockies} >
          {lawyers ? 
          (
        lawyers.map((lawyer,i) => 
          
          <MDBCol key={i} size={4} >
          <MDBRipple
            className="bg-image hover-overlay shadow-1-strong rounded"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src={lawyer.image}
              alt="lawyer"
              className="h-25"
             
            />
            <Link to={`/lawyer/profile/${lawyer.email}`}>
              <div
                className="mask "
                style={{ backgroundImage: `${lawyer.selectedCover}` }}
              >
                <MDBRow className="text-center flex-column mt-5 pt-5">
                  <MDBCol>
                    <MDBTypography  className="mb-0 mt-5 pt-5 fw-bold">
                      My name is `${lawyer.firstName +lawyer.lastName}`
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol>
                    <MDBTypography  className="text-black mt-2">
                      cost per houre: {lawyer.price}
                      years of experience: {lawyer.experience}
                      {lawyer.available ? (
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