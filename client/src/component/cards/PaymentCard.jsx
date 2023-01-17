import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
  MDBIcon,
  MDBCheckbox
} from "mdb-react-ui-kit";
import PaypalCheckoutButton from "../../component/PaypalCheckoutButton/PaypalCheckoutButton"
export default function PaymentCard({category}) {
  console.log();
  const product = {
    description: "Lawyer hire asds djkabk kjdbcnoa",
    price: 10,
  };
  return (
    <MDBCol md="4" className="w-100">
      <MDBCard className="mb-4">
        <MDBCardHeader>
          <MDBTypography tag="h5" className="mb-0">
            {category.categoryName}
          </MDBTypography>
          
        </MDBCardHeader>
        <MDBCardBody>
          <MDBListGroup flush>
         
            <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 mt-3">
            <MDBTypography listUnStyled className='text-start mb-0'>
              {category.subCategory.map((item)=>
                <li className='mb-1'>
                     <MDBCheckbox name='flexCheck' value='' id={item.name} label={item.name} />
              </li>
              )}
    </MDBTypography>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-4 mt-4">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span>
                <strong>$53.98</strong>
              </span>
            </MDBListGroupItem>
          </MDBListGroup>
          <PaypalCheckoutButton product={product}/>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
