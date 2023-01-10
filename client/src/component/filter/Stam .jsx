import React from "react";
import { useState , useEffect } from "react";
import{LawyerFake} from "../../sidder"






function Filter() {
  const [filters,setFilters] = useState([]);
  const[collection, setCollection] = useState([]);

  useEffect(() => {
    setFilters(filters);
  },[])
  

  const data = [...new Set(LawyerFake.map((key)=>key.prize,))];
  data.sort()
  console.log(data);
  const handleData = (e) =>{
  let statePrize = LawyerFake.filter(state=>state.prize>700);
  console.log(statePrize);
}


// const rate = [...new Set(LawyerFake.map((key)=>key.rate))]
// rate.sort()
// console.log(rate);
// const rateHandler = (e) =>{
// let stateRate = LawyerFake.filter(state=>state.rate==1 && state.rate==2 && state.rate==3 && state.rate==4 && state.rate==5);
// console.log(stateRate);
// }





    return (
        <div>
            <div>
              <label>Prize</label>
              <select onClick={(e)=>(handleData(e))} >
                {data.map(key=><option key={key} value={collection}>{key}</option>)}
                </select>
            </div>
            {/* <div>
              <label>Rate</label>
              <select onClick={(e)=>(rateHandler(e))} >
                {rate.map(key=><option key={key} value={collection}>{key}</option>)}
                </select>
            </div> */}
        </div>
        
        
      );
    
}
export default Stam;
