import axios from "axios";

axios.defaults.baseURL = "http://lawmarket.us-east-1.elasticbeanstalk.com/emailHandler";

export const postContactUs = async (contactUser) => 
{
  const response = await axios.post("http://lawmarket.us-east-1.elasticbeanstalk.com/emailHandler/contactUs",contactUser)

  const category = await response.data;
  return category;
};

export const postContactUsPayment = async (contactUser) => 
{
  const response = await axios.post("http://lawmarket.us-east-1.elasticbeanstalk.com/emailHandler/contactUs/payment",contactUser)

  const category = await response.data;
  return category;
};

