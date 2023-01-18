import jwtInterceptor from "../middleware/auth";

export const getCategory = async () => {
  const response = await jwtInterceptor.get("/category")

  const category = await response.data;
  return category;
};
export const getCategoryById = async (id) => {
  const response = await jwtInterceptor.get(`/category/${id}`)

  const category = await response.data;
  return category;
};