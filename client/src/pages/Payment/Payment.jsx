import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import { AgreementCard,  LawyerPayment, PaymentCard } from "../../AppRoute/featuresRoute/payment"
import "./Payment.css"
import { Categories } from "../../sidder";
import cookie from "js-cookie"

export default function Payment() {
const categoryId=cookie.get("categoryId")
const findCategory=Categories.filter((category)=>category._id==categoryId)
console.log(findCategory[0])
  return (
    <div className="container-fluid h-100 paymentContainer">
      <MDBRow className="">
        <MDBCol md="4">
          <MDBRow className="flex-column">
            <MDBCol className="profilePayment">
              <LawyerPayment />
            </MDBCol>
            <MDBCol className="paymentCard" >
              {/* <PaymentCard category={findCategory[0]} /> */}
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="8" >
          <MDBRow>
            <MDBCol md="12"></MDBCol>
            <MDBCol
              md="12"
              className="d-flex row justify-content-center align-align-items-center agreement "
            >
              {/* <AgreementCard category={findCategory[0]}/> */}
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};