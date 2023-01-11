import Hero from "../../component/Hero/Hero";
import Scheduling from "../../component/Section/Scheduling";
import HowToHire from "../../component/Section/HowToHire";
import SupportBoard from "../../component/Section/SupportBoard";
// import Category from '../../component/cards/Category';
import ContactUs from "../../component/Section/ContactUs";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

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
        .col-md-4
      </MDBCol>
      <MDBCol md='4' offsetMd='4'>
        .col-md-4 .offset-md-4
      </MDBCol>
    </MDBRow>
    <MDBRow className='mb-3d d-flex justify-content-between'>
        <MDBCol size='6' md='4'>
          <ContactUs/>
        </MDBCol>
        <MDBCol size='6' md='4'>
          <Scheduling/>
        </MDBCol>
      </MDBRow>
      <MDBRow className='bg-light mb-3'>
      <MDBCol md='4' offsetMd='4'>
      <HowToHire />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
}
