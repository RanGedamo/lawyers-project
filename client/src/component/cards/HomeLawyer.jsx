import React from "react";
import {
  MDBCol,
  MDBRipple,
  MDBRow,
  MDBTypography,
  MDBBadge,
} from "mdb-react-ui-kit";
import cookie from "js-cookie";
import { a } from "react-router-dom";
import { withDefaultColorScheme } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import './HomeLawyer.css'
export default function HomeLawyer({ lawyers, id }) {
  const sendToCoockies = () => {
    cookie.set("categoryId", id);
  };
  return (
    <MDBRow onClick={sendToCoockies} className="row-8">
      {lawyers ? (
        lawyers.map((lawyer, i) => (
          <div class=" bg-image hover-overlay shadow-1-strong rounded-7 m-1 "  >
            <div class=" cardMaskLawyer p-0 ">
              <blockquote class=" cardMaskLawyer mb-0">
              <img src={lawyer.imageString} alt="lawyer" className=" rounded-7 imageForLawYer p-0"  />
            <a href={`/lawyer/profile/${lawyer.email}`}>
                <div
                  className="mask cardMaskLawyer"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                    <MDBCol >
                      <MDBTypography className=" fw-bold" style={{ color: "rgb(46, 133, 232)" }}>
                        My name is {lawyer.firstName} {lawyer.lastName}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol>
                      <MDBTypography className="text-white mt-2">
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
                </div>
              </a>
              </blockquote>
            </div>
          </div>
        ))
        ) : (
        <MDBCol>
          <Spinner />
        </MDBCol>
      )}
    </MDBRow>
  );
}

        // <MDBCol key={i} size={8}>
        //   <MDBRipple
        //     className="bg-image hover-overlay shadow-1-strong rounded"
        //     rippleTag="div"
        //     rippleColor="light"
        //   >
        //     <img src={lawyer.imageString} alt="lawyer" className="h-25 w-50 "  />
        //     <a href={`/lawyer/profile/${lawyer.email}`}>
        //       <div
        //         className="mask "
        //         style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        //       >
        //         <MDBRow className="text-center flex-column mt-5 pt-5">
        //           <MDBCol>
        //             <MDBTypography className="mb-0 mt-5 pt-5 fw-bold" style={{ color: "rgb(46, 133, 232)" }}>
        //               My name is {lawyer.firstName} {lawyer.lastName}
        //             </MDBTypography>
        //           </MDBCol>
        //           <MDBCol>
        //             <MDBTypography className="text-white mt-2">
        //               hourly fee: {lawyer.price}$
        //               <br />
        //               years of experience: {lawyer.experience}
        //               {lawyer.available ? (
        //                 <MDBBadge pill light color="success">
        //                   {" "}
        //                   Available{" "}
        //                 </MDBBadge>
        //               ) : (
        //                 <MDBBadge pill light color="warning">
        //                   {" "}
        //                   Not Available{" "}
        //                 </MDBBadge>
        //               )}
        //             </MDBTypography>
        //           </MDBCol>
        //         </MDBRow>
        //       </div>
        //     </a>
        //   </MDBRipple>
        // </MDBCol>