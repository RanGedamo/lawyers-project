import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBCardImage,
  MDBContainer,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import RateReview from "../RateReviewStars/RateReview";
import { useState } from "react";
import { createReview } from "../../services/reviewsService";
import { getUserByEmail } from "../../services/userService";

export default function ReviewsInput({ userLoged ,lawyer}) {
  const [start, setStars] = useState(0);
  const [user,setUser]=useState()
  const [reviewsInput, setReviewInput] = useState({
    comments: "",
  });

  let obj={
    userEmail: userLoged,
    comments: reviewsInput.comments,
    image: user?.image,
    name:user?.firstName,
    rate:start
  }
  const handelForm = (e) => {
    setReviewInput({ ...reviewsInput, [e.target.name]: e.target.value });
    console.log(reviewsInput);
  };

  const submitReview=()=>{
    createReview(obj,lawyer?.email)
    console.log(reviewsInput);
  }
  useEffect(()=>{
setReviewInput({rate:start, name:user?.name,image: user?.image})
getUserByEmail(userLoged).then((res)=>setUser(res))
  },[])



  return (
    <MDBContainer className="py-5">
      <section style={{ background: "", height: "35vh" }}>
        <div className="d-flex ">
          <Avatar
            name={`${userLoged.slice(0, 1)}`}
            src={user?.image}
            width="40px"
            height=""
            className="rounded-circle shadow-1-strong me-3"
          >
            <AvatarBadge boxSize="1.2em" bg="green.500" />
          </Avatar>
          <MDBTypography className="mt-4" tag="h6">
            Add a comment
          </MDBTypography>
        </div>

        <div className="container">
          <RateReview setStars={setStars} start={start} />
          <MDBTextArea
            label="What is your Review?"
            name="comments"
            rows={4}
            onChange={handelForm}
          />
          <MDBBtn color="light" rounded className="mt-3 float-end" onClick={submitReview}>
            Send
          </MDBBtn>
        </div>
      </section>
    </MDBContainer>
  );
}
