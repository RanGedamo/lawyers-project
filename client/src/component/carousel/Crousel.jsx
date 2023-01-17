import { a } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
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
import Cookies from "js-cookie";
import PopUpRole from "../pop/PopUpBtn";

function Carousel() {
  const [lawyers, setLawyers] = useState([]);

  const navigate=useNavigate()

  const navigateTo=(dd)=>{
navigate(dd)
  }
  const popup=()=>{
    document.getElementById("sing").innerHTML=`<div class="w-50 alert alert-danger" role="alert">
    Sing in or Sing up for more information!
  </div>`
    setTimeout(()=>{
      document.getElementById("sing").innerText=""

    },2000)
  }
  useEffect(() => {
    getLawyers().then((res) => setLawyers(res));
  }, []);
  return (
    <>
      <h1 className="fs-3">Our Top Lawyers</h1>
    <span id="sing" className="d-flex justify-content-center align-items-center"></span>
      <div className="containerr">
        <div className="faders">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div>
        <div className="items" >
          {lawyers.map((item, i) => {
            return (
              <div key={i} className="entry hover-overlay">
                <p className="name">
                  {item.firstName} {item.lastName}
                </p>
                <br />
                <div className="d-flex" onClick={Cookies.get("user")?()=>navigateTo(`/lawyer/profile/${item.email}`):popup}>
                  <img
                    src={item.imageString}
                    alt="Smiling person"
                    className="quote imageLawyerPicture"
                  />
                <p className="mask mt-2 bg-light text-center note note-light mb-2 text-muted strong">
                  {item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
  
    </>
  );
}

export default Carousel;