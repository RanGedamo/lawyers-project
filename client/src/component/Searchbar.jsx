import { LawyerFake } from "../sidder";
import React from "react";
import { useState } from "react";
import HomeLawyer from "../component/cards/HomeLawyer"

export default function Searchbar() {
  const [lawyers, setLawyers] = useState(LawyerFake);

//   rate: 5,
//   location: "Rehovot",
//   prize: 500,
//   experience: 5,
//   available: true,
//   category: "Family",
//   avgTime: 5,
//   workDueTime: 4,

  const Filter = (arr,rate,location,prize,experience,available,category,avgTime,workDueTime) => {
return arr.filter(lawyers => 
    rate === lawyers.rate &&
    location === lawyers.location &&
    prize === lawyers.prize &&
    experience === lawyers.experience &&
    available === true &&
    category === lawyers.category &&
    avgTime === lawyers.avgTime &&
    workDueTime === lawyers.workDueTime
    ) 

  }
  return (

  )
};
