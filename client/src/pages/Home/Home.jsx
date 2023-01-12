// import Category from '../../component/cards/Category';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import {
  Hero,
  Scheduling,
  HowToHire,
  SupportBoard,
  Category,
  ContactUs,
  HomeLawyer,
} from "../../AppRoute/featuresRoute/home.js";
import { Categories } from "../../sidder";
import Carousel from "../../component/carousel/Crousel.jsx";

export default function Home() {
  return (
    <MDBContainer className="w-100">
      <br />
      <MDBContainer className="mb-8">
        <Hero />
      </MDBContainer>
      <br />
      <MDBRow className="mb-8 rounded-8">
        <SupportBoard />
      </MDBRow>
      <br />
      <MDBContainer className="d-flex justify-content-center">
        <MDBRow>
          {Categories.map((key) => {
            return (
              <MDBCol size={4}>
                <MDBCard>
                  <MDBCardImage
                    className=""
                    src={key.categoryImg}
                    alt=""
                    position="top"
                  />
                  <MDBCardBody id={key.id}>
                    <MDBCardText>{key.categoryName}</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
      <br />
      <Carousel/>
      <MDBRow className="mb-3d d-flex justify-content-around rounded-fluid">
        <MDBCol size="6" md="4">
          <ContactUs />
        </MDBCol>
        <MDBCol size="6" md="4">
          <Scheduling />
        </MDBCol>
      </MDBRow>
      <Carousel/>
      <br />
      <MDBRow className="mb-8 d-flex justify-content-around rounded-7-fluid">
        <HowToHire />
      </MDBRow>
      <br />
    </MDBContainer>
  );
}
