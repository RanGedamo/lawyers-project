import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";
import PaypalCheckoutButton from "../PaypalCheckoutButton/PaypalCheckoutButton";

export default function Payment() {
  const product = {
    description: "Lawyer hire asds djkabk kjdbcnoa",
    price: 10,
  };
  return (
    <MDBCol md="4">
      <MDBCard className="mb-4">
        <MDBCardHeader>
          <MDBTypography tag="h5" className="mb-0">
            Summary
          </MDBTypography>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBListGroup flush>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span>$53.98</span>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 mt-3">
              Shipping
              <span>Gratis</span>
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
