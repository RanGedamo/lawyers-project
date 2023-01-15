import axios from "axios";

let baseURL = "http://localhost:6060/category"

export const getCategory = async () => {
  const response = await axios.get(baseURL)

  const category = await response.data;

  return category;
};