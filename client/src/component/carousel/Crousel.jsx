import { Lawyers } from "../../sidder";
import { HomeLawyer } from "../../AppRoute/featuresRoute/home";
import "./carousel.css";
import { getLayers } from "../../services/lawyerService";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Carousel({ lawyer }) {
  return (
    <>
      <h1>Our amazing people</h1>
      <div className="container">
        <div className="faders">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="items">
          {lawyer.map((item, i) => {
            return (
              <div key={i} className="entry">
                <p className="name">{item.firstName}</p>
                <img src={item.img} alt="Smiling person" />
                <p className="quote">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
