import { Categories } from "../../sidder";
import { Lawyers } from "../../sidder";
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

function Carousel() {
  return (
    <div 
      class="slider mb-5 mt-5 d-flex justify-content-evenly"
      style={{ height: 100 }}
    >
      <div class="slide-track2">
        <MDBCard className="mw-100">
          <MDBRipple className="text-center flex-column mt-5 pt-5" >
            <HomeLawyer lawyers={Lawyers} />
          </MDBRipple>
        </MDBCard>
      </div>
    </div>
  );
}

export default Carousel;
