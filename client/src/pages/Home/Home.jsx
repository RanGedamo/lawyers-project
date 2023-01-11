// import Category from '../../component/cards/Category';
import {
   MDBContainer, 
   MDBRow, 
   MDBCol,  
   MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
   } from 'mdb-react-ui-kit';
import { Hero, Scheduling, HowToHire, SupportBoard, Category, ContactUs, HomeLawyer} from "../../AppRoute/featuresRoute/home"

export default function Home() {

  return (
    <MDBContainer className="bg-light text-dark" >
      <MDBContainer className="mb-8" >
      <Hero/>
      </MDBContainer>
    <MDBRow className='bg-light mb-8 rounded-7'>
    <SupportBoard/>
    </MDBRow>
    <MDBRow className='bg-light mb-8'>
      <MDBCol md='4' offsetMd='4'>
        <Category/>
      </MDBCol>
    </MDBRow>
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <MDBRow className='mb-3d d-flex justify-content-around rounded'>
        <MDBCol size='6' md='4'>
          <ContactUs/>
        </MDBCol>
        <MDBCol size='6' md='4'>
          <Scheduling/>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-4 d-flex justify-content-around rounded-7 '>
      <HowToHire />
    </MDBRow>
  </MDBContainer>
  );
}
