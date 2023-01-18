
import React, { useState } from "react";
import { MDBCardBody, MDBInput, MDBBtn, MDBRow, MDBCol, MDBCheckbox, MDBFile,} from "mdb-react-ui-kit";
import { PlacesAddress } from "../../GoogleMap/GoogleMap";
import { useSelector } from "react-redux";
import { registerLawyer } from "../../services/lawyerService";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { registerUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpLawyer() {
  const [inputs, setInputs] = useState();
  const [imgFile, setImageFile] = useState();
  const [profileImg, setProfileImg] = useState();
  const [selectedOption, setSelectedOption] = useState();

  const [userError, setUserError] = useState({
    error: false,
    msg: ""
  });
  const [userSuccess, setUserSuccess] = useState(false);

  const lawyerData = useSelector((state) => state.lawyerReducer.lawyerData);
  const location = lawyerData?.location 


  const changeInputs = async(e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value,location:location ,category:selectedOption});
console.log(inputs);
  };

  const submitInputs = async()=>{
   return await registerLawyer(inputs)
    .then(res => {
      console.log(res.data);
        setUserError({ error: false,msg:"" })
      setUserSuccess(true)

        return
      }
    )
    .catch(err => {
      if (err.response.data.message) {
        setUserSuccess(false)
        return setUserError({ msg: err.response.data.message, error: true });
      }
      console.log(err.data);
    })
  }

  return (
    <div>
      <MDBCardBody className="p-1">
        <h2 className="fw-bold mb-5">Sign up now</h2>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="First name"
              id="form1"
              type="text"
              name="firstName"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Last name"
              id="form2"
              type="text"
              name="lastName"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
        </MDBRow>
        <MDBInput
          wrapperClass="mb-4"
          label="Email"
          id="form3"
          type="email"
          name="email"
          onChange={(e) => changeInputs(e)}
        />
        
        <div className='mb-2'>
        <select value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}  id="select" className="browser-default custom-select border-4"> 
        <option>Choose your category</option>
           <option value="63c438bfc6d4d52b2c1fa52f" >Family law</option>
           <option value="63c44349539b4d290ee7fd64" >Government law</option>
           <option value="63c44e26b187c601731ff1b5" >Crime Law</option>
           <option value="63c4504bb187c601731ff1bb" >Business law</option>
           <option value="63c4405057c87f24ec8c3771"  >Probate law</option>
           
     value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}
        </select>
      </div>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form4"
              type="password"
              name="password"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Phone"
              id="form5"
              type="text"
              name="phone"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Title"
              id="form6"
              type="text"
              name="title"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>

        </MDBRow>
        <MDBRow>
          <MDBCol col="12">
            <MDBInput
              wrapperClass="mb-4"
              label="Average Replay"
              id="form8"
              type="number"
              name="avgReplayTime"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
          <MDBCol col="12">
            <MDBInput
              wrapperClass="mb-4"
              label="Work Due Time"
              id="form8"
              type="number"
              name="workDueTime"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Price"
              id="form10"
              type="number"
              name="price"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Experience"
              id="form11"
              type="text"
              name="experience"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
        </MDBRow>
        <PlacesAddress />
        <MDBInput
          wrapperClass="mb-4"
          label="Description"
          id="form13"
          type="text"
          name="description"
          onChange={(e) => changeInputs(e)}
        />
        <MDBRow>

        </MDBRow>

        {userError.error ?
          <Alert status='error' className="mb-3">
            <AlertIcon />
            <AlertTitle>Error :</AlertTitle>
            <AlertDescription>{userError.msg}</AlertDescription>
          </Alert> :
          ""
        }
        {userSuccess ?
          <Alert status='success' className="mb-3">
            <AlertIcon />
            <AlertTitle>Successfully :</AlertTitle>
            <AlertDescription>Welcome to law market</AlertDescription>
          </Alert> :
          ""
        }

        <MDBBtn className="w-100 mb-4" size="md" onClick={()=>submitInputs()}>
          sign up
        </MDBBtn>
      </MDBCardBody>
    </div>
  );
}