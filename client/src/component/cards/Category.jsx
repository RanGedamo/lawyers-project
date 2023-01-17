import { MDBCol, MDBRipple, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { a } from "react-router-dom";
import { getCategory } from "../../services/categoryService";
import "./Category.css";
export default function Category({ categories }) {
  // const [category, setCategory] = useState();
  // useEffect(() => {
  //   getCategory().then((res) => setCategory(res));
  // }, []);
  const subcategories = categories.subCategory;
  console.log(subcategories);

  return (
    <MDBRow className=" row-cols-md-3 row-cols-lg-8 row-cols-sm-2">
      {categories ? (
        categories?.map((category, i) => {
          return (
            <MDBCol size={12} key={i} className="mt-3">
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong rounded-8"
                rippleTag="div"
                rippleColor="light"
              >
                <img
                  src={category.categoryImg}
                  className="w-100 imagecsscategory"
                />
                <a href={`/category/${category._id}`}>
                  <div
                    className="mask "
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.8)" }}
                  >
                    <p className="lead mb-0 text-dark fw-bolder">
                      {category.name}
                    </p>
                    <br />
                    <p className="lead mb-0 text-dark fw-bolder">
                      {category.subCategory?.map((subCategory) => (
                        <subCategory subCategory={subCategory} />
                      ))}
                    </p>
                  </div>
                </a>
              </MDBRipple>
            </MDBCol>
          );
        })
      ) : (
        <MDBCol>no data found</MDBCol>
      )}
    </MDBRow>
  );
}