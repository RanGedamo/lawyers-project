import { Skeleton, Stack } from "@chakra-ui/react";
import { MDBCol, MDBRipple, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../services/categoryService";
import "./Category.css";

export default function Category({ categories }) {
  // const [category, setCategory] = useState();
  // useEffect(() => {
  //   getCategory().then((res) => setCategory(res));
  // }, []);
  return (
    <>
      {categories ? (
        categories?.map((categories, i) => {
          return (
            <MDBCol size={12} key={i} className="mt-4 ">
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong rounded"
                rippleTag="div"
                rippleColor="light"
              >
                <img
                  src={categories.categoryImg}
                  className="w-100 imagecsscategory"
                />
                <Link to={`/category/${categories._id}`}>
                  <div
                    className="mask "
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.9)" }}
                  >
                    {categories.subCategory.map((category, j) => {
                      return (
                        <ul className="text-center d-flex justify-content-evenly mt-4">
                          <li>{category.name}</li>
                        </ul>
                      );
                    })}
                  </div>
                </Link>
              </MDBRipple>
            </MDBCol>
          );
        })
      ) : (
      )}
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
    </>
  );
}
