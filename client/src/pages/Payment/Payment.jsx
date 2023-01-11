import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import AgreementCard from "../../component/cards/AgreementCard";
import LawyerProfile from "../../component/cards/LawyerProfileCard";
import LawyerPayment from "../../component/cards/LawyerPayment";
import PaymentCard from "../../component/cards/PaymentCard";
import "./Payment.css"
function Payment() {
  return (
    <div className="container-fluid h-100 paymentContainer">
      <MDBRow className="">
        <MDBCol md="4">
          <MDBRow className="flex-column">
            <MDBCol className="profilePayment">
              <LawyerPayment />
            </MDBCol>
            <MDBCol className="paymentCard" >
              <PaymentCard />
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
              <AgreementCard />
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Payment;
