import { useState } from "react";
import { Hero, HowToHire, SupportBoard, Category, ContactUs, HomeLawyer} from "../../AppRoute/featuresRoute/home"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Lawyers } from "../../sidder";
import {Categories} from "../../sidder";
import Carousel from "../../component/carousel/Crousel";

export default function Home() {
  const [lawyers,setLawyers] = useState(Lawyers)
  const [categories,setCategories] = useState(Categories)

  return (
    <MDBContainer className="w-100">
      <br />
      <MDBContainer className="mb-8">
        <Hero />
      </MDBContainer>
    <MDBRow className='bg-light mb-3 rounded-9'>
    <SupportBoard/>
    </MDBRow>
    <Carousel/>
    <MDBRow className='bg-light mb-3'>
      <MDBCol md='4'>
      <Category categories={categories}/>
      </MDBCol>
      <MDBCol md='4' offsetMd='4'>
      <HomeLawyer lawyers={lawyers} />
      </MDBCol>
    </MDBRow>
    <MDBRow className='mb-3'>
        <MDBCol md='6' offsetMd='3'>
          <ContactUs />
        </MDBCol>
      </MDBRow>
   
      <br />
      <MDBRow className="mb-8 d-flex justify-content-around rounded-7-fluid">
        <HowToHire />
      </MDBRow>
  </MDBContainer>
  );
}
