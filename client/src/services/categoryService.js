import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060/category";

export const getCategory = async () => {
  const response = await axios.get("/")

  const category = await response.data;
  return category;
};