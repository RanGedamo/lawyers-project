import { Categories } from "../../sidder";
// import { Lawyers } from "../../sidder";
import { HomeLawyer } from "../../AppRoute/featuresRoute/home";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./carousel.css";
import { getLawyers } from "../../services/lawyerService";
import { useEffect, useState } from "react";

function Carousel() {
  const [lawyers,setLawyers]=useState([])

  useEffect(()=>{
    getLawyers().then(res=>setLawyers(res))

  },[])
  return (
    <div 
      className="slider mb-5 mt-5 d-flex justify-content-evenly"
      style={{ height: 100 }}
    >
      <div className="slide-track2">
        <MDBCard className="mw-100">
          <MDBRipple className="text-center flex-column mt-5 pt-5" >
            <HomeLawyer lawyers={lawyers} />
          </MDBRipple>
        </MDBCard>
      </div>
    </div>
  );
}

export default Carousel;
