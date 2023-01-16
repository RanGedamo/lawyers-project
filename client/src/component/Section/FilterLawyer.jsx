import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRange,
} from "mdb-react-ui-kit";
import { useState } from "react";
import HomeLawyer from "../cards/HomeLawyer";
import cookie from "js-cookie";

export default function FilterLawyer({ lawyers, id }) {
  const [filteredLawyer, setFilteredLawyer] = useState({
    rate: "",
    location: "",
    price: "",
    experience: "",
    available: true
  });

  // const [rate, setRate] = useState("");
  // const [location, setLocation] = useState("");
  // const [price, setPrice] = useState(0);
  // const [experience, setExperience] = useState(0);
  // const [available] = useState(true);
  const [filteredData, setFilteredData] = useState(lawyers);



  // const  = (event) => {
  //   setRate(event.target.value);
  //   filterData();
  // };

  // const handleLocationChange = (event) => {
  //   setLocation(event.target.value);
  //   filterData();
  // };

  // const handlePriceChange = (event) => {
  //   setPrice(event.target.value);
  //   filterData();
  // };

  // const handleExperienceChange = (event) => {
  //   setExperience(event.target.value);
  //   filterData();
  // };
const handelChooies = (event) => {
  setFilteredLawyer({...filteredLawyer,[event.target.name]:event.target.value})
}

  const filterData = () => {
    let filtered = lawyers;
    if (filteredLawyer.available) {
      filtered = filtered.filter((lawyers) => lawyers.available === true);
    }
    if (filteredLawyer.rate) {
      filtered = filtered.filter((lawyers) => lawyers.rate === filteredLawyer.rate);
    }
    if (filteredLawyer.location) {
      filtered = filtered.filter((lawyers) => lawyers.location === filteredLawyer.location);
    }
    if (filteredLawyer.price) {
      filtered = filtered.filter((lawyers) => lawyers.price === filteredLawyer.price);
    }
    if (filteredLawyer.experience) {
      filtered = filtered.filter(
        (lawyers) => lawyers.experience === filteredLawyer.experience
      );
    }
    setFilteredData(filtered);
  };

  const sendToCockies = () => {
    cookie.set("categoryId", id);
  };
  console.log(filteredData);

  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        <MDBCol sm="6" md="4" lg="6">
          <MDBCard className="w-50 p-5" onClick={sendToCockies}>
            <br />
            <p className="fs-5">Filter</p>
            <br />
            <MDBInput
              label="search lawyer name"
              type="text"
              id="formWhite"
              name="searchString"
              // value={searchString}
              // onChange={(e) => setSearchString(e.target.value)}
              // onKeyUp={(e) => searchLawyerByName( e.target.value, hatches, setSearchResult )}
            />
            <br />

            <MDBCardBody className="d-grid">
              <MDBCardTitle className="fs-7 d-inline-flex">Rate</MDBCardTitle>
              <hr />
              <select name='rate' onChange={(e)=>handelChooies(e)}>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
              </select>
            </MDBCardBody>
            <MDBCardBody className="d-grid">
              <MDBCardTitle className="fs-7 d-inline-flex">Price</MDBCardTitle>
              <hr />
              <MDBRange
                defaultValue={3}
                min="100"
                max="500"
                step="0.5"
                id="customRange3"
                label="lawyer price range"
                name="price"
                onChange={(e)=>handelChooies(e)}
              />
            </MDBCardBody>

            <MDBCardBody className="d-grid ">
              <MDBCardTitle className="fs-7 d-inline-flex">
                Years of experience
              </MDBCardTitle>
              <hr />
              <select name="experience" onChange={(e)=>handelChooies(e)}>
                <option>1-3</option>
                <option>3-5</option>
                <option>5-10</option>
                <option>10+</option>
              </select>
            </MDBCardBody>
            <MDBCardBody className="d-grid">
              <MDBCardTitle className="fs-7 d-inline-flex">
                Location
              </MDBCardTitle>
              <hr />
              <select name="location" onChange={(e)=>handelChooies(e)}>
                <option>Rehovot</option>
                <option>Lod</option>
                <option>Yafo</option>
              </select>
            </MDBCardBody>
            <br />
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6" md="6" lg="7" offsetMd="2" offsetLg="0">
          <HomeLawyer lawyers={filteredData} id={id} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
