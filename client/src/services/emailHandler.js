import axios from "axios";
import jwtInterceptor from "../middleware/auth";


export const postContactUs = async (contactUser) => 
{
  const response = await jwtInterceptor.post("/emailHandler/contactUs",contactUser)

  const category = await response.data;
  return category;
};

export const postDomain = async (domain) => {
  const response = await jwtInterceptor.post("/emailHandler/domain", domain)

  const category = await response.data;
  return category;
};

export const postContactUsPayment = async (contactUser) => 
{
  const response = await jwtInterceptor.post("/emailHandler/contactUs/payment",contactUser)

  const category = await response.data;
  return category;
};

