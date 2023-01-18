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
        <MDBCol size={12} className=" col-md-12 col-lg-6 mt-5 pt-4">
          <LawyerProfileCard lawyer={lawyer} />
        </MDBCol>
        <MDBCol>
          <MDBCol>
            <MDBRow className=" row-cols-md-2 mt-5">
              {category?.map((item) => {
                return (
                  <MDBCol  size={12} className="p-0 mb-3 pt-4">
                  <LawyerCategories  item={item} />
                  </MDBCol>
                );
              })}
            </MDBRow>
          </MDBCol>
          <MDBCol className="mt-5">
            <GoogleMapLocation lawyer={lawyer?.location} />
          </MDBCol>    
        </MDBCol>
      </MDBRow>
      <MDBContainer>
        <MDBRow >
          <MDBCol className="mt-5">
            {lawyer?.reviews?.map((item, i) => {
              return <CommentSection key={i} index={i} item={item} />;
            })}
            <div className={cookie.get("rate")?"d-none":""}>
            {userLoged?<ReviewsInput  userLoged={userLoged} lawyer={lawyer}/>:""}

            </div>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
    </div>
  );
}
