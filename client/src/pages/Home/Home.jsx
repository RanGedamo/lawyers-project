// import Category from '../../component/cards/Category';
import {
   MDBContainer, 
   MDBRow, 
   MDBCol,  
   MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
   } from 'mdb-react-ui-kit';
import { Hero, Scheduling, HowToHire, SupportBoard, Category, ContactUs, HomeLawyer} from "../../AppRoute/featuresRoute/home.js"
import {Categories} from "../../sidder"

export default function Home() {

  return (
    <MDBContainer>
      <br />
      <MDBContainer className="mb-4" >
      <Hero/>
      </MDBContainer>
      <br />
    <MDBRow className='mb-4 rounded-7'>
    <SupportBoard/>
    </MDBRow>
    <br />
    <MDBCol className='d-grid'>
    {
      Categories.map((key) =>{
      return(
    <MDBCard className="d-flex align-items-start bg-light mb-3">
      <MDBCardImage src={key.categoryImg} position='top' />
      <MDBCardBody id={key.id}>
        <MDBCardText>
          {key.categoryName}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
      )
})}
  </MDBCol>
    <br />
    <MDBRow className='mb-3d d-flex justify-content-around rounded-fluid'>
        <MDBCol size='6' md='4'>
          <ContactUs/>
        </MDBCol>
        <MDBCol size='6' md='4'>
          <Scheduling/>
        </MDBCol>
      </MDBRow>
      <br />
      <MDBRow className='mb-8 d-flex justify-content-around rounded-7-fluid'>
      <HowToHire />
    </MDBRow>
    <br />
  </MDBContainer>
  );
}
