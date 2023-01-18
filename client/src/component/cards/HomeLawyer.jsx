import React from "react";
import {
  MDBCol,
  MDBRipple,
  MDBRow,
  MDBTypography,
  MDBBadge, 
} from "mdb-react-ui-kit";
import cookie from "js-cookie";
import { Link } from "react-router-dom";
import { withDefaultColorScheme } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export default function HomeLawyer({ lawyers, id }) {
  const sendToCoockies = () => {
    cookie.set("categoryId", id);
  };
  return (
    <MDBRow onClick={sendToCoockies}>
      {lawyers ? (
        lawyers.map((lawyer, i) => (
          <MDBCol key={i} style={{height:""}} className="mb-4 col-lg-6 m-6 col-sm-12">
            <MDBRipple
              className="bg-image hover-overlay shadow-1-strong rounded-5"
              rippleTag="div"
              rippleColor="light"
            >
              <img src={lawyer.imageString} alt="lawyer" className="w-100 imagecsscategory"/>
              <Link to={`/lawyer/profile/${lawyer.email}`}>
                <div
                  className="mask "
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <MDBRow className="text-center flex-column mt-5 pt-5">
                    <MDBCol>
                      <MDBTypography className="mb-1 mt-5 pt-5 fw-bold" style={{ color: "rgb(46, 133, 232)" }}>
                        My name is {lawyer.firstName} {lawyer.lastName}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol>
                      <MDBTypography className="text-white mt-2 mb-4">
                        hourly fee: {lawyer.price}$
                        <br />
                        years of experience: {lawyer.experience}
                        <br />
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
        ))
      ) : (
        <MDBCol>
          <Spinner />
        </MDBCol>
      )}
    </MDBRow>
  );
}