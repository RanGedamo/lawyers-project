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
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    getLawyers().then((res) => setLawyers(res));
  }, []);
  console.log(lawyers);
  return (
    <>
      <h1>Our amazing people</h1>
      <div className="container">
        <div className="faders">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="items">
          {lawyers.map((item,i) => {
            return (
              <div key={i} className="entry">
                <p className="name">{item.firstName}+{item.lastName}</p>
                <img
                  src={item.image}
                  alt="Smiling person"
                />
                <p className="quote">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
