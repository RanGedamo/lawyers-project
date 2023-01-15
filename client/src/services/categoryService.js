import axios from "axios";

export const getCategory = async () => {
  const response = await axios.get("http://localhost:6060/category")

  const category = await response.data;
  return category;
};