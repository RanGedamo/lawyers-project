import { useState } from "react";
import { Hero, HowToHire, SupportBoard, Category, ContactUs, HomeLawyer} from "../../AppRoute/featuresRoute/home"
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Lawyers } from "../../sidder";
import {Categories} from "../../sidder";

export default function Home() {
  const [lawyers,setLawyers] = useState(Lawyers)
  const [categories,setCategories] = useState(Categories)

  return (
    <MDBContainer>
      <MDBContainer>
      <Hero/>
      </MDBContainer>
    <MDBRow className='bg-light mb-3 rounded-9'>
    <SupportBoard/>
    </MDBRow>
    <MDBRow className='bg-light mb-3'>
      <MDBCol md='4'>
      <Category categories={categories}/>
      </MDBCol>
      <MDBCol md='4' offsetMd='4'>
      <HomeLawyer lawyers={lawyers} />
      </MDBCol>
    </MDBRow>
    <MDBRow className='mb-3d d-flex justify-content-between'>
        <MDBCol size='6' md='4'>
          <ContactUs/>
        </MDBCol>
      </MDBRow>
      <MDBRow className='bg-light mb-3 d-flex justify-content-between'>
      <MDBCol md='4' offsetMd='4'>
      <HowToHire />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
}
