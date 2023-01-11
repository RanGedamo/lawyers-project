import { Fragment } from "react";
import LawyerPayment from "../cards/LawyerPayment";
import Payment from "../Payment/Payment";
import Form from "../form/Form";
import "../ProfileLawyer/ProfileLawyer.css";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

function ProfileLawyer() {
  return (
    <MDBContainer>
      <MDBRow>

        <MDBCol className="flex-column md-4 p-0">

            <MDBCol>
            <LawyerPayment className="w-100" />
            </MDBCol>

            <MDBCol className="p-0 order-1">
            <Payment />
            </MDBCol>

        </MDBCol>

        <MDBCol className="flex-column md-4 p-0 ">

          <MDBCol className="md-8 p-0 mt-4 md-order-3">
            <Form />
          </MDBCol>

        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
  );
}
export default ProfileLawyer;
