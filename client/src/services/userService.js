import jwtInterceptor from "../middleware/auth";


export const getUsers = async () => {
  const response = await jwtInterceptor.get("/user")

  const user = await response.data;
  return user;
};
export const registerUser= async (data) => {
  const response = await jwtInterceptor.post("/user/register",data);

  const newLawyer = await response.data;
  return newLawyer;
};
export const updateUser = async (data,email) => {
    const response = await jwtInterceptor.put(`/user/${email}`,{
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
    const response = await jwtInterceptor.get(`/user/${email}`);
  
    const user = await response.data;
    return user;
  };
  export const deleteUser = async (email) => {
    const response = await jwtInterceptor.delete(`/user/${email}`);
  
    const user = await response.data;
    return user;
  };

  
