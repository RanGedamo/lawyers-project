
import react, { useState } from "react";
import { MDBCard,  MDBCardBody, MDBCardTitle, MDBInput, MDBContainer, MDBRow, MDBCol, MDBRange, MDBBtn } from "mdb-react-ui-kit";
import HomeLawyer from "../cards/HomeLawyer";
import cookie from "js-cookie";

export default function FilterLawyer({ lawyers, id }) {
  // const [filteredLawyer, setFilteredLawyer] = useState({
  //   rate: "",
  //   location: "",
  //   price: "",
  //   experience: "",
  //   available: true,
  // });
  const [rate, setRate] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [experience, setExperience] = useState(0);
  const [available] = useState(true);
  const [filteredData, setFilteredData] = useState([...lawyers]);

  const handleRateChange = (event) => {
    setRate(event.target.value);
    if (rate) {
      setFilteredData(lawyers.filter((lawyers) => lawyers.rate === rate));
    }
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    if (location) {
      setFilteredData(lawyers.filter((lawyers) => lawyers.location === location));
    }
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    if (price) {
      setFilteredData(lawyers.filter((lawyers) => lawyers.price <= price));
    }
  };
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
        if (experience) {
          setFilteredData(lawyers.filter( (lawyers) => lawyers.experience === experience ))
        }
  };
  const resetFilter = () => {
    setFilteredData([...lawyers])
    console.log(filteredData)
  };

  const sendToCockies = () => {
    cookie.set("categoryId", id);
  };
  // const handelChoice = (event) => {
  //   setFilteredLawyer({
  //     ...filteredLawyer,
  //     [event.target.name]: event.target.value,
  //   });
  //   getFilterData();
  // };

  // const getFilterData = () => {
  //   let filtered = lawyers;
  //   if (filteredLawyer.available) {
  //     filtered = filtered.filter((lawyers) => lawyers.available === true);
  //   }
  //   console.log(filtered);
  //   if (filteredLawyer.rate) {
  //     filtered = filtered.filter((lawyers) => lawyers.rate === filteredLawyer.rate);
  //   }
  //   console.log(filtered);
  //   if (filteredLawyer.location) {
  //     filtered = filtered.filter((lawyers) => lawyers.location === filteredLawyer.location);
  //   }
  //   console.log(filtered);
    // if (filteredLawyer.price) {
    //   filtered = filtered.filter((lawyers) => lawyers.price <= filteredLawyer.price);
    // }
  //   console.log(filtered);
  //   if (filteredLawyer.experience) {
  //     filtered = filtered.filter(
  //       (lawyers) => lawyers.experience === filteredLawyer.experience
  //     );
  //   }
  //   console.log(filtered);
  //   setFilteredData(filtered);
  //   console.log(filteredLawyer);

  // };


  // console.log(filteredData);

  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        <MDBCol size={12} className="col-md-3 col-lg-3 me-5">
          <MDBCard onClick={sendToCockies}>
            <br />
            <p className="fs-5">Filter bar</p>
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
              <select name="rate" onChange={(e) => handleRateChange(e)}>
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
                max="800"
                step="0.5"
                id="customRange3"
                label="lawyer price range"
                name="price"
                onChange={(e) => handlePriceChange(e)}
              />
            </MDBCardBody>

            <MDBCardBody className="d-grid ">
              <MDBCardTitle className="fs-7 d-inline-flex">
                Years of experience
              </MDBCardTitle>
              <hr />
              <select name="experience" onChange={(e) => handleExperienceChange(e)}>
                <option>1-5</option>
                <option>5-10</option>
                <option>10-20</option>
                <option>20+</option>
              </select>
            </MDBCardBody>
            <MDBCardBody className="d-grid">
              <MDBCardTitle className="fs-7 d-inline-flex">
                Location
              </MDBCardTitle>
              <hr />
              <select name="location" onChange={(e) => handleLocationChange(e)}>
                <option>Rehovot</option>
                <option>Lod</option>
                <option>Yafo</option>
              </select>
              <br />
              <MDBBtn onClick={()=>resetFilter()}>Reset</MDBBtn>
            </MDBCardBody>
            <br />
          </MDBCard>
        </MDBCol>
        <MDBCol size={12} className="col-md-8 col-lg-8">
          <HomeLawyer lawyers={filteredData} id={id} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}