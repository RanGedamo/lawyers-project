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
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useState } from "react";
import PaypalCheckoutButton from "../../component/PaypalCheckoutButton/PaypalCheckoutButton";
export default function PaymentCard({ category,o }) {
  console.log();
  const [price,setPrice]=useState()
  

  return (
    <MDBCol md="4" className="w-100">
      {category?.subCategory.map((item) => {
        const product = {
          description: item.name,
          price:item.price,
        };
        if(item.name==o)
        return  <MDBCard className="mb-4">
        <MDBCardHeader>
          <MDBTypography tag="h5" className="mb-0">
            {category?.name}
          </MDBTypography>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBListGroup flush>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 mt-3">
              <MDBTypography listUnStyled className="text-start mb-0">
                

                  
                <li className="mb-1">
                    <MDBCheckbox
                      name="flexCheck"
                      value={item.price}
                      label={item.name}
                      id="price"
                    />
                  </li>
            
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
                <strong>{item.price}$</strong>
              </span>
            </MDBListGroupItem>
          </MDBListGroup>
          <PaypalCheckoutButton product={product} />
        </MDBCardBody>
      </MDBCard>
          })}
    </MDBCol>
  );
}
