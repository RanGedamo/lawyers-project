import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import {
  LawyerProfileCard,
  AreaChart,
  ReviewsInput,
  CommentSection,
  LawyerCategories,
} from "../../AppRoute/featuresRoute/lawyerProfile";
import { useParams } from "react-router-dom";
// import { Lawyers } from "../../sidder";
import GoogleMapLocation from "../../GoogleMap/GoogleMap";
import { getLawyerByEmail } from "../../services/lawyerService";
import cookie from "js-cookie";

export default function LawyerProfile() {
  let { email } = useParams();
const[lawyer,setLawyers]=useState()
const [category,setCategory]=useState([])
const [userLoged,setUserLoged]=useState()
useEffect(()=>{
  getLawyerByEmail(email).then((res)=>{
    setLawyers(res) 
    setCategory(res?.category[0].subCategory)}).catch((error)=>console.log(error))
    setUserLoged(cookie.get("user"))

},[lawyer?.reviews])


  return (
    <div cla>
    <MDBContainer>
      <MDBRow>
        <MDBCol size={12} className=" col-md-12 col-lg-6 mt-5">
          <LawyerProfileCard lawyer={lawyer} />
        </MDBCol>
        <MDBCol>
          <MDBCol>
            <MDBRow className=" row-cols-md-2 mt-5">
              {category?.map((item) => {
                return (
                  <MDBCol  size={12} className="p-0 mb-3 ">
                  <LawyerCategories  item={item} />
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBCol>
          <MDBCol className="">
            <GoogleMapLocation lawyer={lawyer?.location} />
          </MDBCol>
          <MDBCol className="mb-3 " >
            <AreaChart lawyer={lawyer} />
          </MDBCol>
        
        </MDBCol>
      </MDBRow>
      <MDBContainer>
        <MDBRow >
          <MDBCol className="mt-5">
            {lawyer?.reviews?.map((item, i) => {
              return <CommentSection key={i} index={i} item={item} />;
            })}
            {userLoged?<ReviewsInput  userLoged={userLoged} lawyer={lawyer}/>:""}
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
    </div>
  );
}
