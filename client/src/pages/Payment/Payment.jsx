import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import { AgreementCard,  LawyerPayment, PaymentCard } from "../../AppRoute/featuresRoute/payment"
import "./Payment.css"
import { Categories } from "../../sidder";
import cookie from "js-cookie"
import { getCategoryById } from "../../services/categoryService";
import { useParams } from "react-router-dom";

export default function Payment() {
// const findCategory=Categories.filter((category)=>category._id==categoryId)
// console.log(findCategory[0])
const [category,setCategory]=useState()
const o=cookie.get('categoryName')
const id=useParams().id
console.log(id);
console.log(o);

useEffect(()=>{
  getCategoryById(id).then(res=>setCategory(res?.subCategory))

},[])

console.log(category);

  return (
    <div className="container-fluid h-100 paymentContainer">
      <MDBRow className="">
        {/* <MDBCol md="4">
          <MDBRow className="flex-column">
            <MDBCol className="profilePayment">
              <LawyerPayment />
            </MDBCol>
            <MDBCol className="paymentCard" >
              <PaymentCard category={findCategory[0]} />
            </MDBCol>
          </MDBRow>
        </MDBCol> */}
        {/* <MDBCol md="8" >
          <MDBRow>
            <MDBCol md="12"></MDBCol>
            <MDBCol
              md="12"
              className="d-flex row justify-content-center align-align-items-center agreement "
            >
              <AgreementCard category={findCategory[0]}/>
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBCol> */}
      </MDBRow>
    </div>
  );
};