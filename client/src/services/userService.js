import axios from "axios";
import jwtInterceptor from "../middleware/auth";

axios.defaults.baseURL = "http://lawmarket.us-east-1.elasticbeanstalk.com/user";

export const getUsers = async () => {
  const response = await axios.get("http://lawmarket.us-east-1.elasticbeanstalk.com/user")

  const user = await response.data;
  return user;
};
export const registerUser= async (data) => {
  const response = await axios.post("http://lawmarket.us-east-1.elasticbeanstalk.com/user/register",data);

  const newLawyer = await response.data;
  return newLawyer;
};
export const updateUser = async (data,email) => {
    const response = await axios.put(`/${email}`,{
        firstName:data.firstName,
        lastName:data.lastName,
        image:data.image,
        password:data.password,
      });
    
      const newUser = await response.data;
      return newUser;
  };

export const loginUser = async (data) => {
    const response = await jwtInterceptor.post("/user/login",data)
    const loginUser = await response.data;
    return loginUser;
  };

  export const getUserByEmail = async (email) => {
    const response = await axios.get(`${email}`);
  
    const user = await response.data;
    return user;
  };
  export const deleteUser = async (email) => {
    const response = await axios.delete(`${email}`);
  
    const user = await response.data;
    return user;
  };

  
