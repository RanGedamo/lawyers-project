import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import {
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { postContactUs, postContactUsPayment } from "../../services/emailHandler";
import { lawyerData } from "../../store/lawyerReducer";
import { useNavigate } from "react-router-dom";
export default function AgreementCard({category,o,lawyer}) {
  const [inputs,setInputs] = useState({lname:"",fname:"",phone:"",message:"",date:""})
  const [sendForm,setSendForm]=useState(false)
  const [send,setSend]=useState(false)

const navigate=useNavigate()
  const formInputs = (e)=>{
    setInputs({...inputs,[e.target.name]: e.target.value})
    console.log(inputs);
  }

  const submitForm =(e)=>{
    e.preventDefault()
      postContactUsPayment(inputs).then((res)=>console.log(res)).catch(res=>console.log(res))

      setSend(true)
      // setTimeout(() => {
      //   navigate('/')
      // }, 1200);
  }

  useEffect(()=>{
    if(inputs.fname&&inputs.lname&&inputs.phone&&inputs.message&&inputs.date){

      setSendForm(true)
      
  
    }
  
  })
  return (
    <>
{category?.subCategory.map((item) => {
if(item.name==o){
          

  return <MDBCard className="">

        

      
      <MDBCardImage
        style={{ height: 250 }}
        src={item.img}
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle className="">{item.name}</MDBCardTitle>
        <MDBCardText>
       {
        item.description
       }
        </MDBCardText>
        <MDBCardBody>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput id="form6Example1" label="First name" name="fname" onChange={formInputs}/>
            </MDBCol>
            <MDBCol>
              <MDBInput id="form6Example2" label="Last name" name="lname" onChange={formInputs}/>
            </MDBCol>
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            type="email"
            id="form6Example5"
            label="Email"
            name="email"
          />
          <MDBInput wrapperClass="mb-4" type="date" label="BirthDay" defaultValue="2023-01-29" name="date" onChange={(e)=>formInputs(e)}/>
          <div className="text-start">
            gender
            <div className="d-flex">
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Male"
              />
              <MDBRadio
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Female"
                defaultChecked
              />
            </div>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            type="tel"
            id="form6Example6"
            label="phone"
            name="phone"
            onChange={formInputs}
          />
          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form6Example7"
            rows={4}
            label="Additional information"
            name="message"
            onChange={formInputs}
          />
        </MDBCardBody>
        <MDBBtn  disabled={sendForm?false:true} className="float-start mt-4 mb-4" href="#" onClick={submitForm}>
        Contact {lawyer?.firstName}
        </MDBBtn>
        {send?(
        <Alert status='success' className="mt-4">
          <AlertIcon />
          <AlertTitle>Successfully :</AlertTitle>
          <AlertDescription>Welcome to law market</AlertDescription>
        </Alert>
        ):""}
      </MDBCardBody>
      
    </MDBCard>
    }

  })}
    </>
  );
}
