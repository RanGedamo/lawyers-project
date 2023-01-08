import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060/user";

export const getUsers = async () => {
  const response = await axios.get("/")

  const user = await response.data;
  return user;
};
export const registerUser= async (data) => {
  const response = await axios.post("/register",{
    firstName:data.firstName,
    lastName:data.lastName,
    image:data.image,
    email:data.email,
    password:data.password,
  
  });

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
    const response = await axios.post("/login",{
        email:data.email,
        password:data.password
    })
  
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

  
