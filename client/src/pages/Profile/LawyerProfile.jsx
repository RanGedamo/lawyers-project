import React from "react";
import { MDBRow, MDBCol, MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import {
  LawyerProfileCard,
  AreaChart,
  ReviewsInput,
  CommentSection,
  LawyerCategories,
} from "../../AppRoute/featuresRoute/lawyerProfile";
import { useParams } from "react-router-dom";
import { Lawyers } from "../../sidder";

export default function LawyerProfile() {
  let { id } = useParams();

  const Lawyer = () => {
    const Wanted = Lawyers.find((lawyer) => lawyer._id === id);
    return Wanted;
  };

  let selectLawyer = Lawyer();

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size={12} className=" col-md-6 mt-5">
          <LawyerProfileCard select={selectLawyer} />
        </MDBCol>
        <MDBCol>
          <MDBCol>
            <MDBRow className=" row-cols-md-2">
              {selectLawyer.filedCategory.map((item, i) => {
                return (
                  <MDBCol key={i} size={12} className="p-0 mb-3 mt-5">
                    <LawyerCategories  index={i} select={selectLawyer} />
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBCol>
          <MDBCol>
            <AreaChart select={selectLawyer} />
          </MDBCol>
        </MDBCol>
      </MDBRow>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="mt-5">
            {selectLawyer.filedCategory.map((item, i) => {
              return <CommentSection key={i} index={i} select={selectLawyer} />;
            })}
            <ReviewsInput />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}
