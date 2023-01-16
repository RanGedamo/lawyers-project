import { Link } from "react-router-dom";
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
  return (
    <>
      <h1 className="fs-3">Our Top Lawyers</h1>
      <div className="container">
        <div className="faders">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="items">
          {lawyers.map((item, i) => {
            return (
              <div key={i} className="entry hover-overlay ">
                <p className="name">
                  {item.firstName} {item.lastName}
                </p>
                <br />
                <br />
                <p className="quote">{item.description}</p>
                <Link to={`/lawyer/profile/${item.email}`}>
                  <img
                    src={item.imageString}
                    alt="Smiling person"
                    className="mask"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
