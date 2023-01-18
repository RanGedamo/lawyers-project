import axios from "axios";

// axios.defaults.baseURL = "http://localhost:6060/lawyer";

export const getLawyers = async () => {
  const response = await axios.get("http://lawmarket.us-east-1.elasticbeanstalk.com/lawyer")
console.log(response);
  const lawyer = await response.data;
  return lawyer;
};
export const registerLawyer = async (data) => {
  const response = await axios.post("http://localhost:6060/lawyer/register",data)

  const newLawyer = await response.data;
  return newLawyer;
};

export const loginLawyer = async (data) => {
    const response = await axios.post("http://lawmarket.us-east-1.elasticbeanstalk.com/lawyer/login",{
        email:data.email,
        password:data.password
    })
  
    const loginLawyer = await response.data;
    return loginLawyer;
  };

  export const getLawyerByEmail = async (email) => {
    const response = await axios.get(`http://lawmarket.us-east-1.elasticbeanstalk.com/lawyer/${email}`);
    const lawyer = await response.data;
    return lawyer;
  };
  export const deleteLawyer = async (email) => {
    const response = await axios.delete(`http://lawmarket.us-east-1.elasticbeanstalk.com/lawyer/${email}`);
  
    const lawyer = await response.data;
    return lawyer;
  };

  export const updateLawyer = async (data,email) => {
    const response = await axios.put(`/${email}`,{
        firstName:data.firstName,
        lastName:data.lastName,
        location:data.location,
        description:data.description,
        image:data.image,
        title:data.title,
        category:data.category,
        password:data.password,
        phone:data.phone,
        price:data.price,
        selectedCover:data.selectedCover,
        rate:data.rate,
        experience:data.experience,
        avgReplayTime:data.avgReplayTime,
        workDueTime:data.workDueTime,
        available:data.available
      });
    
      const newLawyer = await response.data;
      return newLawyer;
  };
