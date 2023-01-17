import { useEffect, useState } from "react";
import { Hero,HowToHire,SupportBoard,Category,ContactUs,HomeLawyer, } from "../../AppRoute/featuresRoute/home";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Carousel from "../../component/carousel/Crousel";
import { getCategory } from "../../services/categoryService";
import ScrollTOTop from "react-scroll-to-top"

export default function Home() {
  const [category, setCategory] = useState([]);

  window.scrollTo(0, 1000);
  
  useEffect(() => {
    getCategory()
    .then((res) => setCategory(res))
    .catch((error) => console.error(error));
  },[]);
  return (
    <MDBContainer className="w-100">
      <br />
      <MDBContainer className="mb-8">
        <Hero />
      </MDBContainer>
      <MDBRow className="bg-light mb-3 rounded-9">
        <SupportBoard />

      </MDBRow>
      <br />
      <MDBRow className="d-flex">
        <>
          <MDBContainer >
            <Carousel />
          </MDBContainer>
        </>
      </MDBRow>
      <br />
      <br />
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10">
          <Category categories={category} />
        </MDBCol>
      </MDBRow>
      <br />
      <MDBRow className="mb-3">
        <MDBCol md="6" offsetMd="3">
          <ContactUs />
        </MDBCol>
      </MDBRow>
      <br />
      <ScrollTOTop smooth top="500"/>
      <MDBRow className="mb-8 d-flex justify-content-around rounded-7-fluid text-start ">
        <HowToHire />
      </MDBRow>
    </MDBContainer>
    
  );
}
