import axios from "axios";

export const getCategory = async () => {
  const response = await axios.get("http://lawmarket.us-east-1.elasticbeanstalk.com/category")

  const category = await response.data;
  return category;
};
export const getCategoryById = async (id) => {
  const response = await axios.get(`http://lawmarket.us-east-1.elasticbeanstalk.com/category/${id}`)

  const category = await response.data;
  return category;
};