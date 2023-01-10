import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBRange,MDBRadio  
} from 'mdb-react-ui-kit';
import { useState , useEffect } from "react";
import{LawyerFake} from "../../sidder"






function Filter() {

  const[filters , setFilters] = useState([]);
  const[prize, setPrize] = useState([]);
  
  useEffect(()=>{
    setFilters(filters);
  },[])

  const data = [...new Set(LawyerFake.map((key)=>key.prize,))];
  data.sort()
  console.log(data);
  const handleChange = (e) =>{
  let statePrize = LawyerFake.filter(state=>state.prize === e.target.value);
  console.log(e);
}

const prizeData = (prizeFilter )=> {
  if (!prize) {
    return prizeFilter
  }
}

  const dataPrize = LawyerFake.filter(prize => prize.prize>=500)

  return(
    <MDBCard className="w-25 p-3">
    <MDBCardHeader>Filter</MDBCardHeader>
    <MDBListGroup flush>
    <MDBRange 
      defaultValue={3}
      min='100'
      max='1000'
      step='0.5'
      label='Prize'/>
      <div  >
      <p>Rate</p>
      <hr 
      /> 
      <MDBListGroupItem>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
      </MDBListGroupItem>
      </div>
      <br />

      <div>
      <p>location</p>
      <hr /> 
      <MDBListGroupItem>
        <select>
          <option>Rehovot</option>
          <option>Lod</option>
        </select>
      </MDBListGroupItem>
      </div>
      <br />
      <div>
      <p>experience</p>
      <hr /> 
      <MDBListGroupItem>
        <select>
          <option>5</option>
          <option>2</option>
        </select>
      </MDBListGroupItem>
      </div>
      <br />
      <>
      <MDBRadio name='inlineRadio'  value='option1' label='Avilable' inline />
      <MDBRadio name='inlineRadio'  value='option2' label='Not Availble' inline />
    </>
    </MDBListGroup>
  </MDBCard>
  )
  
}

export default Filter