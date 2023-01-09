import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useState , useEffect } from "react";
import{LawyerFake} from "../../sidder"






function Filter() {
  const [filter,setFilter] = useState([]);
  const[collection, setCollection] = useState([]);

  useEffect(() => {
    setFilter(LawyerFake);
    setCollection([...new Set(LawyerFake.map((key)=>key.prize))]);
  },[])
  
  const handleChange = (e) => {
    const filterData = LawyerFake.filter((key)=> key.prize === e)
    setFilter(filterData)
  }


  




  return (
    
    <MDBCard className="w-25 p-1" >
      <br />
      <p className="fs-5">Filter</p>
      <MDBCardBody className="d-grid" >
        <MDBCardTitle className="fs-7 d-inline-flex" >Prize</MDBCardTitle>
        <hr />
          <select>
            <option>100</option>
            <option>200</option>
            <option>500</option>
          </select>
      </MDBCardBody>

      <MDBCardBody className="d-grid ">
        <MDBCardTitle className="fs-7 d-inline-flex">Experience
</MDBCardTitle>
<hr />
        <select>
            <option>5</option>
            <option>1</option>
            <option>3</option>
          </select>
      </MDBCardBody>
      <MDBCardBody className="d-grid" >
        <MDBCardTitle className="fs-7 d-inline-flex">Location</MDBCardTitle>
        <hr />
        <select>
            <option>Rehovot</option>
            <option>Lod</option>
            <option>Yafo</option>
          </select>
      </MDBCardBody>
      <MDBCardBody className="d-grid" >
        <MDBCardTitle className="fs-7 d-inline-flex">Available</MDBCardTitle>
        <hr />
        <select>
            <option>50</option>
            <option>20</option>
            <option>30</option>
          </select>
      </MDBCardBody>
      <br />
      {
        collection.map((key)=>{
          <MDBBtn outline className='mx-4' color='dark' onClick={(key)} >
          Search
        </MDBBtn>
        })
      }
   
      <br />
    </MDBCard>
    
  );
}
export default Filter;
