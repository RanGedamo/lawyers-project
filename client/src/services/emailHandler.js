import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060/emailHandler";

export const postContactUs = async (contactUser) => 
{
  const response = await axios.post("http://localhost:6060/emailHandler/contactUs",contactUser)

  const category = await response.data;
  return category;
};

export const postContactUsPayment = async (contactUser) => 
{
  const response = await axios.post("http://localhost:6060/emailHandler/contactUs/payment",contactUser)

  const category = await response.data;
  return category;
};

