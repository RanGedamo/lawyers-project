import jwtInterceptor from "../middleware/auth";


export const getLawyers = async () => {
  const response = await jwtInterceptor.get("/lawyer")
console.log(response);
  const lawyer = await response.data;
  return lawyer;
};
export const registerLawyer = async (data) => {
  const response = await jwtInterceptor.post("/lawyer/register",data)

  const newLawyer = await response.data;
  return newLawyer;
};

export const loginLawyer = async (data) => {
    const response = await jwtInterceptor.post("/lawyer/login",{
        email:data.email,
        password:data.password
    })
  
    const loginLawyer = await response.data;
    return loginLawyer;
  };

  export const getLawyerByEmail = async (email) => {
    const response = await jwtInterceptor.get(`/lawyer/${email}`);
    const lawyer = await response.data;
    return lawyer;
  };
  export const deleteLawyer = async (email) => {
    const response = await jwtInterceptor.delete(`/lawyer/${email}`);
  
    const lawyer = await response.data;
    return lawyer;
  };

  export const updateLawyer = async (data,email) => {
    const response = await jwtInterceptor.put(`/lawyer/${email}`,{
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
