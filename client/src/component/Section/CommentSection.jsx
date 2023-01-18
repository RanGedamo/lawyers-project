import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from "mdb-react-ui-kit";
import { deleteReview } from "../../services/reviewsService";
import Cookies from "js-cookie";



export default function CommentSection({ item, index }) {
const [btn,setBtn]=useState(false)
const deletComment = (id) => {
  deleteReview(id)
  setBtn(true)
};
useEffect(()=>{
if(item.userEmail==Cookies.get("user")){
  setBtn(true)
}
},[])

console.log(btn);
  return (
    <MDBContainer className="py-2 text-dark w-75">
      <MDBCard className="mb-3 pb-5 pt-5">
        <MDBCardBody>
          <MDBRow className="justify-content-center">
            <MDBCol size={1}>
              <MDBCardImage
                className="rounded-circle shadow-1-strong me-3 "
                src={item.image}
                alt="avatar"
                width="40"
                height="40"
              />
            </MDBCol>
            <MDBCol size={12} className="flex-column col-md-8">
              <MDBTypography
                tag="h6"
                className="text-primary fw-bold text-start pb-3"
              >
                {item?.name}
              </MDBTypography>
              <MDBTypography
                tag="h6"
                className="text-dark  mb-0 text-start ms-4"
              >
                {item.comments}
              </MDBTypography>
            </MDBCol>
            <MDBCol size={12} className="flex-column col-md-2">
              <MDBTypography
                tag="h6"
                className="text-dark  text-start mt-md-0 mt-3"
              >
                {new Date(item.createdAt).toLocaleDateString()}
              </MDBTypography>
              <MDBTypography tag="h6" className="text-dark  mt-3 text-start">
                <MDBIcon fas icon="star text-warning me-2 " />
                {item.rate}
              </MDBTypography>

              {btn?(
              <MDBTypography
                tag="h6"
                className="text-danger  text-center btn mt-3 text-start"
                onClick={() => deletComment(item._id)}
              >
                X
              </MDBTypography>
              ):""}
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
