import React, { useState } from "react";
import {
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBFile,
  
} from "mdb-react-ui-kit";
import { PlacesAddress } from "../../GoogleMap/GoogleMap";
import { useSelector } from "react-redux";

export default function SignUpLawyer() {
  const [inputs, setInputs] = useState();
  const [profileImg, setProfileImg] = useState();

  const lawyerData = useSelector((state) => state.lawyerReducer.lawyerData);

  // const changeInputs = (e) => {
  //   const location = lawyerData?.location;
  //   setInputs({ ...inputs, [e.target.name]: e.target.value, location });
  //   console.log(inputs);
  // };
  const changeInputs = (e) => {
    const Generate = new FileReader();
    const location = lawyerData?.location;
    if (e.target.profileImg) {
      Generate.readAsDataURL(e.target.profileImg);
      Generate.onloadend = () => setProfileImg(Generate.result);
    setInputs({ ...inputs, [e.target.name]: e.target.value, location,profileImg });
    console.log(inputs);
  }
  setProfileImg("");

  };

  // const GenerateImgFile = (imgFile) => {
  //   const Generate = new FileReader();
  //   if (imgFile) {
  //     Generate.readAsDataURL(imgFile);
  //     Generate.onloadend = () => setProfileImg(Generate.result);
  //   }
  //   setProfileImg("");
  // };

  return (
    <div>
      <MDBCardBody className="p-5">
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

            <MDBCol col="6">
              <MDBFile
                label="image upload"
                id="formControlLgImage"
                name="profileImg"
                onChange={(e) => changeInputs(e.target.value)}
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
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form4"
              type="password"
              name="Password"
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
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Category"
              id="form7"
              type="text"
              name="category"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Average Replay"
              id="form8"
              type="number"
              name="averageReplay"
              onChange={(e) => changeInputs(e)}
            />
          </MDBCol>
          <MDBCol col="6">
            <MDBInput
              wrapperClass="mb-4"
              label="Available"
              id="form9"
              type="text"
              name="available"
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
        {/* <MDBRow>
          <MDBCol col="6">
            <MDBFile label="Profile Picture" id="customFile" />
          </MDBCol>
          <MDBCol col="6">
            <MDBFile label="Cover Picture" id="customFile" />
          </MDBCol>
        </MDBRow> */}
        <div className="d-flex justify-content-center mb-4 mt-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Subscribe to our newsletter"
          />
        </div>
        <MDBBtn className="w-100 mb-4" size="md">
          sign up
        </MDBBtn>
      </MDBCardBody>
    </div>
  );
}
